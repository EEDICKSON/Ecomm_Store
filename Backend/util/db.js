import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  try {
    const DB = process.env.DB;
    await mongoose.connect(DB).then(() => {
      console.log("Database is connected successfully");
    });
  } catch (error) {
    console.log(error);
    setTimeout(dbConnection, 5000);
  }
};

export default dbConnection;
