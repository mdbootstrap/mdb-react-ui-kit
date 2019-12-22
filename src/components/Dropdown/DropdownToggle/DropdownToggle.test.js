import React from 'react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../tests/utils';
import DropdownToggle from './DropdownToggle';
import Dropdown from '../Dropdown';

const context = {
  isOpen: false,
  toggle: () => {}
};

const setup = (props = {}) =>
  shallow(<DropdownToggle {...props} />, { context });

const mounted = (props = {}) =>
  mount(
    <Dropdown>
      <DropdownToggle {...props} />
    </Dropdown>
  );

describe('<DropdownToggle />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({});
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'dropdown-toggle').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      'aria-haspopup': true,
      caret: true,
      className: 'testClassName',
      color: 'test',
      disabled: true,
      nav: true,
      tag: 'span',
      onClick: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = mounted({ tag: 'span' });

    const tag = wrapper.find('span').first();
    expect(tag.prop('aria-haspopup')).toEqual(true);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = mounted({ disabled: true });

    const toggle = wrapper.find('DropdownToggle');
    expect(toggle.prop('disabled')).toEqual(true);
  });

  test('should not invoke onClick callback if `disabled` or (nav && !tag) is passed ', () => {
    const cb = jest.fn();

    wrapper = mounted({ tag: 'label', disabled: true, onClick: cb });

    const label = wrapper.find('label');

    label.simulate('click');

    expect(cb).not.toBeCalled();
  });

  test('invokes onClick callback', () => {
    const cb = jest.fn();
    wrapper = mounted({ tag: 'label', onClick: cb });

    const label = wrapper.find('label');

    label.simulate('click');

    expect(cb).toBeCalled();
  });

  describe('sets correct `aria-label`', () => {
    test('sets correct aria-label by-default', () => {
      wrapper = mounted();

      const span = wrapper.find('span.sr-only');

      expect(span.text()).toEqual('Toggle Dropdown');
    });

    test('sets correct aria-label when `aria-label` property is passed', () => {
      wrapper = mounted({ 'aria-label': 'testAria' });

      const span = wrapper.find('span.sr-only');

      expect(span.text()).toEqual('testAria');
    });
  });

  describe('sets correct Tag', () => {
    test('sets `a` tag and href="#" if (nav && !tag)', () => {
      wrapper = mounted({ nav: true });

      const a = wrapper.find('a');
      expect(a).toHaveLength(1);
      expect(a.prop('href')).toEqual('#');
    });

    test('sets `Button` tag and color="primary" if (!nav && !tag)', () => {
      wrapper = mounted({ className: 'testClassName', color: 'primary' });

      const Button = wrapper.find('Button');
      expect(Button).toHaveLength(1);
      expect(Button.prop('color')).toEqual('primary');
    });
  });

  describe('sets classes', () => {
    test('adds custom class passed as property', () => {
      wrapper = mounted({ className: 'testClassName' });

      const inner = wrapper.find('InnerReference');
      expect(inner.find('.testClassName').length).toBeTruthy();
    });

    test('adds \'dropdown-toggle\' class passed as property', () => {
      wrapper = mounted({ caret: true });

      const inner = wrapper.find('InnerReference');
      expect(inner.find('.dropdown-toggle').length).toBeTruthy();
    });

    test('adds nav-link\' class passed as property', () => {
      wrapper = mounted({ nav: true });

      const inner = wrapper.find('InnerReference');
      expect(inner.find('.nav-link').length).toBeTruthy();
    });
  });
});
