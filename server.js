// Initializing Server.js app
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// URL where app lives (root URL '/')
app.get('/', (req, res) => {
    // ^^^ ES6 function to function - (req, res) =>
    // "nodemon server.js" will let you see the app in your local host

    // UUID passed to URL
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req, res) => {
    res.render('room', { roomID: req.params.room });
})


server.listen(3030);
