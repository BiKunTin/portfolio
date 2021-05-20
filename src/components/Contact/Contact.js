import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import findme from "../../Assets/Projects/find-me.png";
function Contact() {

    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <br />
              <img src={findme} alt="findme pic" className="img-fluid" />
              <br />
              <br />
              <br />
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <p>
                Email me at: 
                <span className="purple">
                  <a href="mailto:cuong.hsgs@gmail.com"> cuong.hsgs@gmail.com</a></span>
              </p>
              <p>
                Call me at: <span className="purple">(469)-468-7595 </span>
              </p>
              <p>Or view my profile from:</p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/BiKunTin"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/cuongtcu/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
}

export default Contact;
