import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { MDBInput } from "./Input";

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
  ...attributes
}) => {
  const containerClassNames = classNames(
    "input-group",
    material && "md-form",
    size && `input-group-${size}`,
    containerClassName
  );

  const inputClassNames = classNames(className);

  const prependClassNames = classNames("input-group-prepend", prependClassName);

  const appendClassNames = classNames("input-group-append", appendClassName);

  const textClassNames = classNames(
    "input-group-text",
    material && "md-addon",
    textClassName
  );
  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <Tag {...attributes} className={containerClassNames} id={containerId}>
        {prepend && (
          <div className={prependClassNames}>
            {typeof prepend === "string" ? (
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
          />
        )}
        {append && (
          <div className={appendClassNames}>
            {typeof append === "string" ? (
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
  hint: PropTypes.string,
  id: PropTypes.string,
  inputs: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  material: PropTypes.bool,
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
  tag: "div",
  type: "text"
};

export default InputGroup;
export { InputGroup as MDBInputGroup };
