import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Waves.css';

class Waves extends React.Component {
  state = {
    animate: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    cursorPos: this.props.cursorPos
  };

  wavesRef = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    const { cursorPos } = this.props;
    if (prevState.cursorPos.time !== cursorPos.time) {
      if (prevState.animate) {
        this.setState({ animate: false, cursorPos }, () => {
          this.replying();
        });
      } else {
        this.replying();
      }
    }
  }

  replying() {
    const $ripple = this.wavesRef.current;
    const $button = $ripple.parentNode;
    const buttonPos = $button.getBoundingClientRect();
    const buttonWidth = $button.offsetWidth;
    const buttonHeight = $button.offsetHeight;
    const rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);
    const centralized = rippleWidthShouldBe / 2;
    const { cursorPos } = this.state;
    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centralized,
      left: cursorPos.left - buttonPos.left - centralized
    });
  }

  render() {
    const { outline, flat, dark } = this.props;
    const { animate, top, left, width, height } = this.state;
    return (
      <div
        data-test='waves'
        className={`Ripple ${outline || flat || dark ? 'Ripple-outline ' : ''}${animate ? 'is-reppling' : ''}`}
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`
        }}
        ref={this.wavesRef}
      />
    );
  }
}

Waves.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node,
  cursorPos: PropTypes.object,
  dark: PropTypes.bool,
  flat: PropTypes.bool,
  outline: PropTypes.bool
};

export default Waves;
export { Waves as MDBWaves };
