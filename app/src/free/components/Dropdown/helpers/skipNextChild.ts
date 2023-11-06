import { ReactElement } from 'react';

export const skipNextChild = (idx: number, children: ReactElement[], dir: 'up' | 'down') => {
  if (dir === 'up') {
    if (idx <= 0) {
      return (
        children[children.length - 1].props.divider === true || children[children.length - 1].props.disabled === true
      );
    }

    return children[idx - 1].props.divider === true || children[idx - 1].props.disabled === true;
  }

  if (idx === children.length - 1) {
    return children[0].props.divider === true || children[0].props.disabled === true;
  }

  return children[idx + 1].props.divider === true || children[idx + 1].props.disabled === true;
};
