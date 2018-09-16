require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios')
    , bodyParser = require('body-parser');


    
const app = express();


/* if someone asks for soemthing from our server it says look in build folder for a file of that name and if exists give it to them */

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());

const controller = require('./controller');

// AMAZON S3 //
const aws = require('aws-sdk');
// STRIPE //
const stripeCtrl = require('./stripeCtrl');

// DESTRUCTING FROM ENV FILE //
const {
    SERVER_PORT,
    SECRET,
    REACT_APP_CLIENT_ID,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
    CONNECTION_STRING,
    NODE_ENV,
    AUTH_ID,
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    HOME_PAGE,
    AUTH_URI_REDIRECT
    
} = process.env;

// MASSIVE //
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})
// SESSIONS //
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))
// AUTH 0 //
app.get('/auth/callback', async (req, res) => {
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: AUTH_URI_REDIRECT
    }

    
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    
    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data;
    
    
    let db = req.app.get('db');
    let foundUser = await db.find_user([sub])
    if (foundUser[0]) {
        req.session.user = foundUser[0];
        res.redirect('/#/')
    } else {
        let createdUser = await db.create_users([name, email, picture, sub])
        req.session.user = createdUser[0];
        res.redirect('/#/');
    }
})

function envCheck(req, res, next) {
    if (NODE_ENV === 'dev') {
        req.app.get('db').find_user([AUTH_ID]).then(userWithIdOne => {
            req.session.user = userWithIdOne[0]
            next();
        })
    } else {
        next()
    }
    // next()
}
 // ENDPOINTS W/ ENV MIDDLEWARE FOR DEV OR PRODUCTION LOG ON MODE //
app.get('/api/user-data', envCheck, (req, res) => {
    console.log('user data')
    if(req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Nope')
    }
})

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect(HOME_PAGE);
})

// AMAZON S3C//
app.get('/api/sign-s3', (req, res) => {

    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
    console.log(req.query)
    
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
  
      return res.send(returnData)
    });
  });


app.get('/api/products', controller.getAllProducts);
app.get('/api/products/:c_id', controller.getAllFromCategory);
app.get('/api/cart', envCheck, controller.getCart);
app.get('/api/getcartquantity', controller.getCartQuantity);

app.post('/api/products/:product_id', envCheck, controller.addToCart);

app.put('/api/cart/:product_id/:quantity', envCheck, controller.changeCartQuantity);

app.delete('/api/cart/:product_id', envCheck, controller.deleteCart);

// STRIPE ENDPOINT //
app.post('/api/payment', stripeCtrl.handlePayment)
app.delete('/api/cart', controller.deleteUserCart)

// SERVER PORT //
app.listen(SERVER_PORT, () => {
    console.log(`willow waters on port ${SERVER_PORT}`)
})