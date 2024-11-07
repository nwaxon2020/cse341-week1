const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();



app.get("/", (req, res)=>{
    res.send("hello World");
})


const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.listen(port,()=>{
    console.log(`app listening on ${host}:${port}`);
})