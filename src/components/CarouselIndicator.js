import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class CarouselIndicator extends Component {
  render() {
    let { active, children, className, img, alt, ...attributes } = this.props;

    let classes = classNames(this.props.active ? "active" : "", className);

    return (
      <li {...attributes} className={classes}>
        {this.props.img && (
          <img
            src={this.props.img}
            alt={this.props.alt}
            className="img-fluid"
          />
        )}
        {children}
      </li>
    );
  }
}

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};

CarouselIndicator.defaultProps = {
  alt: "Carousel thumbnail",
  className: "",
  img: ""
};

export default CarouselIndicator;
export { CarouselIndicator as MDBCarouselIndicator };
