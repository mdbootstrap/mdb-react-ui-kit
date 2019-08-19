import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CarouselIndicator from './CarouselIndicator';

const setup = (props = {}) => shallow(<CarouselIndicator {...props} active />);

describe('<CarouselIndicator />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'carousel-indicator').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselIndicator active />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      active: true,
      alt: 'test',
      img: 'test'
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

  test('does not render img when `img` property is not passed', () => {
    expect(wrapper.find('img')).toHaveLength(0);
  });

  test('sets correct `src` attr to img', () => {
    wrapper = setup({ img: 'https://' });
    const img = wrapper.find('img');

    expect(img.prop('src')).toEqual('https://');
  });

  test('sets correct `alt` to img', () => {
    wrapper = setup({ img: 'https://', alt: 'test alt' });
    const img = wrapper.find('img');

    expect(img.prop('alt')).toEqual('test alt');
  });

  describe('sets classes', () => {
    test('adds `active` class when `active` property is passed', () => {
      wrapper = setup({ active: true });
      checkClass(wrapper, 'active');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test(`adds 'img-fluid' class to img`, () => {
      wrapper = setup({ img: 'src' });
      const img = wrapper.find('img');

      checkClass(img, 'img-fluid');
    });
  });
});
