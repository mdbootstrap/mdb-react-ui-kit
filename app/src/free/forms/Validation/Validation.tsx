'use client';

import clsx from 'clsx';
import type { ValidationProps } from './types';
import React, { useEffect, useState } from 'react';

const MDBValidation: React.FC<ValidationProps> = React.forwardRef<HTMLFormElement, ValidationProps>(
  ({ className, children, isValidated = false, onReset, onSubmit, noValidate = true, ...props }, ref) => {
    const [validated, setValidated] = useState(isValidated);

    const classes = clsx('needs-validation', validated && 'was-validated', className);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setValidated(true);

      onSubmit && onSubmit(e);
    };

    const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setValidated(false);

      onReset && onReset(e);
    };

    useEffect(() => {
      setValidated(isValidated);
    }, [isValidated]);

    return (
      <form
        className={classes}
        onSubmit={handleSubmit}
        onReset={handleReset}
        ref={ref}
        noValidate={noValidate}
        {...props}
      >
        {children}
      </form>
    );
  }
);

MDBValidation.displayName = 'MDBValidation';
export default MDBValidation;
