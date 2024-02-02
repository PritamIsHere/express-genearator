const express = require("express");
const router = express.Router();
var userModel = require("./users");

router.get('/', (req, res) => {
    res.render('index', { title: "Pritam" })
})

router.get('/create', async (req, res) => {
    const createdUser = await userModel.create({
        username: "pritam@98765",
        name: "Pritam Kar",
        age: 19
    })
    res.send(createdUser)
})

module.exports = router;