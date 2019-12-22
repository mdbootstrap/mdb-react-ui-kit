import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Fa from './Fa';

const setup = (props = {}) => shallow(<Fa {...props} icon='star' />);

describe('<Fa />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const fa = findByTestAttr(wrapper, 'fa');
    expect(fa.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Fa icon='star' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      border: false,
      brand: false,
      className: '',
      icon: 'star',
      fab: false,
      fal: false,
      far: false,
      fixed: false,
      flip: '',
      inverse: true,
      light: false,
      list: false,
      pull: '',
      pulse: false,
      regular: false,
      rotate: '',
      spin: false,
      size: '',
      stack: ''
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props(except `icon`)', () => {
    checkPropTypes(wrapper);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ icon: 'star', customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds fa-li class', () => {
      wrapper = setup({ list: true });
      checkClass(wrapper, 'fa-li');
    });

    test('adds fa-star class', () => {
      wrapper = setup({ icon: 'star' });
      checkClass(wrapper, 'fa-star');
    });

    test('adds fa-size class', () => {
      wrapper = setup({ size: '1x' });
      checkClass(wrapper, 'fa-1x');
    });

    test('adds fa-fw class', () => {
      wrapper = setup({ fixed: true });
      checkClass(wrapper, 'fa-fw');
    });

    test('adds fa-pull class', () => {
      wrapper = setup({ pull: 'left' });
      checkClass(wrapper, 'fa-pull-left');
    });

    test('adds fa-border class', () => {
      wrapper = setup({ border: true });
      checkClass(wrapper, 'fa-border');
    });

    test('adds fa-spin class', () => {
      wrapper = setup({ spin: true });
      checkClass(wrapper, 'fa-spin');
    });

    test('adds fa-pulse class', () => {
      wrapper = setup({ pulse: true });
      checkClass(wrapper, 'fa-pulse');
    });

    test('adds fa-rotate class', () => {
      wrapper = setup({ rotate: '90' });
      checkClass(wrapper, 'fa-rotate-90');
    });

    test('adds fa-flip class', () => {
      wrapper = setup({ flip: 'horizontal' });
      checkClass(wrapper, 'fa-flip-horizontal');
    });

    test('adds fa-inverse class', () => {
      wrapper = setup({ inverse: true });
      checkClass(wrapper, 'fa-inverse');
    });

    test('adds fa-stack class', () => {
      wrapper = setup({ stack: '1x' });
      checkClass(wrapper, 'fa-1x');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
