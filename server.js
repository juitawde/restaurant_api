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

const PORT = process.env.PORT || 5000;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors({
    origin: [
        "http://localhost:5174",
        "https://restaurant-api-qwy7.vercel.app"
    ],
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
// DATABASE + SERVER
// ===============================

const startServer = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected successfully.");

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {

        console.error(
            "MongoDB connection failed:",
            error.message
        );

        process.exit(1);
    }
};

startServer();