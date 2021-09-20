import * as React from 'react';

declare const MDBTypography: React.FunctionComponent<{
  className?: string;
  tag?: React.ComponentProps<any>;
  variant?: string;
  blockquote?: boolean;
  note?: boolean;
  noteColor?: string;
  listUnStyled?: boolean;
  listInLine?: boolean;
  colorText?: string;
  [rest: string]: any;
}>;

export default MDBTypography;
