import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import TableHead from './TableHead';

const setup = (props = {}) => shallow(<TableHead {...props} />);

describe('<TableHead />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'table-head').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      color: 'primary',
      columns: [
        {
          label: 'Handle',
          field: 'handle'
        }
      ],
      textWhite: true
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds `text-white` class when `textWhite` property is passed', () => {
      wrapper = setup({ textWhite: true });
      checkClass(wrapper, 'text-white');
    });

    test('adds `thead-dark` color when `color="light" property is passed`', () => {
      wrapper = setup({ color: 'dark' });
      checkClass(wrapper, 'thead-dark');
    });

    test('adds `thead-light` color when `color="dark" property is passed', () => {
      wrapper = setup({ color: 'light' });
      checkClass(wrapper, 'thead-light');
    });

    test('adds `primary` class', () => {
      wrapper = setup({ color: 'primary' });

      checkClass(wrapper, 'primary');
    });

    test('adds `th-sm` class', () => {
      wrapper = setup({
        columns: [
          {
            label: 'Handle',
            field: 'handle',
            minimal: 'sm'
          }
        ]
      });

      checkClass(wrapper, 'th-sm');
    });
  });
});
