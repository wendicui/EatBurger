var express = require("express");
var bodyParser = require("body-parser")

//set port
var port = 5000 || process.env.PORT

//create server
var app = express();

//use body parser
app.use(bodyParser.urlencoded({ extended: false }));

//create route for public folder file
app.use(express.static("public"));

//Set Handlebars
var handleBar = require("express-handlebars");

app.engine("handlebars", handleBar({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
