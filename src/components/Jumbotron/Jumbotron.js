import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Jumbotron = props => {
  const { className, children, fluid, ...attributes } = props;

  const classes = classNames('jumbotron', fluid ? 'jumbotron-fluid' : false, className);

  return (
    <div data-test='jumbotron' {...attributes} className={classes}>
      {children}
    </div>
  );
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

export default Jumbotron;
export { Jumbotron as MDBJumbotron };
