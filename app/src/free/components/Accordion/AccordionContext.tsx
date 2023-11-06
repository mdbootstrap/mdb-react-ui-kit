'use client';

import React from 'react';

interface AccordionProps {
  activeItem?: number | number[];
  setActiveItem: React.SetStateAction<any>;
  alwaysOpen?: boolean;
  initialActive?: number | number[];
  onChange?: (id: number | number[]) => void;
}

const AccordionContext = React.createContext<AccordionProps>({
  activeItem: 0,
  setActiveItem: null,
  alwaysOpen: false,
  initialActive: 0,
});

export { AccordionContext };
