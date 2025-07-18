import { Container, Row, Col } from "react-bootstrap";
import proj1 from "../assets/images/project-img1.png" //519w 512 h
export const Projects = () =>{
    const projects = [
        {
            title: "This Portfolio",
            desc: "Personal Website Made with React",
            image: proj1
        }
    ];
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={4}>
                    <div className="project-card">
                        <img src={project.image} alt={project.title} style={{ width: "100%" }} />
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>
                    </div>
                    </Col>
                ))}
                </Row>

            </Container>
        </section>
    );

}