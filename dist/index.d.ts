import * as React$1 from 'react';
import React__default, { HTMLAttributes, RefObject, ComponentProps, ReactNode, FunctionComponent, ReactElement } from 'react';

type BaseComponent = Pick<
  React.HTMLAttributes<HTMLElement>,
  | 'className'
  | 'id'
  | 'style'
  | 'onClick'
  | 'onMouseUp'
  | 'onMouseMove'
  | 'onMouseDown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseOver'
  | 'onMouseOut'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onScroll'
  | 'onDrop'
  | 'children'
> & {
  [rest: string]: any;
};

interface ContainerProps extends BaseComponent {
    breakpoint?: string;
    fluid?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBContainer: React$1.FunctionComponent<ContainerProps>;

interface ColumnProps extends BaseComponent {
    center?: boolean;
    end?: boolean;
    lg?: string | number;
    md?: string | number;
    offsetSm?: string | number;
    offsetMd?: string | number;
    offsetLg?: string | number;
    order?: string | number;
    size?: string | number;
    sm?: string | number;
    start?: boolean;
    tag?: React.ComponentProps<any>;
    xl?: string | number;
    xxl?: string | number;
    xs?: string | number;
}

declare const MDBCol: React$1.FunctionComponent<ColumnProps>;

type backgroundColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'
  | 'transparent';

type textColor =
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

interface BadgeProps extends BaseComponent {
    color?: backgroundColor;
    dot?: boolean;
    notification?: boolean;
    pill?: boolean;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBBadge: React$1.FunctionComponent<BadgeProps>;

type btnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type anchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type joinedTypes = btnProps & anchorProps;
interface ButtonProps extends Omit<joinedTypes, 'size' | 'color'> {
    active?: boolean;
    block?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'none' | 'link' | 'tertiary';
    floating?: boolean;
    noRipple?: boolean;
    outline?: boolean;
    rippleUnbound?: boolean;
    rippleColor?: string;
    rippleRadius?: number;
    rippleDuration?: number;
    rippleCentered?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    toggle?: boolean;
    target?: string;
    tag?: React.ComponentProps<any>;
    to?: string;
}

declare const MDBBtn: React$1.FunctionComponent<ButtonProps>;

type size = 'sm' | 'lg';

interface ButtonGroupProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    size?: size;
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    toolbar?: boolean;
    vertical?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBBtnGroup: React$1.FunctionComponent<ButtonGroupProps>;

interface SpinnerProps extends BaseComponent {
    color?: textColor;
    grow?: boolean;
    size?: size;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBSpinner: React$1.FunctionComponent<SpinnerProps>;

interface CardProps extends BaseComponent {
    alignment?: string;
    border?: string;
    background?: backgroundColor;
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBCard: React$1.FunctionComponent<CardProps>;

interface CardHeaderProps extends BaseComponent {
    border?: string;
    background?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBCardHeader: React$1.FunctionComponent<CardHeaderProps>;

interface CardSubTitleProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardSubTitle: React$1.FunctionComponent<CardSubTitleProps>;

interface CardTitleProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardTitle: React$1.FunctionComponent<CardTitleProps>;

interface CardTextProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardText: React$1.FunctionComponent<CardTextProps>;

interface CardBodyProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardBody: React$1.FunctionComponent<CardBodyProps>;

interface CardFooterProps extends BaseComponent {
    border?: string;
    background?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBCardFooter: React$1.FunctionComponent<CardFooterProps>;

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    position?: string;
    overlay?: boolean;
    fluid?: boolean;
}

declare const MDBCardImage: React$1.FunctionComponent<CardImageProps>;

interface CardOverlayProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardOverlay: React$1.FunctionComponent<CardOverlayProps>;

type CardLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

declare const MDBCardLink: React$1.FunctionComponent<CardLinkProps>;

interface CardGroupProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardGroup: React$1.FunctionComponent<CardGroupProps>;

interface ListGroupProps extends BaseComponent {
    horizontal?: boolean;
    horizontalSize?: string;
    light?: boolean;
    numbered?: boolean;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    small?: boolean;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroup: React$1.FunctionComponent<ListGroupProps>;

interface ListGroupItemProps extends BaseComponent {
    action?: boolean;
    color?: backgroundColor;
    disabled?: boolean;
    noBorders?: boolean;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroupItem: React$1.FunctionComponent<ListGroupItemProps>;

type placement =
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

interface TooltipProps extends BaseComponent {
    disableMouseDown?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    tag?: React.ComponentProps<any>;
    tooltipTag?: React.ComponentProps<any>;
    title?: React.ReactNode;
    wrapperProps?: Record<string, unknown>;
    wrapperClass?: string;
    onShow?: () => any;
    onHide?: () => any;
}

declare const MDBTooltip: React$1.FunctionComponent<TooltipProps>;

interface RowProps extends BaseComponent {
    around?: boolean;
    between?: boolean;
    bottom?: boolean;
    center?: boolean;
    end?: boolean;
    evenly?: boolean;
    middle?: boolean;
    start?: boolean;
    tag?: React.ComponentProps<any>;
    top?: boolean;
}

declare const MDBRow: React$1.FunctionComponent<RowProps>;

type IconProps = {
    animate?: 'beat' | 'fade' | 'beat-fade' | 'bounce' | 'shake' | 'flip' | 'spin' | 'pulse';
    className?: string;
    iconType?: string;
    fab?: boolean;
    far?: boolean;
    fas?: boolean;
    fal?: boolean;
    flag?: string;
    size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
    color?: textColor;
    icon?: string;
    border?: boolean;
    rotate?: '90' | '180' | '270' | 'by';
    pull?: 'left' | 'right';
    spin?: boolean;
    list?: boolean;
    fixed?: boolean;
    pulse?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    inverse?: boolean;
    stack?: '1x' | '2x';
    style?: React.CSSProperties;
    [rest: string]: any;
};

declare const MDBIcon: React$1.FunctionComponent<IconProps>;

type TypographyProps = BaseComponent & {
    blockquote?: boolean;
    color?: textColor;
    listUnStyled?: boolean;
    listInLine?: boolean;
    note?: boolean;
    noteColor?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

declare const MDBTypography: React$1.FunctionComponent<TypographyProps>;

interface BreadcrumbProps extends BaseComponent {
    bold?: boolean;
    tag?: React.ComponentProps<any>;
    color?: textColor;
    uppercase?: boolean;
    ref?: React.Ref<HTMLOListElement>;
}

declare const MDBBreadcrumb: React$1.FunctionComponent<BreadcrumbProps>;

interface BreadcrumbItemProp extends BaseComponent {
    active?: boolean;
    current?: 'page' | 'step' | 'location';
    ref?: React.Ref<HTMLLIElement>;
}

declare const MDBBreadcrumbItem: React$1.FunctionComponent<BreadcrumbItemProp>;

interface NavbarProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'scrolling'> {
    tag?: React.ComponentProps<any>;
    light?: boolean;
    dark?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
    expand?: string | boolean;
    bgColor?: 'white' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    fixed?: string;
    sticky?: boolean;
    transparent?: boolean;
    scrollingNavbarOffset?: number;
    scrolling?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBNavbar: React$1.FunctionComponent<NavbarProps>;

interface NavbarLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    active?: boolean;
    disabled?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBNavbarLink: React$1.FunctionComponent<NavbarLinkProps>;

interface NavbarBrandProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBNavbarBrand: React$1.FunctionComponent<NavbarBrandProps>;

interface NavbarItemProps extends React.AllHTMLAttributes<HTMLElement> {
    active?: boolean;
    text?: boolean;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBNavbarItem: React$1.FunctionComponent<NavbarItemProps>;

interface NavbarNavProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    right?: boolean;
    fullWidth?: boolean;
    left?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBNavbarNav: React$1.FunctionComponent<NavbarNavProps>;

interface NavbarTogglerProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBNavbarToggler: React$1.FunctionComponent<NavbarTogglerProps>;

interface FooterProps extends BaseComponent {
    color?: textColor;
    tag?: React.ComponentProps<any>;
    bgColor?: backgroundColor;
    ref?: React.Ref<HTMLDivElement>;
}

declare const MDBFooter: React$1.FunctionComponent<FooterProps>;

interface PaginationProps extends BaseComponent {
    center?: boolean;
    end?: boolean;
    start?: boolean;
    size?: size;
    circle?: boolean;
    ref?: React.Ref<HTMLUListElement>;
}

declare const MDBPagination: React$1.FunctionComponent<PaginationProps>;

interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    ref?: React.Ref<HTMLAnchorElement>;
    tag?: React.ComponentProps<any>;
}

declare const MDBPaginationLink: React$1.FunctionComponent<PaginationLinkProps>;

interface PaginationItemProps extends BaseComponent {
    active?: boolean;
    disabled?: boolean;
    ref?: React.Ref<HTMLLIElement>;
}

declare const MDBPaginationItem: React$1.FunctionComponent<PaginationItemProps>;

interface TableProps extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'align'> {
    align?: 'top' | 'middle' | 'bottom';
    borderColor?: textColor;
    color?: backgroundColor;
    bordered?: boolean;
    borderless?: boolean;
    small?: boolean;
    hover?: boolean;
    classNameResponsive?: string;
    striped?: boolean;
    responsive?: string | boolean;
}

declare const MDBTable: React$1.FunctionComponent<TableProps>;

interface TableHeadProps extends React.HTMLAttributes<HTMLElement> {
    dark?: boolean;
    light?: boolean;
}

declare const MDBTableHead: React$1.FunctionComponent<TableHeadProps>;

type TableBodyProps = React.HTMLAttributes<HTMLElement>;

declare const MDBTableBody: React$1.FunctionComponent<TableBodyProps>;

interface ProgressProps extends BaseComponent {
    height?: number | string;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBProgress: React$1.FunctionComponent<ProgressProps>;

interface ProgressBarProps extends BaseComponent {
    animated?: boolean;
    bgColor?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    striped?: boolean;
    tag?: React.ComponentProps<any>;
    valuemax?: string | number;
    valuemin?: string | number;
    valuenow?: string | number;
    width?: string | number;
    [rest: string]: any;
}

declare const MDBProgressBar: React$1.FunctionComponent<ProgressBarProps>;

type InputELement = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputProps = InputELement & {
    contrast?: boolean;
    label?: React__default.ReactNode;
    labelStyle?: React__default.CSSProperties;
    labelClass?: string;
    labelRef?: React__default.RefObject<HTMLLabelElement>;
    ref?: React__default.Ref<HTMLInputElement>;
    readonly?: boolean;
    size?: string;
    wrapperTag?: React__default.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: React__default.CSSProperties;
};

declare const MDBInput: React$1.FunctionComponent<InputProps>;

interface InputTemplateProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    btn?: boolean;
    btnColor?: string;
    disableWrapper?: boolean;
    inputRef?: React__default.MutableRefObject<any>;
    label?: React__default.ReactNode;
    labelClass?: string;
    labelStyle?: React__default.CSSProperties;
    inline?: boolean;
    toggleSwitch?: boolean;
    wrapperTag?: React__default.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: React__default.CSSProperties;
}

type CheckboxProps = Omit<InputTemplateProps, 'toggleSwitch'>;

declare const MDBCheckbox: React$1.FunctionComponent<CheckboxProps>;

type RadioProps = Omit<InputTemplateProps, 'toggleSwitch'>;

declare const MDBRadio: React.FunctionComponent<RadioProps>;

interface CollapseProps extends HTMLAttributes<HTMLElement> {
    collapseRef?: RefObject<HTMLElement>;
    show?: boolean;
    tag?: ComponentProps<any>;
    navbar?: boolean;
    direction?: 'vertical' | 'horizontal';
    onShow?: () => any;
    onHide?: () => any;
}

declare const MDBCollapse: React$1.FunctionComponent<CollapseProps>;

interface DropdownProps extends BaseComponent {
    animation?: boolean;
    group?: boolean;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    children?: ReactNode;
    tag?: ComponentProps<any>;
    onHide?: () => any;
    onShow?: () => any;
}

declare const MDBDropdown: ({ animation, onHide, onShow, ...props }: DropdownProps) => JSX.Element;

interface DropdownItemProps extends BaseComponent {
    tag?: ComponentProps<any>;
    childTag?: ComponentProps<any>;
    children?: ReactNode;
    divider?: boolean;
    header?: boolean;
    link?: boolean;
    href?: string;
    disabled?: boolean;
    className?: string;
    preventCloseOnClick?: boolean;
}

declare const MDBDropdownItem: FunctionComponent<DropdownItemProps>;

interface DropdownMenuProps extends BaseComponent {
    appendToBody?: boolean;
    dark?: boolean;
    responsive?: '' | 'start' | 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start' | 'sm-end' | 'md-end' | 'lg-end' | 'xl-end' | 'xxl-end';
    tag?: ComponentProps<any>;
    children: ReactElement[] | ReactElement;
    alwaysOpen?: boolean;
}

declare const MDBDropdownMenu: FunctionComponent<DropdownMenuProps>;

interface DropdownToggleProps extends BaseComponent {
    split?: boolean;
    tag?: ComponentProps<any>;
}

declare const MDBDropdownToggle: FunctionComponent<DropdownToggleProps>;

interface PopoverProps extends ButtonProps {
    btnChildren?: React.ReactNode;
    btnClassName?: string;
    dismiss?: boolean;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    poperStyle?: React.CSSProperties;
    popperTag?: React.ComponentProps<any>;
    tag?: React.ComponentProps<any>;
    onShow?: () => any;
    onHide?: () => any;
}

declare const MDBPopover: React$1.FunctionComponent<PopoverProps>;

interface PopoverBodyProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
}

declare const MDBPopoverBody: React$1.FunctionComponent<PopoverBodyProps>;

interface PopoverHeaderProps extends React.AllHTMLAttributes<HTMLHeadElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBPopoverHeader: React$1.FunctionComponent<PopoverHeaderProps>;

interface ModalProps extends BaseComponent {
    animationDirection?: 'top' | 'bottom' | 'right' | 'left';
    appendToBody?: boolean;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    leaveHiddenModal?: boolean;
    modalRef?: React.RefObject<HTMLElement>;
    onHide?: () => void;
    onHidePrevented?: () => any;
    onShow?: () => void;
    show?: boolean;
    setShow?: React.SetStateAction<any>;
    staticBackdrop?: boolean;
    nonInvasive?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBModal: React$1.FunctionComponent<ModalProps>;

interface ModalDialogProps extends BaseComponent {
    centered?: boolean;
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';
    scrollable?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalDialog: React$1.FunctionComponent<ModalDialogProps>;

interface ModalContentProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalContent: React$1.FunctionComponent<ModalContentProps>;

interface ModalHeaderProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalHeader: React$1.FunctionComponent<ModalHeaderProps>;

interface ModalTitleProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalTitle: React$1.FunctionComponent<ModalTitleProps>;

interface ModalBodyProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalBody: React$1.FunctionComponent<ModalBodyProps>;

interface ModalFooterProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalFooter: React$1.FunctionComponent<ModalFooterProps>;

interface ScrollspyProps extends BaseComponent {
    container?: Window | React__default.MutableRefObject<any>;
    offset?: number;
}

declare const MDBScrollspy: React$1.FunctionComponent<ScrollspyProps>;

interface ScrollspyNavLinkProps extends BaseComponent {
    collapsible?: boolean;
    onActivate?: (id?: string) => void;
    subsections?: Array<React__default.MutableRefObject<any>>;
    targetRef: React__default.MutableRefObject<any>;
}

declare const MDBScrollspyNavLink: React$1.FunctionComponent<ScrollspyNavLinkProps>;

interface ScrollspySubListProps extends BaseComponent {
    collapsible?: Array<React__default.MutableRefObject<any>>;
}

declare const MDBScrollspySubList: React$1.FunctionComponent<ScrollspySubListProps>;

type SwitchProps = Omit<InputTemplateProps, 'toggleSwitch'>;

declare const MDBSwitch: React.FunctionComponent<SwitchProps>;

interface RangeProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    disableTooltip?: boolean;
    label?: string;
    labelId?: string;
    labelClass?: string;
    step?: string;
    inputRef?: React__default.MutableRefObject<any>;
}

declare const MDBRange: React__default.FunctionComponent<RangeProps>;

interface FileProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: React__default.ReactNode;
    labelClass?: string;
    labelStyle?: React__default.CSSProperties;
    inputRef?: React__default.MutableRefObject<any>;
    size?: string;
}

declare const MDBFile: React$1.FunctionComponent<FileProps>;

type InputGroupProps = Omit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
    noWrap?: boolean;
    noBorder?: boolean;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    size?: string;
    tag?: React__default.ComponentProps<any>;
    textTag?: React__default.ComponentProps<any>;
    textClass?: string;
    textBefore?: React__default.ReactNode | Array<React__default.ReactNode>;
    textAfter?: React__default.ReactNode | Array<React__default.ReactNode>;
    textProps?: Record<string, unknown>;
};

declare const MDBInputGroup: React$1.FunctionComponent<InputGroupProps>;

interface RippleProps extends React__default.AllHTMLAttributes<HTMLElement> {
    rippleUnbound?: boolean;
    rippleColor?: string;
    rippleRadius?: number;
    rippleDuration?: number;
    rippleCentered?: boolean;
    ref?: React__default.ForwardedRef<any>;
    rippleTag?: React__default.ComponentProps<any>;
}

declare const MDBRipple: React$1.FunctionComponent<RippleProps>;

type ValidationProps = React__default.FormHTMLAttributes<HTMLFormElement> & {
    isValidated?: boolean;
    ref?: React__default.Ref<any>;
};

declare const MDBValidation: React$1.FunctionComponent<ValidationProps>;

interface TabsProps extends BaseComponent {
    fill?: boolean;
    justify?: boolean;
    pills?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBTabs: React$1.FunctionComponent<TabsProps>;

interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    ref?: React.Ref<any>;
}

declare const MDBTabsItem: React$1.FunctionComponent<TabsItemProps>;

interface TabsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    ref?: React.Ref<any>;
    onShow?: () => any;
    onHide?: () => any;
}

declare const MDBTabsLink: React$1.FunctionComponent<TabsLinkProps>;

interface TabsContentProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBTabsContent: React$1.FunctionComponent<TabsContentProps>;

interface TabsPaneProps extends BaseComponent {
    show?: boolean;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBTabsPane: React$1.FunctionComponent<TabsPaneProps>;

declare const MDBCarousel: React$1.FunctionComponent<{
  asyncData?: any;
  activeItem?: number;
  className?: string;
  fade?: boolean;
  keyboard?: boolean;
  onSlide?: () => any;
  pause?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  touch?: boolean;
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

interface AccordionProps extends BaseComponent {
    alwaysOpen?: boolean;
    borderless?: boolean;
    flush?: boolean;
    initialActive?: number;
    onChange?: (id: number) => void;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordion: React$1.FunctionComponent<AccordionProps>;

interface AccordionItemProps extends BaseComponent {
    bodyClassName?: string;
    bodyStyle?: React__default.CSSProperties;
    collapseId: number;
    headerClassName?: string;
    headerStyle?: React__default.CSSProperties;
    headerTitle?: React__default.ReactNode;
    btnClassName?: React__default.ReactNode;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordionItem: React$1.FunctionComponent<AccordionItemProps>;

type TextAreaElement = Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'value' | 'defaultValue'>;
type TextAreaProps = TextAreaElement & {
    contrast?: boolean;
    defaultValue?: string;
    label?: React__default.ReactNode;
    labelStyle?: React__default.CSSProperties;
    labelClass?: string;
    labelRef?: React__default.MutableRefObject<any>;
    inputRef?: React__default.MutableRefObject<any>;
    readonly?: boolean;
    size?: string;
    textarea?: boolean;
    value?: string;
    wrapperTag?: React__default.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: Record<string, unknown>;
};

declare const MDBTextArea: React$1.FunctionComponent<TextAreaProps>;

interface ValidationItemProps extends BaseComponent {
    tag?: React__default.ComponentProps<any>;
    invalid?: boolean;
    feedback?: React__default.ReactNode;
    tooltip?: boolean;
}

declare const MDBValidationItem: React$1.FunctionComponent<ValidationItemProps>;

export { MDBAccordion, MDBAccordionItem, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselItem, MDBCheckbox, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFile, MDBFooter, MDBIcon, MDBInput, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRange, MDBRipple, MDBRow, MDBScrollspy, MDBScrollspyNavLink as MDBScrollspyLink, MDBScrollspySubList, MDBSpinner, MDBSwitch, MDBTable, MDBTableBody, MDBTableHead, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTextArea, MDBTooltip, MDBTypography, MDBValidation, MDBValidationItem };
