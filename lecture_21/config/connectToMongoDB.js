const mongoose = require("mongoose");
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connected succcessfully");
  } catch {
    console.log("mongo connection error");
  }
}

module.exports=connectToMongoDB;