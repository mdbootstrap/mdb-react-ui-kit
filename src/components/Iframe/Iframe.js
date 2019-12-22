import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { returnAttributes } from '../utils';

class Iframe extends Component {
  state = {
    stateWidth: '',
    stateHeight: '',
    ratio: ''
  };

  componentDidMount = () => {
    const { ratio } = this.props;
    let { width, height } = this.props;
    let ratioNumber = 9 / 16;

    if (ratio) {
      const newRatio = ratio.split('by')[0] / ratio.split('by')[1];
      if (typeof ratioNumber === 'number') {ratioNumber = newRatio;}
    }

    if (width && height) {
      return;
    }
    if (width) {
      height = width * ratioNumber;
    } else if (height) {
      width = height * (1 / ratioNumber);
    }

    this.setState({
      ...this.state,
      width,
      height,
      ratio
    });
  };

  render() {
    const {
      allowFullScreen,
      className,
      id,
      name,
      onMouseOver,
      onMouseOut,
      onLoad,
      sandbox,
      src,
      style,
      title = '',
      ratio,
      height,
      width
    } = this.props;

    const { stateWidth, stateHeight } = this.state

    const classes = classNames('embed-responsive-item', className);
    const wrapperClasses = classNames(
      !(height || width) && 'embed-responsive',
      ratio ? `embed-responsive-${ratio}` : 'embed-responsive-16by9'
    );

    let iframeAttributes = {
      src,
      id: id || false,
      frameBorder: '0',
      target: '_parent',
      allowFullScreen: allowFullScreen || true,
      height: stateHeight || '100%',
      name: name || undefined,
      width: stateWidth || '100%',
      onLoad: onLoad || undefined,
      onMouseOver: onMouseOver || undefined,
      onMouseOut: onMouseOut || undefined,
      sandbox: sandbox || undefined,
      style: style || undefined
    };

    iframeAttributes = returnAttributes(iframeAttributes);

    return (
      <div data-test='iframe' className={wrapperClasses}>
        <iframe title={title} className={classes} {...iframeAttributes} />
      </div>
    );
  }
}

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onLoad: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.string,
  width: PropTypes.number
};

export default Iframe;
export { Iframe as MDBIframe };
