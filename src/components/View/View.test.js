import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import View from './View';

const setup = (props = {}) => shallow(<View {...props} />);

describe('<View />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'view').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<View />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      cascade: false,
      className: '',
      hover: false,
      rounded: false,
      src: '',
      tag: 'div',
      waves: false,
      zoom: false
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

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  test('renders Waves', () => {
    wrapper = setup({ waves: true });
    expect(wrapper.find('Waves').length).toBe(1);
  });

  test('does not renders Waves', () => {
    expect(wrapper.find('Waves').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds view class by default', () => {
      checkClass(wrapper, 'view');
    });

    test('adds rounded class', () => {
      wrapper = setup({ rounded: true });

      checkClass(wrapper, 'rounded');
    });

    test('adds zoom class', () => {
      wrapper = setup({ zoom: true });

      checkClass(wrapper, 'zoom');
    });

    test('adds overlay class', () => {
      wrapper = setup({ hover: true });

      checkClass(wrapper, 'overlay');
    });

    test('adds view-cascade class', () => {
      wrapper = setup({ cascade: true });

      checkClass(wrapper, 'view-cascade');
    });

    test('adds Ripple-parent class', () => {
      wrapper = setup({ waves: true });

      checkClass(wrapper, 'Ripple-parent');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
