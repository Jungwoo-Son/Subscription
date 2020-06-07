const express = require('express');
const app =  express();
const cors = require('cors');
const axios = require('axios');
const queryString = require('querystring');


require('dotenv').config();
const port = 8080;

app.use(cors());
app.use(express.json());


//auth
app.get('/auth', (req, res) => {
    res.redirect(set_google_auth({
        redirect_uri: 'http://localhost:8080/signinCallback',
        scope: 'https://www.googleapis.com/auth/youtube'
    }));
});

app.get('/signinCallback', (req, res) => {
    let code = req.query.code;
    axios.post('https://oauth2.googleapis.com/token',{
        client_id: process.env.Google_Client_ID,
        client_secret: process.env.Google_Client_SECRET,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: `http://localhost:8080/signinCallback`
    }).then((result) => {
        res.cookie('token',result.data.access_token)
            .redirect('http://localhost:3000');
    });

});


app.listen(port, () => {
    console.log(`starting | port is ${port}`);
});






function set_google_auth(obj) {
    const GoogleClientID = process.env.Google_Client_ID;
    const googleAuthApiUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GoogleClientID}&response_type=code&`;

    return googleAuthApiUrl+ queryString.stringify(obj,'&','=');
}