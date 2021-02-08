import React from 'react'
import Layout from '../../components/Layout'


import {
  Container,
  Row,
  Col,  
  Card,
  CardBody
} from "reactstrap";

export default () => (
  <Layout>
                                                      
                                                                <section className="upper">
          <Container>
            <Row>
              <Col className="mx-auto" md="10">
                <Card className="card-invoice">
                  <CardBody>
                    <Row>
                      <Col xs="12"> 
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
    
    </Col>
       

      
                                 
       </Row>
     </CardBody>
    </Card>
 </Col>

</Row>
</Container>
</section>
  </Layout>
)
