import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import CardVideo from './CardVideo';

const setup = (props = {}) => shallow(<CardVideo src='test' {...props} />);

describe('<CardVideo />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'card-video').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardVideo src='test' />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      src: 'test'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });
  describe('sets classes', () => {
    test('should not add card-subtitle class when sub property is not passed', () => {
      expect(wrapper.find('.card-subtitle').length).toBe(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
