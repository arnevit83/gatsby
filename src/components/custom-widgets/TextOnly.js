import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from "reactstrap";


class TextOnly extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">
            <p>{this.props.text}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

TextOnly.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default TextOnly