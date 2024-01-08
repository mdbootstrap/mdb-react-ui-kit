import clsx from 'clsx';
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import type { FileProps } from './types';

const MDBFile: React.FC<FileProps> = forwardRef<HTMLInputElement, FileProps>(
  ({ className, labelClass, labelStyle, inputRef: inputRefProp, size, label, id, ...props }, ref) => {
    const inputClasses = clsx('form-control', `form-control-${size}`, className);
    const labelClasses = clsx('form-label', labelClass);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current || inputRefProp?.current);

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
  }
);

MDBFile.displayName = 'MDBFile';
export default MDBFile;
