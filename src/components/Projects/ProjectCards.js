import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        width="200"
        height="200"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>{props.description}</Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description1}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description2}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description3}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description4}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description5}
        </Card.Text>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description6}
        </Card.Text>
        {props.link1 ? (
          <Button variant="primary" href={props.link1} target="_blank">
            <BiLinkExternal /> &nbsp; Website
          </Button>
        ) : null}
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
