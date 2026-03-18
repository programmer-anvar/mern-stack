require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const requestTime = require("./middlewares/request-time.js");
const app = express();


app.use(requestTime);
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));

///Routes
app.use("/api/post", require("./routes/post.routes.js"));

const PORT = 5000;

const bootstrap = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("Connected DB"));
    app.listen(PORT, () => {
      console.log(`Listening on port - http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};
bootstrap();
