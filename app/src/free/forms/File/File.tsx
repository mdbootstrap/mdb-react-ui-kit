import clsx from 'clsx';
import React from 'react';
import type { FileProps } from './types';

const MDBFile: React.FC<FileProps> = ({ className, labelClass, labelStyle, inputRef, size, label, id, ...props }) => {
  const inputClasses = clsx('form-control', `form-control-${size}`, className);
  const labelClasses = clsx('form-label', labelClass);

  return (
    <>
      {label && (
        <label className={labelClasses} style={labelStyle} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={inputClasses} type='file' id={id} ref={inputRef} {...props} />
    </>
  );
};

export default MDBFile;
