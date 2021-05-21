import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             I'm an aspiring Software Engineering and IT Consultant.
            <br />
            <br />
            Area of interest: Machine Learning, Algorithm, Mobile App, Data
            Science.
            <br />
            <br />
            My Honors and Awards:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Awarded Bronze Medal in ACM ICPC South Central
              USA Regional Contest (2019) - ranked 1st/19 total Undergraduate
              school teams, ranked 12th/61 total teams, Language: C, C++)
            </li>
            <li className="about-activity">
              <ImPointRight /> Awarded 1st price in Hackathon UTA MLH chatbot
              challenge (2018)
            </li>
            <li className="about-activity">
              <ImPointRight /> Ranked 27th/71 total teams in ACM ICPC South
              Central USA Regional Contest(2018, Language: C, C++)
            </li>
            <li className="about-activity">
              <ImPointRight /> Upsilon Pi Epsilon (2019), TCU ACM Team Leader
              (2018+2019)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>My Skills/ Expertise:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Awarded Bronze Medal in ACM ICPC South Central
              USA Regional Contest (2019) - ranked 1st/19 total Undergraduate
              school teams, ranked 12th/61 total teams, Language: C, C++)
            </li>
            <li className="about-activity">
              <ImPointRight /> Language: C, C++, Python, Java, JavaScript, VBS,
              VBA, Pascal, HTML, CSS, SQL, Go
            </li>
            <li className="about-activity">
              <ImPointRight /> Software/APIs: OpenCV, Git/Github, Aircrack,
              Node.js, Mysql, Latex
            </li>
            <li className="about-activity">
              <ImPointRight /> Platforms: Window, Mac, Linux (Ubuntu, Fedora,
              Linux Mint, CentOS)
            </li>
            <li className="about-activity">
              <ImPointRight /> Coursework: Data Structures, Algorithms,
              Databases, Wireless Networks and Security, High Performance and
              Parallel Computing, Artificial Intelligence
            </li>
          </ul>
          <br/>
          <p style={{ textAlign: "justify" }}>
            StrengthsQuest: Adaptable, Flexible, Competitive, and Open-To-Change
          </p>
          <br/>
          <p style={{ textAlign: "justify" }}>
            Hobbies: video games, reading historical stories, swimming, and playing board
            games.</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
