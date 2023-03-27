import React from 'react';
type ValidationProps = React.FormHTMLAttributes<HTMLFormElement> & {
    isValidated?: boolean;
    ref?: React.Ref<any>;
};
export { ValidationProps };
