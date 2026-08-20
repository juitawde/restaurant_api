const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: [true, "Restaurant ID is required"]
    },

    name: {
      type: String,
      required: [true, "Menu item name is required"],
      trim: true
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0.01, "Price must be greater than 0"]
    },

    isAvailable: {
      type: Boolean,
      required: [true, "Availability is required"],
      default: true
    },

    rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4.5
}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);