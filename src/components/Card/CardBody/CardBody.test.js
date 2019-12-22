import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardBody from './CardBody';

const setup = (props = {}) => shallow(<CardBody {...props} />);

describe('<CardBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'card-body').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardBody />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      cascade: true
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
    test('adds card-body class by default', () => {
      checkClass(wrapper, 'card-body');
    });

    test('adds card-body-cascade class', () => {
      wrapper = setup({ cascade: true });
      checkClass(wrapper, 'card-body-cascade');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
