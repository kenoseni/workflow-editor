import mongoose from "mongoose";

import { app } from "./app";

const connectAndStart = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log(error);
  }
  const PORT = process.env.PORT || 8016;
  app.listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
};

connectAndStart();
