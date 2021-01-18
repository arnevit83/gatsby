import React from 'react'
import { graphql } from 'gatsby'

export const SiteSettingsTemplate = () => {
  return (
    <div></div>
  )
}
const SiteSettings = () => {
  return (
    <div></div>
  )
}

export default SiteSettings

export const SiteSettingsQuery = graphql`
  query SiteSettingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
