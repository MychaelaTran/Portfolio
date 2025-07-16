import React from 'react';
import { RiHtml5Fill, RiNextjsFill  } from 'react-icons/ri';
import { DiCss3, DiReact, DiNodejsSmall, DiMongodb, DiDjango  } from 'react-icons/di';
import { SiGraphql, SiFigma, SiElm,SiAuth0  } from 'react-icons/si';
import { FaPython, FaJava  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlLight } from "react-icons/pi";
import { TbBrandCSharp } from "react-icons/tb";
import { BsFillCCircleFill } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";






export const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <RiHtml5Fill /> },
    { name: 'CSS', icon: <DiCss3 /> },
    { name: 'React', icon: <DiReact /> },
    { name: 'JavaScript', icon: <IoLogoJavascript /> },
    { name: 'SQL', icon: <PiFileSqlLight /> },
    { name: 'ELM', icon: <SiElm /> },
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: 'C', icon: <BsFillCCircleFill /> },
    { name: 'Java', icon: <FaJava  /> },
    { name: 'Next.JS', icon: <RiNextjsFill  /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Django', icon: <DiDjango  /> },
    { name: 'Auth0', icon: <SiAuth0  /> },
    { name: 'Git and Github', icon: <FaSquareGithub   /> },
  ];

  return (
    <div id="skills" className="skillsSection">
      <div className="skillsTitle">
        <span>Skills And Tools</span>
      </div>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <div key={skill.name} className="skillBox">
            <div className="circle">
              <div className="icon">{skill.icon}</div>
            </div>
            <p className="label">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
