import * as React from 'react';

declare const MDBRange: React.FunctionComponent<{
  className?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  min?: string;
  max?: string;
  step?: string;
  value?: number;
  name?: string;
  [rest: string]: any;
}>;

export default MDBRange;
