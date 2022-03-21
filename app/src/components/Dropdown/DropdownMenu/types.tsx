interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  dark?: boolean;
  responsive?:
    | ''
    | 'start'
    | 'end'
    | 'sm-start'
    | 'md-start'
    | 'lg-start'
    | 'xl-start'
    | 'xxl-start'
    | 'sm-end'
    | 'md-end'
    | 'lg-end'
    | 'xl-end'
    | 'xxl-end';
  tag?: React.ComponentProps<any>;
}

export { DropdownMenuProps };
