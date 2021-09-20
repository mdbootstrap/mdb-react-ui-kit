import React from 'react';

interface DropdownProps {
  handleOpenClose: () => void;
  isOpenState: boolean;
  handleClose: () => void;
  setReferenceElement: React.SetStateAction<any>;
  setPopperElement: React.SetStateAction<any>;
  styles: { [key: string]: React.CSSProperties };
  activeIndex: number | null;
  animatedFadeIn: boolean;
  animatedFadeOut: boolean;
  getCount: (el: number) => void;
  attributes: Record<string, unknown>;
  animation: boolean | undefined;
}

const DropdownContext = React.createContext<DropdownProps>({
  animation: true,
  handleOpenClose: () => undefined,
  handleClose: () => undefined,
  getCount: (): number => 0,
  isOpenState: false,
  activeIndex: 0,
  animatedFadeIn: false,
  animatedFadeOut: false,
  setPopperElement: null,
  setReferenceElement: null,
  styles: {},
  attributes: {},
});

export { DropdownContext };
