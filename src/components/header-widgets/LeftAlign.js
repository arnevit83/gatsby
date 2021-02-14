import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Badge, Container, Row, Col } from "reactstrap";


class LeftAlign extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">      
          <h1 >{this.props.title}</h1>
            
          </Col>
          <Col className="mx-auto">
          <h3>{this.props.description}</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

LeftAlign.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    description: PropTypes.string,
    align: PropTypes.string,

  }),
}

export default LeftAlign