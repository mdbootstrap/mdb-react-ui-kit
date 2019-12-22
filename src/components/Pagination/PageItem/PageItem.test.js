import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import PageItem from './PageItem';

const setup = (props = {}) => shallow(<PageItem {...props} />);

describe('<PageItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'page-item').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageItem />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: false,
      className: '',
      disabled: false,
      tag: 'li'
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    const content = wrapper.find('a');
    checkTag(content, 'a');
  });

  describe('sets classes', () => {
    test('adds `page-item` class by default', () => {
      checkClass(wrapper, 'page-item');
    });

    test('adds `disabled` class', () => {
      wrapper = setup({ disabled: true });

      checkClass(wrapper, 'disabled');
    });

    test('adds `active` class', () => {
      wrapper = setup({ active: true });

      checkClass(wrapper, 'active');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
