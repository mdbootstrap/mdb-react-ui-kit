import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import TabContent from './TabContent';
import PropTypes from 'prop-types';

const setup = (props = {}) => shallow(<TabContent {...props} />);

describe('<TabContent />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'tabContent').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<TabContent />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      activeItem: 'any',
      tabId: 'any',
      className: 'testClassName'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets state accroding to passed activeItem property', () => {
    wrapper = setup({ activeItem: '3' });

    expect(wrapper.state('activeItem')).toBe('3');
  });

  describe('sets classes', () => {
    test('adds tab-content class by default', () => {
      checkClass(wrapper, 'tab-content');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
