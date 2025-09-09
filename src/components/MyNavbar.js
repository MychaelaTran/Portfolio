import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'
import linkedin from '../assets/images/linkedin.jpg';
import github from '../assets/images/github.jpg';
export const MyNavbar = () => { //react functional component 
  //const [value, setValue] = useState(initialValue);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { //triggers after DOM loads
    const onScroll = () => {
      if(window.scrollY > 40){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll); //every time user scrolls, runs onScroll func
    return () => window.removeEventListener("scroll", onScroll); //clean up when becomes unmounted
  }, []) //empty list so useEffect runs once after render

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <>
      <Navbar bg='light' data-bs-theme="light" className={scrolled ? "scrolled": ""}>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="navbar-links">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#work" className={activeLink === 'work' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('work')}>Work Experience</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#extra" className={activeLink === 'extra' ? 'active-navbar': 'navbar-link'} onClick ={() => onUpdateActiveLink('extra')}>Extracurriculars</Nav.Link>
          </Nav>
          <span className="span-socials">
            <div className="navbar-socials">
              <a href="https://www.linkedin.com/in/mychaelatran" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/MychaelaTran" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </span>
      </Navbar>
      <br />
    </>
  );
};
