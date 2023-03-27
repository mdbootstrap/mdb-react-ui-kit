import React from 'react';
interface ScrollspyContextProps {
    activeElement?: HTMLElement | null;
    setTargets?: React.SetStateAction<any>;
}
declare const ScrollspyContext: React.Context<ScrollspyContextProps>;
export { ScrollspyContext };
