import { graphql, useStaticQuery } from 'gatsby'



const GetFooterSettings = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
    query SITEFOOTER_SETTINGS {
      markdownRemark(frontmatter: {templateKey: {eq: "footersettings"}}) {
        id
        frontmatter {
          footertitle
          footerdesc
          twitter
          facebook
          ig
        }
      }
    }
    `
  )

  return markdownRemark.frontmatter
}


export default GetFooterSettings