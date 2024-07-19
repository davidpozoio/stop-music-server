const { io } = require("socket.io-client");

const socketClient = io("http://localhost:8080");

module.exports = socketClient;
