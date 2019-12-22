import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Navbar from './Navbar';

const setup = (props = {}) => shallow(<Navbar to='#' {...props} />);

describe('<Navbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'navbar').length).toBeTruthy();
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar to='testLink' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      light: true,
      dark: true,
      double: true,
      fixed: 'test',
      sticky: 'test',
      scrolling: true,
      scrollingNavbarOffset: 3,
      color: 'test',
      tag: 'section',
      expand: true,
      transparent: true
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

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test('adds \'navbar\' class by default', () => {
      checkClass(wrapper, 'navbar');
    });

    test('adds \'navbar-light\' class if (light) property is passed', () => {
      wrapper = setup({ light: true });

      checkClass(wrapper, 'navbar-light');
    });

    test('adds \'navbar-dark\' class if (dark) property is passed', () => {
      wrapper = setup({ dark: true });

      checkClass(wrapper, 'navbar-dark');
    });

    test('adds \'sticky-top\' class if (sticky:top) property is passed', () => {
      wrapper = setup({ sticky: 'top' });

      checkClass(wrapper, 'sticky-top');
    });

    test('adds \'fixed-top\' class if (fixed:top) property is passed', () => {
      wrapper = setup({ fixed: 'top' });

      checkClass(wrapper, 'fixed-top');
    });

    test('adds \'scrolling-navbar\' class if (scrolling || scrollingNavbarOffset) property is passed', () => {
      wrapper = setup({ scrolling: true });

      checkClass(wrapper, 'scrolling-navbar');
    });

    test('adds \'top-nav-collapse\' class if (state.isCollapsed === true)', () => {
      wrapper.setState({ isCollapsed: true });
      checkClass(wrapper, 'top-nav-collapse');
    });

    test('adds \'double-nav\' class if (double) property is passed', () => {
      wrapper = setup({ double: true });
      checkClass(wrapper, 'double-nav');
    });

    test('adds \'navbar-expand\' class if (expand === true || expand === \'xs\') property is passed', () => {
      wrapper = setup({ expand: true });
      checkClass(wrapper, 'navbar-expand');
    });

    test('adds \'navbar-expand-md\' class if (expand === \'md\') property is passed', () => {
      wrapper = setup({ expand: 'md' });

      checkClass(wrapper, 'navbar-expand-md');
    });

    test('should not add \'navbar-expand\' class if (expand === false) property is passed', () => {
      wrapper = setup({ expand: false });

      expect(wrapper.find('.navbar-expand')).toHaveLength(0);
    });

    test('adds \'primary\' class if (color: primary) property is passed', () => {
      wrapper = setup({ color: 'primary' });

      checkClass(wrapper, 'primary');
    });

    test('should not add \'primary\' class if (transparent && !this.state.isCollapsed) property is passed', () => {
      wrapper = setup({ color: 'primary', transparent: true });
      wrapper.setState({ isCollapsed: false });

      expect(wrapper.find('.primary')).toHaveLength(0);
    });

    test('should add \'primary\' class if (transparent && this.state.isCollapsed) property is passed', () => {
      wrapper = setup({ color: 'primary', transparent: true });
      wrapper.setState({ isCollapsed: true });

      expect(wrapper.find('.primary')).toHaveLength(1);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
