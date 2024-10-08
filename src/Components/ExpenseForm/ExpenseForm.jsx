import React, { useState } from 'react';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import './ExpenseForm.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    date: '',
    category: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState(['Food', 'Transport', 'Bills', 'Shopping']); // Predefined categories

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    let newErrors = {};

    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }
    if (!formData.description || formData.description.trim() === '') {
      newErrors.description = 'Description is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.category) {
      newErrors.category = 'Please select or enter a category';
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Process the form data (send it to backend or update the state)
      console.log('Form data:', formData);

      // Add new category if it's not in the predefined list
      if (!categories.includes(formData.category)) {
        setCategories([...categories, formData.category]);
      }

      // Reset form fields
      setFormData({
        amount: '',
        description: '',
        date: '',
        category: '',
        paymentMethod: '',
      });
    }
  };

  return (
   <>
    <Header/>
    <Form onSubmit={handleSubmit} className="expense-form">
      <Row>
        <Col md={6}>
          {/* Amount Field */}
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <InputGroup>
              <InputGroup.Text>₹</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                isInvalid={!!errors.amount}
                placeholder="Enter amount"
              />
              <Form.Control.Feedback type="invalid">
                {errors.amount}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          {/* Date Field */}
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type="invalid">
              {errors.date}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          {/* Description Field */}
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
              placeholder="Enter description"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          {/* Category Field with Auto-suggestions */}
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              list="categoryOptions"
              name="category"
              value={formData.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
              placeholder="Select or type category"
            />
            <datalist id="categoryOptions">
              {categories.map((category, index) => (
                <option key={index} value={category} />
              ))}
            </datalist>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          {/* Payment Method Field */}
          <Form.Group controlId="paymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              isInvalid={!!errors.paymentMethod}
            >
              <option value="">Choose...</option>
              <option value="Cash">Cash</option>
              <option value="Credit">Credit</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.paymentMethod}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit" className="mt-4">
        Add Expense
      </Button>
    </Form>
    <Footer/>
   </>
  );
};

export default ExpenseForm;
