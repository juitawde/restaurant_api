const express = require("express");

const {
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/:id", authMiddleware, updateMenuItem);
router.delete("/:id", authMiddleware, deleteMenuItem);

module.exports = router;