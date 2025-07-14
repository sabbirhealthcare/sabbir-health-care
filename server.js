const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname));

io.on("connection", socket => {
  socket.on("join-room", room => {
    socket.join(room);
    socket.emit("joined-room");
    socket.to(room).emit("joined-room");

    socket.on("signal", data => socket.to(room).emit("signal", data));
  });
});

server.listen(3000, () => console.log("Running on http://localhost:3000"));
