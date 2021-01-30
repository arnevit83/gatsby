import React from "react";
import { Link } from 'gatsby'
import PropTypes from "prop-types";
import logo from '../img/logo.svg'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// NavLink,
// DropdownMenu,
// DropdownItem,
// UncontrolledDropdown,
// DropdownToggle,


function Header(props) {

  React.useEffect(() => {
    document.body.classList.add("invoice-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("invoice-page");
    };
  });



  const [collapseOpen, toggleCollapse] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("dark-navbar-main"));
    // initialise
    headroom.init();
  });
  let navbarType = "";
  switch (props.type) {
    case "dark":
      navbarType = "bg-default navbar-dark";
      break;
    case "transparent":
      navbarType = "navbar-transparent";
      break;
    case "primary":
      navbarType = "bg-primary navbar-dark";
      break;
    case "white":
      navbarType = "bg-white";
      break;
    default:
      navbarType = "bg-default navbar-dark";
      break;
  }
  return (
    <>
      <Navbar
        className={"navbar-main headroom " + navbarType}
        expand="lg"
        id="dark-navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
          <img src={logo} alt="{Yoga Logo}" style={{ width: '88px' }} /> Yoga Studio Name
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapse(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            id="navbar_global"
            navbar
            toggler="#navbar_global"
            isOpen={collapseOpen}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={logo}
                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapse(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav
              className="navbar-nav-hover align-items-lg-center ml-lg-auto"
              navbar
            >


{/* 
<UncontrolledDropdown nav>
                <DropdownToggle
                  tag={NavLink}
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i className="ni ni-tablet-button d-lg-none"></i>
                  <span className="nav-link-inner--text">App Pages</span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
   
                  <DropdownItem to="/about"   tag={Link}>
                    <i className="ni ni-tv-2 text-danger"></i>
                    Abount
                  </DropdownItem>
                  
               
                  <DropdownItem to="/fandq" tag={Link}>
                    <i className="ni ni-basket text-orange"></i>
                    F&amp;Q
                  </DropdownItem>
                  <DropdownItem to="/contact" tag={Link}>
                    <i className="ni ni-chat-round text-primary"></i>
                    Contact
                  </DropdownItem>
                </DropdownMenu>
                
              </UncontrolledDropdown>
        */}
           


              <div className="mx-auto navbar-nav">
                  <Link  className="nav-link"  to="/services">
                    Services
                  </Link>
                  <Link  className="nav-link"  to="/about">
                    About
                  </Link>
                  <Link  className="nav-link"  to="/shop">
                    Shop
                  </Link>
                  <Link  className="nav-link"  to="/blog">
                    Blog
                  </Link>
                  <Link  className="nav-link"  to="/schedule">
                    Schedule
                  </Link>
                  <Link  className="nav-link"  to="/fandq">
                    F&amp;Q
                  </Link>
                  <Link  className="nav-link"  to="/contact">
                    Contact
                  </Link>
                  
              </div>

             </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

Header.defaultProps = {
  type: "dark",
};

Header.propTypes = {
  type: PropTypes.oneOf(["dark", "transparent", "primary", "white"]),
};

export default Header;