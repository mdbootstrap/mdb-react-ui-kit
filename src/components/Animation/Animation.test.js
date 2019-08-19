import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Animation from './Animation';

const setup = (props = {}) => shallow(<Animation {...props} />);

describe('<Animation />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'animation').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Animation />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      type: 'bounce',
      delay: '5s',
      count: 2,
      onAnimationEnd: () => {},
      onAnimationStart: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom class passed as property`, () => {
    wrapper = setup({ className: 'testClassName' });

    checkClass(wrapper, 'testClassName');
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test('adds bounce class', () => {
      wrapper = setup({ type: 'bounce' });

      expect(wrapper.find(`[className*="bounce"]`).length).toBe(1);
    });

    test('adds infinite class', () => {
      wrapper = setup({ infinite: true });

      expect(wrapper.find(`[className*="infinite"]`).length).toBe(1);
    });

    test('adds animated class', () => {
      wrapper.setState({ isVisible: true });

      expect(wrapper.find(`[className*="animated"]`).length).toBe(1);
    });
  });

  describe('complete callbacks', () => {
    test('calls animationStart', () => {
      const mockFn = jest.fn();
      wrapper = setup({ onAnimationStart: mockFn });
      wrapper.instance().handleStart();

      expect(mockFn).toHaveBeenCalled();
    });

    test('calls animationEnd', () => {
      const mockFn = jest.fn();
      wrapper = setup({ onAnimationEnd: mockFn });
      wrapper.instance().handleEnd();

      expect(mockFn).toHaveBeenCalled();
    });

    test('calls animationIteration', () => {
      const mockFn = jest.fn();
      wrapper = setup({ onAnimationIteration: mockFn });
      wrapper.instance().handleIteration();

      expect(mockFn).toHaveBeenCalled();
    });

    test('calls animationIteration 2 times', () => {
      const mockFn = jest.fn();
      wrapper = setup({ onAnimationIteration: mockFn });
      wrapper.instance().handleIteration();
      wrapper.instance().handleIteration();

      expect(mockFn).toHaveBeenCalledTimes(2);
    });
  });
});
