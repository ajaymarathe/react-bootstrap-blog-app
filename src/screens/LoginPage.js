import React from "react";
import { Container, Button, Card } from "react-bootstrap";

function LoginPage() {
  const handleGoogleLogin = () => {
    // Logic for Google login can be added here
    console.log("Google login button clicked");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4" style={{ width: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Button
            variant="danger"
            className="w-100"
            onClick={handleGoogleLogin}
          >
            <i className="fab fa-google"></i> Login with Google
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;
