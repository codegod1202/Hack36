import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap"; 
import logo from './logo.svg';
import navIcon1 from './1-square-fill.svg';
import navIcon2 from './2-square-fill.svg';
import navIcon3 from './1-square-fill.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () =>{
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
    return(
      <Navbar expand="lg" className={scrolled  ? "scrolled" : ""}>   
        <Container>
            <Navbar.Brand href="#home">
                <img src = {logo} alt = "logo" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              <span className="nav-toggler-icon"></span>  
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className = {activeLink ==='home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#features" className = {activeLink ==='features' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('features')}> Features </Nav.Link>
              <Nav.Link href="#podcast" className = {activeLink ==='podcast' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('podcast')}> Podcast</Nav.Link>
              <Nav.Link href="#chat " className = {activeLink ==='chat' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chat')}>Chat</Nav.Link>
            </Nav>
            <span className = "navbar-text"> 
                <div className="social-icon"> 
                  <a href="#"> <img src = {navIcon1}></img></a>
                  <a href="#"> <img src = {navIcon2}></img></a>
                  <a href="#"> <img src = {navIcon3}></img></a>
                </div>
                <button className ="join" onClick={() => console.log('join us')}> <span>Join Us</span></button>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }