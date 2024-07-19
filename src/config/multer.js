const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, crypto.randomUUID() + ".wav");
  },
});

const upload = multer({ storage });

module.exports = upload;
