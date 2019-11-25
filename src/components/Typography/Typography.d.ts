import * as React from 'react';

declare const MDBTypogrphy: React.FunctionComponent<{
  className?: string;
  tag?: 'ul' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h1-responsive'
    | 'h2-responsive'
    | 'h3-responsive'
    | 'h4-responsive'
    | 'h5-responsive'
    | 'h5-responsive'
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4';
  blockquote?: boolean;
  bqColor?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'secondary'
    | 'light';
  bqTitle?: string;
  listUnStyled?: boolean;
  listInLine?: boolean;
  colorText?:
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
    | 'mdb-color white';
  note?: boolean;
  noteColor?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'secondary'
    | 'light'
    | 'dark'
    | 'unique'
    | 'stylish'
    | 'special'
    | 'elegant';
  noteTitle?: string;
}>;

export default MDBTypogrphy;
