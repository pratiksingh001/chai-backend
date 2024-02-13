import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.coonect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB Host: ${connectionInstance}`);
  } catch (error) {
    console.error("MongoDB connection error ".error);
    process.exit(1);
  }
};

export default connectDB;