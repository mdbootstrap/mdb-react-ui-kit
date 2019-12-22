import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkClass, checkProps } from '../../../tests/utils';
import DataTableInput from './DataTableInput';

const setup = (props = {}) => shallow(<DataTableInput {...props} />);

describe('<DataTableInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-input').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      label: 'string',
      value: 'string',
      onChange: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('invokes onChange callback', () => {
    const cb = jest.fn();
    wrapper = setup({ onChange: cb });

    const input = wrapper.find('input');
    input.simulate('change');

    expect(cb).toBeCalled();
  });

  describe('sets label', () => {
    test('renders text of label', () => {
      wrapper = setup({ label: 'testLabel' });
      let label = wrapper.find('label').text();
      expect(label).toEqual('testLabel');

      wrapper = setup();
      label = wrapper.find('label').text();
      expect(label).toEqual('Search');
    });

    test('sets correct input\'s placeholder', () => {
      wrapper = setup({ label: 'test' });
      let input = wrapper.find('input').prop('placeholder');
      expect(input).toEqual('test');

      wrapper = setup();
      input = wrapper.find('input').prop('placeholder');
      expect(input).toEqual('Search');
    });
  });

  describe('input properties', () => {
    test('adds form-control form-control-sm class by default', () => {
      const input = wrapper.find('input');
      checkClass(input, 'form-control.form-control-sm');
    });

    test('sets input type', () => {
      const input = wrapper.find('input').prop('type');
      expect(input).toEqual('search');
    });
  });

  describe('sets classes', () => {
    test('adds dataTables_filter class by default', () => {
      checkClass(wrapper, 'dataTables_filter');
    });
  });
});
