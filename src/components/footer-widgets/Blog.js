import React from 'react'
import { Container, Row, Col } from "reactstrap";
import BlogRoll from '../../components/BlogRoll'


const Blog = () => (
  <Container>
    <Row>
      <Col className="mx-auto">      
           <BlogRoll /> 
      </Col>
    </Row>
  </Container>
)

export default Blog