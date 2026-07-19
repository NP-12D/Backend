// თქვენი მიზანია ააწყოთ რეგისტრაცია ავოტიზაცია სადაც გექნებათ:expenses და users.
// აუცილებელია route,middleware,mongoDB
const express = require("express");

require("dotenv").config();
const connectToMongoDB = require("./config/connectToMongoDB");
const apiRouter=require("./api/api")
const app = express();
app.use(express.json());
const PORT = 8080;

connectToMongoDB();
app.use("/api",apiRouter)
app.listen(PORT, () => {
  console.log(`server running on htpp://localhost:${PORT}`);
});
