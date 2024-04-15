declare const getFocusableElements: (modal: React.RefObject<HTMLElement> | HTMLElement) => {
    element: HTMLElement;
    focused: boolean;
}[];
declare const getFocusedItemIndex: (currentIndex: number, isShiftTab: boolean, focusableElementsArrayLength: number) => number;
export { getFocusableElements, getFocusedItemIndex };
