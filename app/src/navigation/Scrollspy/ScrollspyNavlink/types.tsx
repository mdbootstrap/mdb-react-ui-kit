interface ScrollspyNavLinkProps extends React.AllHTMLAttributes<HTMLElement> {
  tag?: React.ComponentProps<any>;
  scrollElement?: HTMLElement;
  collapsible?: boolean;
  active?: boolean;
  ref?: React.Ref<any>;
}

export { ScrollspyNavLinkProps };
