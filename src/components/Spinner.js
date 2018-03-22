import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Spinner extends Component {

  theChosenColorSpinner(spinnerClasses) {

    if (this.props.multicolor) {

      const theSpinnerItself = (
        <div>
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>

            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
      );
    return theSpinnerItself;

    } else {
      const theSpinnerItself = (
        <div className={spinnerClasses}>
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
    )
    return theSpinnerItself;
  };
  };


  render() {

    const {
      className,
      tag: Tag,
      big,
      small,
      crazy,
      red,
      green,
      yellow,
      blue,
      multicolor,
      ...attributes
    } = this.props;

    const classes = classNames(
      className
    );

    const wrapperClasses = classNames(
      'preloader-wrapper',
      'active',
      big ? 'big' : false,
      small ? 'small' : false,
      className
    );

    const spinnerClasses = classNames(
      'spinner-layer',
      red ? 'spinner-red-only' : false,
      green ? 'spinner-green-only' : false,
      yellow ? 'spinner-yellow-only' :'spinner-blue-only',
      className
    );

    if ( this.props.crazy ) {
      return (
        <div className={wrapperClasses}>
          <div className={wrapperClasses}>
            <div className={wrapperClasses}>
              <div className={wrapperClasses}>
                {this.theChosenColorSpinner(spinnerClasses)}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
    return (
      <div className={wrapperClasses}>
        {this.theChosenColorSpinner(spinnerClasses)}
    </div>
);

    }

  }
}

Spinner.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  crazy: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  yellow: PropTypes.bool,
  multicolor: PropTypes.bool
};

Spinner.defaultProps = {
  tag: 'div'
};

export default Spinner;
