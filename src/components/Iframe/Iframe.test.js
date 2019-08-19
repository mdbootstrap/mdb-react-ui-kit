import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import checkPropTypes from 'check-prop-types';
import Iframe from './Iframe';

const setup = (props = {}) => shallow(<Iframe {...props} src="test" />);

describe('<Iframe />', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const Iframe = findByTestAttr(wrapper, 'iframe');
    expect(Iframe.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Iframe src="test" />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: '',
      allowFullScreen: true,
      height: 100,
      id: 'test',
      name: 'test',
      onMouseOver: mockFn,
      onMouseOut: mockFn,
      onLoad: mockFn,
      ratio: 'test',
      sandbox: 'test',
      src: 'test'.isRequired,
      styles: {},
      width: 100,
      title: 'test'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkPropTypes(wrapper);
  });

  describe('sets classes', () => {
    test('adds embed-responsive-item class by default', () => {
      checkClass(wrapper, 'embed-responsive-item');
    });

    test('adds embed-responsive-1by1 class', () => {
      wrapper = setup({ ratio: '1by1' });
      checkClass(wrapper, 'embed-responsive-1by1');
    });

    test('adds embed-responsive class when height and width are not passed', () => {
      checkClass(wrapper, 'embed-responsive');
    });

    test('adds embed-responsive-16by9 class by default', () => {
      checkClass(wrapper, 'embed-responsive-16by9');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
