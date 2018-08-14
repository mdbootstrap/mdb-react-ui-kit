import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';
import Mask from './Mask';
import View from './View';


class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  render() {

    const {
      className,
      overlay,
      top,
      waves,
      hover,
      cascade,
      tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      top && 'card-img-top',
      className
    );

    const Tag = tag;

    const innerContent = (
      <Tag
        {...attributes}
        className={classes}
      >
        {this.props.children}
      </Tag>
    );

    if (this.props.src) {
      return (
        <View hover={this.props.hover} cascade={this.props.cascade}>
          <div className="Ripple-parent" onMouseDown={this.handleClick.bind(this)} onTouchStart={this.handleClick.bind(this)}>
            {innerContent}
            <Mask overlay={overlay} />
            {this.props.waves && <Waves cursorPos={this.state.cursorPos} />}
          </div>
        </View>
      );
    } else {
      return (
        <div>{innerContent}</div>
      );
    }
  }
}

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  waves: PropTypes.bool,
  className: PropTypes.string,
  cascade: PropTypes.bool,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  top: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.node
};

CardImage.defaultProps = {
  tag: 'img',
  overlay: 'white-slight',
  waves: true,
  hover: false,
  cascade: false
};

export default CardImage;
export { CardImage as MDBCardImage };
