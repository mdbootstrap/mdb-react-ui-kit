import React from 'react';
import { Button, Tooltip } from 'mdbreact';


import '../css/tooltip.css'



 
class TooltipsPage extends React.Component {


  render() {
    return (
      <div>
        tutaj jest <Tooltip 
          placement="top" 
          tag="span" 
          component="a" 
          componentStyle={{ color: 'red' }} 
          tooltipContent="jedziemy" 
          className="mirek" 
          arrowClass="strzala">
           Tooltip
        </Tooltip>

        <p>
          Div Tooltip 
          <Tooltip 
            placement="right"  
            component="div" 
            componentStyle={{ width: 120, height: 120, background: 'red' }} 
            tooltipContent="Div z wysrodkownym tekstem" 
            className="mirek" 
            tooltipClass="klasa text-center" 
            >
              Tooltip
          </Tooltip>
        </p>
      </div>
    )
  }
}
export default TooltipsPage;