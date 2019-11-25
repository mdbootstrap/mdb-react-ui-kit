import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBBox } from 'mdbreact';
import './Gallery.css';

const Gallery = React.forwardRef(function Gallery(props, ref) {
  const {
    cellHeight = 180,
    children,
    className,
    cols = 2,
    tag,
    spacing = 4,
    style,
    ...attributes
  } = props;

  const classes = classNames('mdb-gallery', className);

  return (
    <MDBBox
      tag={tag}
      {...attributes}
      style={{ margin: -spacing / 2, ...style }}
      className={classes}
      ref={ref}
    >
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null;
        }
        const childCols = child.props.cols || 1;
        const childRows = child.props.rows || 1;

        return React.cloneElement(child, {
          style: Object.assign(
            {
              width: `${(100 / cols) * childCols}%`,
              height:
                cellHeight === 'auto'
                  ? 'auto'
                  : cellHeight * childRows + spacing,
              padding: spacing / 2
            },
            child.props.style
          )
        });
      })}
    </MDBBox>
  );
});

Gallery.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  cellHeight: PropTypes.number,
  cols: PropTypes.number,
  spacing: PropTypes.number,
  style: PropTypes.object
};

Gallery.defaultProps = {
  tag: 'ul'
};

export default Gallery;
export { Gallery as MDBGallery };
