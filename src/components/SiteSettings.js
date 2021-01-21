import { graphql, useStaticQuery } from 'gatsby'

const GetSiteSettings = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
    query SITE_SETTINGS {
      markdownRemark(frontmatter: {templateKey: {eq: "sitesettings"}}) {
        id
        frontmatter {
          fbpageid
          twitter
          location
        }
      }
    }
    `
  )

  return markdownRemark.frontmatter
}

export default GetSiteSettings
