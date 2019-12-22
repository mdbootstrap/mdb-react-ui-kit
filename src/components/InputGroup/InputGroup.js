import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBInput } from '../Input';

const InputGroup = ({
  append,
  appendClassName,
  ariaLabel,
  children,
  className,
  containerClassName,
  containerId,
  hint,
  id,
  inputs,
  inputTag,
  label,
  labelClassName,
  material,
  prepend,
  prependClassName,
  size,
  tag: Tag,
  textClassName,
  type,
  value,
  valueDefault,
  getValue,
  onChange,
  ...attributes
}) => {
  const containerClassNames = classNames(
    'input-group',
    material && 'md-form',
    size && `input-group-${size}`,
    containerClassName
  );

  const inputClassNames = classNames(className);

  const prependClassNames = classNames('input-group-prepend', prependClassName);

  const appendClassNames = classNames('input-group-append', appendClassName);

  const textClassNames = classNames(
    'input-group-text',
    material && 'md-addon',
    textClassName
  );

  const handleChange = event => {
    event.persist();
    onChange && onChange(event);
    getValue && getValue(event.target.value);
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <Tag
        data-test='input-group'
        {...attributes}
        className={containerClassNames}
        id={containerId}
      >
        {prepend && (
          <div className={prependClassNames}>
            {typeof prepend === 'string' ? (
              <span className={textClassNames}>{prepend}</span>
            ) : (
              prepend
            )}
          </div>
        )}
        {inputs || (
          <MDBInput
            noTag
            type={type}
            className={inputClassNames}
            id={id}
            value={value}
            valueDefault={valueDefault}
            hint={hint}
            aria-label={ariaLabel}
            onChange={handleChange}
          />
        )}
        {append && (
          <div className={appendClassNames}>
            {typeof append === 'string' ? (
              <span className={textClassNames}>{append}</span>
            ) : (
              append
            )}
          </div>
        )}
        {children}
      </Tag>
    </>
  );
};

InputGroup.propTypes = {
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  appendClassNames: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerId: PropTypes.string,
  getValue: PropTypes.func,
  hint: PropTypes.string,
  id: PropTypes.string,
  inputs: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  material: PropTypes.bool,
  onChange: PropTypes.func,
  prepend: PropTypes.any,
  prependClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  textClassName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  valueDefault: PropTypes.string
};

InputGroup.defaultProps = {
  tag: 'div',
  type: 'text'
};

export default InputGroup;
export { InputGroup as MDBInputGroup };
