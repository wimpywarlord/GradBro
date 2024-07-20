var bodyParser = require("body-parser");
var express = require("express");
const mongoose = require('mongoose');

var app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
express.static("public");

app.get("/", function (req, res) {
	app.send("Hello World");
});


app.listen(process.env.PORT || 3000, function () {
	console.log("SERVER 3000 HAS STARTED");
});
