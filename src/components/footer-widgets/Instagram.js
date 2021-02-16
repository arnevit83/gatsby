import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from "reactstrap";

class Instagram extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="mx-auto">      
           Instagram feed
          </Col>
        </Row>
      </Container>
    )
  }
}

Instagram.propTypes = {
  data: PropTypes.shape({
    footerstyle: PropTypes.string,
  }),
}

export default Instagram