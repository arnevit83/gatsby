import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServicesPageTemplate = ({
  title,
  description }) => (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
}

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
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
      }
    }
  }
`
