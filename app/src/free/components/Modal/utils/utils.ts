const getFocusableElements = (modal: React.RefObject<HTMLElement> | HTMLElement) => {
  const modalEl = modal instanceof HTMLElement ? modal : modal.current;

  if (!modalEl) return [];

  const focusable = Array.from(
    modalEl.querySelectorAll('button, a, input, select, textarea, [tabindex]') as NodeListOf<HTMLElement>
  ).map((el) => {
    return {
      element: el,
      focused: el === document.activeElement,
    };
  });

  if (!focusable) return [];

  const filtered = focusable
    .filter((item) => item.element.tabIndex !== -1)
    .sort((a, b) => {
      if (a.element.tabIndex === b.element.tabIndex) {
        return 0;
      }
      if (b.element.tabIndex === null) {
        return -1;
      }
      if (a.element.tabIndex === null) {
        return 1;
      }
      return a.element.tabIndex - b.element.tabIndex;
    });

  return filtered;
};

const getFocusedItemIndex = (currentIndex: number, isShiftTab: boolean, focusableElementsArrayLength: number) => {
  let newIndex = currentIndex;

  if (isShiftTab) {
    newIndex = currentIndex - 1 < 0 ? focusableElementsArrayLength - 1 : currentIndex - 1;
  } else {
    newIndex = currentIndex + 1 >= focusableElementsArrayLength ? 0 : currentIndex + 1;
  }

  return newIndex;
};

export { getFocusableElements, getFocusedItemIndex };
