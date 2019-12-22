import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Input from './Input';

const setup = (props = {}) => shallow(<Input {...props} />);

const expectedProps = {
  className: 'testClassName',
  containerClass: '',
  disabled: false,
  error: '',
  filled: false,
  gap: false,
  group: false,
  hint: '',
  icon: 'star',
  iconBrand: false,
  iconClass: '',
  iconLight: false,
  iconRegular: false,
  iconSize: '1x',
  id: '',
  noTag: false,
  outline: false,
  label: 'test',
  labelClass: '',
  size: '',
  success: '',
  tag: 'a',
  type: 'text',
  value: 'testValue',
  validate: false,
  valueDefault: '',
  getValue: () => {},
  onIconMouseEnter: () => {},
  onIconMouseLeave: () => {}
};

describe('<Input />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const input = findByTestAttr(wrapper, 'input');
    expect(input.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  test('does not throw warnings with expected props', () => {
    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets correct value after receiving a `value` property', () => {
    wrapper = setup({ value: expectedProps.value });
    expect(wrapper.state('innerValue')).toBe(expectedProps.value);
  });

  test('sets correct value during onChange', () => {
    const input = wrapper.find('input');

    input.simulate('change', {
      stopPropagation() {},
      target: { value: expectedProps.value }
    });

    expect(wrapper.state('innerValue')).toBe(expectedProps.value);
  });

  test('adds custom class passed as property', () => {
    wrapper = setup({ className: expectedProps.className });

    checkClass(wrapper, expectedProps.className);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.instance().props.customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: expectedProps.tag });

    checkTag(wrapper, expectedProps.tag);
  });

  test('adds icon', () => {
    wrapper = setup({ icon: expectedProps.icon });

    expect(wrapper.find('Fa').length).toBe(1);
  });

  test('adds label', () => {
    wrapper = setup({ label: expectedProps.label });

    expect(wrapper.find('label').length).toBe(1);
  });

  test('Update value after state change', () => {
    wrapper.setState({ innerValue: 'testValue' });

    expect(wrapper.find('[value="testValue"]').length).toBe(1);
  });
});
