# 🍽️ Restaurant Management API

A full-stack **Restaurant Management System** built with **Node.js, Express, MongoDB, and React**. The application allows restaurant data and menu items to be managed through a RESTful API, with authentication and a management-focused frontend.

## 💻 Live Demo link: 

## ✨ Features

* 🔐 User registration and login
* 👤 Admin authentication
* 🏪 Restaurant management
* 🍴 Menu item management
* ⭐ Restaurant and menu item ratings
* 📍 Restaurant city and address information
* 💰 Menu item pricing
* ✅ Menu availability management
* 🗄️ MongoDB database integration
* 🌱 Database seeding with sample data
* 🔌 RESTful API architecture
* 🎨 Modern restaurant management dashboard
* 📱 Responsive frontend interface

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3
* Lucide React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* bcryptjs
* Express Session
* CORS
* dotenv

### Deployment

* GitHub
* Vercel / Railway / Render

## 📁 Project Structure

```text
restaurant_api/
│
├── controllers/
│   ├── authController.js
│   ├── menuController.js
│   └── restaurantController.js
│
├── models/
│   ├── User.js
│   ├── Restaurant.js
│   └── MenuItem.js
│
├── routes/
│   ├── authRoutes.js
│   ├── restaurantRoutes.js
│   └── menuRoutes.js
│
├── middleware/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server.js
├── seed.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/juitawde/restaurant_api.git
cd restaurant_api
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend root:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
SESSION_SECRET=your_session_secret
```

> Never commit your `.env` file or expose your MongoDB credentials publicly.

### 4. Seed the database

The project includes a `seed.js` file containing sample restaurants, menu items, and an admin account.

Run:

```bash
node seed.js
```

The seed script creates:

* 1 sample admin user
* 3 restaurants
* 30 menu items
* 10 menu items for each restaurant

### 5. Start the backend

```bash
npm start
```

The API will run locally on:

```text
http://localhost:5000
```

## 🔑 Sample Login

After running the seed script:

```text
Email: admin@restaurant.com
Password: password123
```

> Change the sample credentials before using the application in a real production environment.

## 🏪 Sample Restaurants

### Spice Villa

* 📍 Mumbai
* 🍛 Indian
* ⭐ 4.8

### Bella Italia

* 📍 Pune
* 🍝 Italian
* ⭐ 4.6

### Urban Bites

* 📍 Bengaluru
* 🍔 Multi-Cuisine
* ⭐ 4.4

Each restaurant has **10 sample menu items**.

## 🍴 Sample Menu Data

### Spice Villa

* Paneer Tikka
* Butter Chicken
* Dal Makhani
* Veg Biryani
* Chicken Biryani
* Garlic Naan
* Tandoori Chicken
* Masala Dosa
* Gulab Jamun
* Mango Lassi

### Bella Italia

* Margherita Pizza
* Farmhouse Pizza
* Penne Arrabbiata
* Alfredo Pasta
* Lasagna
* Garlic Bread
* Bruschetta
* Mushroom Risotto
* Tiramisu
* Italian Lemonade

### Urban Bites

* Classic Burger
* Cheese Burger
* Chicken Wrap
* Veg Wrap
* Loaded Fries
* Chicken Wings
* Caesar Salad
* Chocolate Brownie
* Cold Coffee
* Fresh Lime Soda

## 🔌 API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### Restaurants

```text
GET    /api/restaurants
GET    /api/restaurants/:id
POST   /api/restaurants
PUT    /api/restaurants/:id
DELETE /api/restaurants/:id
```

### Menu Items

```text
GET    /api/menu
GET    /api/menu/:id
POST   /api/menu
PUT    /api/menu/:id
DELETE /api/menu/:id
```

> Endpoint names may vary depending on the route configuration in the current version of the project.

## 🗄️ Database

The application uses **MongoDB Atlas** for cloud database storage.

The main collections are:

```text
users
restaurants
menuitems
```

Mongoose is used to define schemas and interact with MongoDB.

## 🌱 Database Seeding

The `seed.js` script is provided to populate the database with sample data.

Run:

```bash
node seed.js
```

### ⚠️ Important

The seed script clears existing data before inserting the sample data:

```js
await User.deleteMany({});
await Restaurant.deleteMany({});
await MenuItem.deleteMany({});
```

Therefore, **do not run `node seed.js` after adding data that you want to keep**, unless you intentionally want to reset the database.

## 💻 Running the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

If your Vite configuration uses another port, use the URL shown in the terminal.

## 🔗 Connecting Frontend to Backend

For local development, configure the frontend API URL to point to:

```text
http://localhost:5000
```

A recommended Vite environment variable is:

```env
VITE_API_URL=http://localhost:5000
```

Then access it in React using:

```js
const API_URL = import.meta.env.VITE_API_URL;
```

For production, replace the environment variable with the deployed backend URL.

## ☁️ Deployment

The backend can be deployed to a Node.js-compatible hosting platform such as **Railway, Render, or another cloud provider**.

The deployed service must have the required environment variables configured:

```env
MONGO_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_session_secret
PORT=your_platform_port
```

The application already listens using the platform-provided port:

```js
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
```

## 🔒 Security

For production:

* Do not commit `.env`
* Use strong passwords
* Use a strong session secret
* Restrict MongoDB Atlas network access
* Use HTTPS
* Change the sample admin credentials
* Never expose database credentials in frontend code

## 📌 Future Improvements

* 📊 Restaurant analytics dashboard
* 📦 Order management
* 👥 Staff management
* 💳 Payment integration
* 📈 Sales reports
* 🔔 Notifications
* 🖼️ Restaurant and food image uploads
* 🔎 Advanced search and filtering
* 📱 Improved mobile experience

## 👩‍💻 Author

**Jui Sudhir Tawde**

B.Tech Computer Science Engineering Student

GitHub: [@juitawde](https://github.com/juitawde)

---

⭐ If you found this project useful, consider giving the repository a star!

