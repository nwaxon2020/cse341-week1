const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./router/contactRouter")
const bodyParser = require("body-parser");

// indicate if the mongo db is connected
const data = require("./dataBase/data");
data.contactData();

//Use only for HTML purposes
//app.use(bodyParser.urlencoded({extended: true}));
 
app.use(bodyParser.json());



app.use("/", router);


const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.listen(port,()=>{
    console.log(`app listening on ${host}:${port}`);
})

