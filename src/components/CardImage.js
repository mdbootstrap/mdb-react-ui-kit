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
      tag: Tag,
      ...attributes
    } = this.props;

    const innerContent = (
      <Tag
      {...attributes}
      className={className}
      onMouseDown={ this.handleClick.bind(this) }
      onTouchStart={ this.handleClick.bind(this) }
      >
      </Tag>
    )

    if ( this.props.src ) {
      return (
        <View>
        <div className="Ripple-parent">
          {innerContent}
          <Mask overlay="white-slight"/>
          <Waves cursorPos={ this.state.cursorPos } />
          </div>
        </View>
      );
    } else {
      return (
        <div>{innerContent}</div>
      )
    }
  }
}

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImage.defaultProps = {
  tag: 'img'
};

export default CardImage;
