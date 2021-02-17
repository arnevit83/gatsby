import React from 'react'
import PropTypes from 'prop-types'
import LeftAlignImage from './LeftAlignImage';
import RightAlignImage from './RightAlignImage';
import ImageOnly from './ImageOnly';
import TextOnly from './TextOnly';


export class CustomWidget extends React.Component {
  getWidgetPicker(widget) {
    if (widget.type === 'left') {
      return <LeftAlignImage {...widget} />;
    }
   
    if (widget.type === 'center') {
      return <ImageOnly {...widget} />;
    }
   
    if (widget.type === 'right') {
      return <RightAlignImage {...widget} />;
    }

    if (widget.type === 'right') {
      return <TextOnly {...widget} />;
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
    type: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
}

export default CustomWidget