import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

import CustomWidget from '../components/custom-widgets/CustomWidget'
import HeaderWidget from '../components/header-widgets/HeaderWidget'
import FooterWidget from '../components/footer-widgets/FooterWidget'

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

  description,
  intro,headerobject,
  blurbs,  blurb, footerobject
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

                      {(headerobject) !== ''?<HeaderWidget key={headerobject.text} {...headerobject}></HeaderWidget>:''}
                     
                      <hr></hr>
                    
                      </Col>
                      <Col xs="12"> 

                      {(blurb) !== ''?blurbs.map((blurb) => (<CustomWidget key={blurb.text} {...blurb}></CustomWidget>)):''}
                      <hr></hr>

                      </Col>
                      <Col xs="12"> 

                      {(footerobject) !== ''?<FooterWidget key={footerobject.text} {...footerobject}></FooterWidget>:''}
       

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
  heading: PropTypes.string,
  subheading: PropTypes.string,
  headerobject: PropTypes.object,
  footerobject: PropTypes.object,
  blurbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      align: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        headerobject={frontmatter.headerobject}
        footerobject={frontmatter.footerobject}
        blurbs={frontmatter.blurbs}
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
        heading
        subheading
        headerobject {
          title
          description
          headerstyle
        }
        footerobject {
          footerstyle
        }
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
