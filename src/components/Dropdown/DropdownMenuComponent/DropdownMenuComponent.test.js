import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkTag } from '../../../tests/utils';
import DropdownMenuComponent from './DropdownMenuComponent';

const setup = (props = {}) => shallow(<DropdownMenuComponent {...props} />);

describe('<DropdownMenuComponent />', () => {
  let wrapper;

  const expectedProps = {
    aria: true,
    attributes: {},
    d_key: 'testKey',
    role: 'testRole',
    tabIndex: 'testTabIndex',
    tag: 'span',
    children: <div />
  };

  beforeEach(() => {
    wrapper = setup(expectedProps);
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'dropdown-menu-component').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('sets custom wrapper tag', () => {
    checkTag(wrapper, 'span');
  });

  test('sets correct role', () => {
    expect(wrapper.prop('role')).toEqual('testRole');
  });

  test('sets correct tabIntex', () => {
    expect(wrapper.prop('tabIndex')).toEqual('testTabIndex');
  });

  test('sets correct aria-hidden', () => {
    expect(wrapper.prop('aria-hidden')).toEqual(true);
  });
});
