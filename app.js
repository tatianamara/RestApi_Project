const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allowing access from all sources
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // Allowing access to this methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow customers to send extra authorization information and content type in headers
    next();
});

app.use('/feed', feedRoutes);
mongoose.connect(
    'mongodb+srv://mongo_tatiana:<password>@cluster0.1y1dx.mongodb.net/messages?retryWrites=true'
)
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));
