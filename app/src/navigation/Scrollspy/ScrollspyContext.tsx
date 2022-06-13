import React from 'react';

interface ScrollspyContextProps {
  activeElement?: HTMLElement | null;
  setTargets?: React.SetStateAction<any>;
}

const ScrollspyContext = React.createContext<ScrollspyContextProps>({
  activeElement: null,
  setTargets: null,
});

export { ScrollspyContext };
