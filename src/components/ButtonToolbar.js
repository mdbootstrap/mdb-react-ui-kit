import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ButtonToolbar extends React.Component {

    render() {
      const {
        className,
        ...attributes
      } = this.props;

      const classes = classNames(
        className,
        'btn-toolbar'
      );

        return (
            <div {...attributes} className={classes} >
              {this.props.children}
            </div>
        )
    }
}

ButtonToolbar.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string,
};

ButtonToolbar.defaultProps = {
  role: 'toolbar',
};

export default ButtonToolbar;