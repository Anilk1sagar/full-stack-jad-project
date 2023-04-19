import mongoose from "mongoose";
import { config } from "../config";

const connectDb = () => {
  return mongoose
    .connect(config.dbUri, {})
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("db error: ", err);
      process.exit(1);
    });
};

export default connectDb;
