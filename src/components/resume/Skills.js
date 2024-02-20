import { motion } from 'framer-motion';
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
        <Col key={skill} lg={1} md={2} sm={4} xs={6} className='skill-card'>
          <img
            src={require(`../../assets/img/logos/${skill}.png`)}
            alt={skill}
          />
          <div className="skill-text">{skill}</div>
        </Col>
      )}
    </Row>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
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
    </motion.div >
  );
}

export default Skills;