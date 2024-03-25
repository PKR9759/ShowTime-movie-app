import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Home = () => {
  return (
    <div>
      
      <Container className="mt-4">
        <h1>Welcome to My Movies App</h1>
        <h3>Trending Movies</h3>
        <Row>
          {[1, 2, 3, 4].map((movie) => (
            <Col sm="3" key={movie}>
              <Card>
                <CardImg top width="100%" src={`https://via.placeholder.com/300x400?text=Movie${movie}`} alt={`Movie ${movie}`} />
                <CardBody>
                  <CardTitle tag="h5">Movie {movie}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Subtitle</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
