import clsx from 'clsx';
import type { ValidationProps } from './types';
import React, { useState } from 'react';

const MDBValidation: React.FC<ValidationProps> = React.forwardRef<HTMLFormElement, ValidationProps>(
  ({ className, children, isValidated, onReset, onSubmit, ...props }, ref) => {
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

    return (
      <form className={classes} onSubmit={handleSubmit} onReset={handleReset} ref={ref} {...props}>
        {children}
      </form>
    );
  }
);

MDBValidation.defaultProps = {
  noValidate: true,
};

export default MDBValidation;
