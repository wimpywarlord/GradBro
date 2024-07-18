var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
express.static("public");

app.get("/", function (req, res) {
	app.send("Hello World");
});


app.listen(process.env.PORT || 3000, function () {
	console.log("SERVER 3000 HAS STARTED");
});
