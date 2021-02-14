import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Badge, Container, Row, Col } from "reactstrap";
import BlogRoll from '../../components/BlogRoll'

class Blog extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">      
               <BlogRoll /> 
          </Col>
        </Row>
      </Container>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    footerstyle: PropTypes.string,
  }),
}

export default Blog