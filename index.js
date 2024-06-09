const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('Welcome');
});

io.on('connection', (socket)=>{
    socket.emit('me', socket.id)

    socket.on('disconnect', () => {
        socket.broadcast.emit('call ended')
    })

    
})
server.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`listening on port ${PORT}`);
    }
});
