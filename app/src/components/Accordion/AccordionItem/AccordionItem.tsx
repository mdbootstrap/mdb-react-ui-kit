import clsx from 'clsx';
import React, { useContext, useMemo, useCallback } from 'react';
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
      btnClassName,
      tag: Tag = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const { activeItem, setActiveItem, alwaysOpen, onChange } = useContext(AccordionContext);

    const isCollapsed: boolean = useMemo(() => {
      const isArray = Array.isArray(activeItem);
      if (isArray) {
        return activeItem.includes(collapseId);
      }
      return activeItem === collapseId;
    }, [activeItem, collapseId]);

    const classes = clsx('accordion-item', className);
    const headerClasses = clsx('accordion-header', headerClassName);
    const bodyClasses = clsx('accordion-body', bodyClassName);
    const buttonClasses = clsx('accordion-button', !isCollapsed && 'collapsed', btnClassName);

    const toggleAccordion = useCallback(
      (itemId: number) => {
        let newValue: number | number[] = itemId;
        const isArray = Array.isArray(activeItem);

        if (isArray) {
          activeItem.includes(itemId)
            ? (newValue = activeItem.filter((item) => item !== itemId))
            : (newValue = alwaysOpen ? [...activeItem, itemId] : [itemId]);
        } else {
          newValue = activeItem === itemId ? 0 : itemId;

          // if alwaysOpen is true, we must convert newValue to array
          alwaysOpen && (newValue = [newValue]);
        }

        onChange?.(newValue);
        setActiveItem(newValue);
      },
      [onChange, activeItem, setActiveItem, alwaysOpen]
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        <h2 className={headerClasses} style={headerStyle}>
          <button onClick={() => toggleAccordion(collapseId)} className={buttonClasses} type='button'>
            {headerTitle}
          </button>
        </h2>
        <MDBCollapse id={collapseId.toString()} show={isCollapsed}>
          <div className={bodyClasses} style={bodyStyle}>
            {children}
          </div>
        </MDBCollapse>
      </Tag>
    );
  }
);

export default MDBAccordionItem;
