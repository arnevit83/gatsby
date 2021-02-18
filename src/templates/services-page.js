import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Container, Row, Col } from "reactstrap";
import CustomWidget from '../components/custom-widgets/CustomWidget'
import {
  Card,
  CardBody
} from "reactstrap";

export const ServicesPageTemplate = ({
  title,
  description,
  sections }) => (
<>
<section className="upper">
          <Container>
            <Row>
              <Col className="mx-auto" md="10">
                <Card className="card-invoice">
                  <CardBody>
                    <Row>
                      <Col xs="12"> 
                  <section className="section section--gradient">
                    <div className="container">
                      <div className="columns">
                        <div className="column is-12">
                          <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                              {title}
                            </h2>
                            
                            <p>{description}</p>

                            <div className="section features-1">
                            {sections.map((section, index) => (
                              <CustomWidget key={index.toString()} {...section}></CustomWidget>
                            ))}
                            </div>
                          </div>
                        </div>
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




</>
  )

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
  sections: PropTypes.array,
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        sections={frontmatter.sections}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      html
      frontmatter {
        title
        description
        sections {
          type
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
