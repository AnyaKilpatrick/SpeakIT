var express = require("express");
var db = require("../models");

var router = express.Router();

// home page
router.get("/", function(req, res){
    console.log("home page launched");
    db.User.findAll({}).then(function(data){
        console.log(data);
    })
    res.render("index");
})
// log in page
router.get("/login", function(req, res){
    console.log("go to logIn page");
    res.render("login");
})
// sign up page
router.get("/signup", function(req, res){
    console.log("go to signUp page");
    res.render("signup");
})

// post (add new user)
router.post("/newprofile", function(req, res){
    console.log(req.body);
    db.User.create({
        user_name: req.body.name,
        password: req.body.password,
        language: req.body.language,
        gender: req.body.gender,
        age: req.body.age,
        about: req.body.about
    }).then(function(){
        console.log("new use was added successfully");
        res.status(200).end();
    })
});

//Post (new connection)
router.post("/language/:id", function(req, res){
    db.Connection.create({
        //need to pass data taken from the language.handlebars page (id of user currently logged in and id of user in div that the current user selects and pass it to the Connection model here
    }).then(function(){
        console.log("new connection established")
    })
});
module.exports = router;
