var express = require("express");
var db = require("../models");
var app = express();
var passport = require("passport");
require("../config/passport")(passport);
var language
var userLoggedIn
var userFriends
// var language
// var router = express.Router();

// module.exports = routes;


module.exports = function(app){

    // home page
    app.get("/", function(req, res){
        console.log("home page launched");
        if (req.isAuthenticated()) //if user is logged in, he needs to log out to reach a home page
        console.log("you need to log out to get to home page"),res.redirect("/profile");
        else {
            db.User.findAll({}).then(function(data){
                console.log(data);
            })
            res.render("index");
        }
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

    //This route grabs the language search value from the profile page and saves it to the language global variable to be used in the /language route then redirects to the language.handlebars page
    app.post("/languagesearch", function(req, res){
        console.log("Test2"+req.body.language);
        language = req.body.language;
        res.redirect("language");
    })
    
    //This returns all users who match the language search criteria entered on the profile page, then passes those users to the language.handlebars page so they call all be rendered
    app.get("/language", isLoggedIn, function(req, res){
        console.log("This is the user who is logged in "+req.user.username)
        //Query to locate the users who speak the language selected on the profile page
        db.User.findAll({
            where: {language: language}
        }).then(function(results){
            var object = {
                users: results
            }
            //Returning the list of users returned from the query to the language.handlebars file
            res.render("language", object);
            console.log("this is the result!!"+JSON.stringify(object.users))
        })
    })

    // we will want profile protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    //This route confirms the logged in user then passes the logged in user's and all of the users they're connected to back to the profile page so they can be displayed
    app.get("/profile", isLoggedIn, function(req, res) {
        console.log("readu to go to profile...!!");
        console.log("req.user "+req.user.username + req.user.password);
        console.log(req.user.language);
        //Grabbing the info of the logged in user and passing to a global variable to be used in the connection route
        userLoggedIn = req.user.username;
        //Query into the Connections table to return all the users that the logged in user is connected with and then returning that info to the profile.handlebars page to be displayed
        db.Connection.findAll({
            where: {requestor: req.user.username}
        }).then(function(results){
            var currentUser = {
                users: req.user,
                friends: results
            }
            console.log("These are my friends: "+JSON.stringify(currentUser.friends));
            res.render("profile", currentUser);
        })
    });

    app.get("/chat", isLoggedIn, function(req, res){
        res.render("chat");
    })



    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on
        console.log("text from request"+req.isAuthenticated());
        if (req.isAuthenticated())
            return next(), console.log("you are authenticated");
        // if they aren't redirect them to the home page
        console.log("you are not authenticated");
        res.redirect('/');
    }

    //This route creates a new connection when the user clicks the connection button on the languages.handlebars page by creating a record in the Connections table using the logged in user as the requestor and the user whose div the button was in as the requestee
    app.post("/newconnection", function(req, res){
        console.log(req.body.requesteeUN)
        db.Connection.create({
            requestee: req.body.requesteeUN,
            requesteeLang: req.body.requesteeLang,
            requestor: userLoggedIn
        })
    })

}