// IMPORTS
require('dotenv').config();
const cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const mongoDBConnectionString = process.env.MONGO_DB_CONNECTION_STRING;

// ROUTES
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const uniSelectRoutes = require('./routes/uniSelectRoutes');

// AUTHENTICATION MIDDLEWARE
const authenticationTokenChecker = require('./middleware/authMiddleware');

// ! PROD: Apply rate limiting to all requests 
const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 60 minutes
	max: 150, // Limit each IP to 100 requests per `window` (here, per 60 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// ! DEV: Apply rate limiting to all requests
// ! NEVER PUSH TO PROD
// const limiter = rateLimit({
// 	windowMs: 10 * 60 * 1000, // 10 minutes
// 	max: 500, // Limit each IP to 500 requests per `window` (here, per 10 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// EXPRESS
var app = express();

// MIDDLEWARE
app.use(cors({
	origin: 'https://gradbro-1.onrender.com' // Replace with your frontend URL
}
));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply the rate limiting middleware to all requests
app.use(limiter)

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
app.use('/api/data', authenticationTokenChecker, uniSelectRoutes);


app.listen(process.env.PORT || 3000, function () {
	console.log("Server 3000 is running");
});
