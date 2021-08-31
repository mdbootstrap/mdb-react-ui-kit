import React$1, { FunctionComponent, ElementType, ComponentProps, ReactNode, ReactElement, RefObject } from 'react';

declare const MDBContainer: FunctionComponent<{
  className?: string;
  fluid?: boolean;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBCol: FunctionComponent<{
  center?: string | boolean;
  className?: string;
  end?: string | boolean;
  lg?: string;
  md?: string;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  order?: string | number;
  size?: string;
  sm?: string;
  start?: string | boolean;
  tag?: ElementType;
  xl?: string;
  xs?: string;
  [rest: string]: any;
}>;

declare const MDBBadge: FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBBtn: FunctionComponent<{
  className?: string;
  color?: string;
  outline?: boolean;
  rounded?: boolean;
  floating?: boolean;
  disabled?: boolean;
  size?: string;
  href?: string;
  role?: string;
  block?: boolean;
  type?: 'reset' | 'submit' | 'button';
  active?: boolean;
  toggle?: boolean;
  target?: string;
  value?: string | number;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBBtnGroup: FunctionComponent<{
  className?: string;
  role?: string;
  shadow?: string;
  toolbar?: boolean;
  size?: string;
  vertical?: boolean;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBSpinner: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  grow?: boolean;
  color?: string;
  size?: string;
  [rest: string]: any;
}>;

declare const MDBCard: FunctionComponent<{
  className?: string;
  border?: string;
  background?: string;
  shadow?: string;
  alignment?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardHeader: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  border?: string;
  background?: string;
  [rest: string]: any;
}>;

declare const MDBCardSubTitle: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardTitle: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardText: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardBody: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardFooter: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  border?: string;
  background?: string;
  [rest: string]: any;
}>;

declare const MDBCardImage: FunctionComponent<{
  className?: string;
  position?: string;
  overlay?: boolean;
  fluid?: boolean;
  [rest: string]: any;
}>;

declare const MDBCardOverlay: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardLink: FunctionComponent<{
  className?: string;
  [rest: string]: any;
}>;

declare const MDBCardGroup: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBListGroup: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  [rest: string]: any;
}>;

declare const MDBListGroupItem: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  color?: string;
  [rest: string]: any;
}>;

declare const MDBTooltip: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  tooltipTag?: ComponentProps<any>;
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
    | 'left-end'
    | undefined;
  options?: Record<string, unknown>;
  title?: string | ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
  [rest: string]: any;
}>;

declare const MDBRow: FunctionComponent<{
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  className?: string;
  end?: boolean;
  evenly?: boolean;
  middle?: boolean;
  tag?: ElementType;
  start?: boolean;
  top?: boolean;
  [rest: string]: any;
}>;

declare const MDBIcon: FunctionComponent<{
  className?: string;
  fab?: boolean;
  far?: boolean;
  fas?: boolean;
  fal?: boolean;
  flag?: string;
  size?: string;
  color?: string;
  icon?: string;
  border?: boolean;
  rotate?: string;
  pull?: string;
  spin?: boolean;
  list?: boolean;
  fixed?: boolean;
  pulse?: boolean;
  flip?: string;
  inverse?: boolean;
  stack?: string;
  [rest: string]: any;
}>;

declare const MDBTypography: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  variant?: string;
  blockquote?: boolean;
  note?: boolean;
  noteColor?: string;
  listUnStyled?: boolean;
  listInLine?: boolean;
  colorText?: string;
  [rest: string]: any;
}>;

declare const MDBBreadcrumb: FunctionComponent<{
  bold?: boolean;
  children?: ReactNode;
  className?: string;
  tag?: ReactElement;
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
  [rest: string]: any;
}>;

declare const MDBBreadcrumbItem: FunctionComponent<{
  active?: boolean;
  className?: string;
  tag?: ElementType;
  current?: 'page' | 'step' | 'location';
  [rest: string]: any;
}>;

declare const MDBNavbar: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: 'nav' | 'div';
  [rest: string]: any;
  light?: boolean;
  dark?: boolean;
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
  expand?: string | boolean;
  bgColor?: 'white' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  fixed?: boolean;
  sticky?: boolean;
}>;

declare const MDBNavbarLink: FunctionComponent<{
  active?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  tag?: ElementType;
  [rest: string]: any;
  link?: boolean;
}>;

declare const MDBNavbarBrand: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBNavbarItem: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  active?: boolean;
  text?: boolean;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBNavbarNav: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: ElementType;
  right?: boolean;
  fullWidth?: boolean;
  left?: boolean;
  [rest: string]: any;
}>;

declare const MDBNavbarToggler: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBFooter: FunctionComponent<{
  children?: ReactNode;
  className?: string;
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
  tag?: 'footer' | 'div';
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  [rest: string]: any;
}>;

declare const MDBPagination: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: string;
  tag?: ComponentProps<any>;
  circle?: boolean;
  [rest: string]: any;
}>;

declare const MDBPaginationLink: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPaginationItem: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tag?: ReactElement;
  [rest: string]: any;
}>;

declare const MDBTable: FunctionComponent<{
  className?: string;
  align?: 'top' | 'bottom' | 'middle';
  borderColor?:
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
  bordered?: boolean;
  borderless?: boolean;
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
  hover?: boolean;
  small?: boolean;
  striped?: boolean;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBTableHead: FunctionComponent<{
  className?: string;
  tag?: ElementType;
  dark?: boolean;
  light?: boolean;
  [rest: string]: any;
}>;

declare const MDBTableBody: FunctionComponent<{
  className?: string;
  tag?: ElementType;
  [rest: string]: any;
}>;

declare const MDBProgress: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  height?: number | string;
  style?: Record<string, unknown>;
  [rest: string]: any;
}>;

declare const MDBProgressBar: FunctionComponent<{
  animated?: boolean;
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  className?: string;
  striped?: boolean;
  style?: Record<string, unknown>;
  tag?: ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  width?: string | number;
  [rest: string]: any;
}>;

declare const MDBInput: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  wrapperTag?: ComponentProps<any>;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  wrapperClass?: string;
  disabled?: boolean;
  size?: string;
  readonly?: boolean;
  contrast?: boolean;
  value?: string;
  name?: string;
  labelRef?: RefObject<HTMLLabelElement>;
  [rest: string]: any;
}>;

declare const MDBCheckbox: FunctionComponent<{
  className?: string;
  wrapperTag?: ComponentProps<any>;
  wrapperClass?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  inline?: boolean;
  checked?: boolean;
  btn?: boolean;
  btnColor?: string;
  [rest: string]: any;
}>;

declare const MDBRadio: typeof MDBCheckbox;

declare const MDBCollapse: FunctionComponent<{
  className?: string;
  navbar?: boolean;
  show?: boolean;
  center?: boolean;
  style?: Record<string, unknown>;
  [rest: string]: any;
}>;

declare type DropdownProps = {
    className?: string;
    group?: boolean;
    isOpen?: boolean;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    options?: Record<string, unknown>;
    tag?: React.ComponentProps<any>;
    [rest: string]: any;
    animation?: boolean;
};

declare const MDBDropdown: React$1.FC<DropdownProps>;

declare const MDBDropdownItem: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownMenu: FunctionComponent<{
  className?: string;
  style?: Record<string, any>;
  wrapperStyle?: Record<string, any>;
  dark?: boolean;
  responsive?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownToggle: FunctionComponent<{
  className?: string;
  border?: string;
  background?: string;
  shadow?: string;
  alignment?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownLink: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownDivider: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownHeader: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopover: FunctionComponent<{
  btnChildren?: ReactNode;
  btnClassName?: string;
  tag?: ComponentProps<any>;
  className?: string;
  dismiss?: boolean;
  isOpen?: boolean;
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
  poperStyle?: Record<string, unknown>;
  popperTag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopoverBody: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopoverHeader: FunctionComponent<{
  className?: string;
  tag?: ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCheckbox, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownDivider, MDBDropdownHeader, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBFooter, MDBIcon, MDBInput, MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRow, MDBSpinner, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip, MDBTypography };
