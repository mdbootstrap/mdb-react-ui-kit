import { Dispatch, SetStateAction, ReactNode, SyntheticEvent } from 'react';
export interface Dropdown {
    activeIndex: number;
    animation: boolean;
    isOpenState: boolean;
    popperElement: HTMLElement | null;
    referenceElement: HTMLElement | null;
    setIsOpenState: Dispatch<SetStateAction<boolean>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    setPopperElement: Dispatch<SetStateAction<HTMLElement | null>>;
    setReferenceElement: Dispatch<SetStateAction<HTMLElement | null>>;
    onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    options?: Record<string, unknown>;
}
export interface DropdownProviderProps {
    children: ReactNode;
    isOpen?: boolean;
    options?: Record<string, unknown>;
    animation?: boolean;
    dropup?: boolean;
    dropright?: boolean;
    dropleft?: boolean;
    onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
}
