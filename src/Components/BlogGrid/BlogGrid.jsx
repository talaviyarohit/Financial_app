// BlogGrid.js
import React from 'react';
import { Card, Col, Row, Container, Badge } from 'react-bootstrap';
import './Bloggrid.css'; // For custom CSS styling
import CategoryCarousel from '../CategoryCarousel/CatagoryCarousel';
import PopularSection from '../PopularSection/PopularSection';
import ExploreTopics from '../ExploreTopics/ExploreTopics';
import ExploreByType from '../ExploreByType/ExploreByType';
import ExploreCalculater from '../ExploreCalculater/ExploreCalculater';
import Queries from '../Queries/Queries';

import ExpenseCharts from '../ExpenseCharts/ExpenseChats';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BlogGrid = () => {
  const articles = [
    {
      id: 1,
      title: "Alternative Investment Options in India",
      tags: ["Personal Finance", "Financial Planning", "Finance"],
      author: "Tinesh Bhasin",
      readTime: "14 mins read",
      date: "Oct 7, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/10/List_Alternative-Investment-Options-in-India.jpg"
    },
    {
      id: 2,
      title: "What makes a successful IPO: Tips and Strategies",
      tags: ["Stocks", "Financial Insights", "Stock Market"],
      author: "Tinesh Bhasin",
      readTime: "5 mins read",
      date: "Sep 23, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/09/List_What-makes-a-successful-IPO-Tips-and-Strategies.jpg",
    },
    {
      id: 3,
      title: "Trading Momentum Indicators",
      tags: ["Stocks", "Financial Planning", "Stock Market"],
      author: "Tinesh Bhasin",
      readTime: "10 mins read",
      date: "Sep 18, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/09/Trading-Momentum-Indicators_List.jpg",
    },
    {
      id: 4,
      title: "How to Analyze REITs and InvITs",
      tags: ["Personal Finance", "Financial Insights"],
      author: "Tinesh Bhasin",
      readTime: "10 mins read",
      date: "Sep 16, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/09/List-How-to-Analyze-REITs-and-InvITs-.jpg",
    },
    {
      id: 5,
      title: "What is Exponential Moving Average?",
      tags: ["Stocks", "Stock Market"],
      author: "Tinesh Bhasin",
      readTime: "8 mins read",
      date: "Sep 5, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/09/List_What-is-Exponential-Moving-Average-.jpg",
    },
    {
      id: 6,
      title: "What is the Simple Moving Average?",
      tags: ["Stocks", "Stock Market"],
      author: "Tinesh Bhasin",
      readTime: "8 mins read",
      date: "Sep 5, 2024",
      image: "https://cdnlearnblog.etmoney.com/wp-content/uploads/2024/09/List_What-is-the-Simple-Moving-Average-.jpg",
    },
  ];

  return (
    <>
    <Header/>
        <Container>
      <h2 className="my-4">Today's Digest for you</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <div className="tags mb-2">
                  {article.tags.map((tag, index) => (
                    <Badge pill bg="light" text="dark" key={index} className="me-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Card.Text>
                  <small className="text-muted">By {article.author} • {article.readTime}</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{article.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
<CategoryCarousel/>
<PopularSection />
<ExploreTopics/>
<ExploreByType/>
< ExploreCalculater />
<Queries />
<ExpenseCharts/>
    </Container>

    {/* <Footer/> */}


    </>
  );
};

export default BlogGrid;
