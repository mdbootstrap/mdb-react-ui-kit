import * as React from 'react';
import { classNameType, buttonColor } from '../../types';

export interface TypesFree extends classNameType {
  action?: boolean;
  active?: boolean;
  block?: boolean;
  circle?: boolean;
  color?: buttonColor;
  disabled?: boolean;
  download?: string;
  href?: string;
  innerRef?:
    | React.RefObject<HTMLButtonElement>
    | ((ref: React.RefObject<HTMLButtonElement>) => void)
    | null;
  role?: string;
  size?: 'sm' | 'lg';
  social?: string;
  tag?: string;
  target?: string;
  type?: 'reset' | 'submit' | 'button';
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  [rest: string]: any;
}

declare const MDBBtn: React.FunctionComponent<TypesFree>;

export default MDBBtn;
