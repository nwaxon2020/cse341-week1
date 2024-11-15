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

//swagger import
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: "Contact API",
            version: "1.0.0",
            description: "Simple Contact API",
        },
        host: "localhost:5050",
    },
    apis: ["./router/contactRouter.js"], 
};

const swaggerDoc = swaggerJsDoc(swaggerOption);
console.log(swaggerDoc);

// swagger middle-ware
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc) );

app.use("/", router);


const port = process.env.PORT || 3000;
const host = process.env.HOST;

app.listen(port,()=>{
    console.log(`app listening on ${host}:${port}`);
})

