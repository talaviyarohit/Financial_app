import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ExploreTopics.css'; // Custom CSS for styling

const topics = [
  { id: 1, title: 'Financial Insights', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/tag.svg' },
  { id: 2, title: 'Stock Market', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/stock-markets.svg' },
  { id: 3, title: 'Tax Saving', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/els-tax-saving.svg' },
  { id: 4, title: 'Financial Planning', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/financial-planning.svg' },
  { id: 5, title: 'Financial Lessons', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/tag.svg' },
  { id: 6, title: 'Retirement', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/nps-retirement.svg' },
  { id: 7, title: 'Equity Funds', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/equity-funds.svg' },
  { id: 8, title: 'Debt Funds', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/debt-funds.svg' },
  { id: 9, title: 'Health Insurance', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/tag.svg' },
  { id: 10, title: 'SIP', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/sip.svg' },
  { id: 11, title: 'Financial Decisions', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/tag.svg' },
  { id: 12, title: 'Term Insurance', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/term-insurance.svg' }
];

const ExploreTopics = () => {
  return (
    <Container className="my-5 explore-topics">
      <h2 className="text-center mb-4">Explore by Topic</h2>
      <p className="text-center mb-5">Find the content & information you need. Browse a wide range of content areas below.</p>
      <Row>
        {topics.map((topic) => (
          <Col key={topic.id} xs={6} md={4} lg={3} className="mb-4">
            <Card className="topic-card text-center">
              <Card.Body>
                <div className="icon-wrapper mb-3">
                  <img src={topic.icon} alt={topic.title} className="topic-icon" />
                </div>
                <Card.Title>{topic.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreTopics;
