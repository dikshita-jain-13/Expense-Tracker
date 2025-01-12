# Expense Tracker Application

A full-stack expense tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to track their expenses, visualize spending patterns, and manage their financial data securely.

## Features

- User Authentication (Register/Login)
- Add, Edit, and Delete Expenses
- Categorize Expenses
- Visual Dashboard with Charts
- Responsive Design
- Secure API Endpoints

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd expense-tracker
```

2. Install Backend Dependencies:
```bash
cd backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/expense-tracker
```

## Running the Application

1. Start MongoDB:
- Make sure MongoDB is running on your system
- Connect to MongoDB using MongoDB Compass at `mongodb://localhost:27017`

2. Start the Backend Server:
```bash
cd backend
npm run dev
```

3. Start the Frontend Development Server:
```bash
cd frontend
npm start
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/users/register - Register a new user

### Expenses
- GET /api/expenses - Get all expenses for logged-in user
- POST /api/expenses - Create new expense
- PUT /api/expenses/:id - Update expense
- DELETE /api/expenses/:id - Delete expense
