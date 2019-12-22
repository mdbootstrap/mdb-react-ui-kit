import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Table from './Table';

const setup = (props = {}) => shallow(<Table {...props} />);

describe('<Table />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'table').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      tag: 'span',
      active: true,
      itemId: '3'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });
    const table = wrapper.find('table');

    expect(table.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds `table` classes by default', () => {
      checkClass(wrapper, 'table');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    describe('sets wrapper classes', () => {
      test('adds `table-dark` class', () => {
        wrapper = setup({ dark: true });
        checkClass(wrapper, 'table-dark');
      });

      test('adds `table-responsive` class', () => {
        wrapper = setup({ responsive: true });
        checkClass(wrapper, 'table-responsive');
      });

      test('adds `table-responsive-sm` class', () => {
        wrapper = setup({ responsiveSm: true });
        checkClass(wrapper, 'table-responsive-sm');
      });

      test('adds `table-responsive-md` class', () => {
        wrapper = setup({ responsiveMd: true });
        checkClass(wrapper, 'table-responsive-md');
      });

      test('adds `table-responsive-lg` class', () => {
        wrapper = setup({ responsiveLg: true });
        checkClass(wrapper, 'table-responsive-lg');
      });

      test('adds `table-responsive-xl` class', () => {
        wrapper = setup({ responsiveXl: true });
        checkClass(wrapper, 'table-responsive-xl');
      });

      test('adds `table-wrapper-scroll-y` class', () => {
        wrapper = setup({ scrollY: true });
        checkClass(wrapper, 'table-wrapper-scroll-y');
      });
    });

    describe('sets table classes', () => {
      test('adds `w-auto` class', () => {
        wrapper = setup({ autoWidth: true });
        checkClass(wrapper, 'w-auto');
      });

      test('adds `table-bordered` class', () => {
        wrapper = setup({ bordered: true });
        checkClass(wrapper, 'table-bordered');
      });

      test('adds `table-borderless` class', () => {
        wrapper = setup({ borderless: true });
        checkClass(wrapper, 'table-borderless');
      });

      test('adds `btn-table` class', () => {
        wrapper = setup({ btn: true });
        checkClass(wrapper, 'btn-table');
      });

      test('adds `table-fixed` class', () => {
        wrapper = setup({ fixed: true });
        checkClass(wrapper, 'table-fixed');
      });

      test('adds `table-hover` class', () => {
        wrapper = setup({ hover: true });
        checkClass(wrapper, 'table-hover');
      });

      test('adds `table-sm` class', () => {
        wrapper = setup({ small: true });
        checkClass(wrapper, 'table-sm');
      });

      test('adds `table-striped` class', () => {
        wrapper = setup({ striped: true });
        checkClass(wrapper, 'table-striped');
      });
    });
  });
});
