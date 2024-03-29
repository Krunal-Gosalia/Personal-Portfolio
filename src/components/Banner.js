import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [, setIndex] = useState(1);

  const period = 1000;

  useEffect(() => {
    const toRotate = ["Web Developer", "Web Architect", "Team Leader"];
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, isDeleting, loopNum, text])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={20} md={10}>
            <div className="content">
              <span className="tagline">Welcome to my Portfolio</span>
              <h2>{`Hi! I'm Krunal`} <span className="txt-rotate" data-rotate='[ "Web Developer", "Performance Engineer", "Team Leader" ]'><span className="wrap">{text}</span></span></h2>
              <ul>
                <li>Specialize to build innovative data analytics and visualization apps for clients to provide insights.
                </li>
                <li>Led complex web-application development efforts, collaborate with cross-functional experts and designers to understand pain-points, implement and ship tools to troubleshoot and analyze bottlenecks in pipeline.</li>
                <li>Set up and configure cloud env to deploy web-apps with optimial efficiency.</li>
              </ul>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
