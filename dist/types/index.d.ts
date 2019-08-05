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

export { MDBAlert, MDBAnimation, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBBtnToolbar, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselControl, MDBCarouselIndicator, MDBCarouselIndicators, MDBCarouselInner, MDBCarouselItem, MDBCloseIcon, MDBCol, MDBCollapse, MDBContainer, MDBDataTable, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBEdgeHeader, MDBFooter, MDBFormInline, MDBFreeBird, MDBHamburgerToggler, MDBIcon, MDBIframe, MDBInput, MDBInputGroup, MDBInputSelect as MDBInputNumeric, MDBJumbotron, MDBListGroup, MDBListGroupItem, MDBMask, MDBMedia, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBNav, MDBNavItem, MDBNavLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNotification, MDBPageItem, MDBPageLink as MDBPageNav, MDBPagination, MDBPopper as MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBPopper, MDBProgress, MDBRow, MDBTabContent, MDBTabPane, MDBTable, MDBTableBody, MDBTableFoot, MDBTableHead, MDBTreeview, MDBTreeviewItem, MDBTreeviewList, MDBView, MDBWaves };
