import clsx from 'clsx';
import React, { useState, useEffect, useRef, FocusEvent, ChangeEvent, useCallback } from 'react';
import type { InputProps } from './types';

const MDBInput: React.FC<InputProps> = ({
  className,
  size,
  contrast,
  value,
  defaultValue,
  id,
  labelClass,
  wrapperClass,
  wrapperStyle,
  wrapperTag: WrapperTag,
  label,
  onChange,
  children,
  labelRef,
  labelStyle,
  inputRef,
  type,
  onBlur,
  readonly,
  ...props
}) => {
  const [newValue, setNewValue] = useState(value || defaultValue);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(value || defaultValue ? true : false);

  const labelEl = useRef<HTMLLabelElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : inputEl;

  const wrapperClasses = clsx('form-outline', contrast && 'form-white', wrapperClass);
  const inputClasses = clsx(
    'form-control',
    active && 'active',
    type === 'date' && 'active',
    size && `form-control-${size}`,
    className
  );
  const labelClasses = clsx('form-label', labelClass);

  useEffect(() => {
    if (value === undefined) return;
    value ? setActive(true) : setActive(false);
  }, [value]);

  useEffect(() => {
    if (defaultValue === undefined) return;
    defaultValue ? setActive(true) : setActive(false);
  }, [defaultValue]);

  const setWidth = useCallback(() => {
    if (labelReference.current?.clientWidth) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  }, [labelReference]);

  useEffect(() => {
    setWidth();
  }, [labelReference.current?.clientWidth, setWidth]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
    onChange?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    newValue !== '' ? setActive(true) : setActive(false);
    onBlur?.(e);
  };

  return (
    <WrapperTag className={wrapperClasses} style={wrapperStyle}>
      <input
        type={type}
        readOnly={readonly}
        className={inputClasses}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={setWidth}
        value={value}
        defaultValue={defaultValue}
        id={id}
        ref={inputReference}
        {...props}
      />
      {label && (
        <label className={labelClasses} style={labelStyle} htmlFor={id} ref={labelReference}>
          {label}
        </label>
      )}
      <div className='form-notch'>
        <div className='form-notch-leading'></div>
        <div className='form-notch-middle' style={{ width: labelWidth }}></div>
        <div className='form-notch-trailing'></div>
      </div>
      {children}
    </WrapperTag>
  );
};

MDBInput.defaultProps = { wrapperTag: 'div', readonly: false };

export default MDBInput;
