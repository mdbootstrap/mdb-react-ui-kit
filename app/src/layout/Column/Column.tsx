import clsx from 'clsx';
import React from 'react';
import { ColumnProps } from './types';

const MDBCol: React.FC<ColumnProps> = React.forwardRef<HTMLAllCollection, ColumnProps>(
  (
    {
      center,
      children,
      className,
      end,
      lg,
      md,
      offsetLg,
      offsetMd,
      offsetSm,
      order,
      size,
      sm,
      start,
      tag: Tag,
      xl,
      xxl,
      xs,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      size && `col-${size}`,
      xs && `col-xs-${xs}`,
      sm && `col-sm-${sm}`,
      md && `col-md-${md}`,
      lg && `col-lg-${lg}`,
      xl && `col-xl-${xl}`,
      xxl && `col-xxl-${xxl}`,
      !size && !xs && !sm && !md && !lg && !xl && !xxl ? 'col' : '',
      order && `order-${order}`,
      start && 'align-self-start',
      center && 'align-self-center',
      end && 'align-self-end',
      offsetSm && `offset-sm-${offsetSm}`,
      offsetMd && `offset-md-${offsetMd}`,
      offsetLg && `offset-lg-${offsetLg}`,
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBCol.defaultProps = { tag: 'div' };

export default MDBCol;
