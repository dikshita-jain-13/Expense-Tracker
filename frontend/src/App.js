// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';
import { getExpenses, createExpense, updateExpense, deleteExpense } from './services/api';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await getExpenses();
      setExpenses(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching expenses. Please try again later.');
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingExpense) {
        await updateExpense(editingExpense._id, formData);
        setEditingExpense(null);
      } else {
        await createExpense(formData);
      }
      fetchExpenses();
    } catch (error) {
      setError('Error saving expense. Please try again.');
      console.error('Error saving expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await deleteExpense(id);
        fetchExpenses();
      } catch (error) {
        setError('Error deleting expense. Please try again.');
        console.error('Error deleting expense:', error);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Expense Tracker</h1>
      </header>
      {error && <div className="error-message">{error}</div>}
      <main className="app-main">
        <div className="form-section">
          <ExpenseForm onSubmit={handleSubmit} initialData={editingExpense} />
        </div>
        <div className="dashboard-section">
          <Dashboard expenses={expenses} />
        </div>
        <div className="list-section">
          <ExpenseList 
            expenses={expenses} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;