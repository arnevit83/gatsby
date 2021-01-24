/*eslint-disable*/
import React from "react";
import { Link } from 'gatsby'
import GetFooterSettings from './SiteFooterSettings'
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Footer() {
  const {footertitle,footerdesc,twitter,facebook,ig} =  GetFooterSettings();
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
               {footertitle}
              </h3>
              <h4 className="mb-0 font-weight-light">
              {footerdesc}
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                id="tooltip46149983"
            
              >
         
                <span className="btn-inner--icon">
                <a href={"https://twitter.com/" + twitter}><i className="fab fa-twitter textwhite"></i></a>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46149983">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                id="tooltip844497435"
              >
                <span className="btn-inner--icon">

                  <a href={"https://facebook.com/" + facebook}><i className="fab fa-facebook textwhite"></i></a>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip844497435">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle"
                color="dribbble"
                id="tooltip564081339"
              >
                <span className="btn-inner--icon">
       
                  <a href={"https://instagram.com/" + ig}><i className="fab fa-instagram textwhite"></i></a>
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip564081339">
                Follow us
              </UncontrolledTooltip>
 
            </Col>
          </Row>
          <hr></hr>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()}{" "}

                Website created by <a
                  href="https://cms.sparklingpeach.co.uk"
                  target="_blank"
                >SparklingPeach</a>
             
              </div>
            </Col>
            <Col md="6">
          
            <ul className="nav justify-content-center">

              <li className="nav-item">
              <Link  className="nav-link"  to="/fandq">
                                F&amp;Q
                              </Link>
              </li>   <li className="nav-item">
              <Link  className="nav-link"  to="/about">
                                About
                              </Link>
              </li>
              <li className="nav-item">


                              <Link  className="nav-link"  to="/contact">
                                Contact
                              </Link>
              </li>
           
            </ul>


            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
