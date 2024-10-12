import { Card, Button, Form, Container } from 'react-bootstrap';

function PostPage() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Blog Post Title</Card.Title>
          <Card.Text>
            Detailed blog content goes here...
          </Card.Text>
          <Button variant="primary">Like</Button> <span>10 Likes</span>
        </Card.Body>
        <Card.Footer>
          <h5>Comments</h5>
          <ul>
            <li>User1: Great post!</li>
            <li>User2: Very informative!</li>
          </ul>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Add a comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary">Add Comment</Button>
          </Form>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default PostPage;
