import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TabPane extends React.Component {

    render() {
        const {
            className,
            tabId,
            ...attributes
        } = this.props;

        const classes = classNames(
            'tab-pane',
            { active: tabId === this.context.activeItemId },
            className
        );
        return (
            <div {...attributes} className={classes} />

        )
    }
}

TabPane.contextTypes = {
  activeItemId: PropTypes.any
};

TabPane.propTypes = {
  tabId: PropTypes.any,
  className: PropTypes.string,
};

export default TabPane;
