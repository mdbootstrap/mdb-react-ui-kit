import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Media from './Media';

const setup = (props = {}) => shallow(<Media {...props} />);

describe('<Media />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'media').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Media />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      body: true,
      bottom: true,
      className: 'test',
      heading: true,
      figure: true,
      figImg: true,
      figCap: true,
      figCapRight: true,
      figCapLeft: true,
      left: true,
      list: true,
      middle: true,
      object: true,
      thumbnail: true,
      round: true,
      right: true,
      tag: 'a',
      top: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    checkTag(wrapper, 'a');
  });

  describe('sets classes', () => {
    test('adds media-body class', () => {
      wrapper = setup({ body: true });
      checkClass(wrapper, 'media-body');
    });

    test('adds mt-0 class', () => {
      wrapper = setup({ heading: true });
      checkClass(wrapper, 'mt-0');
    });

    test('adds media-left class', () => {
      wrapper = setup({ left: true });
      checkClass(wrapper, 'media-left');
    });

    test('adds media-right class', () => {
      wrapper = setup({ right: true });
      checkClass(wrapper, 'media-right');
    });

    test('adds align-self-start class', () => {
      wrapper = setup({ top: true });
      checkClass(wrapper, 'align-self-start');
    });

    test('adds align-self-center class', () => {
      wrapper = setup({ middle: true });
      checkClass(wrapper, 'align-self-center');
    });

    test('adds align-self-end class', () => {
      wrapper = setup({ bottom: true });
      checkClass(wrapper, 'align-self-end');
    });

    test('adds media-object class', () => {
      wrapper = setup({ object: true });
      checkClass(wrapper, 'media-object');
    });

    test('adds img-thumbnail class', () => {
      wrapper = setup({ thumbnail: true });
      checkClass(wrapper, 'img-thumbnail');
    });

    test('adds media-list class', () => {
      wrapper = setup({ list: true });
      checkClass(wrapper, 'media-list');
    });

    test('adds figure class', () => {
      wrapper = setup({ figure: true });
      checkClass(wrapper, 'figure');
    });

    test('adds figure-img class', () => {
      wrapper = setup({ figImg: true });
      checkClass(wrapper, 'figure-img');
    });

    test('adds figure-caption text-center class', () => {
      wrapper = setup({ figCap: true });
      checkClass(wrapper, 'figure-caption.text-center');
    });

    test('adds figure-caption text-right class', () => {
      wrapper = setup({ figCapRight: true });
      checkClass(wrapper, 'figure-caption.text-right');
    });

    test('adds figure-caption text-left class', () => {
      wrapper = setup({ figCapLeft: true });
      checkClass(wrapper, 'figure-caption.text-left');
    });

    test('adds rounded-circle z-depth-1-half class', () => {
      wrapper = setup({ round: true });
      checkClass(wrapper, 'rounded-circle.z-depth-1-half');
    });

    test('does not add media class when one of the properties is passed', () => {
      wrapper = setup({ heading: true });
      expect(wrapper.find('[className*="media"]').length).toBe(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
