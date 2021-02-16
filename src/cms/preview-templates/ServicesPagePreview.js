import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ServicesPageTemplate
        title={data.title}
        description={data.description}
        sections={data.sections}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ServicesPagePreview
