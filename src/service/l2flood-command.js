const { spawn } = require("child_process");

const l2floodCommand = spawn("l2flood", ["CC:30:00:8B:C7:A4"]);

l2floodCommand.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

module.exports = l2floodCommand;
