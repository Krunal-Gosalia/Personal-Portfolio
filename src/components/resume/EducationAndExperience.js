import { Container, Row, Col } from "react-bootstrap";
import { MortarboardFill, BriefcaseFill } from 'react-bootstrap-icons';

const EducationAndExperience = () => {
  return (<div className="section-padding">
    <Container>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div className="education wow fadeInRight" data-wow-delay="0.3s">
            <ul className="timeline">
              <li>
                <i className="icon-graduation"><MortarboardFill size={24} /></i>
                <h2 className="timelin-title">Education</h2>
              </li>
              <li className="box">
                <div className="content-text">
                  <h3 className="line-title">Masters of Science</h3>
                  <span>Aug 2015 - Dec 2016</span>
                  <p className="line-text">University Of North Carolina at Charlotte</p>
                </div>
              </li>
              <li className="box">
                <div className="content-text">
                  <h3 className="line-title">Bachelor of Engineering</h3>
                  <span>2009 - 2012</span>
                  <p className="line-text">University of Mumbai</p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div className="experience wow fadeInRight" data-wow-delay="0.6s">
            <ul className="timeline">
              <li>
                <i className="icon-briefcase"><BriefcaseFill size={24} /></i>
                <h2 className="timelin-title">Experience</h2>
              </li>
              <li className="box">
                <div className="content-text">
                  <h3 className="line-title">Sr. Consultant - Full Stack Developer</h3>
                  <span>Jan 2018 - Present</span>
                  <p className="line-text">Deloitte US</p>
                </div>
              </li>
              <li className="box">
                <div className="content-text">
                  <h3 className="line-title">Performance Test Engineer Consultant</h3>
                  <span>Feb 2013 - July 2015</span>
                  <p className="line-text">Accenture</p>
                </div>
              </li>
              <li className="box">
                <div className="content-text">
                  <h3 className="line-title">Software Engineer</h3>
                  <span>May 2012 - Jan 2013</span>
                  <p className="line-text">Infini Systems</p>
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