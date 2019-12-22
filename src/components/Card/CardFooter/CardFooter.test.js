import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardFooter from './CardFooter';

const setup = (props = {}) => shallow(<CardFooter {...props} />);

describe('<CardFooter />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'card-footer').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardFooter />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      cascade: true,
      color: 'test',
      text: 'test',
      border: 'test',
      transparent: true,
      small: true,
      muted: true
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

  test('should render small tag ', () => {
    wrapper = setup({ small: true });
    expect(wrapper.find('small').length).toBe(1);
  });

  test('should not render small tag ', () => {
    expect(wrapper.find('small').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds card-footer class by default', () => {
      checkClass(wrapper, 'card-footer');
    });

    test('adds bg-transparent class', () => {
      wrapper = setup({ transparent: true });
      checkClass(wrapper, 'bg-transparent');
    });

    test('adds text-muted class', () => {
      wrapper = setup({ muted: true });
      checkClass(wrapper, 'text-muted');
    });

    test('adds primary class', () => {
      wrapper = setup({ color: 'primary' });
      checkClass(wrapper, 'primary');
    });

    test('adds red-text class', () => {
      wrapper = setup({ text: 'red' });
      checkClass(wrapper, 'red-text');
    });

    test('should not add white-text class when text property is passed', () => {
      wrapper = setup({ text: 'primary' });
      expect(wrapper.find('.white-text').length).toBe(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
