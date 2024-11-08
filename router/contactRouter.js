const router = require("express").Router();
const contactController = require("../controller/contactController");

router.get("/", (req, res)=>{
    res.status(200).send("Hello World");
});

router.get("/all-contact", contactController.allContactController);

router.get("/all-contact/:id", contactController.myContactController);

// router.get("/profile", (req, res) => {
//     res.status(201).send("Hello Profile");
// })

// router.get("/about", (req, res) => {
//     res.status(202).send("Hello About");
// })

module.exports = router;