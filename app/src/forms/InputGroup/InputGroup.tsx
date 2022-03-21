import React from 'react';
import clsx from 'clsx';
import type { InputGroupProps } from './types';

const MDBInputGroup: React.FC<InputGroupProps> = React.forwardRef<HTMLAllCollection, InputGroupProps>(
  (
    {
      className,
      children,
      noBorder,
      textBefore,
      textAfter,
      noWrap,
      tag: Tag,
      textTag: TextTag,
      textClass,
      size,
      textProps,
      ...props
    },
    ref
  ) => {
    const classes = clsx('input-group', noWrap && 'flex-nowrap', size && `input-group-${size}`, className);
    const textClasses = clsx('input-group-text', noBorder && 'border-0', textClass);

    const textElement = (textContent: React.ReactNode | Array<React.ReactNode>) => (
      <>
        {textContent && Array.isArray(textContent) ? (
          textContent.map((text, i) => (
            <TextTag key={i} className={textClasses} {...textProps}>
              {text}
            </TextTag>
          ))
        ) : (
          <TextTag className={textClasses} {...textProps}>
            {textContent}
          </TextTag>
        )}
      </>
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {textBefore && textElement(textBefore)}
        {children}
        {textAfter && textElement(textAfter)}
      </Tag>
    );
  }
);

MDBInputGroup.defaultProps = { tag: 'div', textTag: 'span' };

export default MDBInputGroup;
