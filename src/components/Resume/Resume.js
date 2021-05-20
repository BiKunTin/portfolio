import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/cnguyen_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="TCU IT Consultant"
              date="April 2019 – Present"
              content={[
                "Assists students and faculty members to solve the problems with TCU accounts, Internet, Computer Software + Hardware. (Help 20 students and faculty members per day, more in the summer).",
                "Platforms/Technology: Window, Mac, Linux, ChromeOS/NiceInContact, Bomgar, Cherwell",
              ]}
            />
            <Resumecontent
              title="FPT - Software Engineer Intern"
              date="May 2017 – August 2017"
              content={[
                "Developed Sound audio and Bluetooth part for a new car generation project in Czech.",
                "Created a tool to analyze the data from companywebsite and generate a report from those analytical data for the developer teams in Vietnam and Korea.",
                "Language: Java, C, VBS, VBA",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BS in Computer Science & Math in Texas Christian University"
              date="Graduation: December 2021"
              content={[`GPA: 3.67/4.0`]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Research Assistant - Cyber Network and Security"
              date="June 2018 – December 2019"
              content={[
                "Assisted about 20 Computer Science students in labs and in-class materials, supported creating lab lectures for the class and created 2 new labs for professor to teach in class (WPS and WPA attack).",
                "Platforms/Technology: Fedora, Ubuntu/Reaver, Pixiewps, Aircrack,WireShark",
              ]}
            />
            <Resumecontent
              title="Research Assistant - AI for Reversi"
              date="January 2020 – May 2020"
              content={[
                "Created a GUI to play human vs human",
                "Developed an algorithm bot using greedy, minimax alpha-beta pruning to train and tune a deep artificial neural network of self-learning bot (trained 10000 games, achieved 62% winning rate over 500 games against human players )",
                "Language: Java",
              ]}
            />
            {/* <Resumecontent
              title="Research Assistant - AI for Tic Tac Check"
              content={[
                "Created a GUI to play human vs human",
                "Developed an algorithm bot using greedy, minimax alpha-beta pruning to train and tune a deep artificial neural network of self-learning bot",
                "Language: Python",
              ]}
            /> */}
            <h3 className="resume-title">Honors and Awards</h3>
            <Resumecontent
              title=""
              content={[
                `Awarded Bronze Medal in ACM ICPC South Central USA Regional Contest (2019) - ranked 1st/19 total Undergraduate school teams, ranked 12th/61 total teams)`,
                "Awarded 1st price in Hackathon UTA MLH chatbot challenge (2018)",
                "Ranked 27th/71 total teams in ACM ICPC South Central USA Regional Contest(2018)",
                "Upsilon Pi Epsilon (2019), TCU ACM Team Leader (2018+2019)",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
