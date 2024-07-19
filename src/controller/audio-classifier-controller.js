const audioClassifierClient = require("../client/audio-classifier-client");
const socketClient = require("../config/socket-client");
const asyncErrorHandler = require("../utils/async-error-handler");
const fs = require("fs");

class AudioClassifierController {
  predicate = asyncErrorHandler(async (req, res) => {
    console.log(req.file);
    const audioBlob = fs.createReadStream(req.file.path);

    const response = await audioClassifierClient.predicate(audioBlob);

    res.status(200).json({
      data: response.data,
    });
  });
}

const audioClasssifierController = new AudioClassifierController();

module.exports = audioClasssifierController;
