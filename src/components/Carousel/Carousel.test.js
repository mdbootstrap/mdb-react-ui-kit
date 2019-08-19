import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Carousel from './Carousel';

const setup = (props = {}) => shallow(<Carousel {...props} />);
const mounted = (props = {}) => mount(<Carousel {...props} />);

describe('<Carousel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'carousel').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      activeItem: 1,
      tag: 'span',
      multiItem: true,
      interval: 3000,
      thumbnails: true,
      testimonial: true,
      showControls: true,
      showIndicators: true,
      slide: true,
      length: 20,
      onHoverStop: true
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

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test(`renders div-wrapper when 'showControls' and 'multiItem' properties are passed`, () => {
    wrapper = setup({ showControls: true, multiItem: true });

    expect(wrapper.find('div.controls-top')).toHaveLength(1);
  });

  test(`renders 'controls' when 'showControls' property is passed`, () => {
    wrapper = mounted({ showControls: true });

    expect(wrapper.find('Control')).toHaveLength(2);
  });

  test(`does not render 'controls' when 'showControls=false' property is passed`, () => {
    wrapper = mounted({ showControls: false });

    expect(wrapper.find('Control')).toHaveLength(0);
  });

  test(`changes slide to 'next'`, () => {
    wrapper = setup({ showControls: true, activeItem: 1 });
    wrapper.instance().next();

    expect(wrapper.state()['activeItem']).toEqual(2);
  });

  test(`changes slide to 'prev'`, () => {
    wrapper = setup({ showControls: true, activeItem: 2 });
    wrapper.instance().prev();

    expect(wrapper.state()['activeItem']).toEqual(1);
  });

  test(`shows first slide after clicking 'next' on the last slide`, () => {
    wrapper = setup({ showControls: true, activeItem: 3 });
    wrapper.setState({ length: 3 });

    wrapper.instance().next();
    expect(wrapper.state()['activeItem']).toEqual(1);
  });

  test(`shows last slide after clicking 'prev' on the first slide`, () => {
    wrapper = setup({ showControls: true, activeItem: 1 });
    wrapper.setState({ length: 3 });

    wrapper.instance().prev();
    expect(wrapper.state()['activeItem']).toEqual(3);
  });

  test(`does not show indicators when 'showIndicators=false' property is passed`, () => {
    wrapper = setup({ showIndicators: false });

    expect(wrapper.find('CarouselIndicators')).toHaveLength(0);
  });

  test(`shows indicators when 'showIndicators=true' property is passed`, () => {
    wrapper = setup({ showIndicators: true });

    expect(wrapper.find('CarouselIndicators')).toHaveLength(1);
  });

  describe('sets classes', () => {
    test('adds `carousel` classes by default', () => {
      checkClass(wrapper, 'carousel');
    });

    test('adds `carousel-multi-item` classes when `multiItem` property is passed', () => {
      wrapper = setup({ multiItem: true });

      checkClass(wrapper, 'carousel-multi-item');
    });

    test('does not add `carousel-multi-item` classes when `multiItem` property is not passed', () => {
      expect(wrapper.find('.carousel-multi-item')).toHaveLength(0);
    });

    test('adds `carousel-thumbnails` class when `thumbnails` property is passed', () => {
      wrapper = mounted({ thumbnails: true });
      checkClass(wrapper, 'carousel-thumbnails');
    });

    test('adds `testimonial-carousel` class when `testimonial` property is passed', () => {
      wrapper = mounted({ testimonial: true });
      checkClass(wrapper, 'testimonial-carousel');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
