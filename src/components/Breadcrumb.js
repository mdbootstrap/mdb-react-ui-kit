import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Breadcrumb extends React.Component {

  render() {
    const {
      className,
      ...attributes
    } = this.props;


    const classes  = classNames(
      'breadcrumb',
      className
    );

    return (
      <ol {...attributes} className={classes}>
        {this.props.children}
      </ol>
    )
  }
}

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb ;


