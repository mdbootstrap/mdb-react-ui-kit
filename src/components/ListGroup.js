import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListGroup extends Component {

  render() {
 
    const {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'list-group',
      className,
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

ListGroup.defaultProps = {
  tag: 'ul'
};

export default ListGroup;