import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar';

function BlogFeed() {
  return (
    <>
    <AppNavbar />
    <Container>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Blog Post Title</Card.Title>
              <Card.Text>
                A short description of the blog post goes here...
              </Card.Text>
              <Button variant="primary" href="/post/1">Read More</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Posted on 12th Oct</Card.Footer>
          </Card>
          {/* Add more cards for additional posts */}
        </Col>
        <Col md={4}>
          <h4>Categories</h4>
          <ul>
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Business</li>
            <li>Travel</li>
          </ul>
        </Col>
      </Row>
    </Container>

    </>
  );
}

export default BlogFeed;
