import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { InputTemplateProps } from './types';

const InputTemplate: React.FC<InputTemplateProps> = forwardRef(
  (
    {
      className,
      inputRef,
      labelClass,
      wrapperClass,
      labelStyle,
      wrapperTag: WrapperTag = 'div',
      wrapperStyle,
      label,
      inline,
      btn,
      id,
      btnColor,
      disableWrapper,
      toggleSwitch,
      ...props
    },
    ref
  ) => {
    let inputStyle = 'form-check-input';
    let labelClassName = 'form-check-label';

    if (btn) {
      inputStyle = 'btn-check';

      if (btnColor) {
        labelClassName = `btn btn-${btnColor}`;
      } else {
        labelClassName = 'btn btn-primary';
      }
    }

    const wrapperClasses = clsx(
      label && !btn && 'form-check',
      inline && !btn && 'form-check-inline',
      toggleSwitch && 'form-switch',
      wrapperClass
    );
    const inputClasses = clsx(inputStyle, className);
    const labelClasses = clsx(labelClassName, labelClass);

    const inputBody = (
      <>
        <input className={inputClasses} id={id} ref={inputRef} {...props} />
        {label && (
          <label className={labelClasses} style={labelStyle} htmlFor={id}>
            {label}
          </label>
        )}
      </>
    );

    return (
      <>
        {disableWrapper ? (
          inputBody
        ) : (
          <WrapperTag style={wrapperStyle} className={wrapperClasses} ref={ref}>
            {inputBody}
          </WrapperTag>
        )}
      </>
    );
  }
);

InputTemplate.displayName = 'InputTemplate';
export default InputTemplate;
