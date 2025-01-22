import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DMartEcomProject from "../../Assets/Projects/d-mart.png";
import BloodBankProject from "../../Assets/Projects/bloodbank.png";
import fooddeliveryapp from "../../Assets/Projects/online-food-delivery.png";

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
              imgPath={BloodBankProject}
              isBlog={false}
              title="BloodBank_Project"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/harshalmahalkar2000/BloodBank_Project/tree/main/FRONTEND"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fooddeliveryapp}
              isBlog={false}
              title="food-delivery-app"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/harshalmahalkar2000/food-delivery-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DMartEcomProject}
              isBlog={false}
              title="D-Mart-E-com_Project"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/harshalmahalkar2000/D-Mart-E-com_Project"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
