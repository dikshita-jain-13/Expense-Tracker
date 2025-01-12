// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getExpenses = () => axios.get(`${API_URL}/expenses`);
export const createExpense = (expense) => axios.post(`${API_URL}/expenses`, expense);
export const updateExpense = (id, expense) => axios.put(`${API_URL}/expenses/${id}`, expense);
export const deleteExpense = (id) => axios.delete(`${API_URL}/expenses/${id}`);