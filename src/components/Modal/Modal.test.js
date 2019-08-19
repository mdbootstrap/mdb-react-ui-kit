import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import Modal from './Modal';

const setup = (props = {}) => shallow(<Modal {...props} />);

describe('<Modal />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'modal').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      backdrop: true,
      backdropClassName: 'test',
      contentClassName: 'test',
      modalClassName: 'test',
      size: 'test',
      side: true,
      fullHeight: true,
      frame: true,
      centered: true,
      position: 'test',
      cascading: true,
      modalStyle: 'test',
      wrapClassName: 'test',
      animation: 'test',
      fade: true,
      id: 'test',
      role: 'test',
      tabIndex: 'test',
      showModal: jest.fn(),
      hiddenModal: jest.fn(),
      hideModal: jest.fn(),
      zIndex: 1050
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('componentDidUpdate updates state correctly', () => {
    wrapper = setup({ isOpen: false });
    expect(wrapper.state('isOpen')).toEqual(false);

    wrapper.setProps({ isOpen: true });
    expect(wrapper.state('isOpen')).toEqual(true);
  });

  test('handleOnEntered method does not add "show" class if type===backdrop and fade===false', () => {
    wrapper = setup({ fade: false });
    let div = document.createElement('div');

    wrapper.instance().handleOnEntered('backdrop', div);
    expect(div.classList.contains('show')).toEqual(false);
  });

  test('handleOnEntered method adds "show" class if type!==backdrop and fade!==false', () => {
    let div = document.createElement('div');

    wrapper.instance().handleOnEntered('modal', div);

    expect(div.classList.contains('show')).toEqual(true);
  });

  test('handleOnEntered method invokes callback if type!==backdrop and fade!==false', () => {
    const callback = jest.fn();
    wrapper = setup({ showModal: callback });
    let div = document.createElement('div');

    wrapper.instance().handleOnEntered('modal', div);
    expect(callback).toBeCalled();
  });

  test('handleOnExit method does not add "show" class if type===backdrop and fade===false', () => {
    wrapper = setup({ fade: false });
    let div = document.createElement('div');

    wrapper.instance().handleOnExit('backdrop', div);
    expect(div.classList.contains('show')).toEqual(false);
  });

  test('handleOnExit removes "show" class if type!==backdrop and fade!==false', () => {
    let div = document.createElement('div');

    wrapper.instance().handleOnEntered('modal', div);
    expect(div.classList.contains('show')).toEqual(true);

    wrapper.instance().handleOnExit('modal', div);

    expect(div.classList.contains('show')).toEqual(false);
  });

  test('handleOnExit invokes callback if type!==backdrop and fade!==false', () => {
    const callback = jest.fn();
    wrapper = setup({ hideModal: callback });
    let div = document.createElement('div');

    wrapper.instance().handleOnExit('modal', div);
    expect(callback).toBeCalled();
  });

  test('handleOnExited invokes callback', () => {
    const callback = jest.fn();
    wrapper = setup({ hiddenModal: callback });

    wrapper.instance().handleOnExited();
    expect(callback).toBeCalled();
  });

  test(`handleBackdropClick does not close modal if clicking on the datepicker`, () => {
    const callback = jest.fn();
    wrapper = setup({ toggle: callback });

    const e = {
      target: {
        closest: () => true,
        classList: {
          contains: () => true
        }
      }
    };

    wrapper.instance().modalContent = {
      contains: () => true
    };

    wrapper.instance().handleBackdropClick(e);

    expect(callback).not.toBeCalled();
  });

  test(`handleBackdropClick does not close modal if 'backdrop' property is not passed`, () => {
    const callback = jest.fn();
    wrapper = setup({ toggle: callback, backdrop: false });

    const e = {
      target: {
        closest: () => false,
        classList: {
          contains: () => false
        }
      }
    };

    wrapper.instance().modalContent = {
      current: {
        contains: () => true
      }
    };

    wrapper.instance().handleBackdropClick(e);

    expect(callback).not.toBeCalled();
  });

  test(`handleBackdropClick closes modal if clicking on the document`, () => {
    const callback = jest.fn();
    wrapper = setup({ toggle: callback });

    const e = {
      target: {
        closest: () => false,
        classList: {
          contains: () => false
        }
      }
    };

    wrapper.instance().modalContent = {
      contains: () => false
    };

    wrapper.instance().handleBackdropClick(e);

    expect(callback).toBeCalled();
  });

  test(`handleEscape closes modal if "ESC" is pressed`, () => {
    const callback = jest.fn();
    wrapper = setup({ toggle: callback });

    const e = {
      preventDefault: () => {},
      keyCode: 27
    };

    wrapper.instance().handleEscape(e);

    expect(callback).toBeCalled();
  });

  test(`handleEscape does not close modal if pressed button is not "ESC"`, () => {
    const callback = jest.fn();
    wrapper = setup({ toggle: callback });

    const e = {
      preventDefault: () => {},
      keyCode: 22
    };

    wrapper.instance().handleEscape(e);

    expect(callback).not.toBeCalled();
  });

  describe('sets classes', () => {
    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test('adds `modal-open` class after opening', () => {
      wrapper = mount(<Modal />);
      expect(document.body.classList.contains('modal-open')).toBeTruthy();
    });

    test('adds `modal-open` class after opening', () => {
      wrapper = mount(<Modal />);
      wrapper.unmount();

      expect(document.body.classList.contains('modal-open')).not.toBeTruthy();
    });

    describe('sets modal-dialog classes', () => {
      test(`adds 'modal-dialog' class by default`, () => {
        checkClass(wrapper, 'modal-dialog');
      });

      test(`adds 'cascading-modal' class`, () => {
        wrapper = setup({ cascading: true });
        checkClass(wrapper, 'cascading-modal');
      });

      test(`adds 'modal-side' class`, () => {
        wrapper = setup({ side: true });
        checkClass(wrapper, 'modal-side');
      });

      test(`adds 'modal-full-height' class`, () => {
        wrapper = setup({ fullHeight: true });
        checkClass(wrapper, 'modal-full-height');
      });

      test(`adds 'modal-frame' class`, () => {
        wrapper = setup({ frame: true });
        checkClass(wrapper, 'modal-frame');
      });

      test(`adds 'modal-dialog-centered' class`, () => {
        wrapper = setup({ centered: true });
        checkClass(wrapper, 'modal-dialog-centered');
      });

      test(`adds 'modal-dialog-centered' class`, () => {
        wrapper = setup({ centered: true });
        checkClass(wrapper, 'modal-dialog-centered');
      });

      test(`adds 'modal-sm' class`, () => {
        wrapper = setup({ size: 'sm' });
        checkClass(wrapper, 'modal-sm');
      });

      test(`adds 'modal-bottom-left' class`, () => {
        wrapper = setup({ position: 'bottom-left' });
        checkClass(wrapper, 'modal-bottom-left');
      });

      test(`adds 'modal-notify white-text modal-danger' classes`, () => {
        wrapper = setup({ modalStyle: 'danger' });
        checkClass(wrapper, 'modal-notify.white-text.modal-danger');
      });
    });

    describe('sets wrapper classes', () => {
      test(`adds 'modal' class`, () => {
        wrapper = setup({ backdrop: false });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'modal');
      });

      test(`adds 'fade' class`, () => {
        wrapper = setup({ backdrop: false, fade: true });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'fade');
      });

      test(`adds custom class`, () => {
        wrapper = setup({ backdrop: false, wrapClassName: 'wrapTest' });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'wrapTest');
      });

      test(`adds 'modal' class`, () => {
        wrapper = setup({ backdrop: false, wrapClassName: 'wrapTest' });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'wrapTest');
      });

      test(`adds 'top' class when 'animation' and 'posotion' properties are not passed`, () => {
        wrapper = setup({ backdrop: false });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'top');
      });

      test(`adds 'left' class when 'animation=left' property is  passed`, () => {
        wrapper = setup({ backdrop: false, animation: 'left' });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'left');
      });

      test(`adds 'right' class when 'position=top-right' property is  passed`, () => {
        wrapper = setup({ backdrop: false, position: 'top-right' });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'right');
      });
    });

    describe('sets backdrop classes', () => {
      test(`adds 'modal-backdrop' class by default`, () => {
        const backdropDiv = wrapper.find('div').first();

        checkClass(backdropDiv, 'modal-backdrop');
      });

      test(`adds 'fade' class`, () => {
        wrapper = setup({ fade: true });
        const backdropDiv = wrapper.find('div').first();

        checkClass(backdropDiv, 'fade');
      });

      test(`adds 'show' class when 'fade' property is not passed`, () => {
        wrapper = setup({ fade: false });
        const backdropDiv = wrapper.find('div').first();

        checkClass(backdropDiv, 'show');
      });

      test(`adds custom backdrop class`, () => {
        wrapper = setup({ backdropClassName: 'backdropTest' });
        wrapper = wrapper.find('div').first();

        checkClass(wrapper, 'backdropTest');
      });
    });

    describe('sets content classes', () => {
      test(`adds 'modal-content' class by default`, () => {
        const content = wrapper.find('div').at(3);

        checkClass(content, 'modal-content');
      });

      test(`adds custom content class`, () => {
        wrapper = setup({ contentClassName: 'contentTest' });
        const content = wrapper.find('div').at(3);

        checkClass(content, 'contentTest');
      });
    });
  });
});
