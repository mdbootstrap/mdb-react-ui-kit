import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Dropdown from './Dropdown';

const setup = (props = {}) => shallow(<Dropdown {...props} />);

describe('<Dropdown />', () => {
  let wrapper;
  const callback = () => jest.fn();

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'dropdown').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'testClassName',
      disabled: true,
      dropup: true,
      dropright: true,
      dropleft: true,
      group: true,
      size: 'test',
      tag: 'test',
      toggle: () => {}
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('adds event listeners if `isOpen===true`', () => {
    document.addEventListener = callback();

    wrapper = mount(<Dropdown />);
    wrapper.setState({ isOpen: true });

    expect(document.addEventListener).toHaveBeenCalledTimes(3);
  });

  test('remove event listeners if `isOpen===false`', () => {
    document.removeEventListener = callback();

    wrapper = mount(<Dropdown />);

    expect(document.removeEventListener).toHaveBeenCalledTimes(3);
  });

  test('adds/removes event listeners on toggle()', () => {
    const { toggle } = wrapper.instance();

    document.addEventListener = callback();
    document.removeEventListener = callback();

    wrapper = setup();
    expect(document.addEventListener).not.toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalledTimes(3);

    toggle();
    expect(document.addEventListener).toHaveBeenCalledTimes(3);
    
    toggle();
    expect(document.addEventListener).toHaveBeenCalledTimes(3);
    // for the first time it was invoked 3 times after mounting(isOpen === false)
    expect(document.removeEventListener).toHaveBeenCalledTimes(6);
  });

  test('handleDocumentClick method should not be fired if keycode === 3(mouse`s right click)', () => {
    wrapper = mount(<Dropdown />);

    const { handleDocumentClick } = wrapper.instance();

    expect(wrapper.state('isOpen')).toEqual(false);

    const event = {
      which: 3
    };

    handleDocumentClick(event);

    expect(wrapper.state('isOpen')).toEqual(false);
  });

  test('handleDocumentClick method should not be fired if e.type === keyup && e.type !== `tab`', () => {
    wrapper = mount(<Dropdown />);

    const { handleDocumentClick } = wrapper.instance();

    expect(wrapper.state('isOpen')).toEqual(false);

    const event = {
      type: 'keyup',
      which: 'notTab'
    };

    handleDocumentClick(event);

    expect(wrapper.state('isOpen')).toEqual(false);
  });

  test(`handleDocumentClick method should not be fired if 
        container.contains(e.target) && 
        container !== e.target && 
        e.type !== keyup || e.type === 'tab'`, () => {
    wrapper = mount(<Dropdown />);

    const { handleDocumentClick } = wrapper.instance();

    wrapper.instance().getContainer = () => ({
      contains: () => true
    });

    expect(wrapper.state('isOpen')).toEqual(false);

    const event = {
      target: 'test',
      type: 'notKeyup',
      which: 9
    };

    handleDocumentClick(event);

    expect(wrapper.state('isOpen')).toEqual(false);
  });

  test(`handleKeyDown's "e.preventDefault()" method should be fired 
        if (esc || keyUp || keyDown || space) was pressed`, () => {
    wrapper = mount(<Dropdown />);

    const { handleKeyDown } = wrapper.instance();
    const cb = callback();

    wrapper.instance().getContainer = () => ({
      children: [
        {
          focus: () => {}
        }
      ],
      querySelectorAll: () => []
    });

    let event = {
      which: 32,
      target: {
        tagName: '',
        click: () => {}
      },
      preventDefault: cb
    };

    handleKeyDown(event);

    event = {
      ...event,
      which: 27
    };

    handleKeyDown(event);

    event = {
      ...event,
      which: 38
    };

    handleKeyDown(event);

    event = {
      ...event,
      which: 40
    };

    handleKeyDown(event);

    expect(cb).toBeCalledTimes(4);
  });

  test(`handleKeyDown's "e.preventDefault()" method should not be fired 
        if (esc || keyUp || keyDown || space) wasn't pressed`, () => {
    wrapper = mount(<Dropdown />);

    const { handleKeyDown } = wrapper.instance();
    const cb = callback();

    const event = {
      which: 1,
      target: {
        tagName: ''
      },
      preventDefault: cb
    };

    handleKeyDown(event);

    expect(cb).not.toBeCalled();
  });

  test(`handleKeyDown's "getContainer()" method should not be fired 
        if disabled property was passed`, () => {
    wrapper = mount(<Dropdown disabled />);

    const { handleKeyDown } = wrapper.instance();
    const cb = callback();
    const getContainerCb = callback();

    wrapper.instance().getContainer = getContainerCb;

    const event = {
      which: 38,
      target: {
        tagName: ''
      },
      preventDefault: cb
    };

    handleKeyDown(event);
    expect(getContainerCb).not.toBeCalled();
  });

  test(`handleKeyDown's "e.target.click" method should be fired 
        if SPACE && isOpen===true && container!==e.target`, () => {
    wrapper = mount(<Dropdown />);
    wrapper.setState({ isOpen: true });

    const { handleKeyDown } = wrapper.instance();
    const clickCb = callback();

    const event = {
      which: 32,
      target: {
        tagName: '',
        click: clickCb
      },
      preventDefault: () => {}
    };

    handleKeyDown(event);
    expect(clickCb).toBeCalled();
  });

  test('handleKeyDown\'s "focus()" method should be fired if ESC || isOpen===false', () => {
    wrapper = mount(<Dropdown />);

    const { handleKeyDown } = wrapper.instance();
    const focusCb = callback();

    wrapper.instance().getContainer = () => ({
      children: [
        {
          focus: focusCb
        }
      ],
      querySelectorAll: () => []
    });

    const event = {
      which: 27,
      target: {
        tagName: '',
        click: () => {}
      },
      preventDefault: () => {}
    };

    handleKeyDown(event);
    expect(focusCb).toBeCalled();
  });

  test('handleKeyDown\'s "handleFocus()" method should be fired if items.length>0', () => {
    wrapper = mount(<Dropdown />);
    wrapper.setState({ isOpen: true });

    const { handleKeyDown } = wrapper.instance();
    const focusCb = callback();

    const menu = document.createElement('div');
    menu.classList.add('dropdown-menu');
    const item = document.createElement('div');
    item.classList.add('dropdown-item');
    menu.appendChild(item);

    wrapper.instance().getContainer = () => menu;
    wrapper.instance().handleFocus = focusCb;

    const event = {
      which: 40,
      target: {
        tagName: '',
        click: () => {}
      },
      preventDefault: () => {}
    };

    handleKeyDown(event);
    expect(focusCb).toBeCalled();
  });

  test('handleKeyDown\'s "handleFocus()" method should not be fired if items.length===0', () => {
    wrapper = mount(<Dropdown />);
    wrapper.setState({ isOpen: true });

    const { handleKeyDown } = wrapper.instance();
    const focusCb = callback();

    const menu = document.createElement('div');
    menu.classList.add('dropdown-menu');

    wrapper.instance().getContainer = () => menu;
    wrapper.instance().handleFocus = focusCb;

    const event = {
      which: 40,
      target: {
        tagName: '',
        click: () => {}
      },
      preventDefault: () => {}
    };

    handleKeyDown(event);
    expect(focusCb).not.toBeCalled();
  });

  describe('sets classes', () => {
    test('adds `btn-group` class', () => {
      wrapper = setup({ group: true });
      checkClass(wrapper, 'btn-group');
    });

    test('adds `btn-group-sm` class', () => {
      wrapper = setup({ size: 'sm' });
      checkClass(wrapper, 'btn-group-sm');
    });

    test('adds `dropdown` class if `group` property is not passed', () => {
      checkClass(wrapper, 'dropdown');
    });

    test('does not add `dropdown` class if `group` property is passed', () => {
      wrapper = setup({ group: true });
      expect(wrapper.find('.dropdown')).toHaveLength(0);
    });

    test('adds `show` class if `isOpen===true`', () => {
      expect(wrapper.find('.show')).toHaveLength(0);

      wrapper.setState({ isOpen: true });
      checkClass(wrapper, 'show');
    });

    test('adds `dropup` class ', () => {
      wrapper = setup({ dropup: true });

      checkClass(wrapper, 'dropup');
    });

    test('adds `dropright` class ', () => {
      wrapper = setup({ dropright: true });

      checkClass(wrapper, 'dropright');
    });

    test('adds `dropleft` class ', () => {
      wrapper = setup({ dropleft: true });

      checkClass(wrapper, 'dropleft');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
