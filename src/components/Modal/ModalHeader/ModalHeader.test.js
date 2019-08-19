import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import ModalHeader from './ModalHeader';

const setup = (props = {}) => shallow(<ModalHeader {...props} />);

describe('<ModalHeader />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'modal-header').length).toBe(1);
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<ModalHeader />, div);
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ customAttr: 'custom' });

    expect(wrapper.props()['customAttr']).toBe('custom');
    expect(wrapper.find('[customAttr="custom"]').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      tag: 'span',
      closeAriaLabel: 'close',
      toggle: () => {}
    };

    wrapper = setup(expectedProps);

    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('renders closeButton if `toggle` property is passed', () => {
    wrapper = setup({ toggle: () => {}, closeAriaLabel: 'closeBtn' });

    expect(wrapper.find('[aria-label="closeBtn"]')).toHaveLength(1);
  });

  test('should not render closeButton if `toggle` property is not passed', () => {
    wrapper = setup({ closeAriaLabel: 'closeBtn' });

    expect(wrapper.find('[aria-label="closeBtn"]')).toHaveLength(0);
  });

  test('invokes callback after clicking on the closeButton', () => {
    const callback = jest.fn();

    wrapper = setup({ toggle: callback, closeAriaLabel: 'closeBtn' });
    const closeBtn = wrapper.find('[aria-label="closeBtn"]');

    closeBtn.simulate('click');

    expect(callback).toBeCalled();
  });

  describe('sets classes', () => {
    test(`adds 'modal-header' class by default`, () => {
      checkClass(wrapper, 'modal-header');
    });

    test(`adds 'modal-title' class to title by default`, () => {
      checkClass(wrapper, 'modal-title');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test(`adds custom class to title passed as property`, () => {
      wrapper = setup({ titleClass: 'testTitleClassName' });

      checkClass(wrapper, 'testTitleClassName');
    });
  });
});
