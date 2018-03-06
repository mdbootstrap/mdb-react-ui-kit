import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ScrollSpyText extends Component {

  render() {
    const {
      className,
      children,
      scrollSpyRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      'scrollspy-example z-depth-1',
      className
    );

    return (
      <div {...attributes} ref={this.props.scrollSpyRef} className={classes}>{children}</div>
    );
  }
}

ScrollSpyText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  scrollSpyRef: PropTypes.func
};

export default ScrollSpyText;
