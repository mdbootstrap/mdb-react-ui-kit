interface FooterProps extends React.AllHTMLAttributes<HTMLElement> {
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
  tag?: React.ComponentProps<any>;
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  ref?: React.Ref<any>;
}

export { FooterProps };
