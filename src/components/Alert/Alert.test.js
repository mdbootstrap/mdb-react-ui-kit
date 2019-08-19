import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Alert from './Alert';

const setup = (props = {}) => shallow(<Alert {...props} />);

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const alert = findByTestAttr(wrapper, 'alert');
    expect(alert.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Alert />, div);
  });

  test('does not throw warnings with expected props', () => {
    const mockFunc = jest.fn();

    const expectedProps = {
      className: 'testClassName',
      color: 'secondary',
      onClose: mockFunc,
      onClosed: mockFunc
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('does not render Transition when dismiss is not passed', () => {
    expect(wrapper.find('Transition').length).toBe(0);
  });

  describe('sets classes', () => {
    test(`adds alert class by default`, () => {
      checkClass(wrapper, 'alert');
    });

    test('adds color class', () => {
      wrapper = setup({ color: 'secondary' });

      expect(wrapper.find(`[className*="alert-secondary"]`).length).toBe(1);
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });

  describe('dismiss', () => {
    beforeEach(() => {
      wrapper = setup({ dismiss: true });
    });

    test('adds Transition', () => {
      expect(wrapper.find('Transition').length).toBe(1);
    });

    test('closes alert after click on the close button', () => {
      const closeButton = wrapper.find('button');

      closeButton.simulate('click');
      expect(wrapper.prop('in')).toBe(false);
    });
  });
});
