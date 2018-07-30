import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DropdownMenuComponent = (props) => {
  const { d_tag, d_tabIndex, d_role, d_attributes, d_aria, d_classes, d_key, children } = props;
  const Tag = d_tag;

  return (
    <Fragment>
      <Tag
        tabIndex={d_tabIndex}
        role={d_role}
        {...d_attributes}
        aria-hidden={d_aria}
        className={d_classes}
        key={d_key}
      >{children}
      </Tag> 
    </Fragment>
  );
};

DropdownMenuComponent.propTypes = {
  d_aria: PropTypes.bool.isRequired,
  d_attributes: PropTypes.object.isRequired,
  d_key: PropTypes.string.isRequired,
  d_role: PropTypes.string.isRequired,
  d_tabIndex: PropTypes.string.isRequired,
  d_tag: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  d_classes: PropTypes.string
};

DropdownMenuComponent.defaultProps = {
  d_classes: ''
};

export default DropdownMenuComponent;
export { DropdownMenuComponent as MDBDropdownMenuComponent };
