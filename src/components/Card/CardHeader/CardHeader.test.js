import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardHeader from './CardHeader';

const setup = (props = {}) => shallow(<CardHeader {...props} />);

describe('<CardHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'card-header').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardHeader />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      color: 'test',
      text: 'test',
      border: 'test',
      transparent: true
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
    test('adds card-header class by default', () => {
      checkClass(wrapper, 'card-header');
    });

    test('adds bg-transparent class', () => {
      wrapper = setup({ transparent: true });
      checkClass(wrapper, 'bg-transparent');
    });

    test('adds primary class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });

    test('adds red-text class', () => {
      wrapper = setup({ text: 'red' });
      checkClass(wrapper, 'red-text');
    });

    test('adds border-primary class', () => {
      wrapper = setup({ border: 'primary' });
      checkClass(wrapper, 'border-primary');
    });

    test('should not add white-text class when text property is passed', () => {
      wrapper = setup({ text: 'test' });
      expect(wrapper.find('white-text').length).toBe(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
