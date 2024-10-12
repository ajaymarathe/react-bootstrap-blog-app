import { Form, Button } from 'react-bootstrap';

function CommentSection() {
  return (
    <div>
      <h5>Comments</h5>
      <ul>
        <li>User1: This is a comment</li>
        <li>User2: Another comment!</li>
      </ul>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Add a comment" />
        </Form.Group>
        <Button variant="primary">Submit Comment</Button>
      </Form>
    </div>
  );
}

export default CommentSection;
