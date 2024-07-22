const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 100,
  },
  lastName: {
    type: String,
    max: 100,
  },
  email: { // email is unique - can act as primary key
    type: String,
    required: true,
    unique: true,
    max: 200,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 30
  },
  credits: {
    type: Number,
    default: 2
  }
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;