import React from 'react';
import { Button, Popover, PopoverBody, PopoverHeader } from 'mdbreact';


import '../css/tooltip.css'


const CustomPopper = ({ innerRef, style, ...props }) =>
  <div
    ref={innerRef}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      color: 'rgba(255, 255, 255, 0.8)',
      ...style,
    }}
    {...props}
  /> 

 
class PopoverPage extends React.Component {


  render() {
    return (
      <div>
        <Popover 
          component="div"
          placement="bottom" 
          popoverBody="jedziemy" 
          className="btn btn-info" 
          // componentPopover={CustomPopper}
          arrowClass="strzala">
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
        <Popover 
          component="div"
          placement="right" 
          popoverBody="Tutaj mamy przycisk" 
          className="btn btn-default" 
          // componentPopover={CustomPopper}
          arrowClass="strzala">
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Content.</PopoverBody>
        </Popover>

      </div>
    )
  }
}
export default PopoverPage;