import clsx from 'clsx';
import React, { useState, useEffect, useRef } from 'react';
import type { InputProps } from './types';

const MDBInput: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      contrast,
      value,
      id,
      labelId,
      labelClass,
      wrapperClass,
      wrapperTag: WrapperTag,
      label,
      onChange,
      labelRef,
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

      labelRef && labelRef(labelEl);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      oldValue.length > 0 ? setActive(true) : setActive(false);
    }, [oldValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewValue(e.currentTarget.value);

      onChange && onChange(e);
    };

    return (
      <WrapperTag className={wrapperClasses}>
        <input className={inputClasses} onChange={handleChange} value={oldValue} id={id} ref={ref} {...props} />
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

MDBInput.defaultProps = { wrapperTag: 'div' };

export default MDBInput;
