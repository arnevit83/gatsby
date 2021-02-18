import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class GlobalStyles extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter;
    var style = `:root { --default: ${data.colordefault}; --primary: ${data.colorprimary}; --secondary: ${data.colorsecondary};}`;
    return <style id="global-colours">{style}</style>    
  }
}

GlobalStyles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
<StaticQuery
query={graphql`
  query GlobalStyles {
    markdownRemark(frontmatter: {templateKey: {eq: "themesettings"}}) {
      html
      frontmatter {
        font
        colordefault
        colorprimary
        colorsecondary
      }
    }
  }
`}
render={(data) => <GlobalStyles data={data} />}
/>
)
