import { Container, Row, Col } from "react-bootstrap";
import proj1 from "../assets/images/project-img1.png" //519w 512 h
import { Tab, Tabs } from 'react-bootstrap';
import { ProjectItem } from "./ProjectItem"
import portImg from "../assets/images/portImg.png";
import burger from "../assets/images/burgerQueen.png";
import budget from "../assets/images/budget.png";
import edjump from "../assets/images/ed jump.png";



export const Projects = () => {
  const projectsWeb = [
  {
    title: "This Portfolio",
    desc: "Personal Website Made with React",
    imgURL: portImg
  },
  {
    title: "Burger Queen",
    desc: "Made in Elm",
    imgURL: burger
  },
  {
    title: "Budget Site",
    desc: "Made in JS",
    imgURL: budget
  },
  {
    title: "Ed Sheeran Jump",
    desc: "Made with JS/HTML/CSS",
    imgURL: edjump
  }
];

  const projectsGame = [
  {
    title: "Burger Queen",
    desc: "Personal Website Made with React",
    imgURL: proj1
  },
  {
    title: "Godot Game",
    desc: "Made with Godot in C#",
    imgURL: proj1
  }
];


  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="web" id="projects-tabs" className="mb-3" fill>
              <Tab className="gameTab"  eventKey="web" title="Web Dev">
                <Row>
                  {projectsWeb.map((project, index) => {
                    return(
                      <ProjectItem
                        key={index}
                        {...project}
                        />

                    )
                  })
                }
                </Row>
              </Tab>
              <Tab eventKey="game" title="Game Dev">
                <Row>
                  {projectsGame.map((project, index) => {
                    return(
                      <ProjectItem
                        key={index}
                        {...project}
                        />

                    )
                  })
                }
                </Row>
              </Tab>
              <Tab eventKey="school" title="School Projects">School Projects</Tab>
              <Tab eventKey="hackathons" title="Hackathons">Hackathons</Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
};