import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import NavbarToggler from './NavbarToggler';

const setup = (props = {}) => shallow(<NavbarToggler {...props} />);

describe('<NavbarToggler />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'navbar-toggler').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarToggler />, div);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      tag: 'test',
      type: 'test',
      children: <span />,
      right: true,
      left: false,
      image: 'test'
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

  test('renders `children` if exists', () => {
    wrapper = setup({ children: <span className='testSpan' /> });
    expect(wrapper.find('span.testSpan')).toHaveLength(1);
  });

  test('renders `image` if `image` property is passed', () => {
    wrapper = setup({ image: 'testImgSrc' });
    const img = wrapper.find('span.navbar-toggler-icon');

    expect(img).toHaveLength(1);
    expect(img.prop('style')).toEqual({ backgroundImage: 'url("testImgSrc")' });
  });

  test('renders `span` if (!image && !children)', () => {
    expect(wrapper.find('span.navbar-toggler-icon')).toHaveLength(1);
  });

  describe('sets classes', () => {
    test(`adds 'navbar-toggler' class by default`, () => {
      checkClass(wrapper, 'navbar-toggler');
    });

    test(`adds 'navbar-toggler-left' class if (left)`, () => {
      wrapper = setup({ left: true });

      checkClass(wrapper, 'navbar-toggler-left');
    });

    test(`adds 'navbar-toggler-right' class if (right)`, () => {
      wrapper = setup({ right: true });

      checkClass(wrapper, 'navbar-toggler-right');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
