import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function UserProfile() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="profile-pic-url" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Bio: Blogger, developer, and tech enthusiast.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <h4>Recent Posts</h4>
          {/* Loop through and render user's blog posts */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Recent Blog Post Title</Card.Title>
              <Card.Text>
                A brief description...
              </Card.Text>
              <Button variant="primary" href="/post/1">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
