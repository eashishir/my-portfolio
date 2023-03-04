import { useState,useEffect } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo2.jfif'
import navIcon from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'





const NavBar = () => {
    const [activeLink, setActiveLik] = useState('home');
    const{scrolled, setScrolled} = useState(false);

    useEffect(() => {
     const onScroll = () => {
        if(window.scrollY > 50) {
         setScrolled(true);
        }
        else{
            setScrolled(false);
        }
     }

     window.addEventListener("scroll", onScroll);
     return () => window.removeEventListener("scroll", onscroll);
    },[]);

    const onUpdateActiveLink = (value) => {
        setActiveLik(value);
    }

    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
           <img src={logo} alt="logo" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#home" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/eftekhar-ahmed-shishir/"><img src={navIcon} alt="" /></a>
                <a href="https://web.facebook.com/Eftekhar.Ahmed20"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ea_shishir/?fbclid=IwAR0cJRrj3Qh1bzb_EzU3hi8hOzx49NzKy1ME78bgxPEwSw26OiWlp-mwDqI"><img src={navIcon3} alt="" /></a>

            </div>
            <button className='vvd' onClick={()=> console.log('connect')}> <span>Let's Connect</span> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;