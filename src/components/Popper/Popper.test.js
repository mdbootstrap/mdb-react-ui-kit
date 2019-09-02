import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr, checkClass, checkProps } from '../../tests/utils';
import Popper from './Popper';

const Wrapper = props => <button>{props.children}</button>;
const Content = props => <div>{props.children}</div>;

Wrapper.type = 'span';
Content.type = 'div';

const setup = (props = {}) =>
  mount(
    <Popper tag={'section'} isVisible={true} {...props}>
      <Wrapper />
      <Content>Body</Content>
    </Popper>
  );

describe('<Popper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'popper').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      clickable: true,
      domElement: true,
      modifiers: {},
      id: 'test',
      isVisible: true,
      placement: 'test',
      popover: true,
      style: { display: 'inline-block' },
      tag: 'test'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('should not render popover content if (!state.visible) and !Content.props.children', () => {
    wrapper = mount(
      <Popper tag={'section'} isVisible={false}>
        <Wrapper />
        <Content />
      </Popper>
    );

    const section = wrapper.find('section');
    expect(section).toHaveLength(0);
  });

  test('add eventListener on mount', () => {
    const cb = jest.fn();
    window.addEventListener = cb;

    wrapper = setup();
    expect(cb).toBeCalled();
  });

  test('removes eventListener on unmount', () => {
    const cb = jest.fn();
    window.removeEventListener = cb;

    wrapper.unmount();
    expect(cb).toBeCalled();
  });

  test('sets custom wrapper tag when (state.visible) and Content.props.children', () => {
    const section = wrapper.find('section');
    //Tag is used 2 times
    expect(section).toHaveLength(2);
  });

  test('renders Wrapper with `innerRef` if (!domElement)', () => {
    wrapper = setup({ domElement: false });

    expect(wrapper.find('Wrapper').props()['innerRef']).toBeTruthy();
  });

  test('should not render Wrapper with `innerRef` if (domElement)', () => {
    wrapper = setup({ domElement: true });

    expect(wrapper.find('Wrapper').props()['innerRef']).not.toBeTruthy();
  });

  test('renders Content.props.children', () => {
    expect(wrapper.find('div').text()).toBe('Body');
  });

  describe('sets classes', () => {
    test(`adds 'fade' class by default to Tooltip`, () => {
      checkClass(wrapper.find('section'), 'fade');
    });

    test(`adds 'show' class to Tooltip if (state.visible)`, () => {
      checkClass(wrapper.find('section'), 'show');
    });

    test(`adds 'popover bs-popover-top popover-enter-done' classes to Tooltip if (props.popover)`, () => {
      wrapper = setup({ popover: true });

      checkClass(
        wrapper.find('section'),
        'popover.bs-popover-top.popover-enter-done'
      );
    });

    test(`adds 'tooltip bs-tooltip-top' classes to Tooltip if (!props.popover)`, () => {
      wrapper = setup({ popover: false });

      checkClass(wrapper.find('section'), 'tooltip.bs-tooltip-top');
    });

    test(`adds 'bs-tooltip-left' class to Tooltip if (placement === left)`, () => {
      wrapper = setup({ placement: 'left' });

      checkClass(wrapper.find('section'), 'bs-tooltip-left');
    });

    test(`adds 'tooltip-inner' class to Content if (!popover)`, () => {
      wrapper = setup({ popover: false });
      checkClass(wrapper.find('Content'), 'tooltip-inner');
    });

    test(`should not add 'tooltip-inner' class to Content if (popover)`, () => {
      wrapper = setup({ popover: true });
      expect(wrapper.find('Content.tooltip-inner')).toHaveLength(0);
    });
  });
});
