import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Jumbotron extends React.Component {

  render() {
    let closeButton;
    const {
      className,
      children,
      fluid,
      ...attributes } = this.props;

    const classes = classNames(
      'jumbotron',
      fluid ? 'jumbotron-fluid' : false,
      className,
    );

    return (
      <div {...attributes} className={classes}>
        {children}
      </div>
    );
  }
}

Jumbotron.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Jumbotron;


