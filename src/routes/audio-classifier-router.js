const { Router } = require("express");
const audioClasssifierController = require("../controller/audio-classifier-controller");
const upload = require("../config/multer");

const audioClassifierRouter = Router();

audioClassifierRouter
  .route("/")
  .post(upload.single("audio"), audioClasssifierController.predicate);

module.exports = audioClassifierRouter;
