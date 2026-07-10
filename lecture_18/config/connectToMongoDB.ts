import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nonapareulidze:2wgJAkUdyRybrYxc@user.heiwmu3.mongodb.net/?appName=user",
    );
    console.log("Mongo connected successfully");
  } catch (error) {
    console.log("connection error:", error);
  }
};
