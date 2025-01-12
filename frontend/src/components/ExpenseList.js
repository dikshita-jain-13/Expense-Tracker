// frontend/src/components/ExpenseList.js
import React from 'react';
import { format } from 'date-fns';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.length === 0 ? (
        <p>No expenses found. Add some expenses to get started!</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense._id}>
                  <td>{format(new Date(expense.date), 'MM/dd/yyyy')}</td>
                  <td>{expense.category}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>
                    <button 
                      className="edit-btn"
                      onClick={() => onEdit(expense)}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => onDelete(expense._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;