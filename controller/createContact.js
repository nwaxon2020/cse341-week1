const mongodb = require("../dataBase/data");
const {ObjectId} = require("mongodb");

// {
//     "firstName": "Prince",
//     "lastName": "Nwachukwu",
//     "favoriteColor": "Red",
//     "birthDay": "02/02/1992"
// }

const createContact = async (req, res, next)=>{

    try {

        const newContat = req.body;

        const db = await mongodb.contactData();
        const response = await db.collection("contact").insertOne(newContat);

        if (response){
            res.setHeader("Content-Type", "application/json");
            res.status(202).send("Contact created successfuly!!! ✔")
        }else{
            res.status(401).send("There was a problem creating Contact❌")
        }

    } catch (err) {

        console.log("couldn't connect",err)
        res.status(500).json({message: "There was a problem connecting server ❌🌍"});
    }
    
}

const updateContact = async (req, res, next)=>{

    try {

        const id = req.params.id;

        if(!ObjectId.isValid(id)){
            res.status(400).send("Contact not found!, Please enter a vaild ID")
        }

        const contactId = new ObjectId (String(id));
        const updateData = { $set: req.body };

        const db = await mongodb.contactData();
        const response = await db.collection("contact").updateOne({_id: contactId}, updateData);

        if (response){
            res.setHeader("Content-Type", "application/json");
            res.status(202).send("Your contact was updated successfuly!!! ✔")
        }else{
            res.status(401).send("There was a problem creating Contact❌")
        }

    } catch (err) {

        console.log("couldn't connect",err)
        res.status(500).json({message: "There was a problem connecting server ❌🌍"});
    }
    
}

const deleteContact = async (req, res, next)=>{

    try {

        const id = req.params.id;

        if(!ObjectId.isValid(id)){
            res.status(400).send("Contact not found!!!");
        }

        const obj = new ObjectId(String(id));

        const db = await mongodb.contactData();
        const result = await db.collection("contact").deleteOne({_id: obj});

    if (result.deletedCount > 0) {

        res.setHeader("Content-Type", "application/json");
        return res.status(200).send("Your contact was deleted successfully! ✔");

    } else {

      return res.status(404).send("Contact not found. Nothing was deleted.");

    }

    } catch (err) {

        console.log("couldn't connect",err)
        res.status(500).json({message: "There was a problem connecting server ❌🌍"});
    }
    
}


module.exports = { createContact, updateContact, deleteContact };