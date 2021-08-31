import clsx from 'clsx';
import React, { useState } from 'react';
import type { AccordionProps } from './types';
import { AccordionContext } from './AccordionContext';

const MDBAccordion: React.FC<AccordionProps> = React.forwardRef<HTMLAllCollection, AccordionProps>(
  ({ alwaysOpen, className, flush, initialActive, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('accordion', flush && 'accordion-flush', className);

    const [activeItem, setActiveItem] = useState(initialActive);

    return (
      <AccordionContext.Provider value={{ activeItem, setActiveItem, alwaysOpen, initialActive }}>
        <Tag className={classes} ref={ref} {...props}>
          {children}
        </Tag>
      </AccordionContext.Provider>
    );
  }
);

MDBAccordion.defaultProps = { tag: 'div', initialActive: '' };

export default MDBAccordion;
