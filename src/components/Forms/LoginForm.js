import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginThunk } from "../../redux/thunks/usersThunks";

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
  align-items: center;

  .login-form {
    margin-top: 10px;
    display: flex;
    font-size: 20px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    box-shadow: 5px 5px 4px -5px #000000;
    border-radius: 3px;
  }
  .input-fields {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LoginForm = () => {
  const emptyFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);
  const [buttonDisabled, setButtonDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const fillForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
    setFormData(emptyFields);
  };

  return (
    <StyledLoginForm>
      You need to log in to see your friends
      <Form
        className="d-flex login-form"
        autoComplete="off"
        onSubmit={submitLogin}
      >
        <Row className="align-items-center input-fields">
          <Form.Text className="text-muted"></Form.Text>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Col xs={7}>
              <Form.Control
                id="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={fillForm}
              />
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
                value={formData.password}
                onChange={fillForm}
              />
            </Col>
          </Form.Group>
        </Row>
        <Button type="submit" disabled={buttonDisabled} variant="primary">
          Login
        </Button>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
