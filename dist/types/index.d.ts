import { FunctionComponent, ReactNode, Component, RefObject, SyntheticEvent, FormEvent } from 'react';

declare const MDBAlert: FunctionComponent<{
    color?: 'default' | 'primary'| 'secondary'| 'success'| 'danger'| 'warning'| 'info'| 'light'| 'dark';
    className?: string;
    children?: ReactNode;
    dismiss?: boolean;
    onClose?: () => void;
    onClosed?: () => void;
}>;

declare class MDBAnimation extends Component<
  {
    className?: string;
    children?: ReactNode;
    count?: number;
    delay?: string;
    duration?: string;
    infinite?: boolean;
    reveal?: boolean;
    tag?: string | void;
    type:
      | "flash"
      | "bounce"
      | "pulse"
      | "rubberBand"
      | "shake"
      | "headShake"
      | "swing"
      | "tada"
      | "wobble"
      | "jello"
      | "bounceIn"
      | "bounceInDown"
      | "bounceInLeft"
      | "bounceInRight"
      | "bounceInUp"
      | "bounceOut"
      | "bounceOutDown"
      | "bounceOutLeft"
      | "bounceOutRight"
      | "bounceOutUp"
      | "fadeIn"
      | "fadeInDown"
      | "fadeInDownBig"
      | "fadeInLeft"
      | "fadeInLeftBig"
      | "fadeInRight"
      | "fadeInRightBig"
      | "fadeInUp"
      | "fadeInUpBig"
      | "fadeOut"
      | "fadeOutDown"
      | "fadeOutDownBig"
      | "fadeOutLeft"
      | "fadeOutLeftBig"
      | "fadeOutRight"
      | "fadeOutRightBig"
      | "fadeOutUp"
      | "fadeOutUpBig"
      | "flipInX"
      | "flipInY"
      | "flipOutX"
      | "flipOutY"
      | "lightSpeedIn"
      | "lightSpeedOut"
      | "rotateIn"
      | "rotateInDownLeft"
      | "rotateInDownRight"
      | "rotateInUpLeft"
      | "rotateInUpRight"
      | "rotateOut"
      | "rotateOutDownLeft"
      | "rotateOutDownRight"
      | "rotateOutUpLeft"
      | "rotateOutUpRight"
      | "hinge"
      | "rollIn"
      | "rollOut"
      | "zoomIn"
      | "zoomInDown"
      | "zoomInLeft"
      | "zoomInRight"
      | "zoomInUp"
      | "zoomOut"
      | "zoomOutDown"
      | "zoomOutLeft"
      | "zoomOutRight"
      | "zoomOutUp"
      | "slideInDown"
      | "slideInLeft"
      | "slideInRight"
      | "slideInUp"
      | "slideOutDown"
      | "slideOutLeft"
      | "slideOutRight"
      | "slideOutUp";
    style?: {};
    onAnimationEnd?: () => void;
    onAnimationStart?: () => void;
    onAnimationIteration?: () => void;
    [rest: string]: any;
  },
  any
> {}

declare const MDBBadge: FunctionComponent<{
  color?: string;
  pill?: boolean;
  className?: string;
  children?: ReactNode;
  tag?: string;
  [rest: string]: any;
}>

declare const MDBBreadcrumb: FunctionComponent<{
  bold?: boolean;
  className?: string;
  children?: ReactNode;
  color?: string;
  light?: boolean;
  uppercase?: boolean;
  [rest: string]: any;
}>

declare const MDBBreadcrumbItem: FunctionComponent<{
  active?: boolean;
  appendIcon?: boolean;
  bold?: boolean;
  className?: string;
  children?: ReactNode;
  icon?: string;
  iconBrand?: boolean;
  iconClassName?: string;
  iconLight?: boolean;
  iconRegular?: boolean;
  iconSize?:  "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  [rest: string]: any;
}>

declare const MDBBtn: FunctionComponent<{
  active?: boolean;
  action?: boolean;
  block?: boolean;
  circle?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  download?: string;
  flat?: boolean;
  floating?: boolean;
  gradient?:
    | "purple"
    | "blue"
    | "aqua"
    | "peach"
    | "warm-flame"
    | "night-fade"
    | "spring-warmth"
    | "juicy-peach"
    | "young-passion"
    | "rainy-ashville"
    | "sunny-morning"
    | "lady-lips"
    | "winter-neva"
    | "frozen-dreams"
    | "dusty-grass"
    | "tempting-azure"
    | "heavy-rain"
    | "amy-crisp"
    | "mean-fruit"
    | "deep-blue"
    | "ripe-malinka"
    | "cloudy-knoxville"
    | "morpheus-den"
    | "rare-wind"
    | "near-moon";
    href?: string;
    innerRef?: RefObject<HTMLButtonElement> | ((ref: RefObject<HTMLButtonElement>) => void) | null;
    outline?: boolean;
    role?: string;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    social?: string;
    tag?: string;
    target?: string;
    type?: 'reset' | 'submit' | 'button';
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    [rest: string]: any;
}>

declare const MDBBtnGroup: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  role?: string;
  size?: "sm" | "md" | "lg";
  vertical?: boolean;
  [rest: string]: any;
}>;

declare const MDBBtnToolbar: FunctionComponent<{
  "aria-label"?: string;
  className?: string;
  children?: ReactNode;
  role?: string;
  [rest: string]: any;
}>;

declare const MDBIcon: FunctionComponent<{
    border?: boolean;
    brand?: boolean;
    className?: string;
    fab?: boolean;
    fal?: boolean;
    far?: boolean;
    fixed?: boolean;
    flip?: 'horizontal' | 'vertical';
    icon: string;
    inverse?: boolean;
    light?: boolean;
    list?: boolean;
    pull?: 'left' | 'right';
    pulse?: boolean;
    regular?: boolean;
    rotate?: '90' | '180' | '270';
    size?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    spin?: boolean;
    stack?: '1x' | '2x';
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    [rest: string]: any;
}>;

declare const MDBCard: FunctionComponent<{
  border?: string;
  cascade?: boolean;
  color?: string;
  collection?: boolean;
  className?: string;
  ecommerce?: boolean;
  narrow?: boolean;
  news?: boolean;
  pricing?: boolean;
  personal?: boolean;
  reverse?: boolean;
  testimonial?: boolean;
  text?: string;
  tag?: string;
  wide?: boolean;
  [rest: string]: any;
}>;

declare const MDBCardBody: FunctionComponent<{
  cascade?: boolean;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBCardFooter: FunctionComponent<{
  border?: string;
  color?: string;
  className?: string;
  muted?: boolean;
  small?: boolean;
  tag?: string;
  text?: string;
  transparent?: boolean;
  [rest: string]: any;
}>;

declare const MDBCardHeader: FunctionComponent<{
  color?: string;
  text?: string;
  border?: string;
  transparent?: boolean;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBCardGroup: FunctionComponent<{
  className?: string;
  deck?: boolean;
  column?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBCardImage: FunctionComponent<{
  alt?: string;
  cascade?: boolean;
  className?: string;
  children?: ReactNode;
  hover?: boolean;
  overlay?: string;
  src?: string;
  tag?: string;
  top?: boolean;
  waves?: boolean;
  zoom?: boolean;
  [rest: string]: any;
}>;

declare const MDBCardText: FunctionComponent<{
  className?: string;
  muted?: boolean;
  small?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBCardTitle: FunctionComponent<{
  className?: string;
  sub?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare class MDBCarousel extends Component<
  {
    activeItem?: number;
    className?: string;
    children?: ReactNode;
    multiItem?: boolean;
    interval?: number;
    thumbnails?: boolean;
    testimonial?: boolean;
    showControls?: boolean;
    showIndicators?: boolean;
    slide?: boolean;
    length?: number;
    tab?: string;
    onHoverStop?: boolean;
    [rest: string]: any;
  },
  any
> {}

declare const MDBCarouselCaption: FunctionComponent<{
  active?: string;
  className?: string;
  children?: ReactNode;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBCarouselControl: FunctionComponent<{
  className?: string;
  direction?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  multiItem?: boolean;
  tag?: string;
  testimonial?: boolean;
  onClick?: (e: SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}>;

declare const MDBCarouselIndicator: FunctionComponent<{
  active: boolean;
  alt?: string;
  className?: string;
  children?: ReactNode;
  img?: string;
  [rest: string]: any;
}>;

declare const MDBCarouselIndicators: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  [rest: string]: any;
}>;

declare class MDBCarouselInner extends Component<{
  active?: boolean;
  className?: string;
  childrenCount?: number;
  children?: ReactNode;
  tag?: string;
  [rest: string]: any;
}, any> {}

declare class MDBCarouselItem extends Component<{
  active?: boolean;
  activeItem?: any;
  length?: any;
  slide?: any;
  className?: string;
  children?: ReactNode;
  tag?: string;
  itemId?: number | string;
  [rest: string]: any;
}, any> {}

declare const MDBCloseIcon: FunctionComponent<{
    ariaLabel?: string;
    className?: string;
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
    [rest: string]: any;
}>;

declare const MDBCol: FunctionComponent<{
    bottom?: boolean;
    className?: string;
    middle?: boolean;
    top?: boolean;
    size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
    xs?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    md?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    lg?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    [rest: string]: any;
}>;

declare class MDBCollapse extends Component<
  {
    className?: string;
    children?: ReactNode;
    delay?: { show: number, hide: number };
    isOpen?: boolean | string;
    id?: string;
    navbar?: boolean;
    onClosed?: () => void;
    onOpened?: () => void;
    [rest: string]: any;
  },
  any
> {}

declare const MDBContainer: FunctionComponent<{
  className?: string;
  fluid?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare class MDBDataTable extends Component<
  {
    autoWidth?: boolean;
    barReverse?: boolean;
    bordered?: boolean;
    borderless?: boolean;
    btn?: boolean;
    className?: string;
    children?: ReactNode;
    dark?: boolean;
    data?: {
      columns: {
        label?: string;
        field?: string;
        sort?: string;
        width?: number;
        searchable?: boolean;
        [rest: string]: any;
      }[];
      rows: {
        clickEvent?: () => void;
        [rest: string]: any;
      }[];
    };
    displayEntries?: boolean;
    entries?: number;
    entrieslabel?: string;
    entriesOptions?: number[];
    exportToCSV?: boolean;
    fixed?: boolean;
    hover?: boolean;
    info?: boolean;
    infoLabel?: string[];
    maxHeight?: string;
    order?: string[];
    pagesAmount?: number;
    paging?: boolean;
    pagingLabel?: string[];
    responsive?: boolean;
    responsiveSm?: boolean;
    responsiveMd?: boolean;
    responsiveLg?: boolean;
    responsiveXl?: boolean;
    searching?: boolean;
    searchingLabel?: string;
    scrollX?: boolean;
    scrollY?: boolean;
    sortable?: boolean;
    small?: boolean;
    striped?: boolean;
    theadColor?: string;
    theadTextWhite?: boolean;
    tbodyColor?: string;
    tbodyTextWhite?: boolean;
    tag?: string;
    onSearch?: (value: string) => string | void,
    onSort?: (obj: { column: string, direction: string }) => object | void,
    onPageChange?: (obj: { activePage: number , pagesAmount: number }) => object | void, 
    [rest: string]: any;
  },
  any
> {}

declare class MDBDropdown extends Component<{
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  group?: boolean;
  size?: "sm" | "lg";
  tag?: string;
  toggle?: () => void;
  [rest: string]: any;
}, any> {}

declare class MDBDropdownItem extends Component<{
  active?: boolean;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  divider?: boolean;
  header?: boolean;
  toggle?: boolean;
  tag?: string;
  onClick?: (e: SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}, any> {}

declare class MDBDropdownMenu extends Component<
  {
    isOpen?: boolean;
    className?: string;
    color?: "primary" | "default" | "secondary" | "success" | "dark" | "danger" | "info" | "warning" | "ins" | "indigo" | "special";
    children: ReactNode;
    flip?: boolean;
    right?: boolean;
    tag?: string;
    [rest: string]: any;
  },
  any
> {}

declare class MDBDropdownToggle extends Component<
  {
    caret?: boolean;
    className?: string;
    color?: string;
    children?: ReactNode;
    disabled?: boolean;
    nav?: boolean;
    tag?: string;
    onClick?: (e: SyntheticEvent<MouseEvent>) => void;
    [rest: string]: any;
  },
  any
> {}

declare const MDBEdgeHeader: FunctionComponent<{
  color?: string;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBFooter: FunctionComponent<{
  color?: string;
  children?: ReactNode;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBFormInline: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  waves?: boolean;
  [rest: string]: any;
}>;

declare const MDBFreeBird: FunctionComponent<{
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBHamburgerToggler: FunctionComponent<{
  color?: string;
  className?: string;
  id?: string;
  [rest: string]: any;
}>;

declare class MDBIframe extends Component<
  {
    allowFullScreen?: boolean;
    className?: string;
    height?: number;
    id?: string;
    name?: string;
    ratio?: "1by1" | "4by3" | "16by9" | "21by9";
    sandbox?: boolean;
    src: string;
    styles?: {};
    title?: string;
    width?: number;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onLoad?: () => void;
    [rest: string]: any;
  },
  any
> {}

declare class MDBInput extends Component<
  {
    background?: boolean;
    className?: string;
    children?: ReactNode;
    checked?: boolean;
    containerClass?: string;
    disabled?: boolean;
    error?: string;
    filled?: boolean;
    gap?: boolean;
    group?: boolean;
    hint?: string;
    icon?: string;
    iconBrand?: boolean;
    iconClass?: string;
    iconLight?: boolean;
    iconRegular?: boolean;
    iconSize?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    id?: string;
    inputRef?: RefObject<HTMLInputElement> | ((ref: RefObject<HTMLInputElement>) => void) | null;
    outline?: boolean;
    label?: string | boolean;
    labelClass?: string;
    noTag?: boolean;
    size?: "sm" | "lg";
    success?: string;
    tag?: string;
    type?: string;
    validate?: boolean;
    value?: number | string;
    valueDefault?: number | string;
    getValue?: (value: number | string) => void;
    onBlur?: (e: FormEvent<HTMLInputElement>) => void;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    onFocus?: (e: FormEvent<HTMLInputElement>) => void;
    onInput?: (e: FormEvent<HTMLInputElement>) => void;
    onIconClick?: (e: SyntheticEvent<MouseEvent>) => void;
    onIconMouseEnter?: (e: SyntheticEvent<MouseEvent>) => void;
    onIconMouseLeave?: (e: SyntheticEvent<MouseEvent>) => void;
    [rest: string]: any;
  },
  any
> {}

declare const MDBInputGroup: FunctionComponent<{
  append?: ReactNode | string;
  appendClassNames?: string;
  ariaLabel?: string;
  className?: string;
  children?: ReactNode;
  containerClassName?: string;
  containerId?: string;
  hint?: string;
  id?: string;
  inputs?: ReactNode;
  label?: string;
  labelClassName?: string;
  material?: boolean;
  prepend?: ReactNode | string;
  prependClassNames?: string;
  size?: "sm" | "lg";
  tag?: string;
  textClassName?: string;
  type?: string;
  value?: string;
  valueDefault?: string;
  [rest: string]: any;
}>;

declare const MDBInputSelect: FunctionComponent<{
  className?: string;
  getValue?: (value: number) => number;
  [rest: string]: any;
}>;

declare const MDBJumbotron: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  fluid?: boolean;
  [rest: string]: any;
}>;

declare const MDBListGroup: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>

declare const MDBListGroupItem: FunctionComponent<{
  active?: boolean;
  danger?: boolean;
  disabled?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
  info?: boolean;
  success?: boolean;
  tag?: string;
  warning?: boolean;
  [rest: string]: any;
}>;

declare const MDBMask: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  overlay?: string;
  pattern?: string | number;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBMedia: FunctionComponent<{
  body?: boolean;
  bottom?: boolean;
  children?: ReactNode;
  className?: string;
  heading?: boolean;
  figure?: boolean;
  figImg?: boolean;
  figCap?: boolean;
  figCapRight?: boolean;
  figCapLeft?: boolean;
  left?: boolean;
  list?: boolean;
  middle?: boolean;
  object?: boolean;
  thumbnail?: boolean;
  round?: boolean;
  right?: boolean;
  tag?: string;
  top?: boolean;
  [rest: string]: any;
}>;

declare class MDBModal extends Component<{
  animation?: "top" | "bottom" | "left" | "right";
  autoFocus?: boolean;
  backdrop?: boolean;
  backdropClassName?: string;
  cascading?: boolean;
  centered?: boolean;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
  fade?: boolean;
  frame?: boolean;
  fullHeight?: boolean;
  isOpen?: boolean;
  id?: string;
  labelledBy?: string;
  modalClassName?: string;
  modalStyle?: "success" | "info" | "danger" | "warning";
  position?: string;
  side?: boolean;
  size?: "sm" | "md" | "lg" | "fluid";
  role?: string;
  tabIndex?: string;
  wrapClassName?: boolean;
  toggle?: () => void;
  hiddenModal?: () => void;
  hideModal?: () => void;
  showModal?: () => void;
  [rest: string]: any;
}, any> {}

declare const MDBModalBody: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  [rest: string]: any;
}>;

declare const MDBModalFooter: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  [rest: string]: any;
}>;

declare const MDBModalHeader: FunctionComponent<{
  className?: string;
  closeAriaLabel?: string;
  children?: ReactNode;
  tag?: string;
  titleClass?: string;
  toggle?: () => void;
  [rest: string]: any;
}>;

declare const MDBNav: FunctionComponent<{
  tag?: string;
  className?: string;
  children?: ReactNode;
  color?: string;
  classicTabs?: boolean;
  pills?: boolean;
  tabs?: boolean;
  header?: boolean;
  [rest: string]: any;
}>;

declare class MDBNavbar extends Component<{
  className?: string;
  color?: string;
  light?: boolean;
  dark?: boolean;
  double?: boolean;
  expand?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
  fixed?: "top" | "bottom";
  sticky?: string;
  scrolling?: boolean;
  scrollingNavbarOffset?: number;
  transparent?: boolean;
  tag?: string;
  [rest: string]: any;
}, any> {}

declare const MDBNavbarBrand: FunctionComponent<{
  className?: string;
  href?: string;
  [rest: string]: any;
}>;

declare const MDBNavbarNav: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  right?: boolean;
  left?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBNavbarToggler: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  left?: boolean;
  image?: string;
  right?: boolean;
  tag?: string;
  type?: string;
  onClick: (e: SyntheticEvent<MouseEvent>) => void;
  [rest: string]: any;
}>;

declare const MDBNavItem: FunctionComponent<{
  active?: boolean;
  children?: ReactNode;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBNavLink: FunctionComponent<{
  active?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  to?: string;
  [rest: string]: any;
}>;

declare class MDBNotification extends Component<{
  autohide?: number;
  bodyClassName?: string;
  bodyColor?: string;
  className?: string;
  children?: ReactNode;
  closeClassName?: string;
  fade?: boolean;
  icon?: string;
  iconClassName?: string;
  message?: string;
  show?: boolean;
  tag?: string;
  title?: string;
  text?: string;
  titleColor?: string;
  titleClassName?: string;
  [rest: string]: any;
}, any> {}

declare const MDBPagination: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  circle?: boolean;
  color?:  "blue"| "red"| "teal"| "dark-grey"| "dark" | "blue-grey"| "amber"| "purple";
  size?: "sm" | "lg";
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBPageItem: FunctionComponent<{
  active?: boolean;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBPageLink: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBPopper: FunctionComponent<{
  children?: ReactNode;
  clickable?: boolean;
  domElement?: boolean;
  modifiers?: {};
  id?: string;
  isVisible?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  popover?: boolean;
  style?: {};
  tag?: string;
  onChange?: () => void;
  [rest: string]: any;
}>;

declare const MDBPopoverBody: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBPopoverHeader: FunctionComponent<{
  children?: ReactNode;
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBProgress: FunctionComponent<{
  animated?: boolean;
  barClassName?: string;
  children?: ReactNode;
  color?: string;
  heigth?: string;
  material?: boolean;
  max?: number;
  min?: number;
  preloader?: boolean;
  striped?: boolean;
  id?: string;
  wrappedStyle?: {};
  value?: number;
  [rest: string]: any;
}>;

declare const MDBRow: FunctionComponent<{
  around?: boolean;
  between?: boolean;
  bottom?: boolean;
  center?: boolean;
  className?: string;
  end?: boolean;
  middle?: boolean;
  start?: boolean;
  tag?: string;
  top?: boolean;
  [rest: string]: any;
}>;

declare class MDBTabContent extends Component<{
  activeItem?: any;
  tabId?: any;
  className?: string;
  [rest: string]: any;
}, any> {}

declare class MDBTabPane extends Component<{
  activeItemId?: any;
  className?: string;
  tabId?: any;
  [rest: string]: any;
}, any> {}

declare const MDBTable: FunctionComponent<{
  autoWidth?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  btn?: boolean;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
  fixed?: boolean;
  theadColor?: string;
  hover?: boolean;
  maxHeight?: string;
  responsive?: boolean;
  responsiveSm?: boolean;
  responsiveMd?: boolean;
  responsiveLg?: boolean;
  responsiveXl?: boolean;
  scrollY?: boolean;
  small?: boolean;
  striped?: boolean;
  [rest: string]: any;
}>;

declare const MDBTableBody: FunctionComponent<{
  children?: ReactNode;
  color?: string;
  rows?: {
    clickEvent?: () => void;
    colspan?: number;
    [rest: string]: any;
  }[];
  textWhite?: boolean;
  [rest: string]: any;
}>;

declare const MDBTableFoot: FunctionComponent<{
  children?: ReactNode;
  color?: string;
  columns?: {}[];
  textWhite?: boolean;
  [rest: string]: any;
}>;

declare const MDBTableHead: FunctionComponent<{
  children?: ReactNode;
  color?: string;
  columns?: {
    label?: string;
    field?: string;
    minimal?: "sm" | "lg";
    [rest: string]: any;
  }[];
  textWhite?: boolean;
  [rest: string]: any;
}>;

declare const MDBTreeview: FunctionComponent<{
  className?: string;
  header?: string;
  listClassName?: string;
  tag?: string;
  theme?: string;
  getValue?: (value: {
    item: HTMLLIElement | null;
    value: string | null;
  }) => void;
  [rest: string]: any;
}>;

declare const MDBTreeviewItem: FunctionComponent<{
  className?: string;
  disabled?: boolean;
  disabledClassName?: string;
  fab?: boolean;
  fal?: boolean;
  far?: boolean;
  icon?: string;
  opened?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBTreeviewList: FunctionComponent<{
  className?: string;
  disabled?: boolean;
  disabledClassName?: string;
  fab?: boolean;
  fal?: boolean;
  far?: boolean;
  icon?: string;
  opened?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBView: FunctionComponent<{
  cascade?: boolean;
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  rounded?: boolean;
  src?: string;
  tag?: string;
  waves?: boolean;
  zoom?: boolean;
  [rest: string]: any;
}>

declare class MDBWaves extends Component<
  {
    outline?: boolean;
    flat?: boolean;
    dark?: boolean;
    animate?: boolean;
    cursorPos?: { top: number, left: number; time: Date };
    children?: ReactNode;
    [rest: string]: any;
  },
  any
> {}

declare class MDBAutocomplete extends Component<{
  data?: string[];
  disabled?: boolean; 
  className?: string;
  clear?: boolean; 
  clearColor?: string; 
  clearSize?: string; 
  id?: string; 
  label?: string; 
  labelClass?: string; 
  icon?: string; 
  iconBrand?: boolean; 
  iconLight?: boolean; 
  iconRegular?: boolean; 
  iconSize?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  iconClassName?: string; 
  placeholder?: string; 
  valueDefault?: string; 
  
  getValue?: (value: string) => void; 
  [rest: string]: any;
}, any> {}

declare const MDBAvatar: FunctionComponent<{
  circle?: boolean;
  className?: string;
  round?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare class MDBBtnFixed extends Component<{
  active?: boolean;
  block?: boolean;
  className?: string;
  color?: string;
  disabled?: boolean;
  flat?: boolean;
  floating?: boolean;
  gradient?:
    | "purple"
    | "blue"
    | "aqua"
    | "peach"
    | "warm-flame"
    | "night-fade"
    | "spring-warmth"
    | "juicy-peach"
    | "young-passion"
    | "rainy-ashville"
    | "sunny-morning"
    | "lady-lips"
    | "winter-neva"
    | "frozen-dreams"
    | "dusty-grass"
    | "tempting-azure"
    | "heavy-rain"
    | "amy-crisp"
    | "mean-fruit"
    | "deep-blue"
    | "ripe-malinka"
    | "cloudy-knoxville"
    | "morpheus-den"
    | "rare-wind"
    | "near-moon";
    icon?: string;
    iconBrand?: boolean;
    iconClassName?: string;
    iconLight?: boolean;
    iconRegular?: boolean;
    iconSize?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" |"10x";
    innerRef?: RefObject<HTMLButtonElement> | ((ref: RefObject<HTMLButtonElement>) => void) | null;
    outline?: boolean;
    role?: string;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    topSection?: string;
    type?: 'reset' | 'submit' | 'button';
    [rest: string]: any;
}, any> {}

declare class MDBBtnFixedItem extends Component<{
  active?: boolean;
  block?: boolean;
  buttonStyle?: object;
  className?: string;
  color?: string;
  disabled?: boolean;
  flat?: boolean;
  floating?: boolean;
  gradient?:
    | "purple"
    | "blue"
    | "aqua"
    | "peach"
    | "warm-flame"
    | "night-fade"
    | "spring-warmth"
    | "juicy-peach"
    | "young-passion"
    | "rainy-ashville"
    | "sunny-morning"
    | "lady-lips"
    | "winter-neva"
    | "frozen-dreams"
    | "dusty-grass"
    | "tempting-azure"
    | "heavy-rain"
    | "amy-crisp"
    | "mean-fruit"
    | "deep-blue"
    | "ripe-malinka"
    | "cloudy-knoxville"
    | "morpheus-den"
    | "rare-wind"
    | "near-moon";
    icon?: string;
    iconBrand?: boolean;
    iconClassName?: string;
    iconLight?: boolean;
    iconRegular?: boolean;
    iconSize?: "1x" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" |"10x";
    innerRef?: RefObject<HTMLButtonElement> | ((ref: RefObject<HTMLButtonElement>) => void) | null;
    outline?: boolean;
    role?: string;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    type?: 'reset' | 'submit' | 'button';
    [rest: string]: any;
}, any> {}

declare const MDBCardUp: FunctionComponent<{
  className?: string;
  color?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBChip: FunctionComponent<{
  alt?: string;
  bgColor?: string;
  className?: string;
  close?: boolean;
  gradient?: string;
  size?: string;
  src?: string;
  tag?: string;
  text?: string;
  hadleClose?: () => void;
  [rest: string]: any;
}>;

declare class MDBChipsInput extends Component<{
  className?: string;
  placeholder?: string;
  secondaryPlaceholder?: string;
  chips?: [];
  chipSize?: string;
  chipColor?: string;
  chipText?: string;
  chipGradient?: string;
  tag?: string;
  [rest: string]: any;
}, any> {}

declare const MDBCollapseHeader: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  tag?: string;
  tagClassName?: string;
  triggerOnClick?: () => void;
  [rest: string]: any;
}>;

declare class MDBDatePicker extends Component<{
  adornmentPosition?: string;
  allowKeyboardControl?: boolean;
  animateYearScrolling?: boolean;
  autoOk?: boolean;
  className?: string;
  cancelLabel?: ReactNode;
  clearable?: boolean;
  clearLabel?: ReactNode;
  disableFuture?: object;
  disableOpenOnEnter?: boolean;
  disablePast?: boolean;
  emptyLabel?: string;
  format?: string;
  initialFocusedDate?: string;
  InputAdornmentProps?: object;
  invalidDateMessage?: ReactNode;
  invalidLabel?: string;
  keyboard?: boolean;
  keyboardIcon?: ReactNode;
  leftArrowIcon?: ReactNode;
  mask?: any;
  maxDate?: string;
  maxDateMessage?: ReactNode;
  minDate?: string;
  minDateMessage?: ReactNode;
  okLabel?: ReactNode;
  openToYearSelection?: boolean;
  rightArrowIcon?: ReactNode;
  showTodayButton?: boolean;
  TextFieldComponent?: string;
  todayLabel?: string;
  locale?: string;
  theme?: object;
  tag?: string;
  value?: Date;
  valueDefault?: Date
  onInputChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  getValue?: (value: Date) => void
  [rest: string]: any;
}, any> {}

declare class MDBExportToCSV extends Component<
  {
    active?: boolean,
    block?: boolean,
    columns: object[],
    color?: string,
    circle?: boolean,
    children?: ReactNode,
    className?: string
    data: [],
    disabled?: boolean,
    floating?: boolean,
    flat?: boolean,
    gradient?: string,
    outline?: boolean,
    rounded?: boolean,
    size?: string,
    [rest: string]: any;
  },
  any
> {}

declare const MDBFileInput: FunctionComponent<{
  className?: string;
  btnTitle?: string;
  btnColor?: string;
  textFieldTitle?: string;
  multiple?: boolean;
  reset?: boolean;
  resetClassName?: string;
  resetAriaLabel?: string;
  reverse?: boolean;
  [rest: string]: any;
}>;

declare class MDBInputRange extends Component<{
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  tag?: string;
  getValue?: () => void;
  [rest: string]: any;
}, any> {}

declare class MDBInputSwitch extends Component<{
  className?: string;
  disabled?: boolean,
  checked?: boolean,
  labelLeft?: string;
  labelRight?: string;
  getValue?: (value: boolean) => void;
  onChange?: () => void;
  [rest: string]: any;
}, any> {}

declare class MDBLightbox extends Component<{
  images: [],
  itemClassName?: string,
  descriptionClasses?: string,
  noMargins?: boolean,
  marginSpace?: number,
  lg?: string,
  md?: string,
  sm?: string,
  size?: string,
  xl?: string,
  xs?: string,
  tag?: string;
  transition?: number
  [rest: string]: any;
}, any> {}

declare class MDBPerfectScrollbar extends Component<{
  children?: ReactNode;
  className?: string;
  containerRef?: RefObject<HTMLElement> | ((ref: RefObject<HTMLElement>) => void) | null;
  onScrollY?: () => void;
  onScrollX?: () => void;
  onScrollUp?: () => void;
  onScrollDown?: () => void;
  onScrollLeft?: () => void;
  onScrollRight?: () => void;
  onYReachStart?: () => void;
  onYReachEnd?: () => void;
  onXReachStart?: () => void;
  onXReachEnd?: () => void
  [rest: string]: any;
}, any> {}

declare const MDBRotatingCard: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  flipped?: boolean;
  tag?: string;
  innerTag?: string;
  [rest: string]: any;
}>;

declare const MDBScrollSpyBox: FunctionComponent<{
  children?: ReactNode,
  className?: string,
  [rest: string]: any;
}>

declare const MDBScrollSpyList: FunctionComponent<{
  children?: ReactNode,
  className?: string,
  color?: string;
  [rest: string]: any;
}>

declare const MDBScrollSpyListItem: FunctionComponent<{
  active?: boolean;
  children?: ReactNode,
  className?: string,
  [rest: string]: any;
}>

declare class MDBSelect extends Component<
  {
    children?: ReactNode;
    className?: string;
    color?: string;
    focusShadow?: string;
    focusBackgroundColor?: string;
    label?: string;
    labelClass?: string;
    multiple?: boolean;
    options?: {
      checked?: boolean;
      disabled?: boolean;
      icon?: string;
      text?: string;
      value?: string;
    }[];
    outline?: boolean;
    required?: boolean;
    search?: boolean;
    searchLabel?: string;
    searchId?: string;
    selected?: string;
    selectAll?: boolean;
    selectAllClassName?: string;
    selectAllLabel?: string;
    selectAllValue?: string;
    getTextContent?: (value: string) => void;
    getValue?: (value: string[]) => void;
    [rest: string]: any;
  },
  any
> {}

declare class MDBSelectInput extends Component<
  {
    className?: string;
    selected?: string | number;
    [rest: string]: any;
  },
  any
> {}

declare class MDBSelectOption extends Component<
  {
    children?: ReactNode,
    checked?: boolean,
    className?: string,
    disabled?: boolean,
    icon?: string,
    value?: string | number,
    separator?: boolean
    triggerOptionClick?: () => void,
    [rest: string]: any;
  },
  any
> {}

declare class MDBSelectOptions extends Component<
  {
    children?: ReactNode,
    className?: string,
    search?: boolean,
    searchLabel?: string,
    searchId?: string
    [rest: string]: any;
  },
  any
> {}

declare class MDBSideNav extends Component<{
  bg?: string;
  breakWidth?: number;
  children?: ReactNode;
  className?: string;
  hidden?: boolean;
  href?: string;
  logo?: string;
  mask?: ['slight', 'light', 'strong'];
  right?: boolean;
  triggerOpening?: boolean;
  tag?: string;
  fixed?: boolean;
  showOverlay?: boolean;
  responsive?: boolean;
  slim?: boolean
  onOverlayClick?: () => void;
  [rest: string]: any;
}, any> {}

declare class MDBSideNavCat extends Component<{
  disabled?: boolean,
  children?: ReactNode,
  className?: string,
  icon?: string,
  iconBrand?: boolean,
  iconLight?: boolean,
  iconRegular?: boolean,
  iconSize?: string,
  id?: string,
  isOpen?: boolean,
  isOpenID?: string,
  name?: string,
  tag?: string
  onClick?: () => void,
  [rest: string]: any;
}, any> {}

declare const MDBSideNavItem: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  innerRef?: ((innerRef: RefObject<HTMLElement>) => void) | RefObject<HTMLElement> | string | null;
  href?: string;
  tag?: string;
  [rest: string]: any;
}>

declare class MDBSideNavLink extends Component<{
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  innerRef?: ((innerRef: RefObject<HTMLElement>) => void) | RefObject<HTMLElement> | string | null;
  shortcut?: string;
  tag?: string;
  topLevel?: boolean;
  to?: string;
  [rest: string]: any;
}, any> {}

declare class MDBSideNavNav extends Component<{
  children?: ReactNode,
  className?: string
  tag?: string,
  [rest: string]: any;
}, any> {}

declare const MDBSimpleChart: FunctionComponent<{
  endAngle?: number;
  fillColor?: string;
  height?: number;
  labelColor?: string;
  labelFontWeight?: string;
  labelFontSize?: string;
  percent?: number;
  padding?: number;
  radius?: number;
  railColor? : string;
  startAngle?: number;
  strokeWidth?: number;
  strokeColor?: string;
  style?: object;
  width?: number;
  [rest: string]: any;
}>;

declare const MDBSmoothScroll: FunctionComponent<{
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  bottom?: string;
  color?: string;
  className?: string;
  children?: ReactNode;
  duration?: number;
  floating?: boolean;
  flat?: boolean;
  fixed?: boolean;
  gradient?: string;
  offset?: number;
  outline?: boolean;
  right?: string;
  rounded?: boolean;
  spy?: boolean;
  smooth?: boolean;
  size?: string;
  social?: string;
  to: string;
  top?: string;
  left?: string;
  [rest: string]: any;
}>;

declare const MDBSpinner: FunctionComponent<{
  className?: string;
  big?: boolean;
  small?: boolean;
  crazy?: boolean;
  red?: boolean;
  green?: boolean;
  yellow?: boolean;
  multicolor?: boolean;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBStep: FunctionComponent<{
  form?: boolean;
  tag?: string;
  icon?: string; 
  iconClass?: string;
  stepName?: string;
  vertical?: boolean;
  [rest: string]: any;
}>;

declare const MDBStepper: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  form?: boolean;
  icon?: boolean;
  vertical?: boolean;
  [rest: string]: any;
}>;

declare class MDBSticky extends Component<
  {
    bottomOffset?: number;
    children: ReactNode;
    disableCompensation?: boolean;
    disableHardwareAcceleration?: boolean;
    relative?: boolean;
    topOffset?: number;
    [rest: string]: any;
  },
  any
> {}

declare class MDBStickyContent extends Component<any, any> {}

declare const MDBStreak: FunctionComponent<{
  by?: string;
  byClass?: string;
  children?: ReactNode;
  size?: 'lg'| 'md';
  quoteClass?: string;
  overlayClass?: string;
  photo?: string;
  wrapperClass?: string;
  [rest: string]: any;
}>;

declare const MDBScrollSpyText: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  scrollSpyRef?: ((ref: RefObject<HTMLElement>) => void) | RefObject<HTMLElement> | null;
  [rest: string]: any;
}>

declare class MDBTableEditable extends Component<
  {
    bordered?: boolean;
    className?: string;
    columns?: string[];
    children?: ReactNode;
    data?: (string | number)[][];
    hover?: boolean;
    responsive?: boolean;
    responsiveSm?: boolean;
    responsiveMd?: boolean;
    responsiveLg?: boolean;
    responsiveXl?: boolean;
    small?: boolean;
    striped?: boolean;
    [rest: string]: any;
  },
  any
> {}

declare const MDBTestimonial: FunctionComponent<{
  className?: string;
  tag?: string;
  [rest: string]: any;
}>;

declare const MDBTimeline: FunctionComponent<{
  form?: boolean;
  tag?: string;
  icon?: string; 
  iconClass?: string;
  stepName?: string;
  vertical?: boolean;
  [rest: string]: any;
}>;

declare const MDBTimelineStep: FunctionComponent<{
  className?: string,
  color?: string,
  colorful?: boolean;
  children?: ReactNode;
  hoverable?: boolean;
  href?: string,
  size?: string,
  inverted?: boolean;
  icon?: string,
  iconBrand?: boolean,
  iconClass?: string,
  iconLight?: boolean,
  iconRegular?: boolean,
  iconSize?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  label?: string;
  [rest: string]: any;
}>;

declare const MDBTimePicker: FunctionComponent<{
  id: string;
  allowedValues?: number[];
  autoSwitch?: boolean;
  cancelable?: boolean;
  cancelText?: string;
  clearable?: boolean;
  clearText?: string;
  closeOnCancel?: boolean;
  color?: string;
  doneText?: string;
  hours?: number;
  hoursFormat?: 12 | 24;
  label?:  string;
  minutes?: number;
  placeholder?: string;
  startFromInner?: boolean;
  getValue?: (value: string) => void;
  [rest: string]: any;
}>;

declare class MDBToast extends Component<any, any> {}

declare class MDBToastContainer extends Component<any, any> {}

export { MDBAlert, MDBAnimation, MDBAutocomplete, MDBAvatar, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBBtnToolbar, MDBBtnFixed as MDBButtonFixed, MDBBtnFixedItem as MDBButtonFixedItem, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBCardUp, MDBCarousel, MDBCarouselCaption, MDBCarouselControl, MDBCarouselIndicator, MDBCarouselIndicators, MDBCarouselInner, MDBCarouselItem, MDBChip, MDBChipsInput, MDBCloseIcon, MDBCol, MDBCollapse, MDBCollapseHeader, MDBContainer, MDBDataTable, MDBDatePicker, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBEdgeHeader, MDBExportToCSV, MDBFileInput, MDBFooter, MDBFormInline, MDBFreeBird, MDBHamburgerToggler, MDBIcon, MDBIframe, MDBInput, MDBInputGroup, MDBInputSelect as MDBInputNumeric, MDBJumbotron, MDBLightbox, MDBListGroup, MDBListGroupItem, MDBMask, MDBMedia, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBNav, MDBNavItem, MDBNavLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNotification, MDBPageItem, MDBPageLink as MDBPageNav, MDBPagination, MDBPerfectScrollbar, MDBPopper as MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBPopper, MDBProgress, MDBInputRange as MDBRangeInput, MDBRotatingCard, MDBRow, MDBScrollSpyBox as MDBScrollspyBox, MDBScrollSpyList as MDBScrollspyList, MDBScrollSpyListItem as MDBScrollspyListItem, MDBScrollSpyText as MDBScrollspyText, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions, MDBSideNav, MDBSideNavCat, MDBSideNavItem, MDBSideNavLink, MDBSideNavNav, MDBSimpleChart, MDBSmoothScroll, MDBSpinner, MDBStep, MDBStepper, MDBSticky, MDBStickyContent, MDBStreak, MDBInputSwitch as MDBSwitch, MDBTabContent, MDBTabPane, MDBTable, MDBTableBody, MDBTableEditable, MDBTableFoot, MDBTableHead, MDBTestimonial, MDBTimePicker, MDBTimeline, MDBTimelineStep, MDBToast, MDBToastContainer, MDBTreeview, MDBTreeviewItem, MDBTreeviewList, MDBView, MDBWaves };
