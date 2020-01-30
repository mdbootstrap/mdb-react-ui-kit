import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkClass, checkProps } from '../../tests/utils';
import DataTable from './DataTable';

const data = {
  columns: [
    {
      label: 'Name',
      field: 'name',
      sort: 'asc'
    },
    {
      label: 'Position',
      field: 'position',
      sort: 'asc'
    },
    {
      label: 'Office',
      field: 'office',
      sort: 'asc'
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc'
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 63
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: 66
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: 61
    }
  ]
};

const getAgeValue = (wrapper, position) => {
  return wrapper
    .find('tbody tr')
    .at(position)
    .find('td')
    .at(3)
    .text();
};

const getNameValue = (wrapper, position) => {
  return wrapper
    .find('tbody tr')
    .at(position)
    .find('td')
    .at(0)
    .text();
};

const setup = (props = {}) => shallow(<DataTable data={data} {...props} />);

describe('<DataTable />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      autoWidth: true,
      barReverse: true,
      bordered: true,
      borderless: true,
      btn: true,
      className: 'test',
      children: <div />,
      dark: true,
      data,
      displayEntries: true,
      entries: 5,
      entriesLabel: 'test',
      entriesOptions: [1, 2, 3, 4, 5],
      exportToCSV: true,
      fixed: true,
      hover: true,
      info: true,
      infoLabel: ['test'],
      maxHeight: 'test',
      noRecordsFoundLabel: 'test',
      noBottomColumns: true,
      // order: ['asc'],
      pagesAmount: 3,
      paging: true,
      paginationLabel: ['test'],
      responsive: true,
      responsiveSm: true,
      responsiveMd: true,
      responsiveLg: true,
      responsiveXl: true,
      searching: true,
      searchLabel: 'test',
      scrollX: true,
      scrollY: true,
      sortable: true,
      sortRows: ['test'],
      small: true,
      striped: true,
      theadColor: 'test',
      theadTextWhite: true,
      tbodyColor: 'test',
      tbodyTextWhite: true,

      onSearch: () => {},
      onSort: () => {},
      onPageChange: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('adds custom attributes passed as property ', () => {
    test('to DataTableTable if (!scrollY || !scrollX)', () => {
      wrapper = setup({ customAttr: 'custom' });

      const dataTableTable = wrapper.find('DataTableTable');

      expect(dataTableTable.prop('customAttr')).toEqual('custom');
    });

    test('to DataTableTableScroll if (scrollY || scrollX)', () => {
      wrapper = setup({ customAttr: 'custom', scrollX: true });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll.prop('customAttr')).toEqual('custom');
    });
  });

  describe('should not render', () => {
    test('DataTableScroll if (!scrollY || !scrollX)', () => {
      wrapper = setup({ customAttr: 'custom' });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll).toHaveLength(0);
    });

    test('DataTableInfo and DataTablePagination if (!paging)', () => {
      wrapper = setup({ customAttr: 'custom', paging: false });

      const info = wrapper.find('DataTableInfo');
      const pagination = wrapper.find('DataTablePagination');

      expect(info).toHaveLength(0);
      expect(pagination).toHaveLength(0);
    });
  });

  describe('should render', () => {
    test('DataTableScroll if (scrollY || scrollX)', () => {
      wrapper = setup({ customAttr: 'custom', scrollX: true });

      const dataTableScroll = wrapper.find('DataTableTableScroll');

      expect(dataTableScroll).toHaveLength(1);
    });

    test('DataTableInfo and DataTablePagination if (paging)', () => {
      wrapper = setup({ customAttr: 'custom', paging: true });

      const info = wrapper.find('DataTableInfo');
      const pagination = wrapper.find('DataTablePagination');

      expect(info).toHaveLength(1);
      expect(pagination).toHaveLength(1);
    });

  });

  describe('sorts correctly', () => {
    test('initially sorts numbers correctly - desc', () => {
      wrapper = mount(<DataTable data={data} order={['age', 'desc']} />);

      const first = getAgeValue(wrapper, 0);
      const second = getAgeValue(wrapper, 1);
      const third = getAgeValue(wrapper, 2);

      expect(first > second).toBeTruthy();
      expect(second > third).toBeTruthy();
    });

    test('initially sorts numbers correctly - asc', () => {
      wrapper = mount(<DataTable data={data} order={['age', 'asc']} />);

      const first = getAgeValue(wrapper, 0);
      const second = getAgeValue(wrapper, 1);
      const third = getAgeValue(wrapper, 2);

      expect(first < second).toBeTruthy();
      expect(second < third).toBeTruthy();
    });

    test('initially sorts strings correctly - desc', () => {
      wrapper = mount(<DataTable data={data} order={['name', 'desc']} />);

      const first = getNameValue(wrapper, 0);
      const second = getNameValue(wrapper, 1);
      const third = getNameValue(wrapper, 2);

      expect(first).toEqual('Tiger Nixon');
      expect(second).toEqual('Garrett Winters');
      expect(third).toEqual('Ashton Cox');

      expect(first > second).toBeTruthy();
      expect(second > third).toBeTruthy();
    });

    test('initially sorts strings correctly - asc', () => {
      wrapper = mount(<DataTable data={data} order={['name', 'asc']} />);

      const first = getNameValue(wrapper, 0);
      const second = getNameValue(wrapper, 1);
      const third = getNameValue(wrapper, 2);

      expect(first).toEqual('Ashton Cox');
      expect(second).toEqual('Garrett Winters');
      expect(third).toEqual('Tiger Nixon');

      expect(first < second).toBeTruthy();
      expect(second < third).toBeTruthy();
    });

    test('does not invoke `sort()` if `sort==="disabled"`', () => {
      const cb = jest.fn();

      wrapper.instance().setState = cb;

      wrapper.instance().handleSort('name', 'disabled');

      expect(cb).not.toBeCalled();
    });
  });

  test('invokes fetchData when props update if (typeof data===string)', () => {
    const cb = jest.fn();

    wrapper.instance().fetchData = cb;
    wrapper.setProps({ data: 'test' });

    expect(cb).toBeCalled();
  });

  test('invokes setData when props update', () => {
    const cb = jest.fn();

    wrapper.instance().setData = cb;
    wrapper.setProps({ data: {} });

    expect(cb).toBeCalled();
  });

  test('correctly sets unsearchable fields', () => {
    const columns = [
      {
        label: 'Name',
        field: 'name',
        searchable: false
      },
      {
        label: 'Position',
        field: 'position'
      }
    ];

    const rows = [
      {
        name: 'Tiger Nixon',
        position: 'System Architect'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant'
      }
    ];

    const data = {
      rows,
      columns
    };

    wrapper = setup({ data });

    expect(wrapper.state('unsearchable')[0]).toEqual('name');

    data.columns.map(column => (column.searchable = false));

    wrapper = setup({ data });

    expect(wrapper.state('unsearchable')).toEqual(['name', 'position']);
  });

  test('counts correct amount of pages', () => {
    wrapper = setup({ entries: 1, data: { rows: [] } });
    expect(wrapper.instance().pagesAmount()).toEqual(1);

    wrapper = setup({ entries: 2, data: { rows: [{}, {}, {}, {}] } });
    expect(wrapper.instance().pagesAmount()).toEqual(1);

    wrapper = setup({ entries: 2, data: { rows: [{}, {}, {}, {}, {}] } });
    expect(wrapper.instance().pagesAmount()).toEqual(1);
  });

  test('`handleSearchChange()` invokes `filterRows()` and sets state correctly', done => {
    const cb = jest.fn();

    wrapper.instance().filterRows = cb;

    wrapper.instance().handleSearchChange({ target: { value: 'test' } });
    done();

    expect(wrapper.state('search')).toEqual('test');
    expect(cb).toBeCalled();
  });

  test('returns correct count of filtered rows ', () => {
    const columns = [
      {
        label: 'Name',
        field: 'name'
      },
      {
        label: 'Position',
        field: 'position'
      }
    ];

    const rows = [
      {
        name: 'Tiger Nixon',
        position: 'System Architect'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant'
      }
    ];

    const data = {
      rows,
      columns
    };

    wrapper = setup({ data });

    wrapper.setState({ search: 'System' });
    wrapper.instance().filterRows();
    expect(wrapper.state('filteredRows')).toHaveLength(1);

    wrapper.setState({ search: 'Systems' });
    wrapper.instance().filterRows();
    expect(wrapper.state('filteredRows')[0].message).toBeTruthy();

    wrapper.setState({ search: 'e' });
    wrapper.instance().filterRows();
    expect(wrapper.state('filteredRows')).toHaveLength(2);
  });

  test('returns correct count of filtered rows if field`s searchable===false', () => {
    const columns = [
      {
        label: 'Name',
        field: 'name',
        searchable: false
      },
      {
        label: 'Position',
        field: 'position'
      }
    ];

    const rows = [
      {
        name: 'Tiger Nixon',
        position: 'System Architect'
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant'
      }
    ];

    const data = {
      rows,
      columns
    };

    wrapper = setup({ data });

    wrapper.setState({ search: 'Tiger' });
    wrapper.instance().filterRows();
    expect(wrapper.state('filteredRows')[0].message).toBeTruthy();

    wrapper.setState({ search: 'e' });
    wrapper.instance().filterRows();
    expect(wrapper.state('filteredRows')).toHaveLength(1);
  });

  test('correctly paginates rows', () => {
    const columns = [
      {
        label: 'Name',
        field: 'name'
      }
    ];

    const obj = { name: 'Tiger Nixon' };
    const rows = [...new Array(17).fill(obj)];

    const data = {
      rows,
      columns
    };

    wrapper = setup({ data });

    wrapper.setState({ entries: 5 });
    wrapper.instance().paginateRows();
    expect(wrapper.state('pages')).toHaveLength(4);

    wrapper.setState({ entries: 3 });
    wrapper.instance().paginateRows();
    expect(wrapper.state('pages')).toHaveLength(6);

    wrapper.setState({ entries: 20 });
    wrapper.instance().paginateRows();
    expect(wrapper.state('pages')).toHaveLength(1);

    data.rows.length = data.rows.length - 1;
    wrapper = setup({ data });
    wrapper.setState({ entries: 8 });
    wrapper.instance().paginateRows();
    expect(wrapper.state('pages')).toHaveLength(2);
  });

  test('changes active page correctly', () => {
    wrapper.instance().changeActivePage(3);

    expect(wrapper.state('activePage')).toEqual(3);
  });

  test('changes translateScrollHead  correctly', () => {
    wrapper.instance().handleTableBodyScroll({ target: { scrollLeft: 255 } });

    expect(wrapper.state('translateScrollHead')).toEqual(255);
  });

  test('returns correct value from onSearch() method', () => {
    const onSearchCb = jest.fn();
    wrapper = setup({ onSearch: onSearchCb });

    wrapper.instance().handleSearchChange({
      target: {
        value: 'testSearch'
      }
    });

    expect(onSearchCb).toBeCalledWith('testSearch');
  });

  test('returns correct value from onSort() method', () => {
    const onSortCb = jest.fn();
    wrapper = setup({ onSort: onSortCb });

    wrapper.instance().handleSort('age', 'desc');
    expect(onSortCb).toBeCalledWith({ column: 'age', direction: 'desc' });

    wrapper.instance().handleSort('age', 'asc');
    expect(onSortCb).toBeCalledWith({ column: 'age', direction: 'asc' });
  });

  test('returns correct value from onPageChange() method', () => {
    const onPageChangeCb = jest.fn();
    wrapper = setup({ onPageChange: onPageChangeCb });

    wrapper.instance().changeActivePage(5);
    expect(onPageChangeCb).toBeCalledWith({
      // returns 'page + 1' because page numbering starts from '1', not from '0'
      activePage: 6,
      pagesAmount: wrapper.instance().pagesAmount()
    });
  });

  test('should not render bottom header with columns if (noBottomColumns)', () => {
    wrapper = mount(<DataTable noBottomColumns />);
    expect(wrapper.find('[data-test="table-foot"]')).toHaveLength(0);
  });

  test('should render bottom header with columns if (!noBottomColumns)', () => {
    wrapper = mount(<DataTable noBottomColumns={false} />);

    expect(wrapper.find('[data-test="table-foot"]')).toHaveLength(1);
  });

  describe('sortRows works correctly', () => {
    const Fields = ({ searchvalue }) => <a href='!#'>{searchvalue}</a>;

    const sortRows = {
      columns: [
        {
          label: 'Link',
          field: 'link'
        }
      ],
      rows: [
        {
          link: <Fields searchvalue='Cedric_' />
        },
        {
          link: <Fields searchvalue='Ashton_' />
        },
        {
          link: <Fields searchvalue='Garrett_' />
        },
        {
          link: <Fields searchvalue='Airic_' />
        }
      ]
    };

    const mounted = (props = {}) =>
      mount(<DataTable data={sortRows} sortRows={['link']} {...props} />);

    beforeEach(() => {
      wrapper = mounted();
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test('`checkFieldValue()`returns `searchvalue` instead of value', () => {
      expect(
        wrapper.instance().checkFieldValue(sortRows.rows[0], 'link')
      ).toEqual('Cedric_');
    });

    test('`checkField()` returns correct result of sort depending on `sort direction`', () => {
      expect(
        wrapper
          .instance()
          .checkField('link', sortRows.rows[0], sortRows.rows[1], 'asc')
      ).toEqual(1);

      expect(
        wrapper
          .instance()
          .checkField('link', sortRows.rows[0], sortRows.rows[1], 'desc')
      ).toEqual(-1);
    });

    test('`sort()` invokes `checkField()` instead of regular comparison', () => {
      wrapper = setup({ data: sortRows, sortRows: ['link'] });
      const cb = jest.fn();
      wrapper.instance().checkField = cb;

      wrapper.instance().sort(sortRows.rows, ['link'], 'link', 'asc');
      expect(cb).toBeCalled();
    });
  });

  describe('sets classes', () => {
    test("adds 'dataTables_wrapper dt-bootstrap4' class by default", () => {
      checkClass(wrapper, 'dataTables_wrapper.dt-bootstrap4');
    });

    test("adds 'row flex-row-reverse' class if (barReverse) property is passed", () => {
      wrapper = setup({ barReverse: true });

      checkClass(wrapper, 'row.flex-row-reverse');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
