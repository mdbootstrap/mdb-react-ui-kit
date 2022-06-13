import React from 'react';
import { BaseComponent } from 'src/types/baseComponent';

interface AccordionProps extends BaseComponent {
  alwaysOpen?: boolean;
  flush?: boolean;
  initialActive?: number;
  onChange?: (id: number) => void;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { AccordionProps };
