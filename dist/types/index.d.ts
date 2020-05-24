import { FunctionComponent, ReactNode, Component, ElementType, SyntheticEvent, RefObject, FormEvent } from 'react';

declare const MDBAlert: FunctionComponent<{
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  className?: string;
  children?: ReactNode;
  dismiss?: boolean;
  tag?: string;
  onClose?: () => void;
  onClosed?: () => void;
}>;

declare class MDBAnimation extends Component<
  {
    className?: string;
    children?: ReactNode;
    count?: number;
    delay?: string;
    duration?: number;
    infinite?: boolean;
    reveal?: boolean;
    tag?: string | void;
    type:
      | 'flash'
      | 'bounce'
      | 'pulse'
      | 'rubberBand'
      | 'shake'
      | 'headShake'
      | 'swing'
      | 'tada'
      | 'wobble'
      | 'jello'
      | 'bounceIn'
      | 'bounceInDown'
      | 'bounceInLeft'
      | 'bounceInRight'
      | 'bounceInUp'
      | 'bounceOut'
      | 'bounceOutDown'
      | 'bounceOutLeft'
      | 'bounceOutRight'
      | 'bounceOutUp'
      | 'fadeIn'
      | 'fadeInDown'
      | 'fadeInDownBig'
      | 'fadeInLeft'
      | 'fadeInLeftBig'
      | 'fadeInRight'
      | 'fadeInRightBig'
      | 'fadeInUp'
      | 'fadeInUpBig'
      | 'fadeOut'
      | 'fadeOutDown'
      | 'fadeOutDownBig'
      | 'fadeOutLeft'
      | 'fadeOutLeftBig'
      | 'fadeOutRight'
      | 'fadeOutRightBig'
      | 'fadeOutUp'
      | 'fadeOutUpBig'
      | 'flipInX'
      | 'flipInY'
      | 'flipOutX'
      | 'flipOutY'
      | 'lightSpeedIn'
      | 'lightSpeedOut'
      | 'rotateIn'
      | 'rotateInDownLeft'
      | 'rotateInDownRight'
      | 'rotateInUpLeft'
      | 'rotateInUpRight'
      | 'rotateOut'
      | 'rotateOutDownLeft'
      | 'rotateOutDownRight'
      | 'rotateOutUpLeft'
      | 'rotateOutUpRight'
      | 'hinge'
      | 'rollIn'
      | 'rollOut'
      | 'zoomIn'
      | 'zoomInDown'
      | 'zoomInLeft'
      | 'zoomInRight'
      | 'zoomInUp'
      | 'zoomOut'
      | 'zoomOutDown'
      | 'zoomOutLeft'
      | 'zoomOutRight'
      | 'zoomOutUp'
      | 'slideInDown'
      | 'slideInLeft'
      | 'slideInRight'
      | 'slideInUp'
      | 'slideOutDown'
      | 'slideOutLeft'
      | 'slideOutRight'
      | 'slideOutUp';
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

declare const MDBBox: FunctionComponent<{
  tag?: ElementType;
  className?: string;
  display?:
    | 'none'
    | 'inline'
    | 'inline-block'
    | 'block'
    | 'table'
    | 'table-row'
    | 'table-cell'
    | 'flex'
    | 'inline-flex';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around';
  flex?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | 'wrap'
    | 'nowrap'
    | 'wrap-reverse'
    | 'fill'
    | 'grow-0 '
    | 'grow-1'
    | 'shrink-0'
    | 'shrink-1'
    | 'center';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'stretch' | 'around ';
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  color?:
    | 'red'
    | 'pink'
    | 'purple'
    | 'deep-purple'
    | 'indigo'
    | 'blue'
    | 'light-blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'light-green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deep-orange'
    | 'brown'
    | 'grey'
    | 'blue-grey'
    | 'mdb-color white'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'default'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'muted'
    | 'light';
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'default'
    | 'warning'
    | 'danger'
    | 'dark'
    | 'light';
  m?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mt?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mr?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mb?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  ml?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  mx?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  my?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  p?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pt?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pr?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pb?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  pl?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  px?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
  py?: 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2 ' | '3' | '4' | '5';
}>;

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

declare const MDBCardImage$1: FunctionComponent<{
  className?: string;
  children?: ReactNode;
  src?: string;
  [rest: string]: any;
}>;

declare class MDBCarousel extends Component<
  {
    activeItem?: number;
    className?: string;
    children?: ReactNode;
    mobileGesture?: boolean;
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
    noRecordsFoundLabel?: string;
    maxHeight?: string;
    noBottomColumns?: boolean;
    order?: string[];
    pagesAmount?: number;
    paging?: boolean;
    paginationLabel?: string[] | object[];
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
    onSearch?: (value: string) => string | void;
    onSort?: (obj: { column: string; direction: string }) => object | void;
    onPageChange?: (obj: {
      activePage: number;
      pagesAmount: number;
    }) => object | void;
    [rest: string]: any;
  },
  any
> {}

declare class MDBDataTable$1 extends Component<
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
    noRecordsFoundLabel?: string;
    maxHeight?: string;
    noBottomColumns?: boolean;
    order?: string[];
    pagesAmount?: number;
    paging?: boolean;
    paginationLabel?: string[] | object[];
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
    onSearch?: (value: string) => string | void;
    onSort?: (obj: { column: string; direction: string }) => object | void;
    onPageChange?: (obj: {
      activePage: number;
      pagesAmount: number;
    }) => object | void;
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

declare const MDBLink: FunctionComponent<{
  active?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  to?: string;
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

declare class MDBModal extends Component<
  {
    [rest: string]: any;
    animation?: 'top' | 'bottom' | 'left' | 'right';
    autoFocus?: boolean;
    backdrop?: boolean;
    backdropClassName?: string;
    backdropStyles?: object;
    backdropTransitionTimeout?: number;
    cascading?: boolean;
    centered?: boolean;
    children?: ReactNode;
    className?: string;
    contentClassName?: string;
    disableBackdrop?: boolean;
    disableFocusTrap?: boolean;
    fade?: boolean;
    frame?: boolean;
    fullHeight?: boolean;
    hiddenModal?: () => void;
    hideModal?: () => void;
    id?: string;
    inline: boolean;
    isOpen?: boolean;
    keyboard?: boolean;
    modalClassName?: string;
    modalStyle?: 'success' | 'info' | 'danger' | 'warning';
    modalStylesWithoutBackdrop?: ReactNode;
    modalTransitionTimeout?: number;
    noClickableBodyWithoutBackdrop: boolean;
    overflowScroll: boolean;
    position?: string;
    role?: string;
    showModal?: () => void;
    side?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'fluid';
    tabIndex?: string;
    toggle?: () => void;
    wrapClassName?: boolean;
    wrapperStyles?: object;
  },
  any
> {}

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
  link?: boolean;
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
  email?: boolean;
  material?: boolean;
  modifiers?: {};
  id?: string;
  isVisible?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  popover?: boolean;
  sm?: boolean;
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

declare const MDBRating: FunctionComponent<{
  containerClassName?: string;
  data?: {
    icon?: string;
    tooltip?: string;
    choosed?: boolean;
    [rest: string]: any;
  };
  feedback?: boolean;
  fillClassName?: string;
  fillColors?: boolean | string[];
  iconClassName?: string;
  iconFaces?: boolean;
  iconSize?:
    | 'lg'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  iconRegular?: boolean;
  tag?: string;
  getValue?: (value: {
    tooltip?: string;
    icon?: string;
    size?:
      | 'lg'
      | '1x'
      | '2x'
      | '3x'
      | '4x'
      | '5x'
      | '6x'
      | '7x'
      | '8x'
      | '9x'
      | '10x';
    [rest: string]: any;
  }) => void;
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
  wrapperClassName ?:string;
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

declare const MDBTypogrphy: FunctionComponent<{
  className?: string;
  tag?: 'ul' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h1-responsive'
    | 'h2-responsive'
    | 'h3-responsive'
    | 'h4-responsive'
    | 'h5-responsive'
    | 'h5-responsive'
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4';
  blockquote?: boolean;
  bqColor?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'secondary'
    | 'light';
  bqTitle?: string;
  listUnStyled?: boolean;
  listInLine?: boolean;
  colorText?:
    | 'red'
    | 'pink'
    | 'purple'
    | 'deep-purple'
    | 'indigo'
    | 'blue'
    | 'light-blue'
    | 'cyan'
    | 'teal'
    | 'green'
    | 'light-green'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'orange'
    | 'deep-orange'
    | 'brown'
    | 'grey'
    | 'blue-grey'
    | 'mdb-color white';
  note?: boolean;
  noteColor?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'secondary'
    | 'light'
    | 'dark'
    | 'unique'
    | 'stylish'
    | 'special'
    | 'elegant';
  noteTitle?: string;
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

type buttonColor = 
  | 'amber'
  | 'blue-grey'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'danger'
  | 'dark-green'
  | 'dark'
  | 'deep-orange'
  | 'deep-purple'
  | 'default'
  | 'elegant'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'info'
  | 'light-blue'
  | 'light-green'
  | 'light'
  | 'lime'
  | 'mdb-color'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'secondary'
  | 'success'
  | 'unique'
  | 'warning'
  | 'red'
  | 'yellow';

type classNameType = { className?: string };
type iconSize =
  | 'lg'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';

interface TypesFree extends classNameType {
  action?: boolean;
  active?: boolean;
  block?: boolean;
  circle?: boolean;
  color?: buttonColor;
  disabled?: boolean;
  download?: string;
  href?: string;
  innerRef?:
    | RefObject<HTMLButtonElement>
    | ((ref: RefObject<HTMLButtonElement>) => void)
    | null;
  role?: string;
  size?: 'sm' | 'lg';
  social?: string;
  tag?: string;
  target?: string;
  type?: 'reset' | 'submit' | 'button';
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void;
  [rest: string]: any;
}

declare const MDBBtn: FunctionComponent<TypesFree>;

interface TypesFree$1 extends classNameType {
  background?: boolean;
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
  id?: string;
  iconSize?: iconSize;
  inputRef?:
    | RefObject<HTMLInputElement>
    | ((ref: RefObject<HTMLInputElement>) => void)
    | null;
  outline?: boolean;
  label?: string | boolean;
  labelClass?: string;
  labelId?: string;
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
}

declare class MDBInput extends Component<TypesFree$1, any> {}

export { MDBAlert, MDBAnimation, MDBBadge, MDBBox, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBBtnToolbar, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBCardImage$1 as MDBCardVideo, MDBCarousel, MDBCarouselCaption, MDBCarouselControl, MDBCarouselIndicator, MDBCarouselIndicators, MDBCarouselInner, MDBCarouselItem, MDBCloseIcon, MDBCol, MDBCollapse, MDBContainer, MDBDataTable, MDBDataTable$1 as MDBDataTableV5, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBEdgeHeader, MDBFooter, MDBFormInline, MDBFreeBird, MDBHamburgerToggler, MDBIcon, MDBIframe, MDBInput, MDBInputGroup, MDBInputSelect as MDBInputNumeric, MDBJumbotron, MDBLink, MDBListGroup, MDBListGroupItem, MDBMask, MDBMedia, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBNav, MDBNavItem, MDBNavLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNotification, MDBPageItem, MDBPageLink as MDBPageNav, MDBPagination, MDBPopper as MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBPopper, MDBProgress, MDBRating, MDBRow, MDBTabContent, MDBTabPane, MDBTable, MDBTableBody, MDBTableFoot, MDBTableHead, MDBPopper as MDBTooltip, MDBTreeview, MDBTreeviewItem, MDBTreeviewList, MDBTypogrphy as MDBTypo, MDBTypogrphy as MDBTypography, MDBView, MDBWaves };
