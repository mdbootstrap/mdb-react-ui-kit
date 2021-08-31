import clsx from 'clsx';
import React, { useState } from 'react';
import type { RangeProps } from './types';

const MDBRange: React.FC<RangeProps> = React.forwardRef<HTMLAllCollection, RangeProps>(
  (
    {
      className,
      tag: Tag,
      labelId,
      max,
      min,
      onChange,
      onMouseDown,
      onMouseUp,
      onTouchStart,
      onTouchEnd,
      labelClass,
      value,
      label,
      id,
      ...props
    },
    ref
  ) => {
    const [showThumb, setShowThumb] = useState(false);
    const [inputValue, setInputValue] = useState(value ? value : 0);
    const [thumbPosition, setThumbPosition] = useState(
      ((value ? value : 0 - Number(min)) * 100) / (Number(max) - Number(min))
    );

    const inputClasses = clsx('form-range', className);
    const labelClasses = clsx('form-label', labelClass);
    const thumbClasses = clsx('thumb', showThumb && 'thumb-active');

    const handleChange = (e: any) => {
      setInputValue(e.target.value);

      setThumbPosition(((e.target.value - Number(min)) * 100) / (Number(max) - Number(min)));

      onChange && onChange(e);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setShowThumb(true);
      onMouseDown && onMouseDown(e);
    };

    const handleMouseUp = (e: MouseEvent) => {
      setShowThumb(false);
      onMouseUp && onMouseUp(e);
    };

    const handleTouchStart = (e: MouseEvent) => {
      setShowThumb(true);
      onTouchStart && onTouchStart(e);
    };

    const handleTouchEnd = (e: MouseEvent) => {
      setShowThumb(false);
      onTouchEnd && onTouchEnd(e);
    };

    return (
      <>
        {label && (
          <label className={labelClasses} id={labelId} htmlFor={id}>
            {label}
          </label>
        )}

        <div className='range'>
          <Tag
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onChange={handleChange}
            className={inputClasses}
            value={value}
            type='range'
            id={id}
            ref={ref}
            min={min}
            max={max}
            {...props}
          />
          <span className={thumbClasses} style={{ left: `calc(${thumbPosition}% + (${8 - thumbPosition * 0.15}px))` }}>
            <span className='thumb-value'>{inputValue}</span>
          </span>
        </div>
      </>
    );
  }
);

MDBRange.defaultProps = { tag: 'input', min: '0', max: '100' };

export default MDBRange;
