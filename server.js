const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

const app = express();
app.use(express.json());
env.config();

app.listen(process.env.port, () => {
  console.log("port is connected succesfully:", process.env.port);
});

mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => console.log("Db is connected Succesfully"))
  .catch((e) => console.log(e));
