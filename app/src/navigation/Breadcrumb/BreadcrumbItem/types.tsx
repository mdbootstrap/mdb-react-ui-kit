interface BreadcrumbItemProp extends React.AllHTMLAttributes<HTMLElement> {
  active?: boolean;
  tag?: React.ComponentProps<any>;
  current?: 'page' | 'step' | 'location';
  ref?: React.Ref<any>;
}

export { BreadcrumbItemProp };
