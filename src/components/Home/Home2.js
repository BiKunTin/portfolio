import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Cuong_Headshot.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello my name is Cuong Nguyen, but you can call me Kelvin Nguyen.
              I'm currently a{" "}
              <span className="purple">
                Senior Computer Science + Math Major{" "}
              </span>
              at <span className="purple">Texas Christian University</span> and
              I fall in love with coding competition and programming.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
