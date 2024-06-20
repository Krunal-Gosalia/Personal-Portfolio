import { useState } from "react";
import { Container, Row, Col, Toast, ToastContainer, ToastBody } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [toastShow, setToastShow] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch(`${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOST}/contact`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      }).catch(e => {
        throw new Error(e);
      })
      setFormDetails(formInitialDetails);
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        if (response.status === 404) throw new Error('404, Not found');
        if (response.status === 500) throw new Error('500, internal server error');

        throw new Error(response.status);
      }
    }
    catch (e) {
      setStatus({ success: false, message: `Fetch Failed: ${e}` });
    }
    finally {
      setToastShow(true);
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />

          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {toastShow && <Col size={12} className="px-1">
                  <ToastContainer>
                    <Toast show={toastShow} delay={3000} autohidedelay={3000} bg={status.success === false ? "danger" : "success"} onClose={() => setToastShow(false)} autohide>
                      <ToastBody>{status.message}</ToastBody>
                    </Toast>
                  </ToastContainer>
                </Col>}
              </Row>
            </form>
          </Col>
        </Row>

      </Container>

    </section>
  )
}
