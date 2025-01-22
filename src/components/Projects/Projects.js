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
              description="The BloodBank Project in React.js could serve as a platform for blood donation management. It allows users to register, search for blood donors, request blood, or manage donor information efficiently.."
              ghLink="https://github.com/harshalmahalkar2000/BloodBank_Project/tree/main/FRONTEND"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fooddeliveryapp}
              isBlog={false}
              title="food-delivery-app"
              description="The Food Delivery App allows users to browse restaurants, order food, track deliveries, and make payments online. React.js serves as the frontend framework, offering an interactive and responsive user interface."
              ghLink="https://github.com/harshalmahalkar2000/food-delivery-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DMartEcomProject}
              isBlog={false}
              title="D-Mart-E-com_Project"
              description="The D-Mart E-commerce Project is a React.js-based platform for seamless online shopping. Users can browse products, add items to a cart or wishlist, and securely checkout with payment integration. It features filters, order tracking, and a responsive design. Admins can manage inventory, orders, and analytics efficiently."
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
