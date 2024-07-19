const { default: axios } = require("axios");
const FormData = require("form-data");

class AudioClassifierClient {
  static api = "http://localhost:5000";

  async predicate(audio) {
    const formData = new FormData();
    formData.append("audio", audio, "audio.wav");

    const response = await axios.post(
      `http://localhost:5000/model/predict`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    return response;
  }
}

const audioClassifierClient = new AudioClassifierClient();

module.exports = audioClassifierClient;
