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

## Architecture and Flow

### Backend Architecture
- **Server**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: Custom auth middleware for protected routes
- **Controllers**: Separate controllers for users and expenses
- **Models**: Mongoose schemas for User and Expense

### Frontend Architecture
- **Framework**: React
- **State Management**: React Hooks
- **API Communication**: Axios
- **Routing**: React Router
- **Charts**: Recharts library
- **Styling**: CSS with responsive design

### Application Flow
1. User registers/logs in to get authentication token
2. Token is stored in local storage for persistent sessions
3. All subsequent requests include the auth token in headers
4. Protected routes check token validity before processing
5. Users can only access and modify their own expenses
6. Real-time updates when expenses are modified
7. Dashboard automatically updates with new data"# Expense-Tracker" 
