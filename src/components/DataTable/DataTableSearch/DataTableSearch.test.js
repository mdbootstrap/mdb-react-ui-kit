import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkClass, checkProps } from '../../../tests/utils';
import DataTableSearch from './DataTableSearch';

const expectedProps = {
  search: 'test',
  searching: true,
  handleSearchChange: () => {}
};

const setup = (props = {}) =>
  shallow(<DataTableSearch {...expectedProps} {...props} />);

describe('<DataTableSearch />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-search').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      barReverse: true,
      label: 'string'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('renders DataTableInput if (searching)', () => {
    expect(wrapper.find('DataTableInput')).toHaveLength(1);
  });

  test('does not render DataTableInput if (!searching)', () => {
    wrapper = setup({ searching: false });
    expect(wrapper.find('DataTableInput')).toHaveLength(0);
  });

  test('invokes onChange callback if searching property is passed', () => {
    const cb = jest.fn();
    wrapper = setup({ searching: true, handleSearchChange: cb });
    const DataTableInput = wrapper.find('DataTableInput');

    DataTableInput.simulate('change');
    expect(cb).toBeCalled();
  });

  describe('sets classes', () => {
    test('adds col-sm-12 col-md-6 class by default', () => {
      checkClass(wrapper, 'col-sm-12.col-md-6');
    });
  });
});
