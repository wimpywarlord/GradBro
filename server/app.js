// IMPORTS
require('dotenv').config();
const cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
const mongoose = require('mongoose');
const mongoDBConnectionString = process.env.MONGO_DB_CONNECTION_STRING;

// ROUTES
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// AUTHENTICATION MIDDLEWARE
const authenticationTokenChecker = require('./middleware/authMiddleware');

// EXPRESS
var app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
express.static("public");

// CONNECT TO MONGODB
mongoose.connect(
	mongoDBConnectionString,
);
const database = mongoose.connection;

database.on('error', (error) => {
	console.log(error)
})

database.once('connected', () => {
	console.log('Database Connected');
})


// TEST ROUTE
app.get('/test', (req, res) => {
	res.send('test')
})

// ROUTES
app.use('/api/auth', authRoutes)
app.use('/api/user', authenticationTokenChecker, userRoutes);


app.listen(process.env.PORT || 3000, function () {
	console.log("Server 3000 is running");
});
