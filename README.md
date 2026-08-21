# 🍽️ Restaurant Management System

A full-stack Restaurant Management System that allows restaurant managers to manage restaurants, menus, and user authentication through a simple and responsive web interface.

The project consists of a React frontend and a Node.js/Express backend connected to MongoDB.

## 🌐 Live Demo

https://restaurant-api-bq5c.vercel.app

## ✨ Features

- 🔐 User Registration and Login
- 🔑 User Authentication
- 🍽️ Restaurant Management
- 📋 Menu Management
- ➕ Add Restaurants and Menu Items
- ✏️ Update Restaurant and Menu Information
- 🗑️ Delete Restaurants and Menu Items
- 📊 Restaurant Management Dashboard
- 🌐 RESTful API
- 🗄️ MongoDB Database Integration
- 🔒 Environment Variable Configuration
- 📱 Responsive User Interface
- 🚀 Deployed Frontend and Backend

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- CORS

### Deployment

- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Database

## 📂 Project Structure

```text
restaurant-api/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── README.md
```

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Do not commit the `.env` file to GitHub.

Add the following to `.gitignore`:

```text
.env
node_modules/
```

## 💻 Local Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd restaurant-api
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create the `.env` file with the required environment variables.

Start the backend:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal and move to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Login an existing user |

### Restaurants

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/restaurants` | Get all restaurants |
| GET | `/restaurants/:id` | Get a restaurant by ID |
| POST | `/restaurants` | Create a restaurant |
| PUT | `/restaurants/:id` | Update a restaurant |
| DELETE | `/restaurants/:id` | Delete a restaurant |

### Menu

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/menu` | Get all menu items |
| GET | `/menu/:id` | Get a menu item by ID |
| POST | `/menu` | Create a menu item |
| PUT | `/menu/:id` | Update a menu item |
| DELETE | `/menu/:id` | Delete a menu item |

## 🩺 API Health Check

The backend provides a health-check endpoint:

```text
GET /health
```

Example response:

```json
{
  "status": "OK",
  "message": "Restaurant API is running"
}
```

## 🖼️ Screenshots

### Login Page

<img width="2916" height="1762" alt="image" src="https://github.com/user-attachments/assets/9f3beb70-2e94-454c-a3d9-9328fe1aaf18" />


### Registration Page

<img width="1468" height="880" alt="Screenshot 2026-08-21 at 10 49 22 PM" src="https://github.com/user-attachments/assets/207acc59-2525-43df-adb1-571792212f70" />


### Dashboard

<img width="1462" height="880" alt="Screenshot 2026-08-21 at 1 21 03 AM" src="https://github.com/user-attachments/assets/5288efed-49d1-4f65-b4eb-0373179f01a9" />


### Restaurant Management

<img width="1468" height="881" alt="Screenshot 2026-08-21 at 1 25 43 AM" src="https://github.com/user-attachments/assets/5361e581-69c1-4180-a7a8-cdef472fcaf1" />


### Menu Management

<img width="1467" height="876" alt="Screenshot 2026-08-21 at 1 22 43 AM" src="https://github.com/user-attachments/assets/0db432d1-36ad-4642-90e6-7fa94e1543e6" />

<img width="1470" height="882" alt="Screenshot 2026-08-21 at 1 22 20 AM" src="https://github.com/user-attachments/assets/73110598-9f6d-48b9-8736-63fac7833269" />


## 🔐 Authentication

The application provides authentication for restaurant management users.

Users can:

1. Create an account.
2. Log in using their credentials.
3. Access the management dashboard.
4. Manage restaurants and menu information.

Authentication-related functionality is handled by the backend API.

## 🌍 Deployment

### Frontend – Vercel

The React frontend is deployed using Vercel.

**Live URL:**

https://restaurant-api-bq5c.vercel.app

A `vercel.json` configuration is used to support React client-side routing and ensure routes such as `/dashboard` continue to work correctly after refreshing the page.

### Backend – Render

The Node.js/Express backend is deployed using Render.

**Live URL:**

https://restaurant-api-4ldy.onrender.com

**Health Check:**

https://restaurant-api-4ldy.onrender.com/health

## 🔗 Frontend and Backend Integration

The frontend communicates with the deployed backend through REST API requests.

**Production API Base URL:**

```text
https://restaurant-api-4ldy.onrender.com
```

CORS is configured on the backend to allow requests from the deployed Vercel frontend.

## 📁 Important Configuration Files

### `.env`

Stores sensitive configuration such as:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

The `.env` file should never be committed to GitHub.

### `vercel.json`

The frontend uses `vercel.json` to support client-side routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🚀 Deployment Flow

```text
User
  │
  ▼
React Frontend
  │
  │ REST API Requests
  ▼
Express.js Backend
  │
  ▼
MongoDB Database
```

**Frontend deployment:**

```text
GitHub → Vercel
```

**Backend deployment:**

```text
GitHub → Render
```

## 🧪 Testing

The application can be tested locally using:

```text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000

Health Check:
http://localhost:5000/health
```

The deployed application can be tested using:

```text
Frontend:
https://restaurant-api-bq5c.vercel.app

Backend:
https://restaurant-api-4ldy.onrender.com
```

## 🔒 Security

- Sensitive environment variables are stored in `.env`.
- `.env` is excluded from Git.
- Authentication is handled by the backend.
- CORS is configured for the deployed frontend.
- Database credentials are not stored directly in source code.

## 📌 Future Improvements

- Online table reservation system
- Order management
- Payment integration
- Restaurant analytics
- Customer management
- Image upload for menu items
- Role-based access control
- Notifications
- Advanced dashboard statistics

## 👩‍💻 Author

**Jui Tawde**

B.Tech Computer Science Engineering

## 📄 License

This project was developed for academic and learning purposes.
