import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkClass } from '../../../tests/utils';
import DataTablePagination from './DataTablePagination';

const expectedProps = {
  activePage: 1,
  pages: [[{}, {}], [{}, {}], [{}, {}], [{}]],
  pagesAmount: 4,
  label: ['prev', 'next'],
  changeActivePage: () => { }
};

const setup = (props = {}) =>
  shallow(<DataTablePagination {...expectedProps} {...props} />);

describe('<DataTablePagination />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-pagination').length).toBe(1);
  });

  test('sets active property for PageItem', () => {
    wrapper = setup({ activePage: 2 });
    const node = wrapper.find('PageItem').at(3);
    expect(node.prop('active')).toEqual(true);

    const active = wrapper
      .find('PageItem')
      .filterWhere(n => n.prop('active') === true);

    expect(active.length).toEqual(1);
  });

  describe('sets disabled property', () => {
    test('sets disabled property for prev & next buttons', () => {
      wrapper = setup({ activePage: 0 });
      const prev = wrapper
        .find('PageItem')
        .first()
        .prop('disabled');
      expect(prev).toEqual(true);

      wrapper = setup({ activePage: expectedProps.pagesAmount - 1 });
      const next = wrapper
        .find('PageItem')
        .last()
        .prop('disabled');
      expect(next).toEqual(true);
    });

    test('unset disabled property for prev & next buttons', () => {
      wrapper = setup({ activePage: 1 }).find('PageItem');
      const prev = wrapper.first().prop('disabled');
      const next = wrapper.last().prop('disabled');

      expect(prev).toEqual(false);
      expect(next).toEqual(false);
    });
  });

  test('invokes onClick callback on PageLink', () => {
    const cb = jest.fn();
    wrapper = setup({ changeActivePage: cb });

    wrapper.find('PageItem PageLink').forEach(node => {
      node.simulate('click');
    });
    expect(cb).toHaveBeenCalledTimes(6);
  });

  describe('calls functions of component', () => {
    test('calls pagesIndexify', () => {
      wrapper.setState({ pages: [[], [], [], [], [], []] });
      const amount = wrapper.instance().pagesIndexify();
      expect(amount.length).toBe(6);
    });

    test('calls groupPages', () => {
      wrapper = setup({ pagesAmount: 2 }); // how many pages for 1 tab
      wrapper.setState({
        pages: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
      });
      wrapper.instance().groupPages(); // 9/2 ~ 5 targets
      expect(wrapper.instance().state.pGroups.length).toBe(5);
    });

    test('calls choosePagesGroup', () => {
      wrapper = setup({ pagesAmount: 1, activePage: 3 }); // how many pages for 1 tab
      wrapper.setState({
        pages: [[{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}], [{}]]
      });
      const pagesGroup = wrapper.instance().choosePagesGroup();
      expect(pagesGroup[0].length).toBe(1);
    });
  });

  describe('sets classes', () => {
    test('adds col-sm-12 col-md-7 class by default', () => {
      checkClass(wrapper, 'col-sm-12.col-md-7');
    });

    test('adds dataTables_paginate class by default for first div', () => {
      checkClass(wrapper.find('div'), 'dataTables_paginate');
    });

    test('adds page-link class by default for PageLink', () => {
      wrapper.find('PageLink').map(node => {
        return checkClass(node, 'page-link');
      });
    });
  });
});
