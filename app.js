const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

app.use(cors({
    origin: "*"
}))

app.get('/api', (req, res) => {
    res.json([{ id: 1, username: "daisy" }])
})

app.get('/api/list', (req, res) => {
    res.json([{ id: 1, username: "daisy" }])
});
io.on('connection', (socket) => {
    console.log('a user connected');



    socket.on("chat message", (msg) => {
        console.log("msg : ", msg);
        setTimeout(() => {
            socket.emit("send", "반갑습니다.")
        }, 5000);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});




server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})