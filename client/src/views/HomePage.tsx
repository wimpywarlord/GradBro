import "../assets/css/HomePage.css";
// import UniSelectForm from "../components/UniSelectForm";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GradBroLogo from "../assets/img/icons/grad-bro-logo.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import UniSelectForm from "../components/UniSelectForm";

import LogInSignUp from "../components/LogInSignUpModal";

import { useState } from "react";

function HomePage() {
  // ! LOGIN MODAL
  const [showLogInSignUpModal, setShowLogInSignUpModal] = useState(false);

  const handleCloseLogInSignUpModal = () => {
    setShowLogInSignUpModal(false);
  };
  const handleShowLogInSignUpModal = () => {
    setShowLogInSignUpModal(true);
  };

  return (
    <>
      {/* NAV BAR */}
      <Navbar
        className="navbar-header p-0"
        data-bs-theme="dark"
        style={{ marginTop: "1vw" }}
      >
        <Navbar.Brand style={{ paddingLeft: "2vw" }} href="#home">
          <img
            alt="GradBro Logo"
            src={GradBroLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span
            style={{
              color: "#FFED00",
              textShadow:
                "0.1 0.1 0.1px #FFED00, 0.1 0.1 0.1px #FFED00, 0.1 0.1 0.1px #FFED00, 0.1 0.1 0.1px #00ff00",
            }}
          >
            GradBro
          </span>
        </Navbar.Brand>
        <Nav style={{ paddingRight: "2vw" }} className="ms-auto">
          <Nav.Link href="#">
            <span
              onClick={handleShowLogInSignUpModal}
              style={{ color: "white" }}
            >
              Login
            </span>
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* LANDING PAGE HEADER */}
      <div className="landing-page-full-page-box pt-5 pb-5">
        <Container>
          <Row>
            <Col>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h2 style={{ color: "white" }}>
                    <span style={{ marginRight: "1vw" }}>🚀</span>Get
                    Personalised College Recommendations
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>
                    Let our{" "}
                    <span style={{ color: "#FFED00", fontSize: "bolder" }}>
                      AI model
                    </span>{" "}
                    decide the best colleges based on your profile. Trained on{" "}
                    <span style={{ color: "#FFED00", fontSize: "bolder" }}>
                      160000+
                    </span>{" "}
                    real admisson data points .
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* UNI - SELECT FORM BOX */}
        <Container className="pt-5">
          <Row>
            <Col>
              <UniSelectForm
                handleShowLogInSignUpModal={handleShowLogInSignUpModal}
              ></UniSelectForm>
            </Col>
          </Row>
        </Container>

        {/* LOGIN SIGNUP MODAL */}
        <LogInSignUp
          showLogInSignUpModal={showLogInSignUpModal}
          handleCloseLogInSignUpModal={handleCloseLogInSignUpModal}
        ></LogInSignUp>
      </div>
    </>
  );
}

export default HomePage;
