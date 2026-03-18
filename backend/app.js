require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

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
