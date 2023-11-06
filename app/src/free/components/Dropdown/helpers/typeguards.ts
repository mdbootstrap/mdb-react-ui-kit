export const isHtmlElement = (el: Element | null): el is HTMLElement => {
  return el instanceof HTMLElement;
};

export const isNode = (target: EventTarget | null): target is Node => {
  return target instanceof Node;
};
