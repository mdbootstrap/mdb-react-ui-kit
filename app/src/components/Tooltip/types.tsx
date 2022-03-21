interface TooltipProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'title'> {
  disableMouseDown?: boolean;
  options?: Record<string, unknown>;
  placement?:
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  title?: React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
}

export { TooltipProps };
