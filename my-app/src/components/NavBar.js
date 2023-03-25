import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap"; 
import logo from './logo.svg';
import navIcon1 from './1-square-fill.svg';
import navIcon2 from './2-square-fill.svg';
import navIcon3 from './1-square-fill.svg';
import { HashLink } from 'react-router-hash-link';
import {NavLink } from "react-router-dom";


function NavBar (){
  const [activeLink, setActiveLink] = useState('home'); //track the change of pages
  const [scrolled, seScrolled] = useState(false);

   useEffect(() => {

    const onScroll = ()=>{

      if(window.screenY > 50){
        seScrolled(true);
      }
      else{
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

  }, []);

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
  }
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="nav-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink redirect = "/signUp" className = {activeLink ==='home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
              <NavLink to = "/signUp" className = {activeLink ==='features' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('features')}> Features </NavLink>
              <NavLink to = "/signUp" className = {activeLink ==='podcast' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('podcast')}> Podcast</NavLink>
              <NavLink to = "/signUp" className = {activeLink ==='chat' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chat')}>Chat</NavLink>
              <NavLink to="signUp">
                <span>isha</span>
              </NavLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <NavLink to="/signUp">
                  {" "}
                  <img src={navIcon1}></img>
                </NavLink>
                <NavLink to="/signUp">
                  {" "}
                  <img src={navIcon2}></img>
                </NavLink>
                <NavLink to="/signUp">
                  {" "}
                  <img src={navIcon3}></img>
                </NavLink>
              </div>
              <button className="join" onClick={() => console.log("join us")}>
                {" "}
                <span>Join Us</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>

        <NavLink to="/signUp" exact>
          <span>isha</span>
        </NavLink>
      </Navbar>
    );
  }

  export default NavBar;