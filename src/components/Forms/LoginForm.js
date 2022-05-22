import { Button, Col, Form, Row } from "react-bootstrap";

const LoginForm = () => {
  return (
    <>
      <Form className="d-flex" autoComplete="off" onSubmit={() => {}}>
        <Row className="align-items-center">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Col xs={7}>
              <Form.Control id="username" placeholder="Enter Username" />
            </Col>
            <Form.Text className="text-muted">
              To delete a robot, you need to be logged in.
            </Form.Text>
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
        <Button
          disabled={true}
          variant="primary"
          type="create"
          onClick={() => {}}
        >
          Create
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
