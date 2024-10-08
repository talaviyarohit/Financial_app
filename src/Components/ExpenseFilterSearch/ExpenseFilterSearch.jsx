import React, { useState } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import './ExpenseFilterSearch.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ExpenseFilterSearch = () => {
  const initialExpenses = [
    { id: 1, amount: 100, description: 'Groceries', date: '2024-10-01', category: 'Food', paymentMethod: 'Cash' },
    { id: 2, amount: 200, description: 'Bus Ticket', date: '2024-10-02', category: 'Transport', paymentMethod: 'Credit' },
    { id: 3, amount: 50, description: 'Coffee', date: '2024-10-03', category: 'Food', paymentMethod: 'Cash' },
    { id: 4, amount: 300, description: 'Clothes', date: '2024-10-04', category: 'Shopping', paymentMethod: 'Credit' },
    { id: 5, amount: 500, description: 'Rent', date: '2024-10-05', category: 'Housing', paymentMethod: 'Cash' },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [paymentMethodFilter, setPaymentMethodFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);
  const handlePaymentMethodChange = (e) => setPaymentMethodFilter(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleDateRangeChange = (e) => setDateRange({ ...dateRange, [e.target.name]: e.target.value });

  // Filtering and searching logic
  const filteredExpenses = expenses.filter(expense => {
    const matchesCategory = categoryFilter === '' || expense.category === categoryFilter;
    const matchesPaymentMethod = paymentMethodFilter === '' || expense.paymentMethod === paymentMethodFilter;
    const matchesDateRange =
      (dateRange.start === '' || new Date(expense.date) >= new Date(dateRange.start)) &&
      (dateRange.end === '' || new Date(expense.date) <= new Date(dateRange.end));
    const matchesSearchTerm = expense.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPaymentMethod && matchesDateRange && matchesSearchTerm;
  });

  return (
    <>
    <Header/>
    <div className="expense-filter-search">
      <h2 className="text-center mb-4">Expenses</h2>
      {/* Filters and Search */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="categoryFilter">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" value={categoryFilter} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Housing">Housing</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="paymentMethodFilter">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control as="select" value={paymentMethodFilter} onChange={handlePaymentMethodChange}>
                <option value="">All Methods</option>
                <option value="Cash">Cash</option>
                <option value="Credit">Credit</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="search">
              <Form.Label>Search by Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="start"
                value={dateRange.start}
                onChange={handleDateRangeChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="end"
                value={dateRange.end}
                onChange={handleDateRangeChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Expense Table */}
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
                <td>{expense.paymentMethod}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No expenses found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
    <Footer/>
    </>
  );
};

export default ExpenseFilterSearch;
