import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Control extends Component {

  render() {
 
    let {
      direction,
      text,
      className,
      onClick,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'carousel-control-' + direction,
      className
    )

    const caretClasses = classNames(
      'carousel-control-' + direction + '-icon'
    )

    if(direction === "prev") {
      text = "Previous";
    } else if(direction === "next") {
      text = "Next";
    }

    return (
      <Tag className={classes} data-slide={direction} onClick={onClick}>
        <span className={caretClasses} aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Tag>
    );
  }
}

Control.propTypes = {
  onClick: PropTypes.any,
  text: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Control.defaultProps = {
  tag: 'a'
};

export default Control;