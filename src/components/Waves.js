import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Waves.css';

class Waves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: props.cursorPos
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cursorPos.time !== this.props.cursorPos.time) {
      if (prevState.animate) {
        this.setState(
          { animate: false, cursorPos: this.props.cursorPos },
          () => {
            this.reppling();
          }
        );
      } else this.reppling();
    }
  }

  reppling() {
    // Get the element
    let $ripple = ReactDOM.findDOMNode(this);
    let $button = $ripple.parentNode;

    let buttonPos = $button.getBoundingClientRect();

    let buttonWidth = $button.offsetWidth;
    let buttonHeight = $button.offsetHeight;

    // Make a Square Ripple
    let rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

    // Make Ripple Position to be center
    let centerize = rippleWidthShouldBe / 2;

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: this.state.cursorPos.top - buttonPos.top - centerize,
      left: this.state.cursorPos.left - buttonPos.left - centerize
    });
  }

  render() {
    return (
      <div
        className={
          'Ripple ' +
          (this.props.outline || this.props.flat || this.props.dark
            ? 'Ripple-outline '
            : '') +
          (this.state.animate ? 'is-reppling' : '')
        }
        style={{
          top: this.state.top + 'px',
          left: this.state.left + 'px',
          width: this.state.width + 'px',
          height: this.state.height + 'px'
        }}
      />
    );
  }
}

Waves.propTypes = {
  outline: PropTypes.bool,
  flat: PropTypes.bool,
  animate: PropTypes.bool,
  cursorPos: PropTypes.object,
  children: PropTypes.node
};

export default Waves;
export { Waves as MDBWaves };
