import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Collapse from './Collapse';

const setup = (props = {}) => shallow(<Collapse {...props} />);
const mounted = (props = {}) => mount(<Collapse {...props} />);

describe('<Collapse />', () => {
  let wrapper;
  const mockFn = jest.fn();

  jest.useFakeTimers();

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'collapse').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Collapse />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      isOpen: true,
      id: 'test',
      navbar: true,
      delay: { show: 5, hide: 5 },
      onOpened: jest.fn(),
      onClosed: jest.fn()
    };

    wrapper = mounted(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test(`expect ref to not be null`, () => {
    wrapper = mounted();
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.instance().element).toBeTruthy();
  });

  test(`set 'collapse' state to 'SHOW' when 'isOpen = true' property is passed`, () => {
    wrapper = mounted({ isOpen: true });

    expect(wrapper.instance().state['collapse']).toBe('SHOW');
  });

  test(`invokes 'onOpened' when 'isOpened = true' property is passed`, () => {
    wrapper = mounted({ isOpen: true, onOpened: mockFn });

    jest.runAllTimers();

    expect(mockFn).toBeCalled();
  });

  test(`closes collapse by componentDidUpdate method`, () => {
    const onClosed = jest.fn();
    wrapper = mounted({ isOpen: true, onClosed });

    wrapper.setState({ collapse: 'SHOWN' });
    wrapper.setProps({ isOpen: false });

    jest.runAllTimers();

    expect(onClosed).toBeCalled();
  });

  test(`opens collapse by componentDidUpdate method`, () => {
    const onOpened = jest.fn();
    wrapper = mounted({ onOpened });

    wrapper.setState({ collapse: 'HIDDEN' });
    wrapper.setProps({ isOpen: true });

    jest.runAllTimers();

    expect(onOpened).toBeCalled();
  });

  test(`invokes 'onOpened' callback `, () => {
    wrapper = mounted({ onOpened: mockFn });

    wrapper.instance().openCollapse();

    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalled();
  });

  test(`invokes 'onClosed' callback `, () => {
    wrapper = mounted({ onClosed: mockFn });

    wrapper.instance().closeCollapse();

    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalled();
  });

  test('return the right time from `getDelay` method', () => {
    wrapper = mounted({ delay: { show: 222, hide: 333 } });

    const show = wrapper.instance().getDelay('show');
    expect(show).toEqual(222);

    const hide = wrapper.instance().getDelay('hide');
    expect(hide).toEqual(333);
  });

  describe('sets classes', () => {
    test('adds collapse class by default', () => {
      checkClass(wrapper, 'collapse');
    });

    test('adds `collapsing` class when `collapse: SHOW`', () => {
      wrapper.setState({ collapse: 'SHOW' });
      checkClass(wrapper, 'collapsing');
    });

    test('adds `collapse show` classes when `collapse: SHOWN`', () => {
      wrapper.setState({ collapse: 'SHOWN' });
      checkClass(wrapper, 'collapse.show');
    });

    test('adds `navbar-collapse` class when `navbar` property is passed', () => {
      wrapper = setup({ navbar: true });
      checkClass(wrapper, 'navbar-collapse');
    });

    test('removes `show` class after closing', () => {
      wrapper = mounted();
      wrapper.instance().openCollapse();

      jest.runAllTimers();

      wrapper.update();
      expect(wrapper.find('.show')).toHaveLength(1);

      wrapper.instance().closeCollapse();
      wrapper.update();
      expect(wrapper.find('.show')).toHaveLength(0);
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
