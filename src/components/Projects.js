import { Container, Row, Col } from "react-bootstrap";
import proj1 from "../assets/images/project-img1.png" //519w 512 h
import { Tab, Tabs } from 'react-bootstrap';



export const Projects = () => {
  const projects = [
    {
      title: "This Portfolio",
      desc: "Personal Website Made with React",
      img: proj1
    }
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="web" id="projects-tabs" className="mb-3" fill>
              <Tab eventKey="web" title="Web Dev">
                <Row>
                  {projects.map((project, index) => (
                    <p key={index}>{project.title}</p>
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="game" title="Game Dev">Game Dev Content</Tab>
              <Tab eventKey="school" title="School Projects">School Projects</Tab>
              <Tab eventKey="hackathons" title="Hackathons">Hackathons</Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};