import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import FormInline from './FormInline';

const setup = (props = {}) => shallow(<FormInline {...props} />);

describe('<FormInline />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const FormInline = findByTestAttr(wrapper, 'form-inline');
    expect(FormInline.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormInline icon='star' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: '',
      waves: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ icon: 'star', customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('renders Waves if waves property is passed', () => {
    wrapper = setup({ waves: true });

    expect(wrapper.find('Waves').length).toBe(1);
  });

  test('should not render Waves if waves property is not passed', () => {
    expect(wrapper.find('Waves').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds form-inline class by default', () => {
      wrapper = setup({ list: true });
      checkClass(wrapper, 'form-inline');
    });

    test('adds Ripple-parent class', () => {
      wrapper = setup({ waves: true });
      checkClass(wrapper, 'Ripple-parent');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
