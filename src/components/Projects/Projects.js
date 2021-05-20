import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import covid from "../../Assets/Projects/covidtracker.png";
import superfrog from "../../Assets/Projects/superfrog.png";
import reversi from "../../Assets/Projects/reversi.png";
import cosmo from "../../Assets/Projects/cosmo.png";
import tictaccheck from "../../Assets/Projects/tictaccheck.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="Created a user-friendliness and reliability Covid Tracker API to provide accurate and timely information"
              description1="Created 3 different versions of FrontEnd API using HTML, Vue, and React to make a general FrontEnd API for public use"
              description2="Created BackEnd API using Spring Boot, Java, and MongoDB then ran it on AWS server"
              description3="Language/Technology used: Java, Javascript, Python, HTMl, CSS, Vue, Vuetify, React, Material-UI, Spring Boot, Apache tomcat, D3, Leaflet, MongoDB, AWS"
              link1="http://covidtracker.games:8080/"
              link="https://github.com/covidtrackersenior/TCUCovidTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superfrog}
              isBlog={false}
              title="SuperFrog Scheduler"
              description="Created a user-friendliness and reliability Scheduler API help manage and schedule appointments/events"
              description1="Created FrontEnd API using BootStrap and Thymeleaf"
              description2="Created BackEnd API using Spring Boot, Java, and MySQL then ran it on Heroku server"
              description3="Language/Technology used: Java, Javascript, HTMl, CSS, Thymeleaf, Bootstrap, Spring Boot, H2-Console, MySQL, Heroku"
              link1="https://superfrogscheduler.herokuapp.com/"
              link="https://github.com/rdurb/superfrog-scheduler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reversi}
              isBlog={false}
              title="AI for Reversi"
              description="Created a GUI to play human vs human"
              description1="Developed an algorithm bot using greedy, minimax alpha-beta pruning to train and tune a deep artificial neural network of self-learning bot (trained 10000 games, achieved 62% winning rate over 500 games against human players )"
              description2="Language: Java"
              link="https://github.com/BiKunTin/reversi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictaccheck}
              isBlog={false}
              title="AI for Tic Tac Check"
              description="Created a GUI to play human vs human"
              description1="Developed an algorithm bot using greedy, minimax alpha-beta pruning to train and tune a deep artificial neural network of self-learning bot"
              description2="Language: Python"
              link="https://github.com/BiKunTin/tictacheck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmo}
              isBlog={false}
              title="Cosmo SDK"
              description="build a Starport (Cosmos SDK) application to build a virtual wallet as a blockchain that allows users to communicate and transfer currency."
              description2="Language/Technology used: Starport, Nodejs, Protoc, Go, Vue, Bootstrap"
              link="https://github.com/BiKunTin/cosmo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
