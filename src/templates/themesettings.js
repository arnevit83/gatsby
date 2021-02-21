import React from 'react'
import { graphql } from 'gatsby'

export const ThemeSettingsTemplate = () => {
  return (
    <div></div>
  )
}
const ThemeSettings = () => {
  return (
    <div></div>
  )
}

export default ThemeSettings

export const ThemeSettingsQuery = graphql`
  query ThemeSettingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        font
        fontalt
        colordefault
        colorprimary
        colorsecondary
      }
    }
  }
`
