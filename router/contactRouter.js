const router = require("express").Router();
const getContact = require("../controller/getContact");
const createContact = require("../controller/createContact")

//Home route
router.get("/", (req, res)=>{
    res.status(200).send("Hello World");
});

// Swagger Annotations for Routes
/**
 * @swagger
 * /all-contact:
 *   get:
 *     summary: Get all contacts
 *     description: Retrieve a list of all contacts
 *     responses:
 *       200:
 *         description: Successfully retrieved contacts
 *   post:
 *     summary: Create a new contact
 *     description: Add a new contact to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *             example:
 *               name: John Doe
 *               email: john.doe@example.com
 *               phone: "1234567890"
 *     responses:
 *       201:
 *         description: Contact created successfully
 */

/**
 * @swagger
 * /all-contact/{id}:
 *   get:
 *     summary: Get a single contact by ID
 *     description: Retrieve contact details by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: Successfully retrieved contact
 *   put:
 *     summary: Update an existing contact
 *     description: Update contact details by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *             example:
 *               name: Jane Doe
 *               email: jane.doe@example.com
 *               phone: "9876543210"
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *   delete:
 *     summary: Delete a contact by ID
 *     description: Remove a contact from the database by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the contact
 *     responses:
 *       200:
 *         description: Contact deleted successfully
 */


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