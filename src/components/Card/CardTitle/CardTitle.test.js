import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardTitle from './CardTitle';

const setup = (props = {}) => shallow(<CardTitle {...props} />);

describe('<CardTitle />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'card-title').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardTitle />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      sub: false
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    const content = wrapper.find('a');
    checkTag(content, 'a');
  });

  describe('sets classes', () => {
    test('adds card-subtitle class', () => {
      wrapper = setup({ sub: true });
      checkClass(wrapper, 'card-subtitle');
    });

    test('should not add card-subtitle class when sub property is not passed', () => {
      expect(wrapper.find(`.card-subtitle`).length).toBe(0);
    });

    test('add card-title class when sub property is not passed', () => {
      checkClass(wrapper, 'card-title');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
