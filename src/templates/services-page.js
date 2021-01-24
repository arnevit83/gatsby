import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Badge, Container, Row, Col } from "reactstrap";
import LeftAlign from '../components/custom-widgets/LeftAlign'
import CustomWidget from '../components/custom-widgets/CustomWidget'

import {


  Card,
  CardBody
} from "reactstrap";

export const ServicesPageTemplate = ({
  title,
  description,
  blurbs }) => (

    <>
      <div className="section-shaped my-0 skew-separator skew-mini">
        <div className="page-header page-header-small header-filter">
        </div>
      </div>
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
                                                                <div className="column is-10 is-offset-1">
                                                                  <div className="section">
                                                                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                                                      {title}
                                                                    </h2>
                                                                    
                                                                    <p>{description}</p>

                                                                    <div className="section features-1">

                                                                    {blurbs.map((blurb) => (
                                                                      <CustomWidget key={blurb.text} {...blurb}></CustomWidget>
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
  blurbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      align: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        blurbs={frontmatter.blurbs}
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
        blurbs {
          align
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
