const express = require("express");
const path = require("path");

const audioClassifierRouter = require("./routes/audio-classifier-router");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { spawn } = require("child_process");

const app = express();

const server = createServer(app);

const io = new Server(server);

app.use(express.json());

app.use("/", express.static(path.resolve(__dirname, "public")));

app.use("/audio", audioClassifierRouter);

io.on("connection", (socket) => {
  let l2floodCommand;
  socket.on("l2flood", () => {
    l2floodCommand = spawn("l2flood", ["CC:30:00:8B:C7:A4"]);

    l2floodCommand.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });

    l2floodCommand.stdout.on("data", (data) => {
      io.emit("l2flood", "hello");
    });

    l2floodCommand.stderr.on("data", (data) => {
      io.emit("l2flood", `${data}`);
      console.log(`${data}`);
    });
  });
  socket.on("l2flood-kill", () => {
    l2floodCommand?.kill();
    io.emit("l2flood", "process killed");
  });
});

module.exports = server;
