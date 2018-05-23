# SpeakIT
Group Project #2

Website [https://speak-it.herokuapp.com/](https://speak-it.herokuapp.com/)

Front End Team:

* Mariea Johnson

* Jan-Michael Edwards

Back End Team:

* Anya Kilpatrick

* Johnny Heath

## Overview
We've all wanted to learn different languages but the existing methods (classes, online tutorials, etc.) don't cut it for learning how to speak conversationally; we wanted to create an experience where users can connect to learn from fluent speakers of other languages and at the same time make new friends

Design process - we came together to create a design that was both unique and simplistic; we picked the color palette, header design, and overall look/feel.


* Used Node and Express Web Server;

* CSS framework: Materialize;

* Backed by a MySQL Database an ORM (Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Deployed using Heroku;

* Have folder structure that meets MVC Paradigm;

* Used Handlebars for Server-Side Templating;

* Passport.js was used for authentication (sessions, etc.);

* Socket.io was used for realtime chatting between users.

## Authentication

`Passport.js`

Passport is authentication middleware for Node.js. Extremely flexible and modular.

Authenticating requests is as simple as calling passport.authenticate() and specifying which strategy to employ. authenticate()'s function signature is standard Connect middleware, which makes it convenient to use as route middleware in Express applications.

Ex:

routes.js
```javascript
    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect : "/profile", // redirect to the secure profile section if user was successfully authenticated
        failureRedirect : "/signup", // redirect back to the signup page if there is an error
    }));

```

Passport uses what are termed strategies to authenticate requests.

Before asking Passport to authenticate a request, the strategy (or strategies) used by an application must be configured.

Strategies, and their configuration, are supplied via the use() function. For example, the following uses the LocalStrategy for username/password authentication.


passport.js
```javascript
passport.use("local-signup", new LocalStrategy({
        // by default, local strategy uses username and password
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        console.log("...................."+JSON.stringify(req.body));
        // asynchronous
        // User.findOne wont fire unless data is sent back
        console.log("Authenticate!!!!!!!!!!!!!!!");
        // find a user whose username (primary key) is the same as the forms input
        // we are checking to see if the user trying to signup already exists
        db.User.findOne({where: { "username" :  username }}).then(function(result) {

            // check to see if theres already a user with that username
            if (result) {
                return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
            } else {

                // if there is no user with that username
                // create the user
                db.User.create({
                    username: username,
                    password: password,
                    gender: req.body.gender,
                    age: req.body.age,
                    about: req.body.about,
                    language: req.body.language,
                }).then(function(user) {
                    return done(null, user);
                });
            }
        });    
    }));
```

## Direction for future development
* Authenticated chat - currently it's unauthenticated, will allow to connect to a specific user
* We talked about including Google translator to allow users to select a language while chatting so they could have the text translated
* Clubs where people can come together as groups and meet
* Add findorcreate to ensure that user can't add the same user twice 
* Ability to delete friends
* Ability to block friends
* Pictures of the users
