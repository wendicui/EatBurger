var express = require("express");
var bodyParser = require("body-parser")

//set port
var PORT = process.env.PORT || 5000;

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

app.listen(PORT, function(){
	console.log("listening Port " + PORT)
});
