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
            <PreviewCompatibleImage imageInfo={this.props.image} />
          </Col>
          <Col className="mx-auto">
            <p>{this.props.text}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

LeftAlign.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    align: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default LeftAlign