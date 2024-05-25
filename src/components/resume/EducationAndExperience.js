import { Container, Row, Col } from "react-bootstrap";
import { MortarboardFill, BriefcaseFill } from 'react-bootstrap-icons';

const EducationAndExperience = () => {
  return (<div class="section-padding">
    <Container>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div class="education wow fadeInRight" data-wow-delay="0.3s">
            <ul class="timeline">
              <li>
                <i class="icon-graduation"><MortarboardFill size={24} /></i>
                <h2 class="timelin-title">Education</h2>
              </li>
              <li className="box">
                <div class="content-text">
                  <h3 class="line-title">Masters of Science</h3>
                  <span>Aug 2015 - Dec 2016</span>
                  <p class="line-text">University Of North Carolina at Charlotte</p>
                </div>
              </li>
              <li className="box">
                <div class="content-text">
                  <h3 class="line-title">Bachelor of Engineering</h3>
                  <span>2009 - 2012</span>
                  <p class="line-text">University of Mumbai</p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div class="experience wow fadeInRight" data-wow-delay="0.6s">
            <ul class="timeline">
              <li>
                <i class="icon-briefcase"><BriefcaseFill size={24} /></i>
                <h2 class="timelin-title">Experience</h2>
              </li>
              <li className="box">
                <div class="content-text">
                  <h3 class="line-title">Sr. Consultant - Full Stack Developer</h3>
                  <span>Jan 2018 - Present</span>
                  <p class="line-text">Deloitte US</p>
                </div>
              </li>
              <li className="box">
                <div class="content-text">
                  <h3 class="line-title">Performance Test Engineer Consultant</h3>
                  <span>Feb 2013 - July 2015</span>
                  <p class="line-text">Accenture</p>
                </div>
              </li>
              <li className="box">
                <div class="content-text">
                  <h3 class="line-title">Software Engineer</h3>
                  <span>May 2012 - Jan 2013</span>
                  <p class="line-text">Infini Systems</p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </div>)
}

export default EducationAndExperience