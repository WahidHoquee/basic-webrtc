const socket = io('/')

const videoGrid = document.getElementById('video-grid');
const myPeer = new Peer( undefined , {
    host : '/',
    port : '3001'
}) 


const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    audio : true,
    video : true
}).then(stream => {
    addMyVideo(myVideo , stream)   
})
        // socket.on('user-connected' , userId => {
        //     console.log('conncted : ' + userId); 
        // })    


socket.emit('join-room' , ROOM_ID , 50)


const addMyVideo = ( video , stream ) => {
    video.srcObject = stream

    video.addEventListener('loadedmetedata' , () => {
        video.play()
    })
    videoGrid.append(video)
}