import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoutes.js";




const app = express();

app.use(bodyParser.json());
app.use('/api',route)

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
