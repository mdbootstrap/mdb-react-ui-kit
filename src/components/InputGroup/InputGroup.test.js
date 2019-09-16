import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag,
  checkCallBack
} from '../../tests/utils';
import InputGroup from './InputGroup';

const setup = (props = {}) => shallow(<InputGroup {...props} />);

describe('<InputGroup />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'input-group').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputGroup />, div);
  });

  test(`does not throw warnings with expected props`, () => {
    const expectedProps = {
      append: 'append test',
      appendClassNames: 'string',
      ariaLabel: 'test',
      children: <span data-test='children' />,
      className: 'string',
      containerClassName: 'string',
      containerId: 'string',
      hint: 'string',
      id: 'string',
      inputs: <input data-test='inputs' />,
      label: 'string',
      labelClassName: 'string',
      material: true,
      prepend: 'any',
      prependClassName: 'string',
      size: 'string',
      tag: 'div',
      textClassName: 'string',
      type: 'string',
      value: 'string',
      valueDefault: 'string',
      getValue: () => {},
      onChange: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test(`does not throw warnings without props`, () => {
    checkProps(wrapper, {});
  });

  test('sets correct value after receiving a `value` property', () => {
    wrapper = setup({ value: 'string' });
    let input = wrapper.find('Input');
    expect(input.prop('value')).toBe('string');
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'section' }).find('[data-test="input-group"]');
    checkTag(wrapper, 'section');
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' }).find('[data-test="input-group"]');

    expect(wrapper.prop('customAttr')).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets material property', () => {
    wrapper = setup({ material: true }).find('[data-test="input-group"]');
    checkClass(wrapper, 'md-form');
  });

  test('sets material property to textClassName', () => {
    wrapper = setup({ material: true, prepend: 'test' })
      .find('[data-test="input-group"]')
      .find('span');

    checkClass(wrapper, 'md-addon');
  });

  test('sets size property', () => {
    wrapper = setup({ size: 'lg' }).find('[data-test="input-group"]');
    checkClass(wrapper, 'input-group-lg');
  });

  test('invokes getValue() after input value changes', () => {
    checkCallBack(wrapper, 'getValue', 'change', 'Input', {
      persist: () => {},
      target: { value: 'testValue' }
    });
  });

  test('invokes onChange() after input value changes', () => {
    const onChange = jest.fn();
    wrapper = setup({ onChange });

    wrapper.find('Input').simulate('change', {
      persist: () => {},
      target: {
        value: 'testValue'
      }
    });

    expect(onChange).toBeCalled();
  });

  test('returns correct value from getValue()', () => {
    const getValue = jest.fn(value => value);
    wrapper = setup({ getValue });

    wrapper.find('Input').simulate('change', {
      persist: () => {},
      target: {
        value: 'testValue'
      }
    });

    expect(getValue).toBeCalledWith('testValue');
  });

  test('returns event from onChange()', () => {
    const onChange = jest.fn(event => event);
    wrapper = setup({ onChange });

    wrapper.find('Input').simulate('change', {
      persist: () => {},
      target: {
        value: 'testValue'
      }
    });

    expect(onChange.mock.calls[0][0].target.value).toEqual('testValue');
  });

  describe('Renders elements', () => {
    test(`render label`, () => {
      const label = setup({ label: 'label' }).find('label');
      expect(label.length).toBe(1);
    });

    test(`render prepend`, () => {
      wrapper = setup({ prepend: 'prepend' });
      const prepend = wrapper
        .find('[data-test="input-group"]')
        .children()
        .first();

      checkTag(prepend, 'div');
      checkClass(prepend, 'input-group-prepend');
    });

    test(`render append`, () => {
      wrapper = setup({ append: 'append' });
      const append = wrapper
        .find('[data-test="input-group"]')
        .children()
        .last();

      checkTag(append, 'div');
      checkClass(append, 'input-group-append');
    });

    test(`render prepend node`, () => {
      wrapper = setup({ prepend: <div data-test='prepend-node' /> });
      const prepend = wrapper.find('div[data-test="prepend-node"]');

      expect(prepend.length).toBe(1);
    });

    test(`render append node`, () => {
      wrapper = setup({ prepend: <div data-test='append-node' /> });
      const append = wrapper.find('div[data-test="append-node"]');

      expect(append.length).toBe(1);
    });

    test('custom input(s)', () => {
      let input = <input data-test='inputs' />;

      wrapper = setup({ inputs: input });
      let inputs = wrapper.find('[data-test="input-group"]').find('input');
      expect(inputs.length).toBe(1);

      wrapper = setup({
        inputs: (
          <>
            {input} {input}
          </>
        )
      });

      inputs = wrapper.find('[data-test="input-group"]').find('input');
      expect(inputs.length).toBe(2);
    });

    test(`render children`, () => {
      wrapper = setup({ children: <span data-test='children' /> });
      const children = wrapper.find('[data-test="children"]');
      expect(children.length).toBe(1);
    });

    test(`does not render label`, () => {
      const label = wrapper.find('label');
      expect(label.length).toBe(0);
    });

    test(`does not render prepend`, () => {
      const prepend = wrapper
        .find('[data-test="input-group"]')
        .find('.input-group-prepend');
      expect(prepend.length).toBe(0);
    });

    test(`does not render append`, () => {
      const append = wrapper
        .find('[data-test="input-group"]')
        .find('.input-group-append');
      expect(append.length).toBe(0);
    });

    test(`does not render children`, () => {
      let children = wrapper.find('[data-test="input-group"]').children();
      expect(children.length).toBe(1);
    });
  });

  describe('pass the ID property for the label to function properly', () => {
    const wrapper = setup({ id: 'string', label: 'label test' });

    test('htmlFor property on label', () => {
      const label = wrapper.find('label');
      expect(label.prop('htmlFor')).toEqual('string');
    });

    test('id property on input', () => {
      const input = wrapper.find('Input');
      expect(input.prop('id')).toEqual('string');
    });
  });

  describe('sets classes', () => {
    test('sets input-group class by default to conainer', () => {
      let container = wrapper.find('[data-test="input-group"]');
      checkClass(container, 'input-group');
    });

    test('sets input-group-prepend class by default to prepend', () => {
      wrapper = setup({ prepend: 'test' });
      let container = wrapper
        .find('[data-test="input-group"]')
        .children()
        .first();

      checkClass(container, 'input-group-prepend');
    });

    test('sets input-group-append class by default to append', () => {
      wrapper = setup({ append: 'test' });
      let container = wrapper
        .find('[data-test="input-group"]')
        .children()
        .last();

      checkClass(container, 'input-group-append');
    });

    test('sets custom classnames to prepend', () => {
      wrapper = setup({
        prepend: 'test',
        prependClassName: 'prependTestClass'
      });
      let container = wrapper
        .find('[data-test="input-group"]')
        .children()
        .first();

      checkClass(container, 'prependTestClass');
    });

    test('sets custom classnames to append', () => {
      wrapper = setup({ append: 'test', appendClassName: 'appendTestClass' });
      let container = wrapper
        .find('[data-test="input-group"]')
        .children()
        .last();

      checkClass(container, 'appendTestClass');
    });

    test('sets custom classnames to conainer', () => {
      let container = setup({ containerClassName: 'testClassName' }).find(
        '[data-test="input-group"]'
      );
      checkClass(container, 'testClassName');
    });

    test('sets custom classnames to input', () => {
      wrapper = setup({ className: 'test' });
      let input = wrapper.find('Input');

      checkClass(input, 'test');
    });

    test('sets custom classes to label', () => {
      wrapper = setup({
        label: 'label test',
        labelClassName: 'labelClassTest'
      });
      let container = wrapper.find('label');
      checkClass(container, 'labelClassTest');
    });
  });
});
