import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TabPane extends React.Component {
  render() {
    const { className, tabId, ...attributes } = this.props;
    const { activeItemId } = this.context;
    const classes = classNames(
      'tab-pane',
      { active: tabId === activeItemId },
      className
    );
    return (
      <div
        data-test='tab-pane'
        {...attributes}
        className={classes}
        role='tabpanel'
      />
    );
  }
}

TabPane.contextTypes = {
  activeItemId: PropTypes.any
};

TabPane.propTypes = {
  className: PropTypes.string,
  tabId: PropTypes.any
};

export default TabPane;
export { TabPane as MDBTabPane };
