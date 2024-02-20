import { Container, Row, Col } from "react-bootstrap";
import LocationView from "./LocationView";
import logo from "../assets/img/logo.png";
import me from "../assets/img/me.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { GeoAltFill, EnvelopeAtFill, TelephoneFill } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <div className="info-bx">
              <Row>
                <Col lg={4} sm={12} className="loc-container sm:justify-center sm:my-4">
                  <LocationView />
                </Col>


                <Col lg={5} md={6} sm={12} className="text-align-center personal-info">
                  <h2 className="font-semibold leading-normal mb-2">Krunal Gosalia</h2>
                  <p className="leading-normal mt-0 mb-8 font-bold"><GeoAltFill className="mr-2 inline-flex" /> Los Angeles, California</p>
                  <p className="leading-normal mt-0 mb-2 font-normal"><EnvelopeAtFill className="mr-2 inline-flex " />Email: <a href="mailto:gosalia.krunal2@gmail.com" className="ml-2">gosalia.krunal2@gmail.com</a></p>
                  <p className="leading-normal mt-0 mb-2 font-normal"><TelephoneFill className="mr-2 inline-flex " />Call: <a href="tel:+19807776825" className="ml-2">+1 (980) 777-6825</a></p>
                </Col>
                <Col lg={3} md={6} sm={12} className="d-flex justify-content-center"> <img className="profile-pic border-theme" src={me} alt="profile-pic" /></Col>
              </Row>
            </div>
          </Col>
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/krunalgosalia/"><img src={navIcon1} alt="LinkedIn Icon" /></a>
              <a href="https://github.com/Krunal-Gosalia"><img src={navIcon2} alt="Github Icon" /></a>
              <a href="https://jsfiddle.net/user/krunal57/fiddles/"><img src={navIcon3} alt="JS-Fiddle Icon" /></a>
            </div>
            <p className="greeting">Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}
