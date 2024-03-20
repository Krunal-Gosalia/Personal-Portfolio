import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import EducationAndExperience from "./resume/EducationAndExperience";
import Skills from "./resume/Skills";
import Projects from './Projects';
import { BriefcaseFill, CodeSlash, GraphUpArrow } from 'react-bootstrap-icons';

export const Resume = () => {
  return (
    <section className="resume" id="Resume">
      <Container>
        <Row>
          <Col size={12}>
            <div className="resume-bx wow zoomIn">
              <div className="flex justify-center items-center text-center">
                <span className="tagline">Resume - 9+ Years Of Work Experience</span>
              </div>
              <Tab.Container id="resume-tabs" defaultActiveKey="skills">
                <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="experience"><BriefcaseFill className="ml-4 inline-flex" size={18} />Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="skills"><CodeSlash className="mr-4 inline-flex" size={18} />Skills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="projects"><GraphUpArrow className="mr-4 inline-flex" size={18} />Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="workExpEducation">
                    <EducationAndExperience />
                  </Tab.Pane>
                  <Tab.Pane eventKey="skills">
                    <Skills />
                  </Tab.Pane>
                  <Tab.Pane eventKey="projects">
                    <Projects />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
