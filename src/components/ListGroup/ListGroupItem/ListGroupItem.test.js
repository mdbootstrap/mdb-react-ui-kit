import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import checkPropTypes from 'check-prop-types';
import ListGroupItem from './ListGroupItem';

const setup = (props = {}) => shallow(<ListGroupItem {...props} />);

describe('<ListGroupItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const ListGroupItem = findByTestAttr(wrapper, 'list-group-item');
    expect(ListGroupItem.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListGroupItem />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: false,
      disabled: false,
      hover: false,
      success: false,
      info: false,
      warning: false,
      danger: false,
      tag: 'span',
      className: 'test',
      color: 'primary'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test(`sets 'a' tag href is passed and tag === li`, () => {
    wrapper = setup({ href: 'test', tag: 'li' });

    expect(wrapper.find('a').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds list-group-item class by default', () => {
      checkClass(wrapper, 'list-group-item');
    });

    test(`adds active class`, () => {
      wrapper = setup({ active: true });

      checkClass(wrapper, 'active');
    });

    test(`adds disabled class`, () => {
      wrapper = setup({ disabled: true });

      checkClass(wrapper, 'disabled');
    });

    test(`adds list-group-item-primary class`, () => {
      wrapper = setup({ color: 'primary' });

      checkClass(wrapper, 'list-group-item-primary');
    });

    test(`adds list-group-item-action class`, () => {
      wrapper = setup({ hover: true });

      checkClass(wrapper, 'list-group-item-action');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
