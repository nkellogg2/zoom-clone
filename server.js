// Initializing Server.js app
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
app.set('view engine', 'ejs');

// URL where app lives (root URL '/')
app.get('/', (req, res) => {
    // ES6 function to function - (req, res) =>
    // "nodemon server.js" will let you see the app in your local host
    res.render('room');
})

app.get('/:room', (req, res) => {
    res.render('room');
})


server.listen(3030);
