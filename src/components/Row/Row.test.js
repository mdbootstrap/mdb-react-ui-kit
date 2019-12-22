import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Row from './Row';

const setup = (props = {}) => shallow(<Row {...props} />);

describe('<Row />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const row = findByTestAttr(wrapper, 'row');
    expect(row.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Row />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'div',
      className: 'testClassName',
      top: true,
      bottom: true,
      middle: true,
      end: true,
      start: true,
      center: true,
      between: true,
      around: true
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

  describe('sets classes', () => {
    test('adds row class by default', () => {
      checkClass(wrapper, 'row');
    });

    test('adds justify-content-end class', () => {
      wrapper = setup({ end: true });
      checkClass(wrapper, 'justify-content-end');
    });

    test('adds justify-content-start class', () => {
      wrapper = setup({ start: true });
      checkClass(wrapper, 'justify-content-start');
    });

    test('adds justify-content-center class', () => {
      wrapper = setup({ center: true });
      checkClass(wrapper, 'justify-content-center');
    });

    test('adds justify-content-between class', () => {
      wrapper = setup({ between: true });
      checkClass(wrapper, 'justify-content-between');
    });

    test('adds justify-content-around class', () => {
      wrapper = setup({ around: true });
      checkClass(wrapper, 'justify-content-around');
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

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
