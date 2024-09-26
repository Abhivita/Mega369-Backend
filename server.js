const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");

const routes=require("./admin/routes/adminRoutes")

const adminroutes = require('./admin/routes/adminRoutes');

const cors = require('cors')


const app = express();
app.use(express.json());
env.config();
app.use(cors());

app.listen(process.env.port, () => {
  console.log("port is connected succesfully:", process.env.port);
});

mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => console.log("Db is connected Succesfully"))
  .catch((e) => console.log(e));

app.use('/admin',adminroutes);
