import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = props => {
  const {
    tag: Tag,
    className,
    children,
    display,
    justifyContent,
    flex,
    alignItems,
    alignContent,
    alignSelf,
    color,
    bgColor,
    m,
    mt,
    mtsm,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ...attributes
  } = props;

  const marginOrPadding = (props, suffix) => {
    if (props !== undefined) {
      return `${suffix}-${props}`;
    }
  };

  const classes = classNames(
    display && `d-${display}`,
    justifyContent && `justify-content-${justifyContent}`,
    flex && `flex-${flex}`,
    alignItems && `align-items-${alignItems}`,
    alignContent && `align-content-${alignContent}`,
    alignSelf && `align-self-${alignSelf}`,
    color && `${color}-text`,
    bgColor && `bg-${bgColor}`,
    marginOrPadding(m, 'm'),
    marginOrPadding(mt, 'mt'),
    marginOrPadding(mr, 'mr'),
    marginOrPadding(mb, 'mb'),
    marginOrPadding(ml, 'ml'),
    marginOrPadding(mx, 'mx'),
    marginOrPadding(my, 'my'),
    marginOrPadding(p, 'p'),
    marginOrPadding(pt, 'pt'),
    marginOrPadding(pr, 'pr'),
    marginOrPadding(pb, 'pb'),
    marginOrPadding(pl, 'pl'),
    marginOrPadding(px, 'px'),
    marginOrPadding(py, 'py'),
    className
  );
  const isEmptyClass = classes !== '' ? classes : null;

  return (
    <Tag {...attributes} className={isEmptyClass}>
      {children}
    </Tag>
  );
};

Box.defaultProps = {
  tag: 'div'
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Box;
export { Box as MDBBox };
