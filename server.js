// requiring npm packages
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT||3000;

var app = express();
var db = require("./models");

var passport=require("passport");
var flash=require("connect-flash");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
// serve static content from the "public" directory
app.use(express.static("public"));

require('./config/passport')(passport); // pass passport for configuration
// setting up express application
app.use(morgan("dev")); //log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setting handlebars
var exphbs = require("express-handlebars");

// setting up handlebars as app engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// importing routes
// var routes = require("./routes/routes.js");
// app.use(routes);

// setting everything up for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});