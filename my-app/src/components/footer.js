import { Container, Row, Col } from "react-bootstrap";
import logo from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/components/logo.svg";
import navIcon1 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/1-square-fill.svg";
import navIcon2 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/2-square-fill.svg";
import navIcon3 from "/Users/ashishatulsian/Desktop/project/Hack36/my-app/src/assets/images/3-square-fill.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
