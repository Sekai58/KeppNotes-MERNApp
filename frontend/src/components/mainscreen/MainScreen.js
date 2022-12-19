import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <div className="main_block">
      <Container>
        <Row>
          <div>
            {title && (
              <>
                <h2>{title}</h2>
              </>
            )}
            <hr />
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
