import React from 'react';

type ValidationProps = React.FormHTMLAttributes<HTMLFormElement> & {
  formRef?: React.MutableRefObject<any>;
  isValidated?: boolean;
};

export { ValidationProps };
