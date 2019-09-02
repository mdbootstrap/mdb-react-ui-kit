import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Treeview from './Treeview';

const setup = (props = {}) => mount(<Treeview {...props} />);

describe('<Treeview />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const Treeview = findByTestAttr(wrapper, 'treeview');
    expect(Treeview.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Treeview />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'div',
      className: 'testClassName',
      header: 'test',
      listClassName: 'test',
      theme: 'test',
      getValue: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'section' });

    expect(wrapper.find('section').find('[data-test="treeview"]')).toHaveLength(
      1
    );
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ lang: 'En' });

    expect(wrapper.props()['lang']).toBe('En');
    expect(wrapper.find('[lang="En"]').length).toBeTruthy();
  });

  test('renders head correctly', () => {
    wrapper = setup({ header: 'testHeader' });

    expect(wrapper.find('h6').text()).toBe('testHeader');
  });

  describe('sets classes', () => {
    test('adds `border` class to Tag  by default', () => {
      checkClass(wrapper.find('div'), 'border');
    });

    test('adds `treeview-test` class to Tag  if (theme === test)', () => {
      wrapper = setup({ theme: 'test' });
      checkClass(wrapper.find('div'), 'treeview-test');
    });

    test('adds `treeview` class to Tag  if (!theme)', () => {
      checkClass(wrapper.find('div'), 'treeview');
    });

    test(`adds custom class to Tag passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });
      expect(wrapper.find('.testClassName').length).toBeTruthy();
    });

    test(`adds 'list-unstyled' class to Ul by default`, () => {
      checkClass(wrapper.find('ul'), 'list-unstyled');
    });

    test(`adds 'pb-2 mb-1' class to Ul if (header)`, () => {
      wrapper = setup({ header: 'test' });
      checkClass(wrapper.find('ul'), 'pb-2.mb-1');
    });

    test(`adds 'py-2 my-1' class to Ul if (!header)`, () => {
      checkClass(wrapper.find('ul'), 'py-2.my-1');
    });

    test(`adds 'treeview-test-list' class to Ul if (theme===test)`, () => {
      wrapper = setup({ theme: 'test' })
      checkClass(wrapper.find('ul'), 'treeview-test-list');
    });

    test(`adds custom class to Ul passed as property`, () => {
      wrapper = setup({ listClassName: 'testClassName' });
      expect(wrapper.find('ul.testClassName').length).toBeTruthy();
    });
  });
});
