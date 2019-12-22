import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Progress from './Progress';

const setup = (props = {}) => shallow(<Progress {...props} />);

describe('<Progress />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'progress').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Progress />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassname',
      overlay: 'grey-light',
      pattern: '1',
      tag: 'span'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds progress class by default', () => {
      checkClass(wrapper, 'progress');
    });

    test('adds md-progress class', () => {
      wrapper = setup({ material: true });
      checkClass(wrapper, 'md-progress');
    });

    test('adds indigo-color-dark class when only preloader property is passed', () => {
      wrapper = setup({ preloader: true });
      checkClass(wrapper, 'indigo-color-dark');
    });

    test('adds primary-color-dark class when preloader and color properties are passed', () => {
      wrapper = setup({ preloader: true, color: 'primary' });
      checkClass(wrapper, 'primary-color-dark');
    });

    test('adds barClassName class', () => {
      wrapper = setup({ barClassName: 'barClassName' });

      const inner = wrapper.find('div div');
      checkClass(inner, 'barClassName');
    });

    test('adds indeterminate class when preloader property is passed', () => {
      wrapper = setup({ preloader: true });

      const inner = wrapper.find('div div');
      checkClass(inner, 'indeterminate');
    });

    test('does not add indeterminate class when preloader property is passed', () => {
      const inner = wrapper.find('div div');
      expect(inner.find('.indeterminate').length).toBe(0);
    });

    test('adds progress-bar-animated class when animated property is passed', () => {
      wrapper = setup({ animated: true });
      const inner = wrapper.find('div div');
      checkClass(inner, 'progress-bar-animated');
    });

    test('adds bg-primary class when color property is passed', () => {
      wrapper = setup({ color: 'primary' });
      const inner = wrapper.find('div div');
      checkClass(inner, 'bg-primary');
    });

    test('adds progress-bar-striped class when striped or animated property is passed', () => {
      wrapper = setup({ striped: true });
      const inner = wrapper.find('div div');
      checkClass(inner, 'progress-bar-striped');

      wrapper = setup();
      wrapper = setup({ animated: true });
      checkClass(inner, 'progress-bar-striped');
    });

    test('does not add progress-bar-striped class when striped or animated property is not passed', () => {
      const inner = wrapper.find('div div');
      expect(inner.find('.progress-bar-striped').length).toBe(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
