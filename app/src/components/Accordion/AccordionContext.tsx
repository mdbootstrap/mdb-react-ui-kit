import React from 'react';

interface AccordionProps {
  activeItem: string | undefined;
  setActiveItem: React.SetStateAction<any>;
  alwaysOpen: boolean | undefined;
  initialActive: string | undefined;
}

const AccordionContext = React.createContext<AccordionProps>({
  activeItem: '',
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: '',
});

export { AccordionContext };
