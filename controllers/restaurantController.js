const Restaurant = require("../models/Restaurant");
const MenuItem = require("../models/MenuItem");

// GET ALL RESTAURANTS
const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().sort({
      createdAt: -1
    });

    res.status(200).json({
      count: restaurants.length,
      restaurants
    });
  } catch (error) {
    next(error);
  }
};

// GET RESTAURANT BY ID
const getRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found."
      });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    next(error);
  }
};

// CREATE RESTAURANT
const createRestaurant = async (req, res, next) => {
  try {
    const {
      name,
      city,
      address,
      cuisine,
      rating
    } = req.body;

    if (
      !name ||
      !city ||
      !address ||
      !cuisine ||
      rating === undefined
    ) {
      return res.status(400).json({
        message:
          "Name, city, address, cuisine and rating are required."
      });
    }

    if (rating < 0 || rating > 5) {
      return res.status(400).json({
        message: "Rating must be between 0 and 5."
      });
    }

    const restaurant = await Restaurant.create({
      name,
      city,
      address,
      cuisine,
      rating
    });

    res.status(201).json({
      message: "Restaurant created successfully.",
      restaurant
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE RESTAURANT
const updateRestaurant = async (req, res, next) => {
  try {
    const {
      name,
      city,
      address,
      cuisine,
      rating
    } = req.body;

    if (rating !== undefined && (rating < 0 || rating > 5)) {
      return res.status(400).json({
        message: "Rating must be between 0 and 5."
      });
    }

    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      {
        name,
        city,
        address,
        cuisine,
        rating
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found."
      });
    }

    res.status(200).json({
      message: "Restaurant updated successfully.",
      restaurant
    });
  } catch (error) {
    next(error);
  }
};

// DELETE RESTAURANT
const deleteRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(
      req.params.id
    );

    if (!restaurant) {
      return res.status(404).json({
        message: "Restaurant not found."
      });
    }

    // Delete all menu items belonging to this restaurant
    await MenuItem.deleteMany({
      restaurantId: req.params.id
    });

    res.status(200).json({
      message: "Restaurant and its menu items deleted successfully."
    });
  } catch (error) {
    next(error);
  }
};

// TOP 5 RESTAURANTS
const getTopRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find()
      .sort({ rating: -1 })
      .limit(5);

    res.status(200).json({
      count: restaurants.length,
      restaurants
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getTopRestaurants
};