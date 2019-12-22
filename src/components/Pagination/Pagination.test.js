import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Pagination from './Pagination';

const setup = (props = {}) => shallow(<Pagination {...props} />);

describe('<Pagination />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'pagination').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      circle: true,
      className: 'test',
      color: 'test',
      tag: 'span',
      size: 'lg'
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
    test('adds `pagination` class by default', () => {
      checkClass(wrapper, 'pagination');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test('adds \'pagination-circle\' when \'circle\' property is passed', () => {
      wrapper = setup({ circle: true });

      checkClass(wrapper, 'pagination-circle');
    });

    test('adds \'pg-primary\' when \'color="primary"\' property is passed', () => {
      wrapper = setup({ color: 'primary' });

      checkClass(wrapper, 'pg-primary');
    });

    test('adds \'pagination-lg\' when \'size=lg\' property is passed', () => {
      wrapper = setup({ size: 'lg' });

      checkClass(wrapper, 'pagination-lg');
    });
  });
});
