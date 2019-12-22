import React from 'react';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,

} from '../../../tests/utils';
import DataTableHead from './DataTableHead';

const setup = (props = {}) =>
  shallow(<DataTableHead columns={[]} {...props} sorted />);

describe('<DataTableHead />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-head').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      color: 'string',
      handleSort: () => { },
      scrollX: true,
      scrollY: true,
      sortable: true,
      textWhite: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('renders colgroup if (scrollX || scrollY === true)', () => {
    wrapper = setup({ scrollX: true });

    expect(wrapper.find('colgroup')).toHaveLength(1);
  });

  test('does not render colgroup if (scrollX || scrollY === false)', () => {
    expect(wrapper.find('colgroup')).toHaveLength(0);
  });

  test('invokes onClick callback if sortable property is passed', () => {
    const columns = [{ field: 'test' }];

    const cb = jest.fn();
    wrapper = setup({ sortable: true, handleSort: cb, columns });
    const th = wrapper.find('th');

    th.simulate('click');
    expect(cb).toBeCalled();
  });

  test('invokes onClick callback if sortable property is not passed', () => {
    const columns = [{ field: 'test' }];
    const cb = jest.fn();
    wrapper = setup({ sortable: false, handleSort: cb, columns });
    const th = wrapper.find('th');

    th.simulate('click');
    expect(cb).not.toBeCalled();
  });

  test('invokes onClick callback if sortable property is passed', () => {
    const columns = [{ field: 'test', label: 'testLabel' }];
    wrapper = setup({ columns });
    const label = wrapper.find('th').text();
    expect(label).toEqual('testLabel');
  });

  describe('sets classes', () => {
    test('adds text-white class if "textwhite" property is passed', () => {
      wrapper = setup({ textWhite: true });
      checkClass(wrapper, 'text-white');
    });

    test('adds primary color class if "color" property is passed', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });

    test("adds dark color class if (color === 'dark') property is passed", () => {
      wrapper = setup({ color: 'dark' });
      checkClass(wrapper, 'thead-dark');

      wrapper = setup({ color: 'light' });
      checkClass(wrapper, 'thead-light');
    });
  });
});
