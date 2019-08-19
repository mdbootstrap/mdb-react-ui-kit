import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../../tests/utils';
import CardText from './CardText';

const setup = (props = {}) => shallow(<CardText {...props} />);

describe('<CardText />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'card-text').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardText />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      className: 'testClassName',
      muted: true,
      small: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'a' });
    const content = wrapper.find('a');
    checkTag(content, 'a');
  });

  test('should render small tag small property is passed', () => {
    wrapper = setup({ small: true });
    expect(wrapper.find('small').length).toBe(1);
  });

  test('should not render small tag when small property is not passed', () => {
    expect(wrapper.find('small').length).toBe(0);
  });

  describe('sets classes', () => {
    test('adds card-text class by default', () => {
      checkClass(wrapper, 'card-text');
    });

    test('adds text-muted class', () => {
      wrapper = setup({ muted: true });
      checkClass(wrapper, 'text-muted');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
