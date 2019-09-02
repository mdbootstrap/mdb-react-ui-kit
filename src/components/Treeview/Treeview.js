import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const TreeviewContext = React.createContext();

const Treeview = props => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (props.getValue) {
      props.getValue({
        item: active ? active.closest('li') : active,
        value: active ? active.closest('li').childNodes[1].textContent : active
      });
    }
  }, [active, props]);

  const getActive = target => {
    setActive(target);
    return target;
  };

  const {
    theme,
    children,
    className,
    getValue,
    header,
    listClassName,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'border',
    theme ? `treeview-${theme}` : 'treeview',
    className
  );
  const ulClasses = classNames(
    'list-unstyled',
    header ? 'pb-2 mb-1' : 'py-2 my-1',
    theme && `treeview-${theme}-list`,
    theme === 'animated' || (!theme && 'pl-3'),
    listClassName
  );

  const head = header && (
    <>
      <h6 className='pt-3 pl-3'>{header}</h6>
      <hr />
    </>
  );

  return (
    <Tag data-test='treeview' {...attributes} className={classes}>
      {head}
      <ul className={ulClasses}>
        <TreeviewContext.Provider
          value={{
            active,
            theme,
            getActive
          }}
        >
          {children}
        </TreeviewContext.Provider>
      </ul>
    </Tag>
  );
};

Treeview.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  listClassName: PropTypes.string,
  tag: PropTypes.string,
  theme: PropTypes.string,
  getValue: PropTypes.func
};

Treeview.defaultProps = {
  tag: 'div',
  theme: '',
  getValue: () => {}
};

export default Treeview;
export { Treeview as MDBTreeview };
