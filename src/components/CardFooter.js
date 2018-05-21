import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardFooter extends Component {

  render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-footer',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardFooter.defaultProps = {
  tag: 'div'
};

export default CardFooter;