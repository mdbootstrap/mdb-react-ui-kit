import clsx from 'clsx';
import React, { useState, TouchEvent, ChangeEvent } from 'react';
import RangeThumb from './RangeThumb/RangeThumb';
import type { RangeProps } from './types';

const MDBRange: React.FC<RangeProps> = ({
  className,
  defaultValue,
  disableTooltip,
  labelId,
  max,
  min,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onChange,
  labelClass,
  value,
  label,
  id,
  inputRef,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [showThumb, setShowThumb] = useState(false);

  const inputClasses = clsx('form-range', className);
  const labelClasses = clsx('form-label', labelClass);

  const handleMouseDown = (e: any) => {
    setShowThumb(true);
    onMouseDown && onMouseDown(e);
  };

  const handleMouseUp = (e: any) => {
    setShowThumb(false);
    onMouseUp && onMouseUp(e);
  };

  const handleTouchStart = (e: TouchEvent<HTMLInputElement>) => {
    setShowThumb(true);
    onTouchStart && onTouchStart(e);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLInputElement>) => {
    setShowThumb(false);
    onTouchEnd && onTouchEnd(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <>
      {label && (
        <label className={labelClasses} id={labelId} htmlFor={id}>
          {label}
        </label>
      )}

      <div className='range'>
        <input
          type='range'
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onChange={handleChange}
          className={inputClasses}
          value={value ? value : inputValue}
          id={id}
          min={min}
          max={max}
          ref={inputRef}
          {...props}
        />
        {!disableTooltip && <RangeThumb value={value ? value : inputValue} showThumb={showThumb} min={min} max={max} />}
      </div>
    </>
  );
};

MDBRange.defaultProps = { defaultValue: 0 };

export default MDBRange;
