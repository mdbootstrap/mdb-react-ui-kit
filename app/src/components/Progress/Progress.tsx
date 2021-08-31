import React from 'react';
import clsx from 'clsx';
import type { ProgressProps } from './types';
import ProgressBar from './ProgressBar/ProgressBar';
import type { ProgressBarProps } from './ProgressBar/types';

const MDBProgress: React.FC<ProgressProps> = React.forwardRef<HTMLAllCollection, ProgressProps>(
  ({ className, children, tag: Tag, height, style, ...props }, ref) => {
    const classes = clsx('progress', className);
    const styles = { height: `${height}px`, ...style };

    return (
      <Tag className={classes} ref={ref} style={styles} {...props}>
        {React.Children.map(children, (child): ProgressBarProps | undefined => {
          if (!React.isValidElement(child) || child.type !== ProgressBar) {
            console.error('Progress component only allows ProgressBar as child');
            return;
          } else {
            return child;
          }
        })}
      </Tag>
    );
  }
);

MDBProgress.defaultProps = { tag: 'div' };

export default MDBProgress;
