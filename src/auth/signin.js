import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { signInWithGoogle } from "../firebase/firebase";

const SignIn = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Button
            variant="danger"
            onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;