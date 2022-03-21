import React from 'react';

interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  bodyClassName?: string;
  bodyStyle?: React.CSSProperties;
  collapseId: number;
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  headerTitle?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { AccordionItemProps };
