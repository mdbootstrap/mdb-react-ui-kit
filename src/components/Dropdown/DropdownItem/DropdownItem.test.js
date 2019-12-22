import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import DropdownItem from './DropdownItem';

const setup = (props = {}) => shallow(<DropdownItem {...props} />);

describe('<DropdownItem />', () => {
  let wrapper;
  const callback = e => jest.fn(e);

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'dropdown-item').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DropdownItem />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      active: true,
      disabled: true,
      divider: true,
      tag: 'test',
      header: true,
      onClick: () => {},
      toggle: true
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  test('sets `h6` wrapper tag if `header` property was passed', () => {
    wrapper = setup({ header: true });
    checkTag(wrapper, 'h6');
  });

  test('sets `div` wrapper tag if `divider` property was passed', () => {
    wrapper = setup({ divider: true });
    checkTag(wrapper, 'div');
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find('[data-custom-attr="custom"]').length).toBe(1);
  });

  test('should not invoke onClick if (disabled || header || divider) was passed', () => {
    const mockCb = callback();

    const context = {
      toggle: () => {}
    };

    wrapper = shallow(<DropdownItem onClick={mockCb} header />, { context });

    wrapper.simulate('click', {
      preventDefault: () => {}
    });

    expect(mockCb).not.toBeCalled();
  });

  test('invokes onClick if it was passed', () => {
    const mockCb = callback();

    const context = {
      toggle: () => {}
    };

    wrapper = shallow(<DropdownItem onClick={mockCb} />, { context });

    wrapper.simulate('click');

    expect(mockCb).toBeCalledTimes(1);
  });

  test('invokes toggle from context if it was passed', () => {
    const mockCb = callback();

    const context = {
      toggle: mockCb
    };

    wrapper = shallow(<DropdownItem />, { context });

    wrapper.simulate('click');

    expect(mockCb).toBeCalledTimes(1);
  });

  test('returns `0` index', () => {
    const mockCb = callback();

    wrapper = setup({ onClick: mockCb });

    expect(wrapper.instance().getTabIndex()).toEqual('0');
  });

  test('returns `-1` index', () => {
    const mockCb = callback();

    wrapper = setup({ onClick: mockCb, header: true });

    expect(wrapper.instance().getTabIndex()).toEqual('-1');
  });

  test('sets type=button if tag===button && (onClick || toggle)', () => {
    wrapper = setup({ onClick: () => {} });

    expect(wrapper.find('[type="button"]')).toHaveLength(1);
  });

  describe('sets classes', () => {
    test('adds `disabled` class', () => {
      wrapper = setup({ disabled: true });
      checkClass(wrapper, 'disabled');
    });

    test('adds `active` class', () => {
      wrapper = setup({ active: true });
      checkClass(wrapper, 'active');
    });

    test('adds `dropdown-item` class if (!divider && !header)', () => {
      checkClass(wrapper, 'dropdown-item');
    });

    test('should not add `dropdown-item` class if (divider || header)', () => {
      wrapper = setup({ header: true });
      expect(wrapper.find('.dropdown-item')).toHaveLength(0);
    });

    test('adds `dropdown-header` class if (header)', () => {
      wrapper = setup({ header: true });
      checkClass(wrapper, 'dropdown-header');
    });

    test('adds `dropdown-divider` class if (divider)', () => {
      wrapper = setup({ divider: true });
      checkClass(wrapper, 'dropdown-divider');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
