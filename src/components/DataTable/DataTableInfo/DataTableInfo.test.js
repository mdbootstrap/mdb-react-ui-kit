import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkClass } from '../../../tests/utils';
import DataTableInfo from './DataTableInfo';

const expectedProps = {
  activePage: 10,
  entries: 10,
  filteredRows: [],
  info: true,
  pages: []
};

const setup = (props = {}) =>
  shallow(<DataTableInfo {...expectedProps} {...props} />);

describe('<DataTableInfo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'datatable-info').length).toBe(1);
  });

  test('renders info if property is true', () => {
    expect(wrapper.find('div.dataTables_info')).toHaveLength(1);
  });

  test('does not render dataTableInfo info if (info === false)', () => {
    wrapper = setup({ info: false });
    expect(wrapper.find('div.dataTables_info')).toHaveLength(0);
  });

  describe('sets classes', () => {
    test('adds col-sm-12 col-md-5 by default', () => {
      wrapper = setup({ textWhite: true });
      checkClass(wrapper, 'col-sm-12.col-md-5');
    });
  });
});
