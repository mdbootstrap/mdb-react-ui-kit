import React, { useMemo } from 'react';
import clsx from 'clsx';
import type { TableProps } from './types';

const MDBTable: React.FC<TableProps> = ({
  className,
  classNameResponsive,
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
}) => {
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
      <table className={classes} {...props}>
        {children}
      </table>
    );
  }, [children, classes, props]);

  if (responsive) {
    const responsiveClasses = clsx(
      typeof responsive === 'string' ? `table-responsive-${responsive}` : 'table-responsive',
      classNameResponsive
    );

    return <div className={responsiveClasses}>{createTable}</div>;
  } else {
    return createTable;
  }
};

export default MDBTable;
