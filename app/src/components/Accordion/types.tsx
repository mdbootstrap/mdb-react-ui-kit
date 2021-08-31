import React from 'react';

type AccordionProps = {
  alwaysOpen?: boolean;
  className?: string;
  flush?: boolean;
  initialActive?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { AccordionProps };
