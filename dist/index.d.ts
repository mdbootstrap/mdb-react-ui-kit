import * as React$1 from 'react';
import React__default from 'react';

declare const MDBContainer: React$1.FunctionComponent<{
  className?: string;
  fluid?: boolean;
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBCol: React$1.FunctionComponent<{
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
  tag?: React$1.ElementType;
  xl?: string;
  xs?: string;
  [rest: string]: any;
}>;

declare const MDBBadge: React$1.FunctionComponent<{
  className?: string;
  pill?: boolean;
  dot?: boolean;
  notification?: boolean;
  color?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBBtn: React$1.FunctionComponent<{
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
  noRipple?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBBtnGroup: React$1.FunctionComponent<{
  className?: string;
  role?: string;
  shadow?: string;
  toolbar?: boolean;
  size?: string;
  vertical?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBSpinner: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  grow?: boolean;
  color?: string;
  size?: string;
  [rest: string]: any;
}>;

declare const MDBCard: React$1.FunctionComponent<{
  className?: string;
  border?: string;
  background?: string;
  shadow?: string;
  alignment?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardHeader: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  border?: string;
  background?: string;
  [rest: string]: any;
}>;

declare const MDBCardSubTitle: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardTitle: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardText: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardBody: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardFooter: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  border?: string;
  background?: string;
  [rest: string]: any;
}>;

declare const MDBCardImage: React$1.FunctionComponent<{
  className?: string;
  position?: string;
  overlay?: boolean;
  fluid?: boolean;
  [rest: string]: any;
}>;

declare const MDBCardOverlay: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCardLink: React$1.FunctionComponent<{
  className?: string;
  [rest: string]: any;
}>;

declare const MDBCardGroup: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBListGroup: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  horizontal?: boolean;
  horizontalSize?: string;
  flush?: boolean;
  [rest: string]: any;
}>;

declare const MDBListGroupItem: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  active?: boolean;
  disabled?: boolean;
  action?: boolean;
  color?: string;
  [rest: string]: any;
}>;

declare const MDBTooltip: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  tooltipTag?: React$1.ComponentProps<any>;
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
  title?: string | React$1.ReactNode;
  wrapperProps?: Record<string, unknown>;
  wrapperClass?: string;
  [rest: string]: any;
}>;

declare const MDBRow: React$1.FunctionComponent<{
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  className?: string;
  end?: boolean;
  evenly?: boolean;
  middle?: boolean;
  tag?: React$1.ElementType;
  start?: boolean;
  top?: boolean;
  [rest: string]: any;
}>;

declare const MDBIcon: React$1.FunctionComponent<{
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

declare const MDBTypography: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  variant?: string;
  blockquote?: boolean;
  note?: boolean;
  noteColor?: string;
  listUnStyled?: boolean;
  listInLine?: boolean;
  colorText?: string;
  [rest: string]: any;
}>;

declare const MDBBreadcrumb: React$1.FunctionComponent<{
  bold?: boolean;
  children?: React$1.ReactNode;
  className?: string;
  tag?: React$1.ReactElement;
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

declare const MDBBreadcrumbItem: React$1.FunctionComponent<{
  active?: boolean;
  className?: string;
  tag?: React$1.ElementType;
  current?: 'page' | 'step' | 'location';
  [rest: string]: any;
}>;

declare const MDBNavbar: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
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
  fixed?: string;
  sticky?: boolean;
}>;

declare const MDBNavbarLink: React$1.FunctionComponent<{
  active?: boolean;
  children?: React$1.ReactNode;
  className?: string;
  disabled?: boolean;
  tag?: React$1.ElementType;
  [rest: string]: any;
  link?: boolean;
}>;

declare const MDBNavbarBrand: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBNavbarItem: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  active?: boolean;
  text?: boolean;
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBNavbarNav: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  tag?: React$1.ElementType;
  right?: boolean;
  fullWidth?: boolean;
  left?: boolean;
  [rest: string]: any;
}>;

declare const MDBNavbarToggler: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBFooter: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
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

declare const MDBPagination: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: string;
  tag?: React$1.ComponentProps<any>;
  circle?: boolean;
  [rest: string]: any;
}>;

declare const MDBPaginationLink: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPaginationItem: React$1.FunctionComponent<{
  children?: React$1.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  tag?: React$1.ReactElement;
  [rest: string]: any;
}>;

declare const MDBTable: React$1.FunctionComponent<{
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
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBTableHead: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ElementType;
  dark?: boolean;
  light?: boolean;
  [rest: string]: any;
}>;

declare const MDBTableBody: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ElementType;
  [rest: string]: any;
}>;

declare const MDBProgress: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  height?: number | string;
  style?: Record<string, unknown>;
  [rest: string]: any;
}>;

declare const MDBProgressBar: React$1.FunctionComponent<{
  animated?: boolean;
  bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
  className?: string;
  striped?: boolean;
  style?: Record<string, unknown>;
  tag?: React$1.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  width?: string | number;
  [rest: string]: any;
}>;

declare const MDBInput: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  wrapperTag?: React$1.ComponentProps<any>;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  wrapperClass?: string;
  wrapperStyle?: Record<string, unknown>;
  labelStyle?: React$1.CSSProperties;
  disabled?: boolean;
  size?: string;
  readonly?: boolean;
  contrast?: boolean;
  value?: string;
  name?: string;
  validation?: string;
  invalid?: boolean;
  validationTooltip?: boolean;
  labelRef?: React$1.RefObject<HTMLLabelElement>;
  textarea?: boolean;
  [rest: string]: any;
}>;

declare const MDBCheckbox: React$1.FunctionComponent<{
  className?: string;
  wrapperTag?: React$1.ComponentProps<any>;
  wrapperClass?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  disabled?: boolean;
  value?: string | boolean;
  name?: string;
  inline?: boolean;
  checked?: boolean;
  validation?: string;
  invalid?: boolean;
  btn?: boolean;
  btnColor?: string;
  [rest: string]: any;
}>;

declare const MDBRadio: typeof MDBCheckbox;

declare const MDBCollapse: React$1.FunctionComponent<{
  className?: string;
  navbar?: boolean;
  show?: boolean | string;
  center?: boolean;
  style?: Record<string, unknown>;
  tag?: React$1.ComponentProps<any>;
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

declare const MDBDropdown: React__default.FC<DropdownProps>;

declare const MDBDropdownItem: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownMenu: React$1.FunctionComponent<{
  className?: string;
  style?: Record<string, any>;
  dark?: boolean;
  responsive?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownToggle: React$1.FunctionComponent<{
  className?: string;
  border?: string;
  background?: string;
  shadow?: string;
  alignment?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownLink: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownDivider: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBDropdownHeader: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopover: React$1.FunctionComponent<{
  btnChildren?: React$1.ReactNode;
  btnClassName?: string;
  tag?: React$1.ComponentProps<any>;
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
  popperTag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopoverBody: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBPopoverHeader: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModal: React$1.FunctionComponent<{
  animationDirection?: string;
  backdrop?: boolean;
  className?: string;
  closeOnEsc?: boolean;
  tabIndex?: string;
  show?: boolean;
  staticBackdrop?: boolean;
  tag?: React$1.ComponentProps<any>;
  modalRef?: React$1.RefObject<HTMLElement>;
  [rest: string]: any;
}>;

declare const MDBModalDialog: React$1.FunctionComponent<{
  className?: string;
  centered?: boolean;
  size?: string;
  scrollable?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModalContent: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModalHeader: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModalTitle: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModalBody: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBModalFooter: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBScrollspy: React$1.FunctionComponent<{
  className?: string;
  offset?: number;
  onElement?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBScrollspySection: React$1.FunctionComponent<{
  className?: string;
  customSelect?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBScrollspyNavList: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBScrollspyNavItem: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBScrollspyNavLink: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  scrollElement?: HTMLElement;
  [rest: string]: any;
}>;

declare const MDBSwitch: typeof MDBCheckbox;

declare const MDBRange: React$1.FunctionComponent<{
  className?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  min?: string;
  max?: string;
  step?: string;
  value?: number;
  name?: string;
  [rest: string]: any;
}>;

declare const MDBFile: React$1.FunctionComponent<{
  className?: string;
  id?: string;
  label?: string;
  disabled?: boolean;
  labelId?: string;
  labelClass?: string;
  size?: string;
  name?: string;
  [rest: string]: any;
}>;

declare const MDBInputGroup: React$1.FunctionComponent<{
  className?: string;
  noWrap?: boolean;
  tag?: React$1.ComponentProps<any>;
  size?: string;
  [rest: string]: any;
}>;

declare const MDBInputGroupText: React$1.FunctionComponent<{
  className?: string;
  noBorder?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBInputGroupElement: React$1.FunctionComponent<{
  className?: string;
  textarea?: boolean;
  [rest: string]: any;
}>;

declare const MDBRipple: React$1.FunctionComponent<{
  className?: string;
  rippleUnbound?: boolean;
  rippleColor?: string;
  rippleRadius?: number;
  rippleDuration?: number;
  rippleCentered?: boolean;
  // rippleTag?: React.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBValidation: React$1.FunctionComponent<{
  className?: string;
  isValidated?: boolean;
  [rest: string]: any;
}>;

declare const MDBTabs: React$1.FunctionComponent<{
  className?: string;
  fill?: boolean;
  justify?: boolean;
  pills?: boolean;
  [rest: string]: any;
}>;

declare const MDBTabsItem: React$1.FunctionComponent<{
  className?: string;
  [rest: string]: any;
}>;

declare const MDBTabsLink: React$1.FunctionComponent<{
  className?: string;
  active?: boolean;
  color?: string;
  [rest: string]: any;
}>;

declare const MDBTabsContent: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBTabsPane: React$1.FunctionComponent<{
  className?: string;
  show?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarousel: React$1.FunctionComponent<{
  asyncData?: any;
  activeItem?: number;
  className?: string;
  fade?: boolean;
  keyboard?: boolean;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselInner: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselElement: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselCaption: React$1.FunctionComponent<{
  className?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBCarouselItem: React$1.FunctionComponent<{
  className?: string;
  interval?: number;
  itemId?: number;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBAccordion: React$1.FunctionComponent<{
  alwaysOpen?: boolean;
  className?: string;
  flush?: boolean;
  initialActive?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

declare const MDBAccordionItem: React$1.FunctionComponent<{
  className?: string;
  bodyClassName?: string;
  headerClassName?: string;
  collapseId: string;
  headerTitle?: string;
  tag?: React$1.ComponentProps<any>;
  [rest: string]: any;
}>;

export { MDBAccordion, MDBAccordionItem, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner, MDBCarouselItem, MDBCheckbox, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownDivider, MDBDropdownHeader, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBFile, MDBFooter, MDBIcon, MDBInput, MDBInputGroup, MDBInputGroupElement, MDBInputGroupText, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRange, MDBRipple, MDBRow, MDBScrollspy, MDBScrollspyNavItem, MDBScrollspyNavLink, MDBScrollspyNavList, MDBScrollspySection, MDBSpinner, MDBSwitch, MDBTable, MDBTableBody, MDBTableHead, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTooltip, MDBTypography, MDBValidation };
