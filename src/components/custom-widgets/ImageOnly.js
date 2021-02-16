import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Container, Row, Col } from "reactstrap";


class ImageOnly extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">      
            <PreviewCompatibleImage imageInfo={this.props.image} />
            <p className="text-center">{this.props.text}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

ImageOnly.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default ImageOnly