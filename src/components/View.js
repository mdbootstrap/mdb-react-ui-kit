import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class View extends React.Component {

  render() {
    const {
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'view',
      className
    );
    return (
      <Tag {...attributes} className={classes} >{this.props.children}</Tag>

    );
  }
}

View.defaultProps = {
  tag: 'div'
};

View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string
};

export default View;
