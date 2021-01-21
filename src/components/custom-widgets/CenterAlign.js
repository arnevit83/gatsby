import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { Badge, Container, Row, Col } from "reactstrap";


class CenterAlign extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">      
            <PreviewCompatibleImage imageInfo={this.props.image} />
          </Col>
        </Row>
      </Container>
    )
  }
}

CenterAlign.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    align: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default CenterAlign