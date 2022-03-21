interface BreadcrumbProps extends React.AllHTMLAttributes<HTMLElement> {
  bold?: boolean;
  tag?: React.ComponentProps<any>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'body'
    | 'muted'
    | 'white'
    | 'black-50'
    | 'white-50';
  uppercase?: boolean;
  ref?: React.Ref<any>;
}

export { BreadcrumbProps };
