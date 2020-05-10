import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkClass } from '../../../tests/utils';
import DataTableTableScroll from './DataTableTableScroll';

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
  translateScrollHead: 3,
  columns: [{ field: 'test' }],
  rows: [{}],
  children: <div />,
  maxHeight: 'test',
  scrollX: true,
  scrollY: true,
  handleSort: () => {},
  handleTableBodyScroll: () => {}
};

const setup = (props = {}) =>
  shallow(<DataTableTableScroll {...requiredProps} {...props} />);

describe('<DataTableTableScroll />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-table-scroll').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds \'col-sm-12\' class by default', () => {
      checkClass(wrapper, 'col-sm-12');
    });

    test('adds \'dataTables_scroll\' by default', () => {
      checkClass(wrapper, 'dataTables_scroll');
    });

    test('adds \'dataTables_scrollHead\' by default', () => {
      checkClass(wrapper, 'dataTables_scrollHead');
    });

    test('adds \'dataTable_scrollBody\' by default', () => {
      checkClass(wrapper, 'dataTable_scrollBody');
    });

    test('adds \'dataTable\' to  class \'Table\' by default', () => {
      checkClass(wrapper.find('Table').first(), 'dataTable');
    });
  });
});
