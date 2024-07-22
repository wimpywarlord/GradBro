const express = require('express');
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router()

// ! SIGN UP ROUTE
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already in use.");
      return res.status(400).json({ message: "Email already in use." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashpassword
    });

    await newUser.save();
    res.status(201).json({ message: "New user registered successfully" });
    console.log("New user registered Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error, please try again later", err });
  }
});

// ! LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3h" });
    console.log("Log-in successful");
    res.status(200).json({ message: "Log-in successful", token });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Server error, please try again later", err });
  }
});

module.exports = router;