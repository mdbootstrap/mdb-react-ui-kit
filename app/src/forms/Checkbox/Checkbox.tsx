import clsx from 'clsx';
import React from 'react';
import type { CheckboxProps } from './types';

const MDBCheckbox: React.FC<CheckboxProps> = React.forwardRef<HTMLAllCollection, CheckboxProps>(
  (
    {
      className,
      name,
      value,
      tag: Tag,
      id,
      labelId,
      disabled,
      labelClass,
      wrapperClass,
      wrapperTag: WrapperTag,
      label,
      checked,
      inline,
      btn,
      btnColor,
      ...props
    },
    ref
  ) => {
    let inputStyle = 'form-check-input';
    let labelStyle = 'form-check-label';

    if (btn) {
      inputStyle = 'btn-check';

      if (btnColor) {
        labelStyle = `btn btn-${btnColor}`;
      } else {
        labelStyle = 'btn btn-primary';
      }
    }

    const wrapperClasses = clsx(label && !btn && 'form-check', inline && !btn && 'form-check-inline', wrapperClass);
    const inputClasses = clsx(inputStyle, className);
    const labelClasses = clsx(labelStyle, labelClass);

    return (
      <WrapperTag className={wrapperClasses}>
        <Tag
          className={inputClasses}
          type='checkbox'
          value={value}
          name={name}
          id={id}
          disabled={disabled}
          defaultChecked={checked}
          ref={ref}
          {...props}
        />
        {label && (
          <label className={labelClasses} id={labelId} htmlFor={id}>
            {label}
          </label>
        )}
      </WrapperTag>
    );
  }
);

MDBCheckbox.defaultProps = { tag: 'input', wrapperTag: 'div' };

export default MDBCheckbox;
