var express = require("express");
var db = require("../models");
var app = express();
var passport = require("passport");
require("../config/passport")(passport);
// var router = express.Router();

// module.exports = routes;


module.exports = function(app){

    // home page
    app.get("/", function(req, res){
        console.log("home page launched");
        db.User.findAll({}).then(function(data){
            console.log(data);
        })
        res.render("index");
    })

    // log in page
    app.get("/login", function(req, res){
        res.render("login", { message: req.flash('loginMessage') });
        // console.log("go to logIn page");
        // res.render("login");
    })
    // process the login form
    app.post('/login', passport.authenticate("local-login", {
        successRedirect : "/profile", // redirect to the secure profile section
        failureRedirect : "/login", // redirect back to the signup page if there is an error
        // failureFlash : true // allow flash messages
    }));

    // sign up page
    app.get("/signup", function(req, res){
        res.render("signup", { message: req.flash('signupMessage') });
        // console.log("go to signUp page");
        // res.render("signup");
    })

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect : "/profile", // redirect to the secure profile section
        failureRedirect : "/signup", // redirect back to the signup page if there is an error
        // failureFlash : true // allow flash messages
    }));

    // app.post("/newprofile", function(req, res){    
    //     console.log(req.body);
    //     db.User.sync().then(function(){
    //         db.User.count({ where: {username: req.body.name}}).then(function(count){
    //         if (count != 0) {
    //             console.log('User already exists')
    //         } else {
    //             console.log('Creating user...')
                
    //             db.User.create({
    //                     user_name: req.body.name,
    //                     password: req.body.password,
    //                     language: req.body.language,
    //                     gender: req.body.gender,
    //                     age: req.body.age,
    //                     about: req.body.about
    //                 }).then(function(){
    //                     console.log("new use was added successfully");
    //                     res.status(200).end();
    //                 })
    //             }
    //         })
    //     })    
    // });

    // router.post("/loginrequest", function(req, res){
    //     console.log("it's logging  a user");
    //     console.log("it's passing info!!!  "+JSON.stringify(req.body));
    //     db.User.findAll({
    //         where: {
    //             user_name: req.body.user_name,
    //             password: req.body.password
    //         }
    //     }).then(function(results){
    //         console.log(results);
    //         res.status(200).end();
    //     })
    // })
    app.get("/language", function(req, res){
        res.render("language");
    })
    //Post (new connection)
    app.post("/language/:id", function(req, res){
        db.Connection.create({
            //need to pass data taken from the language.handlebars page (id of user currently logged in and id of user in div that the current user selects and pass it to the Connection model here
        }).then(function(){
            console.log("new connection established")
        })
    });


    // we will want profile protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get("/profile", isLoggedIn, function(req, res) {
        console.log("readu to go to profile...!!");
        console.log("req.user "+req.user.username + req.user.password);
        res.render("profile");
    });
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on
        console.log("...................text from request"+req.isAuthenticated());
        if (req.isAuthenticated())
            return next(), console.log("you are authenticated");
        // if they aren't redirect them to the home page
        console.log("you are not authenticated");
        res.redirect('/');
    }

    app.get("/chat", function(req, res){
        res.render("chat");
    })

    // app.get("/languagechoice/:language", function(req, res){
    //     var language = req.params.language;
    //     db.User 
    // }

// module.exports = router;



