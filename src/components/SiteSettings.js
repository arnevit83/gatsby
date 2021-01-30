import { graphql, useStaticQuery } from 'gatsby'

const GetSiteSettings = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
    query SITE_SETTINGS {
      markdownRemark(frontmatter: {templateKey: {eq: "sitesettings"}}) {
        id
        frontmatter {
          headercolor
          headerbackgroundimage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          menutype
          fbpageid
          location
        }
      }
    }
    `
  )

  return markdownRemark.frontmatter
}



export default GetSiteSettings