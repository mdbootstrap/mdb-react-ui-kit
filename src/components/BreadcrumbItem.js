import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Fa from './Fa';
import "./Breadcrumb.css";

const BreadcrumbItem = props => {

    const { className, active, bold, children, icon, iconClassName, appendIcon, ...attributes } = props;

    const classes = classNames(
      active ? "active" : false,
      icon && "bc-icons",
      "breadcrumb-item",
      className
    );

    const iconClasses = classNames(
      appendIcon ?  "mx-2" : "mr-2",
      iconClassName
    )

    const WithBold = ({ bold, children }) => (bold ?
      <strong>
        {children}
      </strong>
      : children
    )

    const WithIcon = ({ icon, children, appendIcon }) => {
      if(icon){
        if( !appendIcon ){
          return (
            <Fragment>
              <Fa icon={ icon } className={ iconClasses }></Fa>
              { children }
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              { children }
              <Fa icon={ icon } className={ iconClasses }></Fa>
            </Fragment>
          );
        }
      }
      return children;
    }

    return (
      <li { ...attributes } className={ classes }>
        <WithBold bold={ bold }>
          <WithIcon icon={ icon } appendIcon={ appendIcon }>
            { props.children }
          </WithIcon>
        </WithBold>
      </li>
    );
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
};

export default BreadcrumbItem;
export { BreadcrumbItem as MDBBreadcrumbItem };
