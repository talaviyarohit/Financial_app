import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './CategoryCarousel.css'; // Custom CSS for styling

const categories = [
  { id: 1, title: 'Income Tax', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/10/income-tax.svg' },  // Replace with actual icon URLs
  { id: 2, title: 'Saving Schemes', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/10/saving-schemes.svg' },
  { id: 3, title: 'Personal Finance', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/10/personal-finance.svg' },
  { id: 4, title: 'Stocks', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/stocks.png' }
];

const CategoryCarousel = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="text-left">
          <h2>Explore by Category</h2>
          <p>Find the content & information you need. Browse a wide range of content area below.</p>
        </Col>
        <Col md={8}>
          <Carousel indicators={false} controls={true} className="category-carousel">
            <Carousel.Item>
              <Row className="justify-content-center">
                {categories.map(category => (
                  <Col key={category.id} md={3} xs={6} className="mb-3">
                    <Card className="text-center category-card">
                      <Card.Body>
                        <img src={category.icon} alt={category.title} className="category-icon mb-3" />
                        <Card.Title>{category.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
            {/* Repeat the <Carousel.Item> block for multiple slides if needed */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryCarousel;
