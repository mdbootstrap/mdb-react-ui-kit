import React, { useMemo } from 'react';
import clsx from 'clsx';
import type { TableProps } from './types';

const MDBTable: React.FC<TableProps> = React.forwardRef<HTMLAllCollection, TableProps>(
  (
    {
      className,
      classNameResponsive,
      tag: Tag,
      responsive,
      align,
      borderColor,
      bordered,
      borderless,
      children,
      color,
      hover,
      small,
      striped,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      'table',
      align && `align-${align}`,
      borderColor && `border-${borderColor}`,
      bordered && 'table-bordered',
      borderless && 'table-borderless',
      color && `table-${color}`,
      hover && 'table-hover',
      small && 'table-sm',
      striped && 'table-striped',
      className
    );

    const createTable = useMemo((): any => {
      return (
        <Tag className={classes} ref={ref} {...props}>
          {children}
        </Tag>
      );
    }, [Tag, children, classes, props, ref]);

    if (responsive) {
      const responsiveClasses = clsx(
        typeof responsive === 'string' ? `table-responsive-${responsive}` : 'table-responsive',
        classNameResponsive
      );

      return <div className={responsiveClasses}>{createTable}</div>;
    } else {
      return createTable;
    }
  }
);

MDBTable.defaultProps = {
  tag: 'table',
};

export default MDBTable;
