import React from 'react';

type RowProps = {
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  className?: string;
  end?: boolean;
  evenly?: boolean;
  middle?: boolean;
  start?: boolean;
  tag?: React.ComponentProps<any>;
  top?: boolean;
  [rest: string]: any;
};

export { RowProps };
