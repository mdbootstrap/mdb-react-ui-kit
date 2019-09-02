import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import TreeviewList from './TreeviewList';
import TreeviewItem from '../TreeviewItem';
import { TreeviewContext } from '../Treeview';

const context = {
  theme: 'test'
};

const setup = (props = {}) =>
  mount(
    <TreeviewContext.Provider value={context}>
      <TreeviewList {...props} />
    </TreeviewContext.Provider>
  );

describe('<TreeviewList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    const TreeviewList = findByTestAttr(wrapper, 'treeview-list');
    expect(TreeviewList.length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TreeviewContext.Provider value={context}>
        <TreeviewList />
      </TreeviewContext.Provider>,
      div
    );
  });

  test('does not throw warnings with expected props', () => {
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
      wrapper.find('section').find('[data-test="treeview-list"]')
    ).toHaveLength(1);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ lang: 'En' });

    expect(wrapper.props()['lang']).toBe('En');
    expect(wrapper.find('[lang="En"]').length).toBeTruthy();
  });

  test('renders title correctly', () => {
    wrapper = setup({ title: 'testTitle' });

    expect(
      wrapper
        .find('span')
        .last()
        .text()
    ).toBe('testTitle');
  });

  describe('sets classes', () => {
    test('adds `nested` class to Ul  if (children)', () => {
      wrapper = mount(
        <TreeviewContext.Provider value={context}>
          <TreeviewList>
            <TreeviewItem />
          </TreeviewList>
        </TreeviewContext.Provider>
      );
      checkClass(wrapper.find('ul'), 'nested');
    });

    test('adds `active` class to Ul if (children && opened)', () => {
      wrapper = mount(
        <TreeviewContext.Provider value={context}>
          <TreeviewList opened>
            <TreeviewItem />
          </TreeviewList>
        </TreeviewContext.Provider>
      );
      checkClass(wrapper.find('ul'), 'active');
    });

    test(`adds 'closed treeview-test-element d-block' class to folder if (theme === 'test') property is passed `, () => {
      expect(
        wrapper.find('.closed.treeview-test-element.d-block').length
      ).toBeTruthy();
    });

    test(`adds 'ml-2' class to Folder if (!children) `, () => {
      expect(wrapper.find('span.ml-2').length).toBeTruthy();
    });

    test(`adds 'opened' class to Folder if (opened) `, () => {
      wrapper = setup({ opened: true });
      expect(wrapper.find('span.opened').length).toBeTruthy();
    });

    test(`adds 'disabledTestClass' class to Folder if (disabledClassName) property is passed and item is (disabled)`, () => {
      wrapper = setup({
        disabledClassName: 'disabledTestClass',
        disabled: true
      });
      expect(wrapper.find('.disabledTestClass').length).toBeTruthy();
    });

    test(`should not add 'disabledTestClass' class if (disabledClassName) property is passed and item is (!disabled)`, () => {
      wrapper = setup({
        disabledClassName: 'disabledTestClass',
        disabled: false
      });
      expect(wrapper.find('.disabledTestClass').length).toBeFalsy();
    });

    test(`adds 'closed treeview-test-items px-0' class to Tag if context:(theme === 'test') `, () => {
      expect(wrapper.find('.treeview-test-items.px-0').length).toBeTruthy();
    });

    test(`adds 'closed treeview-test-items px-0' class to Tag if context:(theme === 'test') `, () => {
      expect(wrapper.find('.treeview-test-items.px-0').length).toBeTruthy();
    });

    test(`adds custom class to passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });
      expect(wrapper.find('.testClassName').length).toBeTruthy();
    });
  });
});
