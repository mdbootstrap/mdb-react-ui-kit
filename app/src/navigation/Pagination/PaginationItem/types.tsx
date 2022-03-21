interface PaginationItemProps extends React.AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  disabled?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

export { PaginationItemProps };
