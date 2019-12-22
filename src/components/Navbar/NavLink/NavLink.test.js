import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import NavLink from './NavLink';

const setup = (props = {}) => shallow(<NavLink to='#' {...props} />);

describe('<NavLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'nav-link').length).toBeTruthy();
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <NavLink to='testLink' />
      </Router>,
      div
    );
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      children: <span />,
      disabled: true,
      to: 'testLink',
      active: true
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBeTruthy();
  });

  test('renders Waves if (!disabled)', () => {
    wrapper = setup({ disabled: false });

    expect(wrapper.find('Waves')).toHaveLength(1);
  });

  test('does not render Waves if (disabled)', () => {
    wrapper = setup({ disabled: true });

    expect(wrapper.find('Waves')).toHaveLength(0);
  });

  describe('sets classes', () => {
    beforeEach(() => {
      wrapper = setup();
    });

    test('adds \'nav-link\' class by default', () => {
      checkClass(wrapper, 'nav-link');
    });

    test('adds \'active\' class if (active) property is passed', () => {
      wrapper = setup({ active: true });

      checkClass(wrapper, 'active');
    });

    test('adds \'disabled\' class if (disabled) property is passed', () => {
      wrapper = setup({ disabled: true });

      checkClass(wrapper, 'disabled');
    });

    test('adds \'Ripple-parent\' class if (!disabled) property is passed', () => {
      wrapper = setup({ disabled: false });

      checkClass(wrapper, 'Ripple-parent');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
