import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkClass } from '../../../tests/utils';
import DataTableTable from './DataTableTable';

const requiredProps = {
  autoWidth: true,
  bordered: true,
  borderless: true,
  btn: true,
  dark: true,
  fixed: true,
  hover: true,
  responsive: true,
  responsiveSm: true,
  responsiveMd: true,
  responsiveLg: true,
  responsiveXl: true,
  sortable: true,
  sorted: true,
  small: true,
  striped: true,
  theadColor: 'test',
  theadTextWhite: true,
  tbodyColor: 'test',
  tbodyTextWhite: true,
  columns: [{}],
  rows: [{}],
  children: <div />,
  handleSort: () => {}
};

const setup = (props = {}) =>
  shallow(<DataTableTable {...requiredProps} {...props} />);

describe('<DataTableTable />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-table').length).toBe(1);
  });

  test('should not render TableFoot when (noBottomColumns)', () => {
    wrapper = setup({ noBottomColumns: true });

    expect(wrapper.find('TableFoot')).toHaveLength(0);
  });

  test('should render TableFoot when (!noBottomColumns)', () => {
    wrapper = setup({ noBottomColumns: false });

    expect(wrapper.find('TableFoot')).toHaveLength(1);
  });

  describe('sets classes', () => {
    test('adds \'col-sm-12\' class by default', () => {
      checkClass(wrapper, 'col-sm-12');
    });

    test('adds \'dataTable\' to  class \'Table\' by default', () => {
      checkClass(wrapper.find('Table'), 'dataTable');
    });
  });
});
