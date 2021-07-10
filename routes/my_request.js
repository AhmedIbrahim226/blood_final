const express = require("express");
const session = require("express-session");
const router = express.Router();
const firebase = require('firebase');


router.get("/", (req, res) => {
    res.render("my_request", {uid:session.uid})
})


module.exports = router;