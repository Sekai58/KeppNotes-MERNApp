import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        //style={{ position: "fixed", width: "100%" }}
      >
        <Container>
          <Navbar.Brand href="/">Keep notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto" navbarScroll>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="dark" className="me-5">
                  Search
                </Button>
              </Form>
              <Nav.Link href="#action1">My notes</Nav.Link>
              <NavDropdown title="My name" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">My profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
