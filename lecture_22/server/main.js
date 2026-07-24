const express= require("express");
const connectToMongoDB = require("./config/connectToMongoDB");
const cors=require("cors")
const apiRouter = require("./api/api");
const app=express();
app.use(cors())
const dotenv=require("dotenv").config()
app.use(express.json());
connectToMongoDB();
const PORT=3030;
app.use("/api",apiRouter);



app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})