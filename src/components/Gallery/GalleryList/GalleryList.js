import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBBox } from 'mdbreact';
import './GalleryList.css';
import { debounce } from '../../utils';

const imgClass = img => {
  if (!img || !img.complete) {
    return;
  }
  if (
    img.width / img.height >
    img.parentElement.offsetWidth / img.parentElement.offsetHeight
  ) {
    img.classList.remove('img-full-width');
    img.classList.add('img-full-height');
  } else {
    img.classList.remove('img-full-height');
    img.classList.add('img-full-width');
  }
};

function ensureImageCover(img) {
  if (!img) {
    return;
  }
  if (img.complete) {
    imgClass(img);
  } else {
    img.addEventListener('load', () => {
      imgClass(img);
    });
  }
}

const GalleryList = React.forwardRef(function GalleryList(props, ref) {
  const {
    children,
    className,
    cols,
    tag,
    rows,
    titleClasses,
    elementClasses,
    styles,
    ...attributes
  } = props;

  const imgRef = useRef(null);
  const ec = classNames('mdb-gallery-element', elementClasses);
  const tc = classNames('mdb-gallery-title', titleClasses);

  useEffect(() => {
    ensureImageCover(imgRef.current);
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      imgClass(imgRef.current);
    });
    window.addEventListener('resize', handleResize);

    return () => {
      handleResize.clear();
      window.removeEventListener('resive', handleResize);
    };
  }, []);

  return (
    <MDBBox tag={tag} ref={ref} {...attributes} className={ec}>
      <MDBBox style={{ ...styles }} className={tc}>
        {React.Children.map(children, child => {
          if (!React.isValidElement) {
            return null;
          }
          if (child.type === 'img') {
            return React.cloneElement(child, {
              ref: imgRef
            });
          }
          return child;
        })}
      </MDBBox>
    </MDBBox>
  );
});

GalleryList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  elementClasses: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  titleClasses: PropTypes.string
};

GalleryList.defaultProps = {
  tag: 'li'
};

export default GalleryList;
export { GalleryList as MDBGalleryList };
