import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CarouselControl from './CarouselControl';

const setup = (props = {}) => shallow(<CarouselControl {...props} />);

describe('<CarouselControl />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'carousel-control').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselControl />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      tag: 'span',
      active: ''
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  test('sets `previous` text if `direction=prev` is passed', () => {
    wrapper = setup({ direction: 'prev' });
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toEqual('Previous');
  });

  test('sets `Next` text if `direction=next` is passed', () => {
    wrapper = setup({ direction: 'next' });
    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toEqual('Next');
  });

  describe('sets classes', () => {
    test('adds `carousel-control-prev` class when `direction=prev` property is passed', () => {
      wrapper = setup({ direction: 'prev' });
      checkClass(wrapper, 'carousel-control-prev');
    });

    test('adds `carousel-control-next` class when `direction=prev` property is passed', () => {
      wrapper = setup({ direction: 'next' });
      checkClass(wrapper, 'carousel-control-next');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test(`should not render Fa if 'iconLeft' or 'iconRight' properties are not passed`, () => {
      expect(wrapper.find('Fa')).toHaveLength(0);
    });

    test(`should render Fa if 'iconLeft' or 'iconRight' properties are not passed`, () => {
      wrapper = setup({ iconLeft: true });
      expect(wrapper.find('Fa')).toHaveLength(1);
    });

    describe('sets caret classes', () => {
      test('adds `carousel-control-prev-icon` class when `direction=prev` property is passed', () => {
        wrapper = setup({ direction: 'prev' });
        const caret = wrapper.find('span').first();

        checkClass(caret, 'carousel-control-prev-icon');
      });

      test('adds `carousel-control-next-icon` class when `direction=next` property is passed', () => {
        wrapper = setup({ direction: 'next' });
        const caret = wrapper.find('span').first();

        checkClass(caret, 'carousel-control-next-icon');
      });
    });

    describe('sets icon classes', () => {
      test('adds `chevron-left` class when `iconLeft` property is passed', () => {
        wrapper = setup({ iconLeft: true });
        const icon = wrapper.find('Fa');

        expect(icon.prop('icon')).toEqual('chevron-left');
      });

      test('adds `chevron-right` class when `iconright` property is passed', () => {
        wrapper = setup({ iconRight: true });
        const icon = wrapper.find('Fa');

        expect(icon.prop('icon')).toEqual('chevron-right');
      });
    });

    describe('sets testimonial classes', () => {
      test('adds `carousel-control-prev` class when `testimonial` and `direction=prev` properties are passed', () => {
        wrapper = setup({ testimonial: true, direction: 'prev' });

        checkClass(wrapper, 'carousel-control.carousel-control-prev.left');
      });

      test('adds `carousel-control-next` class when `testimonial` and `direction=next` properties are passed', () => {
        wrapper = setup({ testimonial: true, direction: 'next' });

        checkClass(wrapper, 'carousel-control.carousel-control-next.right');
      });
    });

    describe('sets multiitem classes', () => {
      test('adds `btn-floating` class when `multiItem` property is passed', () => {
        wrapper = setup({ multiItem: true });

        checkClass(wrapper, 'btn-floating');
      });
    });
  });
});
