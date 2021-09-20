import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import type { ValidationProps } from './types';

const MDBValidation: React.FC<ValidationProps> = ({
  className,
  children,
  formRef,
  isValidated,
  onSubmit,
  ...props
}) => {
  const formEl = useRef<HTMLLabelElement>(null);

  const formReference = formRef ? formRef : formEl;
  const [validated, setValidated] = useState(isValidated);

  const classes = clsx('needs-validation', validated && 'was-validated', className);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValidated(true);

    onSubmit && onSubmit(e);
  };

  return (
    <form className={classes} onSubmit={handleSubmit} ref={formReference} {...props}>
      {children}
    </form>
  );
};

export default MDBValidation;
