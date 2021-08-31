import * as React from 'react';

declare const MDBAccordionItem: React.FunctionComponent<{
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  collapseId: string;
  headerTitle?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

export default MDBAccordionItem;
