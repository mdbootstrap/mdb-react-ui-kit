import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../tests/utils';
import Waves from './Waves';

const setup = (props = {}) => shallow(<Waves {...props} />);

describe('<Waves />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'waves').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Waves />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      outline: true,
      flat: true,
      animate: true,
      cursorPos: {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds Ripple class', () => {
    expect(wrapper.find('[className*="Ripple"]').length).toBe(1);
  });

  test('does not add Ripple-outline class', () => {
    expect(wrapper.find('[className*="Ripple-outline"]').length).toBe(0);
  });

  describe('should add Ripple-outline class', () => {
    test('when outline property is passed', () => {
      wrapper = setup({ outline: true });
      expect(wrapper.find('[className*="Ripple-outline"]').length).toBe(1);
    });

    test('when flat property is passed', () => {
      wrapper = setup({ flat: true });
      expect(wrapper.find('[className*="Ripple-outline"]').length).toBe(1);
    });

    test('when dark property is passed', () => {
      wrapper = setup({ dark: true });
      expect(wrapper.find('[className*="Ripple-outline"]').length).toBe(1);
    });
  });

  test('adds is-reppling class', () => {
    wrapper = setup({ cursorPos: { time: 0, top: 0, left: 0 } });

    wrapper.setState({ animate: true });
    expect(wrapper.find('[className*="is-reppling"]').length).toBe(1);
  });
});
