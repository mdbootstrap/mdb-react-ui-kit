import clsx from 'clsx';
import React, { useState } from 'react';
import type { ValidationProps } from './types';

const MDBValidation: React.FC<ValidationProps> = ({
  className,
  children,
  formRef,
  isValidated,
  onReset,
  onSubmit,
  ...props
}) => {
  const [validated, setValidated] = useState(isValidated);

  const classes = clsx('needs-validation', validated && 'was-validated', className);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValidated(true);

    onSubmit && onSubmit(e);
  };

  const handleReset = (e: any) => {
    e.preventDefault();
    setValidated(false);

    onReset && onReset(e);
  };

  return (
    <form className={classes} onSubmit={handleSubmit} onReset={handleReset} ref={formRef} {...props}>
      {children}
    </form>
  );
};

MDBValidation.defaultProps = {
  noValidate: true,
};

export default MDBValidation;
