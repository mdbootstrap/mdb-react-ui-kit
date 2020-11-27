import * as React from 'react';

declare const MDBTreeviewItem: React.FunctionComponent<{
  className?: string;
  disabled?: boolean;
  disabledClassName?: string;
  fab?: boolean;
  fal?: boolean;
  far?: boolean;
  icon?: string;
  opened?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

export default MDBTreeviewItem;
