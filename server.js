// Initializing Server.js app
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
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
    res.render('room', { roomId: req.params.room });
})

// on server connection, pass 'socket' into function
io.on('connection', socket => {
    // this function catches "emitted" join-room
    socket.on('join-room', (roomId) => {
        console.log("Joined room");
        // now need to actually join room, aka add streams
        socket.join(roomId);
        // broadcast to existing users in room that new user joined
        socket.broadcast.to(roomId).emit('user-connected');
    })
})


server.listen(3030);
