export const isRTL = (): boolean => document.documentElement.dir === 'rtl';

export const reflow = (element: HTMLElement): number => element.offsetHeight;

export const queueCallback = (callback: any, element: HTMLElement, isAnimated = true): void => {
  if (!isAnimated) {
    execute(callback);
    return;
  }

  const transitionDuration = getTransitionDurationFromElement(element);
  element.addEventListener('transitionend', () => execute(callback), { once: true });

  emulateTransitionEnd(element, transitionDuration);
};

const execute = (callback: any) => {
  if (typeof callback === 'function') {
    callback();
  }
};

const getTransitionDurationFromElement = (element: HTMLElement) => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];

  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000;
};

const triggerTransitionEnd = (element: HTMLElement): void => {
  element.dispatchEvent(new Event('transitionend'));
};

const emulateTransitionEnd = (element: HTMLElement, duration: any) => {
  let called = false;
  const durationPadding = 5;
  const emulatedDuration = duration + durationPadding;

  function listener() {
    called = true;
    element.removeEventListener('transitionend', listener);
  }

  element.addEventListener('transitionend', listener);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(element);
    }
  }, emulatedDuration);
};
