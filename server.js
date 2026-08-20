const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const menuRoutes = require("./routes/menuRoutes");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(logger);

// ===============================
// WELCOME ROUTE
// ===============================

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Restaurant Management API"
    });
});

// ===============================
// API ROUTES
// ===============================

app.use("/", authRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/menu", menuRoutes);

// ===============================
// ERROR HANDLER
// ===============================

app.use(errorHandler);

// ===============================
// DATABASE CONNECTION
// ===============================

let isConnected = false;

const connectDB = async () => {

    if (isConnected) {
        return;
    }

    try {

        await mongoose.connect(process.env.MONGO_URI);

        isConnected = true;

        console.log("MongoDB connected successfully.");

    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

        throw error;
    }
};

// ===============================
// VERCEL SERVERLESS HANDLER
// ===============================

const handler = async (req, res) => {

    try {

        await connectDB();

        return app(req, res);

    } catch (error) {

        console.error("Server error:", error);

        return res.status(500).json({
            message: "Database connection failed",
            error: error.message
        });
    }
};

module.exports = handler;