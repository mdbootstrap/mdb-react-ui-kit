import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import NavItem from './NavItem';

const setup = (props = {}) => shallow(<NavItem {...props} />);

describe('<NavItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'nav-item').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavItem />, div);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      tag: 'test',
      type: 'test',
      children: <span />,
      right: true,
      left: false,
      image: 'test'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test(`adds 'nav-item' class by default`, () => {
      checkClass(wrapper, 'nav-item');
    });

    test(`adds 'active' class if (active) property is passed`, () => {
      wrapper = setup({ active: true });

      checkClass(wrapper, 'active');
    });

    test(`adds 'navbar-text' class if (text) property is passed`, () => {
      wrapper = setup({ text: 'test' });

      checkClass(wrapper, 'navbar-text');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
