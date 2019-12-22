import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import ModalFooter from './ModalFooter';

const setup = (props = {}) => shallow(<ModalFooter {...props} />);

describe('<ModalFooter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'modal-footer').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalFooter />, div);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('sets classes', () => {
    test('adds \'modal-footer\' class by default', () => {
      checkClass(wrapper, 'modal-footer');
    });

    test('adds \'justify-content-start\' class', () => {
      wrapper = setup({ start: true });

      checkClass(wrapper, 'justify-content-start');
    });

    test('adds \'justify-content-end\' class', () => {
      wrapper = setup({ end: true });

      checkClass(wrapper, 'justify-content-end');
    });

    test('adds \'justify-content-center\' class', () => {
      wrapper = setup({ center: true });

      checkClass(wrapper, 'justify-content-center');
    });

    test('adds \'justify-content-between\' class', () => {
      wrapper = setup({ between: true });

      checkClass(wrapper, 'justify-content-between');
    });

    test('adds \'justify-content-around\' class', () => {
      wrapper = setup({ around: true });

      checkClass(wrapper, 'justify-content-around');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
