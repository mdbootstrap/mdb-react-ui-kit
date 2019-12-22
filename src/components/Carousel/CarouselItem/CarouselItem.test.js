import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CarouselItem from './CarouselItem';

const setup = (props = {}) => shallow(<CarouselItem {...props} />);
const mounted = (props = {}) => mount(<CarouselItem {...props} />);

describe('<CarouselItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'carousel-item').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselItem />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      tag: 'span',
      active: true,
      itemId: '3'
    };

    wrapper = mounted(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds `carousel-item` classes by default', () => {
      checkClass(wrapper, 'carousel-item');
    });

    test('adds `active carousel-slide-item` classes when `context.slide=true`', () => {
      const context = { slide: true };
      wrapper = shallow(<CarouselItem />, { context });

      checkClass(wrapper, 'active.carousel-slide-item');
    });

    test('adds `active` class when `itemId===context.activeItem`', () => {
      const context = { activeItem: 3 };
      wrapper = shallow(<CarouselItem itemId={3} />, { context });
      
      checkClass(wrapper, 'active');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
