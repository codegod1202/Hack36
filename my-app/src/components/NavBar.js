import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap"; 
import logo from './logo.svg';
import navIcon1 from './1-square-fill.svg';
import navIcon2 from './2-square-fill.svg';
import navIcon3 from './1-square-fill.svg';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";


function NavBar (){
  // const [activeLink, setActiveLink] = useState('home'); //track the change of pages
  // const [scrolled, seScrolled] = useState(false);

  //  useEffect(() => {

  //   const onScroll = ()=>{

  //     if(window.screenY > 50){
  //       seScrolled(true);
  //     }
  //     else{
  //       seScrolled(false);
  //     }
  //   }
  //   window.addEventListener("scroll", onScroll);

  // }, []);

  // const onUpdateActiveLink = (value) =>{
  //   setActiveLink(value);
  // }
    return (
      // <Navbar expand="lg">
      //   <Container>
      //     <Navbar.Brand href="#home">
      //       <img src={logo} alt="logo" />
      //     </Navbar.Brand>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav">
      //       <span className="nav-toggler-icon"></span>
      //     </Navbar.Toggle>
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="me-auto">
      //         <NavLink to = "/signUp">Home</NavLink>
      //         <NavLink to = "/signUp"> Features </NavLink>
      //         <NavLink to = "/signUp"> Podcast</NavLink>
      //         <NavLink to = "/signUp">Chat</NavLink>
      //         <NavLink to = "signUp">
      //           <span>isha</span>
      //         </NavLink>
      //       </Nav>
      //       <span className="navbar-text">
      //         <div className="social-icon">
      //           <NavLink to="/signUp">
      //             {" "}
      //             <img src={navIcon1}></img>
      //           </NavLink>
      //           <NavLink to="/signUp">
      //             {" "}
      //             <img src={navIcon2}></img>
      //           </NavLink>
      //           <NavLink to="/signUp">
      //             {" "}
      //             <img src={navIcon3}></img>
      //           </NavLink>
      //         </div>
      //         <button className="join" onClick={() => console.log("join us")}>
      //           {" "}
      //           <span>Join Us</span>
      //         </button>
      //       </span>
      //     </Navbar.Collapse>
      //   </Container>

      //   <NavLink to="/signUp" exact>
      //     <span>isha</span>
      //   </NavLink>
      // </Navbar>
      <>
        <nav>
          <ul>
            <li>
              <Link
                to={{
                  pathname: "/signUp",
                }}
                target="/signUp"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/signUp",
                }}
                target="_blank"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/signUp" target="/signUp">Contact</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  export default NavBar;

  // className = {activeLink ==='chat' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('chat')}