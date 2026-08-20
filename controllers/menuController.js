const MenuItem = require("../models/MenuItem");
const Restaurant = require("../models/Restaurant");

// GET MENU FOR A RESTAURANT
const getRestaurantMenu = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found."
      });
    }

    const menuItems = await MenuItem.find({
      restaurantId: req.params.id
    }).sort({
      name: 1
    });

    res.status(200).json({
      restaurant: {
        id: restaurant._id,
        name: restaurant.name
      },
      count: menuItems.length,
      menuItems
    });
  } catch (error) {
    next(error);
  }
};

// ADD MENU ITEM
const createMenuItem = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found."
      });
    }

    const {
      name,
      price,
      isAvailable
    } = req.body;

    if (
      !name ||
      price === undefined ||
      isAvailable === undefined
    ) {
      return res.status(400).json({
        message:
          "Name, price and isAvailable are required."
      });
    }

    if (price <= 0) {
      return res.status(400).json({
        message: "Price must be greater than 0."
      });
    }

    if (typeof isAvailable !== "boolean") {
      return res.status(400).json({
        message: "isAvailable must be true or false."
      });
    }

    const menuItem = await MenuItem.create({
      restaurantId: req.params.id,
      name,
      price,
      isAvailable
    });

    res.status(201).json({
      message: "Menu item added successfully.",
      menuItem
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE MENU ITEM
const updateMenuItem = async (req, res, next) => {
  try {
    const {
      name,
      price,
      isAvailable
    } = req.body;

    if (price !== undefined && price <= 0) {
      return res.status(400).json({
        message: "Price must be greater than 0."
      });
    }

    if (
      isAvailable !== undefined &&
      typeof isAvailable !== "boolean"
    ) {
      return res.status(400).json({
        message: "isAvailable must be true or false."
      });
    }

    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        isAvailable
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found."
      });
    }

    res.status(200).json({
      message: "Menu item updated successfully.",
      menuItem
    });
  } catch (error) {
    next(error);
  }
};

// DELETE MENU ITEM
const deleteMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(
      req.params.id
    );

    if (!menuItem) {
      return res.status(404).json({
        message: "Menu item not found."
      });
    }

    res.status(200).json({
      message: "Menu item deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRestaurantMenu,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
};