import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import type { RippleProps } from './types';
import MDBBtn from '../../components/Button/Button';
import MDBRippleWave from './RippleWave/RippleWave';

const MDBRipple: React.FC<RippleProps> = React.forwardRef<HTMLAllCollection, RippleProps>(
  (
    {
      className,
      rippleTag: Tag,
      rippleCentered,
      rippleDuration,
      rippleUnbound,
      rippleRadius,
      rippleColor,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const GRADIENT =
      'rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%';

    const DEFAULT_RIPPLE_COLOR = [0, 0, 0];

    const BOOTSTRAP_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    const [rippleStyles, setRippleStyles] = useState<
      {
        left: string;
        top: string;
        height: string;
        width: string;
        transitionDelay: string;
        transitionDuration: string;
      }[]
    >([]);

    const [isBsColor, setIsBsColor] = useState(false);

    const classes = clsx(
      'ripple',
      'ripple-surface',
      rippleUnbound && 'ripple-surface-unbound',
      isBsColor && `ripple-surface-${rippleColor}`,
      className
    );

    const setupColor = () => {
      const IS_BOOTSTRAP_COLOR = BOOTSTRAP_COLORS.find((color) => color === rippleColor?.toLowerCase());

      if (IS_BOOTSTRAP_COLOR) {
        return setIsBsColor(true);
      } else {
        const rgbValue = colorToRGB(rippleColor).join(',');

        const gradientImage = GRADIENT.split('{{color}}').join(`${rgbValue}`);

        return `radial-gradient(circle, ${gradientImage})`;
      }
    };

    const colorToRGB = (color: any) => {
      const hexToRgb = (color: string) => {
        const HEX_COLOR_LENGTH = 7;

        const IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;

        if (IS_SHORT_HEX) {
          color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
        }

        return [parseInt(color.substr(1, 2), 16), parseInt(color.substr(3, 2), 16), parseInt(color.substr(5, 2), 16)];
      };

      const namedColorsToRgba = (color: string) => {
        const tempElem = document.body.appendChild(document.createElement('fictum'));

        const flag = 'rgb(1, 2, 3)';

        tempElem.style.color = flag;

        if (tempElem.style.color !== flag) {
          return DEFAULT_RIPPLE_COLOR;
        }

        tempElem.style.color = color;

        if (tempElem.style.color === flag || tempElem.style.color === '') {
          return DEFAULT_RIPPLE_COLOR;
        } // color parse failed

        color = getComputedStyle(tempElem).color;

        document.body.removeChild(tempElem);

        return color;
      };

      const rgbaToRgb = (color: any) => {
        color = color.match(/[.\d]+/g).map((a: any) => +Number(a));
        color.length = 3;
        return color;
      };

      if (color.toLowerCase() === 'transparent') {
        return DEFAULT_RIPPLE_COLOR;
      }
      if (color[0] === '#') {
        return hexToRgb(color);
      }
      if (color.indexOf('rgb') === -1) {
        color = namedColorsToRgba(color);
      }
      if (color.indexOf('rgb') === 0) {
        return rgbaToRgb(color);
      }

      return DEFAULT_RIPPLE_COLOR;
    };

    const getDiameter = (data: any) => {
      const { offsetX, offsetY, height, width } = data;

      const top = offsetY <= height / 2;
      const left = offsetX <= width / 2;
      const pythagorean = (sideA: number, sideB: number) => Math.sqrt(sideA ** 2 + sideB ** 2);

      const positionCenter = offsetY === height / 2 && offsetX === width / 2;

      const quadrant = {
        first: top === true && left === false,
        second: top === true && left === true,
        third: top === false && left === true,
        fourth: top === false && left === false,
      };

      const getCorner = {
        topLeft: pythagorean(offsetX, offsetY),
        topRight: pythagorean(width - offsetX, offsetY),
        bottomLeft: pythagorean(offsetX, height - offsetY),
        bottomRight: pythagorean(width - offsetX, height - offsetY),
      };

      let diameter = 0;

      if (positionCenter || quadrant.fourth) {
        diameter = getCorner.topLeft;
      } else if (quadrant.third) {
        diameter = getCorner.topRight;
      } else if (quadrant.second) {
        diameter = getCorner.bottomRight;
      } else if (quadrant.first) {
        diameter = getCorner.bottomLeft;
      }
      return diameter * 2;
    };

    const getStyles = (e: any) => {
      const itemRect = e.target.getBoundingClientRect();

      const offsetX = e.clientX - itemRect.left;
      const offsetY = e.clientY - itemRect.top;
      const height = itemRect.height;
      const width = itemRect.width;

      const diameterOptions = {
        offsetX: rippleCentered ? height / 2 : offsetX,
        offsetY: rippleCentered ? width / 2 : offsetY,
        height,
        width,
      };

      const opacity = {
        delay: rippleDuration && rippleDuration * 0.5,
        duration: rippleDuration && rippleDuration - rippleDuration * 0.5,
      };

      const diameter = getDiameter(diameterOptions);
      const radiusValue = rippleRadius || diameter / 2;

      const styles = {
        left: rippleCentered ? `${width / 2 - radiusValue}px` : `${offsetX - radiusValue}px`,
        top: rippleCentered ? `${height / 2 - radiusValue}px` : `${offsetY - radiusValue}px`,
        height: rippleRadius ? `${rippleRadius * 2}px` : `${diameter}px`,
        width: rippleRadius ? `${rippleRadius * 2}px` : `${diameter}px`,
        transitionDelay: `0s, ${opacity.delay}ms`,
        transitionDuration: `${rippleDuration}ms, ${opacity.duration}ms`,
      };

      if (isBsColor) {
        return styles;
      } else {
        return { ...styles, backgroundImage: `${setupColor()}` };
      }
    };

    const handleClick = (e: any) => {
      const styles = getStyles(e);

      const newStyles = rippleStyles.concat(styles);
      setRippleStyles(newStyles);

      onClick && onClick(e);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        if (rippleStyles.length > 0) {
          setRippleStyles(rippleStyles.splice(1, rippleStyles.length - 1));
        }
      }, rippleDuration);

      return () => {
        clearTimeout(timer);
      };
    }, [rippleDuration, rippleStyles]);

    return (
      <Tag className={classes} onClick={(e: any) => handleClick(e)} ref={ref} {...props}>
        {children}
        {rippleStyles.map((item, i) => (
          <MDBRippleWave key={i} style={item}></MDBRippleWave>
        ))}
      </Tag>
    );
  }
);

MDBRipple.defaultProps = { rippleTag: MDBBtn, rippleDuration: 500, rippleRadius: 0, rippleColor: 'dark' };

export default MDBRipple;
