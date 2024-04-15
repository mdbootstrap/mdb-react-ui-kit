import { Dispatch } from 'react';
type useHeightType = {
    showCollapse?: boolean;
    setCollapseHeight: Dispatch<React.SetStateAction<string | undefined>>;
    refCollapse: React.RefObject<HTMLElement>;
    contentRef: React.RefObject<HTMLElement>;
};
export default function useHeight({ showCollapse, setCollapseHeight, refCollapse, contentRef }: useHeightType): void;
export {};
