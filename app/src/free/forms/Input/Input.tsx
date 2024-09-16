'use client';

import clsx from 'clsx';
import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  ChangeEvent,
  useCallback,
  useImperativeHandle,
  useMemo,
} from 'react';
import type { InputProps } from './types';
import { useOnScreen } from '../../../utils/hooks';

const MDBInput: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      contrast,
      value: valueProp,
      defaultValue,
      id,
      labelClass,
      wrapperClass,
      wrapperStyle,
      wrapperTag: WrapperTag = 'div',
      label,
      onChange,
      children,
      labelRef,
      labelStyle,
      type,
      onBlur,
      readonly = false,
      showCounter = false,
      ...props
    },
    ref
  ) => {
    const [valueState, setValueState] = useState(defaultValue);
    const value = useMemo(() => {
      if (valueProp !== undefined) {
        return valueProp;
      }
      return valueState;
    }, [valueProp, valueState]);

    const [labelWidth, setLabelWidth] = useState(0);
    const [active, setActive] = useState(false);
    const [counter, setCounter] = useState(0);
    const innerRef = useRef<HTMLInputElement>(null);
    const isVisible = useOnScreen(innerRef);
    const labelEl = useRef<HTMLLabelElement>(null);
    const labelReference = labelRef ? labelRef : labelEl;

    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const wrapperClasses = clsx('form-outline', contrast && 'form-white', wrapperClass);
    const typesWithPlaceholder = ['date', 'time', 'datetime-local', 'month', 'week'];
    const isTypeWithPlaceholder = typesWithPlaceholder.includes(type as string);

    const inputClasses = clsx(
      'form-control',
      active && 'active',
      isTypeWithPlaceholder && 'active',
      size && `form-control-${size}`,
      className
    );
    const labelClasses = clsx('form-label', labelClass);

    const setWidth = useCallback(() => {
      if (labelReference.current?.clientWidth) {
        setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
      }
    }, [labelReference]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValueState(e.target.value);
      showCounter && setCounter(e.target.value.length);
      onChange?.(e);
    };

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement, Element>) => {
        if (!innerRef.current) return;
        if (value) {
          setActive(true);
        } else {
          setActive(false);
        }
        onBlur && onBlur(e);
      },
      [value, onBlur]
    );

    useEffect(() => {
      setWidth();
    }, [labelReference.current?.clientWidth, setWidth, isVisible]);

    useEffect(() => {
      if (value) {
        return setActive(true);
      }
      setActive(false);
    }, [value]);

    return (
      <WrapperTag className={wrapperClasses} style={wrapperStyle}>
        <input
          type={type}
          readOnly={readonly}
          className={inputClasses}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={setWidth}
          value={valueProp}
          defaultValue={defaultValue}
          id={id}
          ref={innerRef}
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
        {showCounter && props.maxLength && (
          <div className='form-helper'>
            <div className='form-counter'>{`${counter}/${props.maxLength}`}</div>
          </div>
        )}
      </WrapperTag>
    );
  }
);

MDBInput.displayName = 'MDBInput';
export default MDBInput;
