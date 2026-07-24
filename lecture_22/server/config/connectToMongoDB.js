const { default: mongoose } = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connected succesfully");
  } catch (error) {
    console.log("error mongo connection");
  }
}
module.exports=connectToMongoDB;
