const router = require("express").Router();
const getContact = require("../controller/getContact");
const createContact = require("../controller/createContact")

//Home route
router.get("/", (req, res)=>{
    res.status(200).send("Hello World");
});

//Get all Contact in database
router.get("/all-contact", getContact.allContactController);

//Get a single contact by ID
router.get("/all-contact/:id", getContact.myContactController);

//Create new contact
router.post("/all-contact", createContact.createContact);

//Update contact
router.put("/all-contact/:id", createContact.updateContact);

//Delete Contact
router.delete("/all-contact/:id", createContact.deleteContact);



module.exports = router;