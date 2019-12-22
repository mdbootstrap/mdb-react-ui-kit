import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import DataTableSelect from './DataTableSelect';

const setup = (props = {}) =>
  shallow(
    <DataTableSelect
      entries={[]}
      label='testLabel'
      onChange={() => {}}
      value={10}
      {...props}
    />
  );

describe('<DataTableSelect />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-select').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    checkProps(wrapper, {});
  });

  test('renders correct label', () => {
    // if entries will not be equal to [] .text() will return different value
    expect(wrapper.find('label').text()).toEqual('testLabel');
  });

  test('invokes onChange callback', () => {
    const cb = jest.fn();
    wrapper = setup({ onChange: cb });

    const select = wrapper.find('select');
    select.simulate('change', {
      target: {
        value: '0'
      }
    });

    expect(cb).toBeCalled();
  });

  test('invokes onChange with correct value', () => {
    const cb = jest.fn();
    wrapper = setup({ onChange: cb });

    const select = wrapper.find('select');
    select.simulate('change', {
      target: {
        value: '20'
      }
    });

    expect(cb).toBeCalledWith(20);
  });

  describe('sets classes', () => {
    test('adds \'custom-select custom-select-sm form-control form-control-sm\' class by default', () => {
      checkClass(
        wrapper,
        'custom-select.custom-select-sm.form-control.form-control-sm'
      );
    });
  });
});
