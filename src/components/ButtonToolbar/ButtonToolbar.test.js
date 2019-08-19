import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import checkPropTypes from 'check-prop-types';
import ButtonToolbar from './ButtonToolbar';

const setup = (props = {}) => shallow(<ButtonToolbar {...props} />);

describe('<ButtonToolbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonToolbar children='children text node' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      'aria-label': 'test',
      className: 'testClassName',
      role: 'test'
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
    test('adds btn-toolbar class by default', () => {
      checkClass(wrapper, 'btn-toolbar');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });
      checkClass(wrapper, 'testClassName');
    });
  });
});
