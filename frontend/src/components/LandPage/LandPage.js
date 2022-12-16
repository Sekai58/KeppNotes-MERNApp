import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro">
            <h1 className="title">Welcome to KeepNotes!!</h1>
            <p className="subtitle">One safe place for all your notes.</p>
          </div>
          <div className="btnContainer">
            <a href="/login">
              <Button size="lg" className="landbtn" variant="outline-light">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button size="lg" className="landbtn" variant="outline-light">
                Signup
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandPage;
