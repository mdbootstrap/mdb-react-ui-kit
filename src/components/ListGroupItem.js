import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ListGroupItem extends Component {

  render() {
 
    let {
      active,
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'list-group-item',
      active ? 'active' : '',
      className,
    );

    if (attributes.href && Tag === 'li') {
      Tag = 'a';
    }

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

ListGroupItem.propTypes = {
  active: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

ListGroupItem.defaultProps = {
  tag: 'li'
};

export default ListGroupItem;