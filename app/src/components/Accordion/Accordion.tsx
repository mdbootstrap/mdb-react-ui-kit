import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import type { AccordionProps } from './types';
import { AccordionContext } from './AccordionContext';

const MDBAccordion: React.FC<AccordionProps> = React.forwardRef<HTMLAllCollection, AccordionProps>(
  (
    { alwaysOpen, borderless, className, flush, initialActive = 0, tag: Tag = 'div', children, onChange, ...props },
    ref
  ) => {
    const classes = clsx('accordion', flush && 'accordion-flush', borderless && 'accordion-borderless', className);

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

export default MDBAccordion;
