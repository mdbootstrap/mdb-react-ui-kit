import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

class FormInline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }


  render() {
    const {
      className,
      waves,
      children,
      ...attributes
    } = this.props;

    const classes = classNames(
      'form-inline',
      this.props.waves ? 'Ripple-parent': false,
      className
    );
    return (
      <form {...attributes} className={classes} onMouseDown={ this.handleClick.bind(this) } onTouchStart={ this.handleClick.bind(this)}>
        {this.props.children}
        {this.props.waves && <Waves cursorPos={ this.state.cursorPos } />}
      </form>

    );
  }
}

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

export default FormInline;
export { FormInline as MDBFormInline };
