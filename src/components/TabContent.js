import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "./utils";

const propTypes = {
  activeItem: PropTypes.any,
  tabId: PropTypes.any,
  className: PropTypes.string
};

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  getChildContext() {
    return {
      activeItemId: this.state.activeItem
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.activeItem !== nextProps.activeItem
      ? { activeItem: nextProps.activeItem }
      : null;
  }

  render() {
    const { className } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = classNames("tab-content", className);
    return <div {...attributes} className={classes} />;
  }
}

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};

TabContent.propTypes = propTypes;

export default TabContent;
export { TabContent as MDBTabContent };
