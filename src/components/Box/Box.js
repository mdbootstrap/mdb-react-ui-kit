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
Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  flex: PropTypes.string,
  justifyContent: PropTypes.string,
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: PropTypes.string
};

Box.defaultProps = {
  tag: 'div'
};

export default Box;
export { Box as MDBBox };
