const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).send("Hello World");
})

// router.get("/profile", (req, res) => {
//     res.status(201).send("Hello Profile");
// })

// router.get("/about", (req, res) => {
//     res.status(202).send("Hello About");
// })

module.exports = router;