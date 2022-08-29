import { Dispatch, SetStateAction, CSSProperties, ReactNode } from 'react';

export interface Dropdown {
  activeIndex: number;
  animation: boolean;
  isOpenState: boolean;
  styles: { [key: string]: CSSProperties };
  popperElement: HTMLElement | null;
  referenceElement: HTMLElement | null;
  setIsOpenState: Dispatch<SetStateAction<boolean>>;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  setPopperElement: Dispatch<SetStateAction<HTMLElement | null>>;
  setReferenceElement: Dispatch<SetStateAction<HTMLElement | null>>;
  onHide?: () => any;
  onShow?: () => any;
}

export interface DropdownProviderProps {
  children: ReactNode;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  animation?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  onHide?: () => any;
  onShow?: () => any;
}

export interface DropdownProviderProps {
  children: ReactNode;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  animation?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
}
