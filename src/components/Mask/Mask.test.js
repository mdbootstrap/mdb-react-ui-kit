import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Mask from './Mask';

const setup = (props = {}) => shallow(<Mask {...props} />);

describe('<Mask />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'mask').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Mask />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassname',
      overlay: 'grey-light',
      pattern: '1',
      tag: 'span'
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
    test('adds mask class by default', () => {
      checkClass(wrapper, 'mask');
    });

    test('adds pattern-1 class', () => {
      wrapper = setup({ pattern: '1' });
      checkClass(wrapper, 'pattern-1');
    });

    test('adds rgba-grey-light class', () => {
      wrapper = setup({ overlay: 'grey-light' });
      checkClass(wrapper, 'rgba-grey-light');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
