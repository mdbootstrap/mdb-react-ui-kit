import React from 'react';
import TextField from './TextField';


class Input extends React.Component {

  render() {
    return (
      <TextField
        { ...this.props }
        ref={el => { if (el) this.controlEl = el.inputElRef.inputElRef; }}
      />
    );
  }
}

Input.defaultProps = {
  type: 'text'
};

export default Input;