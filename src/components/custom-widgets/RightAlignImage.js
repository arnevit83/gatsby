import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Container, Row, Col } from "reactstrap";


class RightAlignImage extends React.Component {
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

RightAlignImage.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default RightAlignImage