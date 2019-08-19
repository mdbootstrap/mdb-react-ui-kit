import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Card from './Card';

const setup = (props = {}) => shallow(<Card {...props} />);

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'card').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      color: 'primary',
      border: 'default',
      cascade: true,
      collection: true,
      ecommerce: true,
      narrow: true,
      news: true,
      pricing: true,
      personal: true,
      reverse: true,
      testimonial: true,
      text: '',
      wide: true
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

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test('adds card class by default', () => {
      checkClass(wrapper, 'card');
    });

    test('adds color class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });

    test('adds card-ecommerce class', () => {
      wrapper = setup({ ecommerce: true });
      checkClass(wrapper, 'card-ecommerce');
    });

    test('adds card-cascade class', () => {
      wrapper = setup({ cascade: true });
      checkClass(wrapper, 'card-cascade');
    });

    test('adds card-cascade wider classes', () => {
      wrapper = setup({ wide: true });
      checkClass(wrapper, 'card-cascade.wider');
    });

    test('adds card-cascade narrower classes', () => {
      wrapper = setup({ narrow: true });
      checkClass(wrapper, 'card-cascade.narrower');
    });

    test('adds card-cascade reverse classes', () => {
      wrapper = setup({ reverse: true });
      checkClass(wrapper, 'card-cascade.reverse');
    });

    test('adds testimonial-card class', () => {
      wrapper = setup({ testimonial: true });
      checkClass(wrapper, 'testimonial-card');
    });

    test('adds collection-card class', () => {
      wrapper = setup({ collection: true });
      checkClass(wrapper, 'collection-card');
    });

    test('adds pricing-card class', () => {
      wrapper = setup({ pricing: true });
      checkClass(wrapper, 'pricing-card');
    });

    test('adds card-personal class', () => {
      wrapper = setup({ personal: true });
      checkClass(wrapper, 'card-personal');
    });

    test('adds news-card class', () => {
      wrapper = setup({ news: true });
      checkClass(wrapper, 'news-card');
    });

    test('adds primary-text class', () => {
      wrapper = setup({ text: 'primary' });
      checkClass(wrapper, 'primary-text');
    });

    test('adds border-primary class', () => {
      wrapper = setup({ border: 'primary' });
      checkClass(wrapper, 'border-primary');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
