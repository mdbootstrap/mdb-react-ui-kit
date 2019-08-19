import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import checkPropTypes from 'check-prop-types';
import InputNumeric from './InputNumeric';

const setup = (props = {}) => shallow(<InputNumeric {...props} />);

describe('<InputNumeric />', () => {
  let wrapper;
  const mockFn = jest.fn(value => value);

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const InputNumeric = findByTestAttr(wrapper, 'input-numeric');
    expect(InputNumeric.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputNumeric />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: '',
      getValue: mockFn
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test('calls getValue after onChange', () => {
    wrapper = setup({ getValue: mockFn });

    wrapper.simulate('change', 'testValue');

    expect(mockFn).toHaveBeenCalled();
  });

  test('returns correct value from getValue method', () => {
    wrapper = setup({ getValue: mockFn });

    wrapper.simulate('change', 'testValue');
    
    expect(mockFn).toBeCalledWith('testValue');
  });

  describe('sets classes', () => {
    test('adds form-control class by default', () => {
      checkClass(wrapper, 'form-control');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
