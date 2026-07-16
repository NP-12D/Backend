const mongoose = require("mongoose");
async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successfully");
  } catch (err) {
    console.log("mongo conection error");
  }
}
module.exports=connectToMongo;