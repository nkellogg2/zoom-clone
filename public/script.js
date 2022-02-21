// where frontend js lives

const socket = io('/');

const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

let myVideoStream
// getUserMedia -> promise: will either be resolved or rejected
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
})

// upon creating document, pass 'join-room' to io.on('connection') in
// server.js
socket.emit('join-room', ROOM_ID);

socket.on('user-connected', () => {
    connectToNewUser();
})

const connectToNewUser = () => {
    console.log('new user');
}

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}