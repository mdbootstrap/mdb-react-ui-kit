import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import DropdownMenu from './DropdownMenu';
import Dropdown from '../Dropdown';

let context = {
  isOpen: true,
  dropup: true,
  dropright: false,
  dropleft: false
};

const setup = (props = {}) =>
  shallow(<DropdownMenu children={[]} {...props} />, { context });

const mounted = (props = {}, context) =>
  mount(
    <Dropdown>
      <DropdownMenu children={[]} {...props} />
    </Dropdown>,

    { context }
  );

describe('<DropdownMenu />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'dropdown-menu').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      basic: true,
      flip: true,
      right: true,
      tag: 'test'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = mounted({ tag: 'label', className: 'testClassName' });

    expect(wrapper.find('label.testClassName')).toHaveLength(1);
  });

  test('adds custom attributes to DropdownMenuProComponent passed as property', () => {
    wrapper = mounted({ 'data-custom-attr': 'custom' });

    const menu = wrapper.find('DropdownMenuProComponent');
    expect(menu.props().attributes['data-custom-attr']).toEqual('custom');
  });

  describe('sets correct placement', () => {
    test('sets top-end placement if (dropup && right)', () => {
      const wrapper = mount(<DropdownMenu children={[]} right />, { context });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('top-end');
    });

    test('sets top-start placement if (dropup && !right)', () => {
      const wrapper = mount(<DropdownMenu children={[]} right={false} />, {
        context
      });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('top-start');
    });

    test('sets left-start placement if (dropleft && !right)', () => {
      context = {
        ...context,
        dropup: false,
        dropleft: true
      };

      const wrapper = mount(<DropdownMenu children={[]} right={false} />, {
        context
      });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('left-start');
    });

    test('sets left-end placement if (dropleft && right)', () => {
      context = {
        ...context,
        dropup: false,
        dropleft: true
      };

      const wrapper = mount(<DropdownMenu children={[]} right />, { context });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('left-end');
    });

    test('sets right-start placement if (dropright && !right)', () => {
      context = {
        ...context,
        dropup: false,
        dropright: true
      };

      const wrapper = mount(<DropdownMenu children={[]} right={false} />, {
        context
      });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('right-start');
    });

    test('sets right-end placement if (dropright && right)', () => {
      context = {
        ...context,
        dropup: false,
        dropright: true
      };

      const wrapper = mount(<DropdownMenu children={[]} right />, { context });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('right-end');
    });

    test('sets bottom-end placement if `right`', () => {
      context = {
        ...context,
        dropright: false,
        dropleft: false
      };

      const wrapper = mount(<DropdownMenu children={[]} right />, { context });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('bottom-end');
    });

    test('sets bottom-start placement if `!right`', () => {
      context = {
        ...context,
        dropleft: false
      };

      const wrapper = mount(<DropdownMenu children={[]} />, { context });

      const placement = wrapper.find('Popper').prop('placement');

      expect(placement).toEqual('bottom-start');
    });
  });

  describe('sets classes', () => {
    test('adds `dropdown-menu` class by default', () => {
      wrapper = mounted();
      checkClass(wrapper, 'dropdown-menu');
    });

    test('adds `dropdown-menu-right` class if `right` property is passed', () => {
      wrapper = mounted({ right: true });
      checkClass(wrapper, 'dropdown-menu-right');
    });

    test('adds `dropdown-secondary` class if `color=secondary` property is passed', () => {
      wrapper = mounted({ color: 'secondary' });
      checkClass(wrapper, 'dropdown-secondary');
    });

    test('adds `basic` class if `basic` property is passed', () => {
      wrapper = mounted({ basic: true });
      checkClass(wrapper, 'basic');
    });

    test('adds `show` class if `color=secondary` property is passed', () => {
      const menu = mount(<DropdownMenu children={[]} tag='label' />, {
        context
      });

      const tag = menu.find('label');

      checkClass(tag, 'show');
    });

    test('adds custom class passed as property', () => {
      wrapper = mounted({ className: 'testClassName' });

      expect(wrapper.find('.testClassName').length).toBeTruthy();
    });
  });
});
