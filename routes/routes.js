var express = require("express");
var db = require("../models");

var router = express.Router();


router.get("/", function(req, res){
    console.log("home page launched");
    res.render("index");
})





module.exports = router;
