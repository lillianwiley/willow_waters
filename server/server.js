require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios')
    , bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

const controller = require('./controller');
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
    AUTH_ID
    
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
        redirect_uri: `http://${req.headers.host}/auth/callback`
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
        res.redirect('/#/private')
    } else {
        let createdUser = await db.create_users([name, email, picture, sub])
        req.session.user = createdUser[0];
        res.redirect('/#/private');
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
    res.redirect('http://localhost:3000/');
})

app.get('/api/products', controller.getAllProducts);
app.get('/api/products/:c_id', controller.getAllFromCategory);
app.get('/api/cart', envCheck, controller.getCart);

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