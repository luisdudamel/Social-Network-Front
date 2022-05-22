import { Button, Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledLoginForm = styled.div`
  display: flex;
  justify-content: center;
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-fields {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <Form
        className="d-flex login-form"
        autoComplete="off"
        onSubmit={() => {}}
      >
        <Row className="align-items-center input-fields">
          <Form.Text className="text-muted">
            You need to log in to see your friends
          </Form.Text>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Col xs={7}>
              <Form.Control id="username" placeholder="Enter Username" />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Col xs={7}>
              <Form.Control
                autoComplete="on"
                id="password"
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>
        </Row>
        <Button
          disabled={true}
          variant="primary"
          type="submit"
          onClick={() => {}}
        >
          Login
        </Button>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
