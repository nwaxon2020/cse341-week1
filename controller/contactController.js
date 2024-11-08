const mongoDb = require("../dataBase/data");
const {ObjectId} = require("mongodb");

// let contacts = [
//     {"firstName": "Prince", "lastName": "Nwachukwu", "favoriteColor": "Red", "birthDay": "02/02/1992"},
//     { "firstName": "Veronica", "lastName": "Ekanem", "favoriteColor": "Purple", "birthDay": "07/09/1992"},
//     { "firstName": "Alma", "lastName": "Chigozie", "favoriteColor": "Yellow", "birthDay": "29/06/2019"},
//     { "firstName": "Hanson", "lastName": "Chinaza", "favoriteColor": "Grey", "birthDay": "07/07/2021"}
// ];
  
const allContactController = async (req, res, next) => {

    try {

        const result = await mongoDb.contactData();
        
        // await result.collection("contact").insertMany(contacts);

        const contact = await result.collection("contact").find().toArray();

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contact);

    } catch (err) {
        console.error("mongo data couldn't connect", err);
        res.status(500).json({message: "Server Connection error"});

    }
}

const myContactController = async (req, res, next) => {

    try {

        const result = await mongoDb.contactData();
        
        // await result.collection("contact").insertMany(contacts);

        const id = req.params.id;
        if(!ObjectId.isValid(id)){

            return res.status(400).json({message: "Invalid ID ❌, Contact not found!!!"});
        };

        const obj = new ObjectId(String(id));

        const contact = await result.collection("contact").findOne({_id: obj});
        if(!contact){
            return res.status(404).json({message: "Contact not found!!! ❌"});
        }
        
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(contact);

    } catch (err) {
        console.error("mongo data couldn't find contact", err);
        res.status(500).json({message: "Contact not found"});

    }
}

module.exports = {allContactController, myContactController};