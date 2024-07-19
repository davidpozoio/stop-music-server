const executeCommandSync = require("execute-command-sync");

class L2floodService {
  ping(macAddress) {
    executeCommandSync("sudo ./l2flood CC:30:00:8B:C7:A4");
  }
}
