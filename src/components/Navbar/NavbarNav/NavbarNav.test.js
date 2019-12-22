import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass, checkTag } from '../../../tests/utils';
import NavbarNav from './NavbarNav';

const setup = (props = {}) => shallow(<NavbarNav {...props} />);

describe('<NavbarNav />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'navbar-nav').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarNav />, div);
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

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test('adds \'navbar-nav\' class by default', () => {
      checkClass(wrapper, 'navbar-nav');
    });

    test('adds \'ml-auto\' class if (right)', () => {
      wrapper = setup({ right: true });

      checkClass(wrapper, 'ml-auto');
    });

    test('adds \'mr-auto\' class if (right)', () => {
      wrapper = setup({ left: true });

      checkClass(wrapper, 'mr-auto');
    });

    test('adds \'justify-content-around w-100\' class if (!right && !left)', () => {
      checkClass(wrapper, 'justify-content-around.w-100');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
