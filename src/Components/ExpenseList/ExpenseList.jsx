import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Pagination } from 'react-bootstrap';
import './ExpenseList.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ExpenseList = () => {
  // Sample Data for demonstration
  const initialExpenses = [
    { id: 1, amount: 100, description: 'Groceries', date: '2024-10-01', category: 'Food' },
    { id: 2, amount: 200, description: 'Bus Ticket', date: '2024-10-02', category: 'Transport' },
    { id: 3, amount: 50, description: 'Coffee', date: '2024-10-03', category: 'Food' },
    { id: 4, amount: 300, description: 'Shopping', date: '2024-10-04', category: 'Shopping' },
    // More data can be added here
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [editing, setEditing] = useState(null); // ID of the row being edited
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const expensesPerPage = 3; // Change this number for more items per page

  // Sort expenses based on the selected column
  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  // Handle sorting when a column header is clicked
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Handle pagination
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = sortedExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle Inline Editing
  const handleEdit = (id) => setEditing(id);
  const handleSave = (id, updatedExpense) => {
    setExpenses(expenses.map(exp => (exp.id === id ? updatedExpense : exp)));
    setEditing(null);
  };
  
  // Handle input change in the inline edit form
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setExpenses(expenses.map(exp => (exp.id === id ? { ...exp, [name]: value } : exp)));
  };

  return (
    <div>
        <Header/>
        <div className="expense-list">
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th onClick={() => handleSort('amount')}>Amount {sortConfig.key === 'amount' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}</th>
            <th>Description</th>
            <th onClick={() => handleSort('date')}>Date {sortConfig.key === 'date' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}</th>
            <th onClick={() => handleSort('category')}>Category {sortConfig.key === 'category' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.map((expense) => (
            <tr key={expense.id}>
              {editing === expense.id ? (
                <>
                  <td>
                    <Form.Control
                      type="number"
                      name="amount"
                      value={expense.amount}
                      onChange={(e) => handleChange(e, expense.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="description"
                      value={expense.description}
                      onChange={(e) => handleChange(e, expense.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="date"
                      name="date"
                      value={expense.date}
                      onChange={(e) => handleChange(e, expense.id)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      name="category"
                      value={expense.category}
                      onChange={(e) => handleChange(e, expense.id)}
                    />
                  </td>
                  <td>
                    <Button variant="success" onClick={() => handleSave(expense.id, expense)}>Save</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>{expense.category}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEdit(expense.id)}>Edit</Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        {Array.from({ length: Math.ceil(expenses.length / expensesPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} onClick={() => paginate(index + 1)} active={currentPage === index + 1}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
        <Footer/>
    </div>
  );
};

export default ExpenseList;
