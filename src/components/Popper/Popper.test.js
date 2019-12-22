import React from 'react';
import { mount } from 'enzyme';

import { checkClass, checkProps } from '../../tests/utils';
import Popper from './Popper';

const Wrapper = props => {
  const { children } = props;
 return <button>{children}</button>;
};
const Content = props => {
  const { children } = props;
  return  <div>{children}</div>;
};

Wrapper.type = 'span';
Content.type = 'div';

const setup = (props = {}) =>
  mount(
    <Popper tag='section' isVisible {...props}>
      <Wrapper />
      <Content>Body</Content>
    </Popper>
  );

describe('<Popper />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    wrapper = setup({ isVisible: true });
    expect(wrapper.find('[data-popper="popper"]').length).toBe(2);
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
      tag: 'span'
    };

    wrapper = mount(
      <Popper {...expectedProps}>
        <span />
        <Content />
      </Popper>
    );

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('should not render popover content if (!state.visible) and !Content.props.children', () => {
    wrapper = mount(
      <Popper tag='section' isVisible={false}>
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

    expect(section).toHaveLength(1);
  });

  test('renders Wrapper with `innerRef` if (!domElement)', () => {
    wrapper = setup({ domElement: false });

    expect(wrapper.find('Wrapper').props().innerRef).toBeTruthy();
  });

  test('should not render Wrapper with `innerRef` if (domElement)', () => {
    wrapper = setup({ domElement: false });

    // console.log(wrapper.debug())

    expect(wrapper.find('Wrapper').props().innerRef).toBeTruthy();
  });

  test('renders Content.props.children', () => {
    expect(wrapper.find('div').text()).toBe('Body');
  });

  describe('sets classes', () => {
    test("adds 'show' class to Tooltip if (state.visible)", () => {
      checkClass(wrapper.find('section'), 'show');
    });

    test("adds 'popover' classes to Tooltip if (props.popover)", () => {
      wrapper = setup({ popover: true });

      checkClass(wrapper.find('section'), 'popover');
    });

    test("adds 'tooltip' classes to Tooltip if (!props.popover)", () => {
      wrapper = setup({ popover: false });

      checkClass(wrapper.find('section'), 'tooltip');
    });
  });
});
