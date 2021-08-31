import clsx from 'clsx';
import React, { useRef } from 'react';
import type { FileProps } from './types';

const MDBFile: React.FC<FileProps> = ({
  className,
  labelId,
  labelClass,
  labelRef,
  inputRef,
  size,
  label,
  id,
  ...props
}) => {
  const inputClasses = clsx('form-control', `form-control-${size}`, className);
  const labelClasses = clsx('form-label', labelClass);

  const labelEl = useRef<HTMLLabelElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;
  const inputReference = inputRef ? inputRef : inputEl;

  return (
    <>
      {label && (
        <label className={labelClasses} id={labelId} ref={labelReference} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputClasses} type='file' id={id} ref={inputReference} {...props} />
    </>
  );
};

export default MDBFile;
