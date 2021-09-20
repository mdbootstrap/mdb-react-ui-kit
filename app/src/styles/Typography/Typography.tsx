import React from 'react';
import clsx from 'clsx';
import type { TypographyProps } from './types';

const MDBTypography: React.FC<TypographyProps> = React.forwardRef<HTMLAllCollection, TypographyProps>(
  (
    {
      className,
      children,
      tag: Tag,
      variant,
      colorText,
      blockquote,
      note,
      noteColor,
      listUnStyled,
      listInLine,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      variant && variant,
      blockquote && 'blockquote',
      note && 'note',
      colorText && `text-${colorText}`,
      noteColor && `note-${noteColor}`,
      listUnStyled && 'list-unstyled',
      listInLine && 'list-inline',
      className
    );

    if (blockquote) {
      Tag = 'blockquote';
    }

    if (listUnStyled || listInLine) {
      Tag = 'ul';
    }

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTypography.defaultProps = { tag: 'p' };

export default MDBTypography;
