require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , axios = require('axios');


const app = express();

const {
    SERVER_PORT,
    SECRET,
    REACT_APP_CLIENT_ID,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

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
    console.log(resWithUserData)
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

app.get('/api/user-data', (req, res) => {
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

app.listen(SERVER_PORT, () => {
    console.log(`willow waters on port ${SERVER_PORT}`)
})