import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PopularSection.css';  // Custom CSS for styling

const videos = [
  { id: 1, title: 'Should you rethink your Debt Strategy?', description: 'Where should you invest after change in debt mutual fund taxation?', date: 'Apr 14, 2023', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2023/04/image-7.png' },
  { id: 2, title: 'Everything About SIPs', description: 'SIP: How does it work?', date: 'Jun 28, 2023', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2023/02/reels-01-36.jpg' },
  { id: 3, title: 'Warren Buffett’s Biggest Mistakes', description: '', date: 'Jun 28, 2023', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2023/02/Youtube-2-05-1536x863.jpg' }
];

const insights = [
  { id: 1, title: 'Should you invest in Motilal Oswal Midcap Fund?', author: 'Sridhar Sahu', timeToRead: '12 mins read', date: 'Sep 18, 2024', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/06/List_Motilal-Oswal-Midcap-fund-Article-.jpg' },
  { id: 2, title: 'Should you invest in HDFC Mid Cap Opportunities Fund?', author: 'Sridhar Sahu', timeToRead: '9 mins read', date: 'Aug 6, 2024', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/04/HDFC-Midcap-Fund-Review-04.png' },
  { id: 3, title: 'Do funds with lower number of stocks perform better?', author: 'Sridhar Sahu', timeToRead: '7 mins read', date: 'May 22, 2024', thumbnail: 'https://cdnlearnblog.etmoney.com/wp-content/uploads/2023/12/list-Number-of-Fund-in-a-Portfolio-Article-04.jpg' }
];

const PopularSection = () => {
  return (
    <Container className="my-5 popular-section">
      {/* Popular Videos */}
      <Row className="align-items-center">
        <Col><h2>Popular Videos</h2></Col>
        <Col className="text-end"><a href="/videos" className="view-all">View All Videos</a></Col>
      </Row>
      <Row>
        {videos.map((video) => (
          <Col key={video.id} md={4} className="mb-4">
            <Card className="video-card">
              <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <small className="text-muted">{video.date}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Popular Insights */}
      <Row className="align-items-center mt-5">
        <Col><h2>Popular Insights</h2></Col>
        <Col className="text-end"><a href="/insights" className="view-all">View All Insights</a></Col>
      </Row>
      <Row>
        {insights.map((insight) => (
          <Col key={insight.id} md={4} className="mb-4">
            <Card className="insight-card">
              <Card.Img variant="top" src={insight.thumbnail} alt={insight.title} />
              <Card.Body>
                <Card.Title>{insight.title}</Card.Title>
                <small className="text-muted">
                  By {insight.author} • {insight.timeToRead} • {insight.date}
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularSection;
