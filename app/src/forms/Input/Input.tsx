import clsx from 'clsx';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { InputProps } from './types';

const MDBInput: React.FC<InputProps> = ({
  className,
  size,
  contrast,
  value,
  id,
  labelId,
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
  textarea,
  ...props
}) => {
  const labelEl = useRef<HTMLLabelElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);
  const textareaEl = useRef<HTMLTextAreaElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : textarea ? textareaEl : inputEl;

  const [oldValue, setNewValue] = useState(value);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(value !== undefined && value.length > 0 ? true : false);

  const wrapperClasses = clsx('form-outline', contrast && 'form-white', wrapperClass);
  const inputClasses = clsx('form-control', active && 'active', size && `form-control-${size}`, className);
  const labelClasses = clsx('form-label', labelClass);

  useEffect(() => {
    if (labelReference.current) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value === undefined) return;
    value.length > 0 ? setActive(true) : setActive(false);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewValue(e.currentTarget.value);
    onChange && onChange(e);
  };

  const handleBlur = useCallback(() => {
    if ((oldValue !== undefined && oldValue.length > 0) || (value !== undefined && value.length > 0)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [oldValue, value]);

  return (
    <WrapperTag className={wrapperClasses} style={{ ...wrapperStyle }}>
      {textarea ? (
        <textarea
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          id={id}
          ref={inputReference}
          {...props}
        />
      ) : (
        <input
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          id={id}
          ref={inputReference}
          {...props}
        />
      )}
      {label && (
        <label className={labelClasses} style={labelStyle} id={labelId} htmlFor={id} ref={labelReference}>
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

MDBInput.defaultProps = { wrapperTag: 'div' };

export default MDBInput;
