import React from 'react';

type ValidationItemProps = React.AllHTMLAttributes<HTMLElement> & {
  tag?: React.ComponentProps<any>;
  invalid?: boolean;
  feedback?: React.ReactNode;
  tooltip?: boolean;
};

export { ValidationItemProps };
