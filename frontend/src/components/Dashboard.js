// frontend/src/components/Dashboard.js
import React, { useMemo } from 'react';
import {
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Dashboard = ({ expenses }) => {
  const categoryData = useMemo(() => {
    const categories = {};
    expenses.forEach((expense) => {
      if (categories[expense.category]) {
        categories[expense.category] += expense.amount;
      } else {
        categories[expense.category] = expense.amount;
      }
    });

    return Object.entries(categories).map(([name, value]) => ({
      name,
      value,
    }));
  }, [expenses]);

  const monthlyData = useMemo(() => {
    const months = {};
    expenses.forEach((expense) => {
      const monthYear = format(new Date(expense.date), 'MMM yyyy');
      if (months[monthYear]) {
        months[monthYear] += expense.amount;
      } else {
        months[monthYear] = expense.amount;
      }
    });

    return Object.entries(months)
      .map(([name, amount]) => ({
        name,
        amount,
      }))
      .sort((a, b) => new Date(a.name) - new Date(b.name));
  }, [expenses]);

  const totalExpenses = useMemo(() => 
    expenses.reduce((sum, expense) => sum + expense.amount, 0)
  , [expenses]);

  return (
    <div className="dashboard">
      <h2>Expense Dashboard</h2>
      <div className="total-expenses">
        <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
      </div>
      <div className="charts">
        <div className="chart-container">
          <h3>Expenses by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={(entry) => `${entry.name}: $${entry.value.toFixed(2)}`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-container">
          <h3>Monthly Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" name="Amount" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;