import * as React from 'react';

declare const MDBBox: React.FunctionComponent<{
  tag?: React.ElementType;
  className?: string;
  display?:
    | 'none'
    | 'inline'
    | 'inline-block'
    | 'block'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'flex'
    | 'inline-flex';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  flex?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | 'wrap'
    | 'nowrap'
    | 'wrap-reverse'
    | 'fill'
    | 'grow-0 '
    | 'grow-1'
    | 'shrink-0'
    | 'shrink-1'
    | 'center';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'stretch' | 'around ';
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  color?:
    | 'red'
    | 'pink'
    | 'purple'
    | 'deep-purple'
    | 'indigo'
    | 'blue'
    | 'light-blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'light-green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deep-orange'
    | 'brown'
    | 'grey'
    | 'blue-grey'
    | 'mdb-color white'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'default'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'muted'
    | 'light';
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'default'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'light';
  m?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mr?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  ml?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mx?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  my?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  p?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pr?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pl?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  px?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  py?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
}>;

export default MDBBox;
