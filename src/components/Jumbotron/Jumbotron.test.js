import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Jumbotron from './Jumbotron';

const setup = (props = {}) => shallow(<Jumbotron {...props} />);

describe('<Jumbotron />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'jumbotron').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Jumbotron />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      fluid: true,
      className: 'testClassName'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds jumbotron class by default', () => {
      checkClass(wrapper, 'jumbotron');
    });

    test('adds jumbotron-fluid class', () => {
      wrapper = setup({ fluid: true });

      checkClass(wrapper, 'jumbotron-fluid');
    });

    test('does not add jumbotron-fluid class', () => {
      expect(wrapper.find(`[className*="jumbotron-fluid"]`).length).toBe(0);
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
