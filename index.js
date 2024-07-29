import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 2514;
const MongoUrl = process.env.MONGODB_URL;

mongoose
  .connect(MongoUrl)
  .then(() => {
    console.log("server is running successfull");
    app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
