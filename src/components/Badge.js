import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Badge extends React.Component {

    render() {
        const {
            className,
            children,
            color,
            pill,
            ...attributes
        } = this.props;

        const classes = classNames(
            'badge',
            'badge-' + color,
            pill ? 'badge-pill' : false,
            className
        );
        return (
            <span {...attributes} className={classes} >{this.props.children}</span>

        )
    }
}

Badge.defaultProps = {
    color: 'default',
    pill: false,
};

Badge.propTypes = {
    color: PropTypes.string,
    pill: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Badge;
