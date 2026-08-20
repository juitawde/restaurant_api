const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: 3
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email"
      ]
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);