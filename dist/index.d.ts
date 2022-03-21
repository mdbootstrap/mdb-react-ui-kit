import * as React$1 from 'react';
import React__default from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    breakpoint?: string;
    fluid?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBContainer: React$1.FunctionComponent<ContainerProps>;

interface ColumnProps extends React.HTMLAttributes<HTMLElement> {
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

interface BadgeProps extends Omit<React__default.AllHTMLAttributes<HTMLElement>, 'color'> {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info';
    dot?: boolean;
    notification?: boolean;
    pill?: boolean;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBBadge: React$1.FunctionComponent<BadgeProps>;

declare type btnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type anchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare type joinedTypes = btnProps & anchorProps;
interface ButtonProps extends Omit<joinedTypes, 'size' | 'color'> {
    active?: boolean;
    block?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'none' | 'link';
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

interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLElement>, 'size'> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    size?: 'sm' | 'lg';
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    toolbar?: boolean;
    vertical?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBBtnGroup: React$1.FunctionComponent<ButtonGroupProps>;

interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'body' | 'black-50' | 'white-50';
    grow?: boolean;
    size?: 'lg' | 'sm';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBSpinner: React$1.FunctionComponent<SpinnerProps>;

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    alignment?: string;
    border?: string;
    background?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'white' | 'info' | 'transparent';
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBCard: React$1.FunctionComponent<CardProps>;

interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
    border?: string;
    background?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'white' | 'info' | 'transparent';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBCardHeader: React$1.FunctionComponent<CardHeaderProps>;

interface CardSubTitleProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardSubTitle: React$1.FunctionComponent<CardSubTitleProps>;

interface CardTitleProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardTitle: React$1.FunctionComponent<CardTitleProps>;

interface CardTextProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardText: React$1.FunctionComponent<CardTextProps>;

interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardBody: React$1.FunctionComponent<CardBodyProps>;

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
    border?: string;
    background?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'white' | 'info' | 'transparent';
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

interface CardOverlayProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardOverlay: React$1.FunctionComponent<CardOverlayProps>;

declare type CardLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

declare const MDBCardLink: React$1.FunctionComponent<CardLinkProps>;

interface CardGroupProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}

declare const MDBCardGroup: React$1.FunctionComponent<CardGroupProps>;

interface ListGroupProps extends React__default.HTMLAttributes<HTMLElement> {
    horizontal?: boolean;
    horizontalSize?: string;
    flush?: boolean;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroup: React$1.FunctionComponent<ListGroupProps>;

interface ListGroupItemProps extends Omit<React__default.AllHTMLAttributes<HTMLLIElement>, 'action'> {
    active?: boolean;
    action?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';
    disabled?: boolean;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBListGroupItem: React$1.FunctionComponent<ListGroupItemProps>;

interface TooltipProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'title'> {
    disableMouseDown?: boolean;
    options?: Record<string, unknown>;
    placement?: 'top' | 'auto' | 'auto-start' | 'auto-end' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
    tag?: React.ComponentProps<any>;
    tooltipTag?: React.ComponentProps<any>;
    title?: React.ReactNode;
    wrapperProps?: Record<string, unknown>;
    wrapperClass?: string;
}

declare const MDBTooltip: React$1.FunctionComponent<TooltipProps>;

interface RowProps extends React.HTMLAttributes<HTMLElement> {
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

declare type IconProps = {
    animate?: 'beat' | 'fade' | 'beat-fade' | 'bounce' | 'shake' | 'flip' | 'spin' | 'pulse';
    className?: string;
    iconType?: string;
    fab?: boolean;
    far?: boolean;
    fas?: boolean;
    fal?: boolean;
    flag?: string;
    size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'body' | 'black-50' | 'white-50';
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

declare type TypographyProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'color'> & {
    blockquote?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'body' | 'black-50' | 'white-50';
    listUnStyled?: boolean;
    listInLine?: boolean;
    note?: boolean;
    noteColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'transparent';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

declare const MDBTypography: React$1.FunctionComponent<TypographyProps>;

interface BreadcrumbProps extends React.AllHTMLAttributes<HTMLElement> {
    bold?: boolean;
    tag?: React.ComponentProps<any>;
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
    uppercase?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBBreadcrumb: React$1.FunctionComponent<BreadcrumbProps>;

interface BreadcrumbItemProp extends React.AllHTMLAttributes<HTMLElement> {
    active?: boolean;
    tag?: React.ComponentProps<any>;
    current?: 'page' | 'step' | 'location';
    ref?: React.Ref<any>;
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

interface FooterProps extends React.AllHTMLAttributes<HTMLElement> {
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'body' | 'muted' | 'white' | 'black-50' | 'white-50';
    tag?: React.ComponentProps<any>;
    bgColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
    ref?: React.Ref<any>;
}

declare const MDBFooter: React$1.FunctionComponent<FooterProps>;

interface PaginationProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'size' | 'start'> {
    center?: boolean;
    end?: boolean;
    start?: boolean;
    size?: 'lg' | 'sm';
    tag?: React.ComponentProps<any>;
    circle?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBPagination: React$1.FunctionComponent<PaginationProps>;

interface PaginationLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBPaginationLink: React$1.FunctionComponent<PaginationLinkProps>;

interface PaginationItemProps extends React.AllHTMLAttributes<HTMLElement> {
    active?: boolean;
    disabled?: boolean;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBPaginationItem: React$1.FunctionComponent<PaginationItemProps>;

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

interface TableHeadProps extends React.AllHTMLAttributes<HTMLElement> {
    dark?: boolean;
    light?: boolean;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBTableHead: React$1.FunctionComponent<TableHeadProps>;

interface TableBodyProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBTableBody: React$1.FunctionComponent<TableBodyProps>;

interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
    height?: number | string;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBProgress: React$1.FunctionComponent<ProgressProps>;

interface ProgressBarProps extends React.HTMLAttributes<HTMLElement> {
    animated?: boolean;
    bgColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'white' | 'info' | 'transparent';
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

declare type InputELement = Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue'>;
declare type InputProps = InputELement & {
    contrast?: boolean;
    defaultValue?: string;
    label?: React__default.ReactNode;
    labelStyle?: React__default.CSSProperties;
    labelClass?: string;
    labelRef?: React__default.MutableRefObject<any>;
    inputRef?: React__default.MutableRefObject<any>;
    readonly?: boolean;
    size?: string;
    value?: string;
    wrapperTag?: React__default.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: Record<string, unknown>;
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

declare type CheckboxProps = Omit<InputTemplateProps, 'toggleSwitch'>;

declare const MDBCheckbox: React$1.FunctionComponent<CheckboxProps>;

declare type RadioProps = Omit<InputTemplateProps, 'toggleSwitch'>;

declare const MDBRadio: React.FunctionComponent<RadioProps>;

interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
    center?: boolean;
    collapseRef?: React.RefObject<any>;
    navbar?: boolean;
    show?: boolean | string;
    tag?: React.ComponentProps<any>;
}

declare const MDBCollapse: React$1.FunctionComponent<CollapseProps>;

interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
    animation?: boolean;
    group?: boolean;
    isOpen?: boolean;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    options?: Record<string, unknown>;
    placement?: 'top' | 'auto' | 'auto-start' | 'auto-end' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdown: React__default.FC<DropdownProps>;

interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownItem: React$1.FunctionComponent<DropdownItemProps>;

interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
    dark?: boolean;
    responsive?: '' | 'start' | 'end' | 'sm-start' | 'md-start' | 'lg-start' | 'xl-start' | 'xxl-start' | 'sm-end' | 'md-end' | 'lg-end' | 'xl-end' | 'xxl-end';
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownMenu: React$1.FunctionComponent<DropdownMenuProps>;

interface DropdownToggleProps extends ButtonProps {
    split?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownToggle: React$1.FunctionComponent<DropdownToggleProps>;

interface DropdownLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    disableClass?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownLink: React$1.FunctionComponent<DropdownLinkProps>;

interface DropdownDividerProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownDivider: React$1.FunctionComponent<DropdownDividerProps>;

interface DropdownHeaderProps extends React.AllHTMLAttributes<HTMLHeadingElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBDropdownHeader: React$1.FunctionComponent<DropdownHeaderProps>;

interface PopoverProps extends ButtonProps {
    btnChildren?: React.ReactNode;
    btnClassName?: string;
    dismiss?: boolean;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    placement?: 'top' | 'auto' | 'auto-start' | 'auto-end' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
    poperStyle?: React.CSSProperties;
    popperTag?: React.ComponentProps<any>;
    tag?: React.ComponentProps<any>;
}

declare const MDBPopover: React$1.FunctionComponent<PopoverProps>;

interface PopoverBodyProps extends React.HTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBPopoverBody: React$1.FunctionComponent<PopoverBodyProps>;

interface PopoverHeaderProps extends React.AllHTMLAttributes<HTMLHeadElement> {
    tag?: React.ComponentProps<any>;
}

declare const MDBPopoverHeader: React$1.FunctionComponent<PopoverHeaderProps>;

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
    animationDirection?: 'top' | 'bottom' | 'right' | 'left';
    appendToBody?: boolean;
    backdrop?: boolean;
    closeOnEsc?: boolean;
    leaveHiddenModal?: boolean;
    modalRef?: React.RefObject<HTMLElement>;
    show?: boolean;
    setShow?: React.SetStateAction<any>;
    staticBackdrop?: boolean;
    tag?: React.ComponentProps<any>;
}

declare const MDBModal: React$1.FunctionComponent<ModalProps>;

interface ModalDialogProps extends React.HTMLAttributes<HTMLElement> {
    centered?: boolean;
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';
    scrollable?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalDialog: React$1.FunctionComponent<ModalDialogProps>;

interface ModalContentProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalContent: React$1.FunctionComponent<ModalContentProps>;

interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalHeader: React$1.FunctionComponent<ModalHeaderProps>;

interface ModalTitleProps extends React.AllHTMLAttributes<HTMLHeadElement> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalTitle: React$1.FunctionComponent<ModalTitleProps>;

interface ModalBodyProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalBody: React$1.FunctionComponent<ModalBodyProps>;

interface ModalFooterProps extends React.HTMLAttributes<HTMLElement> {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}

declare const MDBModalFooter: React$1.FunctionComponent<ModalFooterProps>;

interface ScrollspyProps extends React.AllHTMLAttributes<HTMLAllCollection> {
    offset?: number;
    onElement?: boolean;
    setActive?: React.Dispatch<React.SetStateAction<number>>;
    tag?: React.ComponentProps<any>;
    targets?: NodeListOf<HTMLElement> | HTMLElement[];
    ref?: React.Ref<any>;
}

declare const MDBScrollspy: React$1.FunctionComponent<ScrollspyProps>;

interface ScrollspySectionProps extends React.AllHTMLAttributes<HTMLElement> {
    customSelect?: string;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBScrollspySection: React$1.FunctionComponent<ScrollspySectionProps>;

interface ScrollspyNavListProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    collapsible?: boolean;
    active?: boolean;
}

declare const MDBScrollspyNavList: React$1.FunctionComponent<ScrollspyNavListProps>;

interface ScrollspyNavItemProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBScrollspyNavItem: React$1.FunctionComponent<ScrollspyNavItemProps>;

interface ScrollspyNavLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    scrollElement?: HTMLElement;
    collapsible?: boolean;
    active?: boolean;
    ref?: React.Ref<any>;
}

declare const MDBScrollspyNavLink: React$1.FunctionComponent<ScrollspyNavLinkProps>;

declare type SwitchProps = Omit<InputTemplateProps, 'toggleSwitch'>;

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

declare type InputGroupProps = Omit<React__default.DetailedHTMLProps<React__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
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

declare type ValidationProps = React__default.FormHTMLAttributes<HTMLFormElement> & {
    formRef?: React__default.MutableRefObject<any>;
    isValidated?: boolean;
};

declare const MDBValidation: React$1.FunctionComponent<ValidationProps>;

interface TabsProps extends React.AllHTMLAttributes<HTMLUListElement> {
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
}

declare const MDBTabsLink: React$1.FunctionComponent<TabsLinkProps>;

interface TabsContentProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}

declare const MDBTabsContent: React$1.FunctionComponent<TabsContentProps>;

interface TabsPaneProps extends React.AllHTMLAttributes<HTMLElement> {
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

interface AccordionProps extends React__default.HTMLAttributes<HTMLElement> {
    alwaysOpen?: boolean;
    flush?: boolean;
    initialActive?: number;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordion: React$1.FunctionComponent<AccordionProps>;

interface AccordionItemProps extends React__default.HTMLAttributes<HTMLElement> {
    bodyClassName?: string;
    bodyStyle?: React__default.CSSProperties;
    collapseId: number;
    headerClassName?: string;
    headerStyle?: React__default.CSSProperties;
    headerTitle?: React__default.ReactNode;
    ref?: React__default.ForwardedRef<HTMLAllCollection>;
    tag?: React__default.ComponentProps<any>;
}

declare const MDBAccordionItem: React$1.FunctionComponent<AccordionItemProps>;

declare type TextAreaElement = Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'value' | 'defaultValue'>;
declare type TextAreaProps = TextAreaElement & {
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

declare type ValidationItemProps = React__default.AllHTMLAttributes<HTMLElement> & {
    tag?: React__default.ComponentProps<any>;
    invalid?: boolean;
    feedback?: React__default.ReactNode;
    tooltip?: boolean;
};

declare const MDBValidationItem: React$1.FunctionComponent<ValidationItemProps>;

export { MDBAccordion, MDBAccordionItem, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner, MDBCarouselItem, MDBCheckbox, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownDivider, MDBDropdownHeader, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBFile, MDBFooter, MDBIcon, MDBInput, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRange, MDBRipple, MDBRow, MDBScrollspy, MDBScrollspyNavItem, MDBScrollspyNavLink, MDBScrollspyNavList, MDBScrollspySection, MDBSpinner, MDBSwitch, MDBTable, MDBTableBody, MDBTableHead, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTextArea, MDBTooltip, MDBTypography, MDBValidation, MDBValidationItem };
