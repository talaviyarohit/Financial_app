import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './ExpenseCharts.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Register the required Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

const ExpenseCharts = () => {
  const [expenses, setExpenses] = useState([
    { month: 'January', category: 'Food', amount: 200 },
    { month: 'January', category: 'Transport', amount: 100 },
    { month: 'February', category: 'Food', amount: 150 },
    { month: 'February', category: 'Entertainment', amount: 80 },
    { month: 'March', category: 'Bills', amount: 120 },
    { month: 'March', category: 'Shopping', amount: 300 },
    // Add more expenses...
  ]);

  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredExpenses = expenses.filter(
    (expense) =>
      (selectedMonth === 'All' || expense.month === selectedMonth) &&
      (selectedCategory === 'All' || expense.category === selectedCategory)
  );

  const lineChartData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: expenses
          .filter(exp => exp.category === selectedCategory || selectedCategory === 'All')
          .map(exp => exp.amount),
        borderColor: '#36a2eb',
        fill: false,
      },
    ],
  };

  const categories = ['Food', 'Transport', 'Bills', 'Shopping', 'Entertainment'];
  const categoryData = {
    labels: categories,
    datasets: [
      {
        data: categories.map(cat =>
          filteredExpenses
            .filter(exp => exp.category === cat)
            .reduce((sum, exp) => sum + exp.amount, 0)
        ),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
      },
    ],
  };

  return (
    <>
    <Header/>
    <Container className="expense-charts mt-5">
      <Row>
        {/* Filtering Options */}
        <Col md={4}>
          <Form>
            <Form.Group controlId="selectMonth">
              <Form.Label>Select Month</Form.Label>
              <Form.Control
                as="select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="All">All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                {/* Add more months */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="selectCategory" className="mt-3">
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                {categories.map((category, idx) => (
                  <option key={idx} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>

        {/* Line Chart */}
        <Col md={8}>
          <h4>Monthly Expense Comparison</h4>
          <Line data={lineChartData} options={{ responsive: true }} />
        </Col>
      </Row>

      <Row className="mt-5">
        {/* Pie Chart */}
        <Col md={8} className="offset-md-4">
          <h4>Expense Breakdown by Category</h4>
          <Pie data={categoryData} options={{ responsive: true }} />
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default ExpenseCharts;
