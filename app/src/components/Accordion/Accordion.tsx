import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import type { AccordionProps } from './types';
import { AccordionContext } from './AccordionContext';

const MDBAccordion: React.FC<AccordionProps> = React.forwardRef<HTMLAllCollection, AccordionProps>(
  ({ alwaysOpen, className, flush, initialActive, tag: Tag, children, onChange, ...props }, ref) => {
    const classes = clsx('accordion', flush && 'accordion-flush', className);

    const [activeItem, setActiveItem] = useState(initialActive);

    useEffect(() => {
      if (!activeItem) return;

      onChange && onChange(activeItem);
    }, [onChange, activeItem]);

    return (
      <Tag className={classes} ref={ref} {...props}>
        <AccordionContext.Provider value={{ activeItem, setActiveItem, alwaysOpen, initialActive }}>
          {children}
        </AccordionContext.Provider>
      </Tag>
    );
  }
);

MDBAccordion.defaultProps = { tag: 'div', initialActive: 0 };

export default MDBAccordion;
