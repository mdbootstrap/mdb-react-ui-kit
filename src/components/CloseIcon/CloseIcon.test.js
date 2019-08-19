import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../tests/utils';
import CloseIcon from './CloseIcon';

const mockCallback = jest.fn();
const expectedProps = {
  className: 'mockClassName',
  type: 'submit',
  style: { background: 'red' },
  onClick: mockCallback
};

const setup = (props = {}) => shallow(<CloseIcon {...props} />);

describe('<CloseIcon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`does not throw warnings with expected props`, () => {
    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test(`does not throw warnings without props`, () => {
    checkProps(wrapper, {});
  });

  test(`renders without errors`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<CloseIcon />, div);
  });

  test(`renders close button`, () => {
    const closeBtn = findByTestAttr(wrapper, 'close-button');
    expect(closeBtn.length).toBe(1);
  });

  test(`invokes callback function passed as a prop after clicking a button`, () => {
    wrapper = setup({ onClick: mockCallback });
    const closeBtn = findByTestAttr(wrapper, 'close-button');
    closeBtn.simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test(`adds custom attributes passed as props`, () => {
    wrapper = setup({ 'data-custom-attr': 'custom' });
    const closeBtn = findByTestAttr(wrapper, 'close-button');

    expect(closeBtn.props()['data-custom-attr']).toBe('custom');
    expect(wrapper.find(`[data-custom-attr="custom"]`).length).toBe(1);
  });

  test(`allows to set custom aria-label attribute`, () => {
    wrapper = setup({ ariaLabel: 'custom' });
    const closeBtn = wrapper.find(`[aria-label="custom"]`);

    expect(closeBtn.length).toBe(1);
  });

  describe('sets classes', () => {
    test(`adds close class by default`, () => {
      checkClass(wrapper, 'close');
    });

    test(`adds custom class passed as props`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
