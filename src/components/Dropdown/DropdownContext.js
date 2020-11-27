import React from 'react';

const defaultValue = {
  dropleft: false,
  dropright: false,
  dropup: false,
  isOpen: false,
  toggle: () => {}
};

const SideNavContext = React.createContext(defaultValue);

export { SideNavContext as default };
