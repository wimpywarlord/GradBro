import React from "react";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/LogInSignUpModal.css";

import {
  logInFormValidation,
  signUpFormValidation,
} from "../assets/js/logInSignUpFormValidation.ts";

import {
  postRequestSignUp,
  postRequestLogin,
} from "../assets/js/networkCalls.ts";

import GradBroAlert from "./GradBroAlert";

// Define the props type
type LogInSignUpModalProps = {
  showLogInSignUpModal: boolean;
  handleCloseLogInSignUpModal: () => void;
};

const LogInSignUpModal: React.FC<LogInSignUpModalProps> = ({
  showLogInSignUpModal,
  handleCloseLogInSignUpModal,
}) => {
  // ! LOGIN FORM - EMAIL
  const [logInFormEmail, setLogInFormEmail] = useState("");
  const [logInFormEmailError, setLogInFormEmailError] = useState("");
  const handleLogInFormEmailChange = (e: any) => {
    console.log("EVENT -> logInFormEmail", e.target.value);
    setLogInFormEmail(e.target.value);
  };
  // ! LOGIN FORM - PASSWORD
  const [logInFormPassword, setLogInFormPassword] = useState("");
  const [logInFormPasswordError, setLogInFormPasswordError] = useState("");
  const handleLogInFormPasswordChange = (e: any) => {
    console.log("EVENT -> logInFormPassword", e.target.value);
    setLogInFormPassword(e.target.value);
  };

  const handleLoginButtonClick = async () => {
    if (
      logInFormValidation(
        logInFormEmail,
        setLogInFormEmailError,
        logInFormPassword,
        setLogInFormPasswordError
      )
    ) {
      console.log("Log in Form is valid");

      const response = await postRequestLogin(
        logInFormEmail,
        logInFormPassword
      );

      console.log(response);

      if (response.status) {
        setAlertShowAbsolute(true);
        setAlertMessage(response.message);
        setAlertType("success");
        handleCloseLogInSignUpModal();
      } else {
        setAlertShowInline(true);
        setAlertMessage(response.message);
        setAlertType("danger");
      }
    } else {
      console.log("Log in Form is invalid");
    }
  };

  // ! SIGN UP FORM - FIRST NAME
  const [signUpFormFirstName, setSignUpFormFirstName] = useState("");
  const [signUpFormFirstNameError, setSignUpFormFirstNameError] = useState("");
  const handleSignUpFormFirstNameChange = (e: any) => {
    console.log("EVENT -> signUpFormFirstName", e.target.value);
    setSignUpFormFirstName(e.target.value);
  };
  // ! SIGN UP FORM - LAST NAME
  const [signUpFormLastName, setSignUpFormLastName] = useState("");
  const [signUpFormLastNameError, setSignUpFormLastNameError] = useState("");
  const handleSignUpFormLastNameChange = (e: any) => {
    console.log("EVENT -> signUpFormLastName", e.target.value);
    setSignUpFormLastName(e.target.value);
  };
  // ! SIGN UP FORM - EMAIL
  const [signUpFormEmail, setSignUpFormEmail] = useState("");
  const [signUpFormEmailError, setSignUpFormEmailError] = useState("");
  const handleSignUpFormEmailChange = (e: any) => {
    console.log("EVENT -> signUpFormEmail", e.target.value);
    setSignUpFormEmail(e.target.value);
  };
  // ! SIGN UP FORM - PASSWORD
  const [signUpFormPassword, setSignUpFormPassword] = useState("");
  const [signUpFormPasswordError, setSignUpFormPasswordError] = useState("");
  const handleSignUpFormPasswordChange = (e: any) => {
    console.log("EVENT -> signUpFormPassword", e.target.value);
    setSignUpFormPassword(e.target.value);
  };

  // ! ALERTS
  const [alertShowInline, setAlertShowInline] = useState(false);
  const [alertShowAbsolute, setAlertShowAbsolute] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // Use effect to hide alert after 5 seconds
  useEffect(() => {
    if (alertShowInline) {
      const timer = setTimeout(() => {
        setAlertShowInline(false);
        setAlertMessage("");
        setAlertType("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or when showAlert changes
    }
    if (alertShowAbsolute) {
      const timer = setTimeout(() => {
        setAlertShowAbsolute(false);
        setAlertMessage("");
        setAlertType("");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount or when showAlert changes
    }
  }, [alertShowInline, alertShowAbsolute]);

  const handleSignUpButtonClick = async () => {
    if (
      signUpFormValidation(
        signUpFormFirstName,
        setSignUpFormFirstNameError,
        signUpFormLastName,
        setSignUpFormLastNameError,
        signUpFormEmail,
        setSignUpFormEmailError,
        signUpFormPassword,
        setSignUpFormPasswordError
      )
    ) {
      console.log("Sign up Form is valid");
      const response = await postRequestSignUp(
        signUpFormFirstName,
        signUpFormLastName,
        signUpFormEmail,
        signUpFormPassword
      );

      console.log(response);

      if (response.status) {
        setAlertShowAbsolute(true);
        setAlertMessage(response.message);
        setAlertType("success");
        handleCloseLogInSignUpModal();
      } else {
        setAlertShowInline(true);
        setAlertMessage(response.message);
        setAlertType("danger");
      }
    } else {
      console.log("Sign up Form is invalid");
    }
  };

  return (
    <>
      {alertShowAbsolute && (
        <GradBroAlert
          inPlaceOrAbsolute="absolute"
          message={alertMessage}
          variant={alertType}
        ></GradBroAlert>
      )}
      <Modal
        size="lg"
        centered
        show={showLogInSignUpModal}
        onHide={handleCloseLogInSignUpModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          className="px-4 pt-4"
          style={{ borderBottom: "none" }}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <Container>
            <Tabs
              defaultActiveKey="log-in"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              {/* LOGIN TAB */}
              <Tab
                eventKey="log-in"
                title={
                  <span className="log-in-sign-up-modal-tabs">Log-In</span>
                }
              >
                <Row className="pt-3">
                  <Col>
                    {/* ALERT */}
                    {alertShowInline && (
                      <GradBroAlert
                        inPlaceOrAbsolute="static"
                        message={alertMessage}
                        variant={alertType}
                      ></GradBroAlert>
                    )}
                  </Col>
                </Row>

                <Row className="py-3">
                  <Col>
                    <Form.Group
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      className="mb-3"
                      controlId="loginFormEmail"
                    >
                      <Form.Label>
                        Email address <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Text
                        className="pb-2 text-danger"
                        id="loginEmailErorrBox"
                      >
                        {logInFormEmailError}
                      </Form.Text>
                      <Form.Control
                        value={logInFormEmail}
                        onChange={handleLogInFormEmailChange}
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="py-1 pb-4">
                  <Col>
                    <Form.Group
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      className="mb-3"
                      controlId="loginFormPassword"
                    >
                      <Form.Label>
                        Password <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Text
                        className="pb-2 text-danger"
                        id="loginPasswordErorrBox"
                      >
                        {logInFormPasswordError}
                      </Form.Text>
                      <Form.Control
                        value={logInFormPassword}
                        onChange={handleLogInFormPasswordChange}
                        size="lg"
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="pb-4 pt-2">
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "end",
                    }}
                  >
                    <Button
                      className="mx-4 px-4"
                      variant="primary"
                      onClick={handleCloseLogInSignUpModal}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={handleLoginButtonClick}
                      className="px-5"
                      variant="warning"
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Tab>
              {/* SIGN UP TAB */}
              <Tab
                eventKey="sign-up"
                title={
                  <span className="log-in-sign-up-modal-tabs">Sign-Up</span>
                }
              >
                <Row className="pt-3">
                  <Col>
                    {/* ALERT */}
                    {alertShowInline && (
                      <GradBroAlert
                        inPlaceOrAbsolute="static"
                        message={alertMessage}
                        variant={alertType}
                      ></GradBroAlert>
                    )}
                  </Col>
                </Row>

                <Row className="py-3">
                  <Col
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Form.Group
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      controlId="signUpFormFirstName"
                    >
                      <Form.Label>
                        First Name <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Text
                        className="pb-2 text-danger"
                        id="signUpFirstNameErrorBox"
                      >
                        {signUpFormFirstNameError}
                      </Form.Text>
                      <Form.Control
                        value={signUpFormFirstName}
                        onChange={handleSignUpFormFirstNameChange}
                        size="lg"
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                  </Col>
                  <Col
                    style={{
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Form.Group
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "end",
                      }}
                      controlId="signUpFormLastName"
                    >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Text
                        className="pb-2 text-danger"
                        id="signUpLastNameErrorBox"
                      >
                        {signUpFormLastNameError}
                      </Form.Text>
                      <Form.Control
                        value={signUpFormLastName}
                        onChange={handleSignUpFormLastNameChange}
                        size="lg"
                        type="text"
                        placeholder="Enter last name"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "end",
                  }}
                  className="mb-3"
                  controlId="signUpFormEmail"
                >
                  <Form.Label>
                    Email <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Text
                    className="pb-2 text-danger"
                    id="signUpEmailErrorBox"
                  >
                    {signUpFormEmailError}
                  </Form.Text>
                  <Form.Control
                    value={signUpFormEmail}
                    onChange={handleSignUpFormEmailChange}
                    size="lg"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "end",
                  }}
                  className="mb-3"
                  controlId="signUpFormPassword"
                >
                  <Form.Label>
                    Password <span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <Form.Text
                    className="pb-2 text-danger"
                    id="signUpPasswordErrorBox"
                  >
                    {signUpFormPasswordError}
                  </Form.Text>
                  <Form.Control
                    value={signUpFormPassword}
                    onChange={handleSignUpFormPasswordChange}
                    size="lg"
                    type="password"
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Row className="pt-4 pb-4">
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "end",
                    }}
                  >
                    <Button
                      className="mx-4 px-4"
                      variant="primary"
                      onClick={handleCloseLogInSignUpModal}
                    >
                      Close
                    </Button>
                    <Button
                      onClick={handleSignUpButtonClick}
                      className="px-5"
                      variant="warning"
                    >
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>
          
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default LogInSignUpModal;
