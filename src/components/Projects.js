import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import weatherProjImg from "../assets/img/project/weather-proj.jpg";
import aiDreamProjImg from "../assets/img/project/ai-dream-proj.jpg";
import { useState } from "react";

import Weather from "./projects/weather-app/weather";
import Dream from "./projects/dream-openAI-app/dream";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";

const PROJECTS_MAP = new Map([
  ["Weather_App", {
    title: "Weather App",
    description: "Enables weather search for cities in the United States",
    imgUrl: weatherProjImg,
    component: <Weather />
  }],
  ["OpenAI_Dream_App", {
    title: "OpenAI Dream Weaver",
    description: "Analyze and visualize your dream",
    imgUrl: aiDreamProjImg,
    component: <Dream />
  }]
]);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    if (id == null) {
      return;
    }

    const { title, component } = PROJECTS_MAP.get(id);
    setSelectedProject({ title, component });
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <p>Click the card to explore and delve into the details of the projects. </p>
            <Row>
              {
                Array.from(PROJECTS_MAP.entries()).map(([id, { title, description, imgUrl }]) => {
                  return (
                    <Col key={id} size={12} sm={6} md={4} onClick={() => handleProjectClick(id)}>
                      <ProjectCard
                        title={title}
                        description={description}
                        imgUrl={imgUrl}
                        onClick={handleProjectClick}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="shade" src={colorSharp2}></img>
      {selectedProject != null && <ProjectModal show={selectedProject != null} title={selectedProject.title} handleClose={() => setSelectedProject(null)}>
        {selectedProject.component}
      </ProjectModal>}
    </section>
  )
}

export default Projects;
