import React from 'react';
import { RiHtml5Fill } from 'react-icons/ri';
import { DiCss3, DiReact, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { SiGraphql, SiFigma } from 'react-icons/si';
import { FaPython } from "react-icons/fa";
import { Row, Col, Container } from 'react-bootstrap';



export const Skills = () => {
  const skills = [
    { name: 'Python', icon : <FaPython />},
    { name: 'HTML', icon: <RiHtml5Fill /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'React', icon: <DiReact /> },
    { name: 'JavaScript', icon: <DiNodejsSmall /> },
    { name: 'SQL', icon: <SiGraphql /> },
    { name: 'ELM', icon: <DiMongodb /> },
    { name: 'C#', icon: <SiFigma /> },
    { name: 'C', icon: <SiFigma /> },
    { name: 'Java', icon: <SiFigma /> },
    { name: 'Next.JS', icon: <SiFigma /> }
    
  ];

  return (
    <div id="skills" className="skillsItems">
    <Row className="justify-content-center">
        {skills.map((skill) => (
        <Col key={skill.name} xs={6} sm={4} md={3} lg={2} className="text-center mb-4">
            <div className="circle">
                <div className="icon">{skill.icon}</div>
            </div>
            <p className="label">{skill.name}</p>
        </Col>
        ))}
    </Row>
    </div>






  );
};
