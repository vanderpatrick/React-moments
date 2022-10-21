import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SigninUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../app.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpdata] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;
  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    setSignUpdata({
      ...signUpData, //the 3 dots are to take old value
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); //this is to prevent default refresh
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErros(err.response?.data);
    }
  };

  const history = useHistory();

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username :</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            {errors.username?.map((message, idx) =>
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password :</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Enter Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            {errors.password1?.map((message, idx) =>
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm Password :</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            {errors.password2?.map((message, idx) =>
              <Alert variant="warning" key={idx}>{message}</Alert>
            )}

            <Button
              className={`
              ${btnStyles.Button} 
              ${btnStyles.Wide} 
              ${btnStyles.Bright}`}
              type="Submit"
            >
              Sign Up
            </Button>

            {errors.non_field_errors?.map((message, idx) =>
              <Alert variant="warning" className="mt-3" key={idx}>{message}</Alert>
            )}

          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
