import clsx from 'clsx';
import React, { useContext, useState } from 'react';
import { AccordionContext } from '../AccordionContext';
import type { AccordionItemProps } from './types';
import MDBCollapse from '../../Collapse/Collapse';

const MDBAccordionItem: React.FC<AccordionItemProps> = React.forwardRef<HTMLAllCollection, AccordionItemProps>(
  (
    {
      className,
      bodyClassName,
      bodyStyle,
      headerClassName,
      collapseId,
      headerTitle,
      headerStyle,
      tag: Tag,
      children,
      ...props
    },
    ref
  ) => {
    const { activeItem, setActiveItem, alwaysOpen, initialActive } = useContext(AccordionContext);

    const [openState, setOpenState] = useState(initialActive);

    const classes = clsx('accordion-item', className);
    const headerClasses = clsx('accordion-header', headerClassName);
    const bodyClasses = clsx('accordion-body', bodyClassName);
    const buttonClasses = clsx(
      'accordion-button',
      alwaysOpen ? collapseId !== openState && 'collapsed' : collapseId !== activeItem && 'collapsed'
    );

    const toggleAccordion = (value: number) => {
      if (alwaysOpen) {
        value !== openState ? setOpenState(value) : setOpenState(0);
      } else {
        value !== activeItem ? setActiveItem(value) : setActiveItem(0);
      }
    };

    return (
      <Tag className={classes} ref={ref} {...props}>
        <h2 className={headerClasses} style={headerStyle}>
          <button onClick={() => toggleAccordion(collapseId)} className={buttonClasses} type='button'>
            {headerTitle}
          </button>
        </h2>
        <MDBCollapse
          id={collapseId.toString()}
          show={alwaysOpen ? openState === collapseId : activeItem === collapseId}
        >
          <div className={bodyClasses} style={bodyStyle}>
            {children}
          </div>
        </MDBCollapse>
      </Tag>
    );
  }
);

MDBAccordionItem.defaultProps = { tag: 'div' };

export default MDBAccordionItem;
