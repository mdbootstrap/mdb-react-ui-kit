import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import NavbarBrand from './NavbarBrand';

const setup = (props = {}) => shallow(<NavbarBrand {...props} />);

describe('<NavbarBrand />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'navbar-brand').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarBrand />, div);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      href: 'testLink'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('should not render Link if `href` property is not passed', () => {
    expect(wrapper.find('NavLink')).toHaveLength(0);
  });

  test('should render Link if `href` property is not passed', () => {
    wrapper = setup({ href: 'testLink' });

    expect(wrapper.find('NavLink')).toHaveLength(1);
  });

  test('sets correct href(to) attr to NavLink', () => {
    wrapper = setup({ href: 'testLink' });

    expect(wrapper.find('NavLink').prop('to')).toEqual('testLink');
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('sets classes', () => {
    test('adds \'navbar-brand\' class by default', () => {
      checkClass(wrapper, 'navbar-brand');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
