import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import DataTableEntries from './DataTableEntries';

const expectedProps = {
  className: 'testClassname',
  barReverse: true,
  handleEntriesChange: () => {},
  displayEntries: true,
  entries: 0,
  entriesArr: [0],
  paging: true,
  label: 'test'
};

const setup = (props = {}) =>
  shallow(<DataTableEntries {...expectedProps} {...props} />);

describe('<DataTableEntries />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'datatable-entries').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    checkProps(wrapper, expectedProps);
  });

  test('does render dataTable render if (paging || displayEntries === false)', () => {
    const props = {
      ...expectedProps,
      paging: false
    };

    wrapper = shallow(<DataTableEntries {...props} />);
    expect(wrapper.find('DataTableSelect')).toHaveLength(0);
  });

  describe('sets classes', () => {
    test('adds col-sm-12 col-md-6 class by default', () => {
      checkClass(wrapper, 'col-sm-12.col-md-6');
    });
  });
});
