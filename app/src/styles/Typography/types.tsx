type TypographyProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'color'> & {
  blockquote?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'muted'
    | 'white'
    | 'info'
    | 'body'
    | 'black-50'
    | 'white-50';
  listUnStyled?: boolean;
  listInLine?: boolean;
  note?: boolean;
  noteColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'muted'
    | 'white'
    | 'info'
    | 'transparent';
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export { TypographyProps };
