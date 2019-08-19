import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Button from './Button';

const mockCallback = jest.fn();

const setup = (props = {}) => shallow(<Button {...props} />);

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const button = findByTestAttr(wrapper, 'button');
    expect(button.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: true,
      action: true,
      block: true,
      color: 'primary',
      disabled: true,
      download: 'downloadTest',
      gradient: 'peach',
      role: 'buttom',
      type: 'button',
      outline: true,
      rounded: true,
      circle: true,
      floating: true,
      flat: true,
      innerRef: 'refTest',
      onClick: mockCallback,
      size: 'sm',
      social: 'socialTest',
      tag: 'div',
      target: 'targetTest',
      className: 'testClassName'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`invokes callback function passed as a prop after clicking a button`, () => {
    wrapper = setup({ onClick: mockCallback });
    wrapper.simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find(`[data-custom-attr="custom"]`).length).toBe(1);
  });

  test('sets href', () => {
    wrapper = setup({ href: 'https://mdbootstrap.com/' });

    expect(wrapper.prop('href')).toBe('https://mdbootstrap.com/');
    expect(wrapper.find('[href="https://mdbootstrap.com/"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  test('should set `a` tag when (href and tag==="button") are passed', () => {
    wrapper = setup({ href: '...', tag: 'button' });
    checkTag(wrapper, 'a');
  });

  test('renders a waves ripple element when is not disabled', () => {
    expect(wrapper.find('Waves').length).toBe(1);
  });

  describe('sets classes', () => {
    test(`adds btn class by default`, () => {
      checkClass(wrapper, 'btn');
    });

    test(`adds Ripple-parent class by default`, () => {
      checkClass(wrapper, 'Ripple-parent');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test(`adds peach-gradient class`, () => {
      wrapper = setup({ gradient: 'peach' });

      checkClass(wrapper, 'peach-gradient');
    });

    test(`adds btn-flat class`, () => {
      wrapper = setup({ flat: true });

      checkClass(wrapper, 'btn-flat');
    });

    test(`adds btn-outline-default class when color is not passed`, () => {
      wrapper = setup({ outline: true });

      checkClass(wrapper, 'btn-outline-default');
    });

    test(`adds btn-outline-primary class when color passed as primary`, () => {
      wrapper = setup({ outline: true, color: 'primary' });

      checkClass(wrapper, 'btn-outline-primary');
    });

    test(`should not add gradient class when flat propety is passed`, () => {
      wrapper = setup({ gradient: 'peach', flat: true });

      expect(wrapper.find(`[className*="peach-gradient"]`).length).toBe(0);
    });

    test(`adds btn-floating class`, () => {
      wrapper = setup({ floating: true });

      checkClass(wrapper, 'btn-floating');
    });

    test(`adds btn-rounded class`, () => {
      wrapper = setup({ rounded: true });

      checkClass(wrapper, 'btn-rounded');
    });

    test(`adds btn-circle class`, () => {
      wrapper = setup({ circle: true });

      checkClass(wrapper, 'btn-circle');
    });

    test(`adds btn-block class`, () => {
      wrapper = setup({ block: true });

      checkClass(wrapper, 'btn-block');
    });

    test(`adds btn-action class`, () => {
      wrapper = setup({ action: true });

      checkClass(wrapper, 'btn-action');
    });

    test(`adds btn-fb class`, () => {
      wrapper = setup({ social: 'fb' });

      checkClass(wrapper, 'btn-fb');
    });

    test(`adds btn-lg class`, () => {
      wrapper = setup({ size: 'lg' });

      checkClass(wrapper, 'btn-lg');
    });

    test(`adds active class`, () => {
      wrapper = setup({ active: true });

      checkClass(wrapper, 'active');
    });
  });

  describe('disabled', () => {
    beforeEach(() => {
      wrapper = setup({ disabled: true });
    });

    test('adds disabled class', () => {
      checkClass(wrapper, 'disabled');
    });

    test('doesn`t render a waves ripple element', () => {
      expect(wrapper.find('Waves').length).toBe(0);
    });
  });
});
