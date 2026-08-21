const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const User = require("./models/User");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    // Clear existing data
    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await MenuItem.deleteMany({});

    console.log("Existing data cleared.");

    // Create sample user
    const hashedPassword = await bcrypt.hash(
      "password123",
      10
    );

    await User.create({
      username: "admin",
      email: "admin@restaurant.com",
      password: hashedPassword
    });

    console.log("Sample user created.");

    // Create restaurants
    const restaurants = await Restaurant.insertMany([
      {
        name: "Spice Villa",
        city: "Mumbai",
        address: "Andheri West, Mumbai",
        cuisine: "Indian",
        rating: 4.8
      },

      {
        name: "Bella Italia",
        city: "Pune",
        address: "Koregaon Park, Pune",
        cuisine: "Italian",
        rating: 4.6
      },

      {
        name: "Urban Bites",
        city: "Bengaluru",
        address: "Indiranagar, Bengaluru",
        cuisine: "Multi-Cuisine",
        rating: 4.4
      }
    ]);

    console.log("3 restaurants created.");

    // 10 items for Spice Villa
    const spiceVillaMenu = [
      {
        restaurantId: restaurants[0]._id,
        name: "Paneer Tikka",
        price: 280,
        isAvailable: true,
        rating: 4.0
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Butter Chicken",
        price: 350,
        isAvailable: true,
        rating: 4.5
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Dal Makhani",
        price: 240,
        isAvailable: true,
        rating: 4.0
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Veg Biryani",
        price: 260,
        isAvailable: true,
        rating:3.5
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Chicken Biryani",
        price: 330,
        isAvailable: true,
        rating: 4.7
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Garlic Naan",
        price: 80,
        isAvailable: true,
        rating: 3.9
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Tandoori Chicken",
        price: 390,
        isAvailable: true,
        rating: 4.0
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Masala Dosa",
        price: 180,
        isAvailable: true,
        rating: 4.1
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Gulab Jamun",
        price: 120,
        isAvailable: true,
        rating: 4.8
      },
      {
        restaurantId: restaurants[0]._id,
        name: "Mango Lassi",
        price: 100,
        isAvailable: true,
        rating:3.6
      }
    ];

    // 10 items for Bella Italia
    const bellaItaliaMenu = [
      {
        restaurantId: restaurants[1]._id,
        name: "Margherita Pizza",
        price: 320,
        isAvailable: true,
        rating:4.3
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Farmhouse Pizza",
        price: 420,
        isAvailable: true,
        rating:4.2
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Penne Arrabbiata",
        price: 300,
        isAvailable: true,
        rating:3.8
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Alfredo Pasta",
        price: 350,
        isAvailable: true,
        rating:3.0
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Lasagna",
        price: 390,
        isAvailable: true,
        rating:4.3
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Garlic Bread",
        price: 180,
        isAvailable: true,
        rating: 4.8
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Bruschetta",
        price: 220,
        isAvailable: true,
        rating:4.6
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Mushroom Risotto",
        price: 380,
        isAvailable: true,
        rating: 4.9
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Tiramisu",
        price: 240,
        isAvailable: true,
        rating:4.7
      },
      {
        restaurantId: restaurants[1]._id,
        name: "Italian Lemonade",
        price: 140,
        isAvailable: true,
        rating: 3.9
      }
    ];

    // 10 items for Urban Bites
    const urbanBitesMenu = [
      {
        restaurantId: restaurants[2]._id,
        name: "Classic Burger",
        price: 280,
        isAvailable: true,
        rating: 4.0
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Cheese Burger",
        price: 320,
        isAvailable: true,
        rating: 4.3
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Chicken Wrap",
        price: 260,
        isAvailable: true,
        rating: 4.1
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Veg Wrap",
        price: 220,
        isAvailable: true,
        rating: 4.8
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Loaded Fries",
        price: 200,
        isAvailable: true,
        rating: 4.5
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Chicken Wings",
        price: 340,
        isAvailable: true,
        rating: 4.2
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Caesar Salad",
        price: 280,
        isAvailable: true,
        rating: 4.0
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Chocolate Brownie",
        price: 180,
        isAvailable: true,
        rating: 4.7
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Cold Coffee",
        price: 160,
        isAvailable: true,
        rating: 4.5
      },
      {
        restaurantId: restaurants[2]._id,
        name: "Fresh Lime Soda",
        price: 120,
        isAvailable: true,
        rating: 3.9
      }
    ];

    await MenuItem.insertMany([
      ...spiceVillaMenu,
      ...bellaItaliaMenu,
      ...urbanBitesMenu
    ]);

    console.log("30 menu items created.");
    console.log("10 menu items added to each restaurant.");

    console.log("\nSeed completed successfully!");
    console.log("\nSample Login:");
    console.log("Email: admin@restaurant.com");
    console.log("Password: password123");

    await mongoose.connection.close();

    console.log("\nMongoDB connection closed.");
  } catch (error) {
    console.error("Seed failed:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedDatabase();