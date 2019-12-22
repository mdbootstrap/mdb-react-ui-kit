import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import ButtonGroup from './ButtonGroup';

const setup = (props = {}) => shallow(<ButtonGroup {...props} />);

describe('<ButtonGroup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const ButtonGroup = findByTestAttr(wrapper, 'button-group');
    expect(ButtonGroup.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonGroup children='children text node' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      'aria-label': 'test',
      className: 'testClassName',
      role: 'test',
      size: 'test',
      vertical: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find('[data-custom-attr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds btn-group class when `vertical` property is not passed', () => {
      checkClass(wrapper, 'btn-group');
    });

    test('adds \'btn-group-vertical\' class', () => {
      wrapper = setup({ vertical: true });
      checkClass(wrapper, 'btn-group-vertical');
    });

    test('adds \'btn-group-sm\' class', () => {
      wrapper = setup({ size: 'sm' });
      checkClass(wrapper, 'btn-group-sm');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });
      checkClass(wrapper, 'testClassName');
    });
  });
});
