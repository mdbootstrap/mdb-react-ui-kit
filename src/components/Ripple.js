import React from 'react';

require('./Ripple.css')

class Ripple extends React.Component {

  constructor() {
    super();
    this.state = {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  }

  render () {
    return (
      <div className={"Ripple " + (this.props.outline || this.props.flat ? "Ripple-outline " : "") + (this.state.animate ? "is-reppling" : "")} ref="ripple" style={{
          top: this.state.top+"px",
          left: this.state.left+"px",
          width: this.state.width+"px",
          height: this.state.height+"px"
      }}></div>
    )
  }


  reppling(cursorPos){

    // Get the element
    let $ripple = this.refs.ripple
    let $button = $ripple.parentElement

    let buttonStyle = window.getComputedStyle($button)
    let buttonPos = $button.getBoundingClientRect()

    let buttonWidth = $button.offsetWidth
    let buttonHeight = $button.offsetHeight

    // Make a Square Ripple
    let rippleWidthShouldBe = Math.max(buttonHeight,buttonWidth)

    // Make Ripple Position to be center
    let centerize = rippleWidthShouldBe / 2

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize
    })
  }

  componentWillReceiveProps(nextProps) {
    let cursorPos = nextProps.cursorPos

    // Prevent Component duplicates do ripple effect at the same time
    if(cursorPos.time !== this.props.cursorPos.time){
      // If Has Animated, set state to "false" First
      if(this.state.animate){
        this.setState({ animate: false }, () => {
          this.reppling(cursorPos)
        })
      }
      // else, Do Reppling
      else this.reppling(cursorPos)
    }
  }

}

export default Ripple;