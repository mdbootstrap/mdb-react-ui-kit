import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { omit } from '../utils';

const propTypes = {
  activeItem: PropTypes.any,
  className: PropTypes.string,
  tabId: PropTypes.any
};

class TabContent extends React.Component {
  state = {
    activeItem: this.props.activeItem
  };

  getChildContext() {
    const { activeItem } = this.state;
    return {
      activeItemId: activeItem
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.activeItem !== nextProps.activeItem ? { activeItem: nextProps.activeItem } : null;
  }

  render() {
    const { className } = this.props;

    const attributes = omit(this.props, Object.keys(propTypes));

    const classes = classNames('tab-content', className);
    return <div data-test='tabContent' {...attributes} className={classes} />;
  }
}

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};

TabContent.propTypes = propTypes;

export default TabContent;
export { TabContent as MDBTabContent };
