import React from 'react';

interface AccordionProps {
  activeItem?: number;
  setActiveItem: React.SetStateAction<any>;
  alwaysOpen?: boolean;
  initialActive?: number;
}

const AccordionContext = React.createContext<AccordionProps>({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0,
});

export { AccordionContext };
