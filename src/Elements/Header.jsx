import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Header = (props) => {
  function useNavigateToTop() {
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      // Save the current scroll position before navigating
      const scrollY = window.scrollY;
  
      // Scroll to the top of the page after navigating
      const unlisten = navigate(() => {
        window.scrollTo(0, 0);
      });
  
      // Restore the previous scroll position after a brief delay
      setTimeout(() => {
        window.scrollTo(0, scrollY);
        console.log('hello')
      }, 10);
  
      // Clean up the navigation listener when the component unmounts
      return unlisten;
    }, [location.pathname]);
  }
  useNavigateToTop();
  return (
    <>
     <Navbar bg="transparent" variant='dark' expand="lg" className='pt-4' id="HeaderAcc">
      <Container>
        <Navbar.Brand >
          <Link to="/">
          <img src="img/logo.png" alt="" className="img-fluid" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-lg-0 mt-3 gap-lg-0 gap-2">
            <Nav.Link className={props.homeactive}><Link to="/" className='text-white text-decoration-none syne'>Home</Link> </Nav.Link>
            <Nav.Link  className={props.featureactive}><Link to="/features" className='text-white text-decoration-none syne'>Features </Link></Nav.Link>
            <Nav.Link  className={props.energyactive}><Link to="/energy" className='text-white text-decoration-none syne'>Energy Assets </Link></Nav.Link>
            {/* <Nav.Link   className={props.idealactive}><Link to="/" className='text-white text-decoration-none'>Ideals Users </Link></Nav.Link> */}
            <Nav.Link  className={props.aboutactive}><Link to="/aboutus" className='text-white text-decoration-none syne'>About Us </Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header