import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonGroup.css'


class ButtonGroup extends React.Component {

    render() {
      const {
        className,
        size,
        vertical,
        ...attributes
      } = this.props;

      const classes = classNames(
        className,
        size ? 'btn-group-' + size : false,
        vertical ? 'btn-group-vertical' : 'btn-group'
      );

        return (
            <div {...attributes} className={classes} >
              {this.props.children}
            </div>
        )
    }
}

ButtonGroup.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  role: 'group',
};

export default ButtonGroup;


