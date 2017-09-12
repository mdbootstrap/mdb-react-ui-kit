import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { omit } from './utils';

const propTypes = {
  activeItem: PropTypes.any,
  className: PropTypes.string,
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
  componentWillReceiveProps(nextProps) {
    if (this.state.activeItem !== nextProps.activeItem) {
      this.setState({
        activeItem: nextProps.activeItem
      });
    }
  }

  render() {
      const {
          className,
          tabId,
      } = this.props;

      const attributes = omit(this.props, Object.keys(propTypes));

      const classes = classNames(
          'tab-content',
          className
      );
      return (
          <div {...attributes} className={classes} />

      )
  }
}

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};

TabContent.propTypes = propTypes;

export default TabContent;
