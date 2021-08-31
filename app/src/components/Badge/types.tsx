import React from 'react';

type BadgeProps = {
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { BadgeProps };
