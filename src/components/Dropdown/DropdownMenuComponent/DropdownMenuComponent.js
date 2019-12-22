import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenuComponent = ({
  tag: Tag,
  tabIndex,
  role,
  attributes,
  aria,
  d_key,
  children
}) => (
  <Tag
    data-test='dropdown-menu-component'
    tabIndex={tabIndex}
    role={role}
    {...attributes}
    aria-hidden={aria}
    key={d_key}
  >
    {children}
  </Tag>
);

DropdownMenuComponent.propTypes = {
  aria: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  d_key: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  tag: PropTypes.any.isRequired
};

export default DropdownMenuComponent;
export { DropdownMenuComponent as MDBDropdownMenuComponent };
