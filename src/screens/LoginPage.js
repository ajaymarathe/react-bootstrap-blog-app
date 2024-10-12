import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { auth, provider, signInWithPopup } from "../firebase";

function LoginPage() {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successful login, handle the result
        const user = result.user;
        console.log("User Info:", user);
      })
      .catch((error) => {
        // Handle login errors here
        console.error("Google Login Error:", error);
      });
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
