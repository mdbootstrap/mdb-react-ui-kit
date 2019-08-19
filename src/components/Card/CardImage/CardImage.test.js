import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardImage from './CardImage';

const setup = (props = {}) => shallow(<CardImage {...props} />);

describe('<CardImage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'card-image').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardImage />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      zoom: true,
      waves: true,
      cascade: true,
      hover: true,
      overlay: 'test',
      top: true,
      src: 'test'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });
    const content = wrapper.find('img');

    expect(content.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    const content = wrapper.find('a');
    checkTag(content, 'a');
  });

  test('should render View when src property is passed', () => {
    wrapper = setup({ src: 'test' });
    expect(wrapper.find('View').length).toBe(1);
  });

  test('should not render View when src property is not passed', () => {
    expect(wrapper.find('View').length).toBe(0);
  });

  test('should render Waves when src and mask properties are passed', () => {
    wrapper = setup({ src: 'test', waves: true });
    expect(wrapper.find('Waves').length).toBe(1);
  });

  test('should not render Waves when src property is not passed', () => {
    wrapper = setup({ waves: true });
    expect(wrapper.find('Waves').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds card-img-top', () => {
      wrapper = setup({ top: true });
      checkClass(wrapper, 'card-img-top');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
