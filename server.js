// requiring npm packages
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT||3000;

var app = express();

// serve static content from the "public" directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// setting handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// importing routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Listening at localhost: " + PORT);
})