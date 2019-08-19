import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import HamburgerToggler from './HamburgerToggler';

const setup = (props = {}) => shallow(<HamburgerToggler {...props} />);

describe('<HamburgerToggler />', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'hamburger-toggler').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<HamburgerToggler />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      id: 'test',
      color: 'test'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('invokes onClick callback', () => {
    wrapper = setup({ onClick: mockFn });

    const input = wrapper.find('input');

    input.simulate('change');

    expect(mockFn).toBeCalled();
  });

  describe('sets classes', () => {
    test('adds hamburger-button__button classes by default', () => {
      checkClass(wrapper, 'hamburger-button__button');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
