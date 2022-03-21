import React from 'react';

interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  alwaysOpen?: boolean;
  flush?: boolean;
  initialActive?: number;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { AccordionProps };
