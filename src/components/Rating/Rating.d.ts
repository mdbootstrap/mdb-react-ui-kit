import * as React from 'react';

declare const MDBRating: React.FunctionComponent<{
  containerClassName?: string;
  data?: {
    icon?: string;
    tooltip?: string;
    choosed?: boolean;
    [rest: string]: any;
  };
  feedback?: boolean;
  fillClassName?: string;
  fillColors?: boolean | string[];
  iconClassName?: string;
  iconFaces?: boolean;
  iconSize?:
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  iconRegular?: boolean;
  tag?: string;
  getValue?: (value: {
    tooltip?: string;
    icon?: string;
    size?:
      | 'lg'
      | '1x'
      | '2x'
      | '3x'
      | '4x'
      | '5x'
      | '6x'
      | '7x'
      | '8x'
      | '9x'
      | '10x';
    [rest: string]: any;
  }) => void;
  [rest: string]: any;
}>;

export default MDBRating;
