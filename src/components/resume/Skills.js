import { Container, Row, Col } from "react-bootstrap";

const SKILL_MAP = {
  front_end: {
    title: "CLIENT-SIDE STACK",
    skills: ["HTML5", "CSS3", "Bootstrap", "Javascript", "ReactJS", "Typescript", "Jest", "HighchartJS", "Python"],
  },
  back_end: {
    title: "SERVER-SIDE STACK",
    skills: ["NodeJS", "Express", "GraphQL", "Postman", "PHP Hack"]
  },
  data: {
    title: "Database and Tools",
    skills: ["GitHub", "MongoDB", "PostgreSQL", "Nginx", "AWS", "GCP", "LoadRunner"]
  }
}

const Skills = () => {

  const SkillSection = ({ skills }) =>
    <Row className='d-flex justify-content-center'>
      {skills.map((skill) =>
        <Col key={skill} lg={1} md={2} xs={3} className="skill-card bg-white bg-opacity-10 m-2 p-2 ">
          <img
            src={require(`../../assets/img/logos/${skill}.png`)}
            alt={skill}
          />
          <div className="skill-text">{skill}</div>
        </Col>
      )}
    </Row>;

  return (
    <Container className='skill'>
      {
        Array.from(Object.values(SKILL_MAP)).map(({ title, skills }) => (
          <Row className="align-items-center my-2" index={title} key={title}>
            <Col lg={12} className='skill-box'>
              <p>{title}</p>
              <SkillSection skills={skills} />
            </Col>
          </Row>
        ))
      }
    </Container>
  );
}

export default Skills;