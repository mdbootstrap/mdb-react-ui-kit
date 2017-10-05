import React from 'react';
import { Tooltip } from 'mdbreact';

 
class TooltipsPage extends React.Component {


  render() {
    return (
      <div style={{display: 'flex'}}>
        <Tooltip 
          placement="top" 
          componentClass="btn btn-primary"
          tag="div" 
          component="button" 
          tooltipContent="Tooltip on top"> 
            Tooltip on top
        </Tooltip>
        <Tooltip 
          placement="right" 
          componentClass="btn btn-primary"
          tag="div" 
          component="button" 
          tooltipContent="Tooltip on right"> 
            Tooltip on right
        </Tooltip>
        <Tooltip 
          placement="bottom" 
          componentClass="btn btn-primary"
          tag="div" 
          component="button" 
          tooltipContent="Tooltip on bottom"> 
            Tooltip on bottom
        </Tooltip>
        <Tooltip 
          placement="left" 
          componentClass="btn btn-primary"
          tag="div" 
          component="button" 
          tooltipContent="Tooltip on left"> 
            Tooltip on left
        </Tooltip>
      </div>
    );
  }
}
export default TooltipsPage;