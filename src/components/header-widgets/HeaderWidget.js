import React from 'react'
import PropTypes from 'prop-types'
import LeftAlign from './LeftAlign';
import RightAlign from './RightAlign';
import CenterAlign from './CenterAlign';


class HeaderWidget extends React.Component {
  getWidgetPicker(widget) {
     if (widget.headerstyle === 'left') {
       return <LeftAlign {...widget} />;
     }
   
    if (widget.headerstyle === 'center') {
      return <CenterAlign {...widget} />;
    }
   
     if (widget.headerstyle === 'right') {
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

HeaderWidget.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    headerstyle: PropTypes.string,
  }),
}

export default HeaderWidget