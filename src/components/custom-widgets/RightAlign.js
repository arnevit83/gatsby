import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Badge, Container, Row, Col } from "reactstrap";


class RightAlign extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">
            <p>{this.props.text}</p>
          </Col>
          <Col className="mx-auto">      
            <PreviewCompatibleImage imageInfo={this.props.image} />
          </Col>
        </Row>
      </Container>
    )
  }
}

RightAlign.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    align: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default RightAlign