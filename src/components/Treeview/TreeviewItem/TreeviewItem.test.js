import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import TreeviewItem from './TreeviewItem';
import { TreeviewContext } from '../Treeview';

const getActiveMock = jest.fn();

const context = {
  theme: 'test',
  active: false,
  getActive: getActiveMock
};

const setup = (props = {}) =>
  mount(
    <TreeviewContext.Provider value={context}>
      <TreeviewItem {...props} />
    </TreeviewContext.Provider>
  );

describe('<TreeviewItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const TreeviewItem = findByTestAttr(wrapper, 'treeview-item');
    expect(TreeviewItem.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TreeviewContext.Provider value={context}>
        <TreeviewItem />
      </TreeviewContext.Provider>,
      div
    );
  });

  test('does not thTreeviewItem warnings with expected props', () => {
    const expectedProps = {
      tag: 'div',
      className: 'testClassName',
      disabled: false,
      disabledClassName: 'test',
      fab: false,
      fal: false,
      far: false,
      icon: 'test',
      opened: false
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'section' });

    expect(
      wrapper.find('section').find('[data-test="treeview-item"]')
    ).toHaveLength(1);
  });

  test('adds custom attributes passed as property', () => {
    wrapper = setup({ lang: 'En' });

    expect(wrapper.props().lang).toBe('En');
    expect(wrapper.find('[lang="En"]').length).toBeTruthy();
  });

  test('renders title correctly', () => {
    wrapper = setup({ title: 'testTitle' });

    expect(wrapper.find('span').text()).toBe('testTitle');
  });

  describe('sets classes', () => {
    test('adds `treeview-test-items treeview-test-element closed mb-1` class when context:(theme === `test`)', () => {
      checkClass(
        wrapper,
        'treeview-test-items.treeview-test-element.closed.mb-1'
      );
    });

    test("adds 'disabledTestClass' class if (disabledClassName) property is passed and item is (disabled)", () => {
      wrapper = setup({
        disabledClassName: 'disabledTestClass',
        disabled: true
      });
      expect(wrapper.find('.disabledTestClass').length).toBeTruthy();
    });

    test("should not add 'disabledTestClass' class if (disabledClassName) property is passed and item is (!disabled)", () => {
      wrapper = setup({
        disabledClassName: 'disabledTestClass',
        disabled: false
      });
      expect(wrapper.find('.disabledTestClass').length).toBeFalsy();
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });
      expect(wrapper.find('.testClassName').length).toBeTruthy();
    });
  });
});
