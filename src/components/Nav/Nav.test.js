import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Nav from './Nav';

const setup = (props = {}) => shallow(<Nav {...props} />);

describe('<Nav />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'nav').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      id: 'test',
      color: 'test'
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

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props().customAttr).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds nav classes by default', () => {
      checkClass(wrapper, 'nav');
    });

    test('adds md-tabs class', () => {
      wrapper = setup({ tabs: true });
      checkClass(wrapper, 'md-tabs');
    });

    test('adds md-pills class', () => {
      wrapper = setup({ pills: true });
      checkClass(wrapper, 'md-pills');
    });

    test('adds nav-pills card-header-pills class', () => {
      wrapper = setup({ header: true });
      checkClass(wrapper, 'nav-pills.card-header-pills');
    });

    test('adds pills-primary class', () => {
      wrapper = setup({ pills: true, color: 'primary' });
      checkClass(wrapper, 'pills-primary');
    });

    test('adds tabs-primary class', () => {
      wrapper = setup({ tabs: true, color: 'primary' });
      checkClass(wrapper, 'tabs-primary');
    });

    test('does not add primary(color) class when pills||tabs||classicTabs property is passed', () => {
      wrapper = setup({ pills: true, color: 'primary' });
      expect(wrapper.find('.primary')).toHaveLength(0);
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
