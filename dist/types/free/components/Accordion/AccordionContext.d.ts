import React from 'react';
interface AccordionProps {
    activeItem?: number;
    setActiveItem: React.SetStateAction<any>;
    alwaysOpen?: boolean;
    initialActive?: number;
}
declare const AccordionContext: React.Context<AccordionProps>;
export { AccordionContext };
