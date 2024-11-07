const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./router")



app.use("/", router);


const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.listen(port,()=>{
    console.log(`app listening on ${host}:${port}`);
})