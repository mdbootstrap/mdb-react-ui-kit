import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import TableBody from './TableBody';

const setup = (props = {}) => shallow(<TableBody {...props} />);

describe('<TableBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'table-body').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      color: 'primary',
      rows: [
        {
          id: 1,
          first: 'Mark',
          last: 'Otto',
          handle: '@mdo'
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

  test('invokes callback after clicking', () => {
    const callback = jest.fn();
    const rows = [
      {
        id: 1,
        first: 'Mark',
        last: 'Otto',
        handle: '@mdo',
        clickEvent: callback
      }
    ];
    wrapper = setup({ customAttr: 'custom', rows });
    const tr = wrapper.find('tr');

    tr.simulate('click');

    expect(callback).toBeCalled();
  });

  describe('sets classes', () => {
    test('adds `text-white` class when `textWhite` property is passed', () => {
      wrapper = setup({ textWhite: true });
      checkClass(wrapper, 'text-white');
    });

    test('adds `primary` color', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });
  });
});
