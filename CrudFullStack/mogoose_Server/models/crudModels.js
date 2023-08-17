const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, " Name Already Exists"],
  },
  phone: {
    type: String,
    required: [true, " Phone number required"],
    min: [13, "Too Few. Not valid number. Eg. +91-XXXXXXXXX"],
    max: [13, "Too long. Not valid number. Eg. +91-XXXXXXXXX"],
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: [true, "Email already exists"],
  },
  location: {
    type: String,
    required: [true, "Location Required"],
  },
  description: {
    type: String,
    required: [true, "description can't be blank"],
  },
});
module.exports = mongoose.model("users", crudSchema,"users");
