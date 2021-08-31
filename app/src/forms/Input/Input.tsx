import clsx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';
import type { InputProps } from './types';

const MDBInput: React.FC<InputProps> = React.forwardRef<HTMLAllCollection, InputProps>(
  (
    {
      className,
      size,
      contrast,
      name,
      value,
      tag: Tag,
      id,
      labelId,
      readonly,
      disabled,
      labelClass,
      wrapperClass,
      wrapperTag: WrapperTag,
      label,
      ...props
    },
    ref
  ) => {
    const labelEl = useRef<HTMLLabelElement>(null);

    const [oldValue, setNewValue] = useState(value ? value : '');
    const [labelWidth, setLabelWidth] = useState(0);
    const [active, setActive] = useState(oldValue !== '' ? true : false);

    const wrapperClasses = clsx('form-outline', contrast && 'form-white', wrapperClass);
    const inputClasses = clsx('form-control', active && 'active', size && `form-control-${size}`, className);
    const labelClasses = clsx('form-label', labelClass);

    useEffect(() => {
      if (labelEl.current) {
        setLabelWidth(labelEl.current.clientWidth * 0.8 + 8);
      }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewValue(e.currentTarget.value);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.currentTarget.value !== '' ? setActive(true) : setActive(false);
    };

    return (
      <WrapperTag className={wrapperClasses}>
        <Tag
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          value={oldValue}
          name={name}
          readOnly={readonly}
          id={id}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {label && (
          <label className={labelClasses} id={labelId} htmlFor={id} ref={labelEl}>
            {label}
          </label>
        )}
        <div className='form-notch'>
          <div className='form-notch-leading'></div>
          <div className='form-notch-middle' style={{ width: labelWidth }}></div>
          <div className='form-notch-trailing'></div>
        </div>
      </WrapperTag>
    );
  }
);

MDBInput.defaultProps = { tag: 'input', wrapperTag: 'div' };

export default MDBInput;
