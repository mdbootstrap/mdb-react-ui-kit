import React from 'react';

type BreadcrumbItemProp = {
  active?: boolean;
  className?: string;
  tag?: React.ComponentProps<any>;
  current?: 'page' | 'step' | 'location';
  [rest: string]: any;
};

export { BreadcrumbItemProp };
