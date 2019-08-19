import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Col from './Col';

const setup = (props = {}) => shallow(<Col {...props} />);

describe('<Col />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const col = findByTestAttr(wrapper, 'col');
    expect(col.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Col />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      size: '1',
      xs: '2',
      sm: '3',
      md: '4',
      lg: '5',
      xl: '6',
      top: false,
      bottom: false,
      middle: false,
      tag: 'div',
      className: 'testClassName'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('sets classes', () => {
    test('adds col size class', () => {
      wrapper = setup({ size: '1' });

      expect(wrapper.find(`[className*="col-1"]`).length).toBe(1);
    });

    test('adds top class', () => {
      wrapper = setup({ top: true });

      expect(wrapper.find(`[className*="align-self-start"]`).length).toBe(1);
    });

    test('adds middle class', () => {
      wrapper = setup({ middle: true });

      expect(wrapper.find(`[className*="align-self-center"]`).length).toBe(1);
    });

    test('adds bottom class', () => {
      wrapper = setup({ bottom: true });

      expect(wrapper.find(`[className*="align-self-end"]`).length).toBe(1);
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
