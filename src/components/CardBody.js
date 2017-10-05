import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardBody extends Component {

  render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-body',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

CardBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardBody.defaultProps = {
  tag: 'div'
};

export default CardBody;