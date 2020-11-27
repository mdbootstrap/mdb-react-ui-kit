import React from 'react';

const defaultValue = {
  activeItem: null,
  length: null,
  slide: null
};

const TabContext = React.createContext(defaultValue);

export { TabContext as default };
