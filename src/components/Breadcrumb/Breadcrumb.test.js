import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import checkPropTypes from 'check-prop-types';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

const setup = (props = {}) => shallow(<Breadcrumb {...props} />);

const mounted = (props = {}) => mount(<Breadcrumb {...props} />);

describe('<Breadcrumb />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const Breadcrumb = findByTestAttr(wrapper, 'breadcrumb');
    expect(Breadcrumb.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb children='children text node' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      color: 'test',
      light: true,
      uppercase: true,
      bold: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find(`[data-custom-attr="custom"]`).length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds breadcrumb class by default', () => {
      checkClass(wrapper, 'breadcrumb');
    });

    test(`adds 'text-uppercase' class`, () => {
      wrapper = setup({ uppercase: true });
      checkClass(wrapper, 'text-uppercase');
    });

    test(`adds 'font-up-bold' class and then adds strong tag to children nodes`, () => {
      wrapper = mounted({
        bold: true,
        children: <BreadcrumbItem children='children text node' />
      });
      let child = wrapper.find('WithBold');

      checkClass(wrapper, 'font-up-bold');
      expect(child.find('strong').length).toBe(1);
    });

    test(`adds white-text class`, () => {
      wrapper = mounted({ light: true });
      checkClass(wrapper, 'white-text');
    });

    test(`adds primary-color class`, () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary-color');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });
      checkClass(wrapper, 'testClassName');
    });
  });
});
