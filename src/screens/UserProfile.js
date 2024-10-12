import { Card, Container, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";

function UserProfile() {
  return (
    <>
      <AppNavbar />
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Row className="justify-content-center">
                <Col md={6}>
                  <Card.Img
                    className="rounded-circle"
                    variant="top"
                    src="https://via.placeholder.com/250"
                  />
                </Col>
              </Row>
              <Card.Body>
                <Card.Title className="text-center">John Doe</Card.Title>
                <Card.Text className="text-center">
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
                <Card.Text>A brief description...</Card.Text>
                <Button variant="primary" href="/post/1">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
