import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";

export const SchedulePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (


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
                        <Col xs="12"></Col>

                                      <section className="section section--gradient">
                                        <div className="container">
                                          <div className="columns">
                                            <div className="column is-10 is-offset-1">
                                              <div className="section">
                                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                                  {title}
                                                </h2>
                                                <PageContent className="content" content={content} />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </section>


                                              
                                      </Row>
                  </CardBody>
                 </Card>
              </Col>
          
            </Row>
          </Container>
        </section>
       




    </>



  )
}

SchedulePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SchedulePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SchedulePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

SchedulePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SchedulePage

export const SchedulePageQuery = graphql`
  query SchedulePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
