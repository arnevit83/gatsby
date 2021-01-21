import React from 'react'
import PropTypes from 'prop-types'
import LeftAlign from './LeftAlign';
import RightAlign from './RightAlign';
import CenterAlign from './CenterAlign';


class CustomWidget extends React.Component {
  getWidgetPicker(widget) {
    if (widget.align === 'left') {
      return <LeftAlign {...widget} />;
    }
   
    if (widget.align === 'center') {
      return <CenterAlign {...widget} />;
    }
   
    if (widget.align === 'right') {
      return <RightAlign {...widget} />;
    }
   
    return null;
  }

  render() {
    return (
      <>
      {this.getWidgetPicker(this.props)}
      </>
    )
  }
}

CustomWidget.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    align: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default CustomWidget