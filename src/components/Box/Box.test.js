import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Box from './Box';

const setup = (props = {}) => shallow(<Box {...props} />);

describe('<Box/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'box').length).toBe(1);
  });

  test('renders without erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Box />, div);
  });

  test('dose not throw warning with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      m: 1,
      p: 1,
      py: 2,
      pr: 3,
      mx: 4
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warning witout props', () => {
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
    test('adds test class', () => {
      wrapper = setup({ className: 'test' });
      checkClass(wrapper, 'test');
    });

    test('adds justifyContent class', () => {
      wrapper = setup({ justifyContent: 'center' });
      checkClass(wrapper, 'justify-content-center');
    });

    test('adds display class', () => {
      wrapper = setup({ display: 'none' });
      checkClass(wrapper, 'd-none');
    });

    test('adds color class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary-text');
    });

    test('adds bgColor class', () => {
      wrapper = setup({ bgColor: 'danger' });

      checkClass(wrapper, 'bg-danger');
    });
  });
});
