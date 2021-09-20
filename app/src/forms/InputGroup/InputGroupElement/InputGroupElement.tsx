import React, { useRef } from 'react';
import clsx from 'clsx';
import type { InputGroupElementProps } from './types';

const MDBInputGroupElement: React.FC<InputGroupElementProps> = ({ className, textarea, inputRef, ...props }) => {
  const classes = clsx('form-control', className);

  const inputEl = useRef<HTMLInputElement>(null);

  const inputReference = inputRef ? inputRef : inputEl;

  return (
    <>
      {textarea ? (
        <textarea className={classes} ref={inputReference} {...props} />
      ) : (
        <input className={classes} ref={inputReference} {...props} />
      )}
    </>
  );
};

export default MDBInputGroupElement;
