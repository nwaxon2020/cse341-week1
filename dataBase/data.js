const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();


let dataRetrived;

const contactData = async () => {

    if(dataRetrived){

        return dataRetrived;
    }

    try {

        const uri = process.env.MONGO_URL

        const client =  await new MongoClient(uri).connect();
        console.log("Data connected successfuly!!! 👍");

        dataRetrived = client.db();
        return dataRetrived;
        
    } catch (err) {
        
        console.error("There was an error connecting to contact data 👉👉", err);
    }

}

module.exports = {contactData}