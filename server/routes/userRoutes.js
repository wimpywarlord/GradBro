const express = require('express');
const User = require("../models/userModel");

const router = express.Router()

// ! GET USER PROFILE DATA ROUTE
router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.query.email });
    if (!userData) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User profile data retrieved successfully");
    console.log(userData)

    res.status(200).json({
      message: "User profile data retrieved successfully",
      credits: userData.credits,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error, please try again later", err });
  }
});

module.exports = router;