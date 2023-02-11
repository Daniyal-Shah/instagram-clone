import multer from "multer";

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let name =
      file.fieldname +
      "-" +
      Date.now() +
      "." +
      file.originalname.split(".")[file.originalname.split(".").length - 1];

    req.filePath = name;

    cb(null, name);
  },
});

export var upload = multer({ storage: storage });
