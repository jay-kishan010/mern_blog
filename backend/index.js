const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require('path');

dotenv.config();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
// CONNECTION TO DATABASE

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

  // IMAGE STORAGE USING MULTER 

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "image");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("file has been uploaded");
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
// ROUTES 

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// SERVER LISTENING
app.listen(5000, () => {
  console.log("server is running");
});
