import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import type { AccordionProps } from './types';
import { AccordionContext } from './AccordionContext';

const MDBAccordion: React.FC<AccordionProps> = React.forwardRef<HTMLAllCollection, AccordionProps>(
  (
    {
      alwaysOpen,
      borderless,
      className,
      flush,
      active,
      initialActive = 0,
      tag: Tag = 'div',
      children,
      onChange,
      ...props
    },
    ref
  ) => {
    const isControlled = useMemo(() => typeof active !== 'undefined', [active]);
    const classes = clsx('accordion', flush && 'accordion-flush', borderless && 'accordion-borderless', className);

    const [activeItem, setActiveItem] = useState(initialActive);

    return (
      <Tag className={classes} ref={ref} {...props}>
        <AccordionContext.Provider
          value={{ activeItem: isControlled ? active : activeItem, setActiveItem, alwaysOpen, initialActive, onChange }}
        >
          {children}
        </AccordionContext.Provider>
      </Tag>
    );
  }
);

export default MDBAccordion;
