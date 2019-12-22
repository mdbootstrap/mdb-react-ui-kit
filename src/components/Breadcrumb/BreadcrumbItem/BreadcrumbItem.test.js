import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import BreadcrumbItem from './BreadcrumbItem';

const setup = (props = {}) => shallow(<BreadcrumbItem {...props} />);

const mounted = (props = {}) => mount(<BreadcrumbItem {...props} />);

describe('<BreadcrumbItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const BreadcrumbItem = findByTestAttr(wrapper, 'breadcrumb-item');
    expect(BreadcrumbItem.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BreadcrumbItem children='children text node' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      active: false,
      appendIcon: false,
      bold: false,
      icon: '',
      iconBrand: false,
      iconClassName: '',
      iconLight: false,
      iconRegular: false,
      iconSize: ''
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find('[data-custom-attr="custom"]').length).toBe(1);
  });

  test('adds `strong` tag', () => {
    wrapper = mounted({ bold: true, children: 'children text node' });
    expect(wrapper.find('strong').length).toBe(1);
  });

  test('does not add `strong` tag if `bold` property is not passed', () => {
    wrapper = mounted({ children: 'children text node' });
    expect(wrapper.find('strong').length).toBe(0);
  });

  test('adds icon', () => {
    wrapper = mounted({ icon: 'star' });
    expect(wrapper.find('i').length).toBe(1);
  });

  test('does not add icon when `icon` property is not passed', () => {
    wrapper = mounted({ children: 'children text node' });
    expect(wrapper.find('i').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds breadcrumb-item class by default', () => {
      checkClass(wrapper, 'breadcrumb-item');
    });

    test('adds \'active\' class', () => {
      wrapper = setup({ active: true });
      checkClass(wrapper, 'active');
    });

    test('adds \'bc-icons\' class', () => {
      wrapper = setup({ icon: 'star' });
      checkClass(wrapper, 'bc-icons');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });
      checkClass(wrapper, 'testClassName');
    });

    describe('adds icon classes', () => {
      test('add mr-2 class if `appendIcon` property is not passed', () => {
        wrapper = mounted({ icon: 'test' });

        const icon = wrapper.find('i');
        checkClass(icon, 'mr-2');
      });

      test('add mx-2 class if `appendIcon` property is  passed', () => {
        wrapper = mounted({ icon: 'star', appendIcon: true });
        const icon = wrapper.find('i');
        checkClass(icon, 'mx-2');
      });
    });
  });
});
