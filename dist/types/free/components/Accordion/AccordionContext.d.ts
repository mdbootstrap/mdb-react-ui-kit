import React from 'react';
interface AccordionProps {
    activeItem?: number | number[];
    setActiveItem: React.SetStateAction<any>;
    alwaysOpen?: boolean;
    initialActive?: number | number[];
    onChange?: (id: number | number[]) => void;
}
declare const AccordionContext: React.Context<AccordionProps>;
export { AccordionContext };
