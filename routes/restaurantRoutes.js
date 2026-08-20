const express = require("express");

const {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getTopRestaurants
} = require("../controllers/restaurantController");

const {
  getRestaurantMenu,
  createMenuItem
} = require("../controllers/menuController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/top", getTopRestaurants);
router.get("/", getRestaurants);
router.get("/:id", getRestaurantById);

// Protected restaurant routes
router.post("/", authMiddleware, createRestaurant);
router.put("/:id", authMiddleware, updateRestaurant);
router.delete("/:id", authMiddleware, deleteRestaurant);

// Menu routes
router.get("/:id/menu", getRestaurantMenu);
router.post("/:id/menu", authMiddleware, createMenuItem);

module.exports = router;