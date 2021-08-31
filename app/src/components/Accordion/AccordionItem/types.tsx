import React from 'react';

type AccordionItemProps = {
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  collapseId: string;
  headerTitle?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { AccordionItemProps };
