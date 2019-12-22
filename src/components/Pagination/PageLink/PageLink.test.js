import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import PageLink from './PageLink';

const setup = (props = {}) => shallow(<PageLink {...props} />);

describe('<PageLink />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'page-link').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageLink />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: '',
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
    wrapper = setup({ tag: 'a', className: 'test' });

    const content = wrapper.find('a.test');
    checkTag(content, 'a');
  });

  describe('sets classes', () => {
    test('adds `page-link` class by default', () => {
      expect(wrapper.hasClass('page-link')).toBe(true);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
