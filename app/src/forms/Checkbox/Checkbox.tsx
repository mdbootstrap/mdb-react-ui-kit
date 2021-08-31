import clsx from 'clsx';
import React, { useState } from 'react';
import type { CheckboxProps } from './types';

const MDBCheckbox: React.FC<CheckboxProps> = React.forwardRef<HTMLAllCollection, CheckboxProps>(
  (
    {
      className,
      tag: Tag,
      labelId,
      labelClass,
      wrapperClass,
      wrapperTag: WrapperTag,
      label,
      inline,
      btn,
      id,
      defaultChecked,
      checked,
      validation,
      invalid,
      btnColor,
      toggleSwitch,
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

    const wrapperClasses = clsx(
      label && !btn && 'form-check',
      inline && !btn && 'form-check-inline',
      toggleSwitch && 'form-switch',
      wrapperClass
    );
    const inputClasses = clsx(inputStyle, className);
    const labelClasses = clsx(labelStyle, labelClass);
    const validationClasses = clsx(validation && (invalid ? 'invalid-feedback' : 'valid-feedback'));

    return (
      <WrapperTag className={wrapperClasses}>
        <Tag
          className={inputClasses}
          type='checkbox'
          defaultChecked={defaultChecked}
          checked={checked}
          id={id}
          ref={ref}
          {...props}
        />
        {label && (
          <label className={labelClasses} id={labelId} htmlFor={id}>
            {label}
          </label>
        )}
        {validation && <div className={validationClasses}>{validation}</div>}
      </WrapperTag>
    );
  }
);

MDBCheckbox.defaultProps = { tag: 'input', wrapperTag: 'div' };

export default MDBCheckbox;
