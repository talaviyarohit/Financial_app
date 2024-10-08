import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ExploreByType.css'; // Import the custom CSS for styling

const types = [
  { id: 1, title: 'Articles', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/article-1-1.png' },
  { id: 2, title: 'ET Money Insights', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/etmoney-insight.svg' },
  { id: 3, title: 'Videos', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/play-button-1.png' },
  { id: 4, title: 'ET Money Answers', icon: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2022/09/etmoney-answer.svg' },
  { id: 5, title: 'Web Stories', icon: 'https://img.smartspends.com/static/images/learn/web-stories.svg' },
];

const ExploreByType = () => {
  return (
    <Container className="my-5 explore-by-type">
      <h2 className="text-center mb-4">Explore by Type</h2>
      <p className="text-center mb-5">Find the content & information you need. Browse a wide range of content areas below.</p>
      <Row className="justify-content-center">
        {types.map((type) => (
          <Col key={type.id} xs={12} md={6} lg={2} className="mb-4">
            <Card className="type-card text-center">
              <Card.Body>
                <div className="icon-wrapper mb-3">
                  <img src={type.icon} alt={type.title} className="type-icon" />
                </div>
                <Card.Title>{type.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreByType;
