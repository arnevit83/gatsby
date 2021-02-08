import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import {
  Container,
  Row,
  Col,  
  Card,
  CardBody
} from "reactstrap";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,

}) => (


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
                                                    <div className="section">
                                                    <div className="columns">
                                                      <div className="column is-12">
                                                        <div className="content">
                                                          <div className="content">
                                                            <div className="tile">
                                                              <h1 className="title">{mainpitch.title}</h1>
                                                            </div>
                                                            <div className="tile">
                                                              <h3 className="subtitle">{mainpitch.description}</h3>
                                                            </div>
                                                          </div>
                                                          <div className="columns">
                                                            <div className="column is-12">
                                                              <h3 className="has-text-weight-semibold is-size-2">
                                                                {heading}
                                                              </h3>
                                                              <p>{description}</p>
                                                            </div>
                                                          </div>
                                                          <Features gridItems={intro.blurbs} />
                                                          <div className="columns">
                                                            <div className="column is-12 has-text-centered">
                                                              <Link className="btn" to="/products">
                                                                See all products
                                                              </Link>
                                                            </div>
                                                          </div>
                                                          <div className="column is-12">
                                                            <h3 className="has-text-weight-semibold is-size-2">
                                                              Latest stories
                                                            </h3>
                                                            <BlogRoll />
                                                            <div className="column is-12 has-text-centered">
                                                              <Link className="btn" to="/blog">
                                                                Read more
                                                              </Link>
                                                            </div>
                                                          </div>
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
