let socket = io();
let peer;
let room = "";

function joinRoom() {
  room = document.getElementById("room").value;
  socket.emit("join-room", room);
}

socket.on("joined-room", () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
    document.getElementById("myVideo").srcObject = stream;
    peer = new SimplePeer({ initiator: true, stream, trickle: false });

    peer.on("signal", data => socket.emit("signal", { room, data }));
    peer.on("stream", stream => document.getElementById("userVideo").srcObject = stream);
    peer.on("data", data => {
      document.getElementById("chat").innerHTML += `<div>${data}</div>`;
    });

    socket.on("signal", ({ data }) => peer.signal(data));
  });
}

function sendMessage() {
  const msg = document.getElementById("msg").value;
  peer.send(msg);
  document.getElementById("msg").value = "";
}
