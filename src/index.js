// require('dotenv').config({path: './env'});

import dotenv from "dotenv";

dotenv.config({
    path: './env'
})
















/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
  }
})();

*/
