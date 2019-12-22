import React from 'react';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkClass,
  checkProps,
  checkTag
} from '../../tests/utils';
import Notification from './Notification';

const setup = (props = {}) => shallow(<Notification {...props} />);

describe('<Notification />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'notification').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'section',
      className: 'test',
      show: true,
      fade: true,
      autohide: 3000,
      iconClassName: 'test',
      title: 'test',
      text: 'test',
      titleColor: 'test',
      titleClassName: 'test',
      closeClassName: 'test',
      bodyClassName: 'test',
      bodyColor: 'test',
      message: 'test'
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
    wrapper = setup({ 'data-custom-attr': 'custom' });

    expect(wrapper.find('[data-custom-attr="custom"]').length).toBe(1);
  });

  test('renders title inside `strong` tag', () => {
    wrapper = setup({ title: 'testTitle' });

    expect(wrapper.find('strong').text()).toBe('testTitle');
  });

  test('renders text inside `small` tag', () => {
    wrapper = setup({ text: 'testText' });

    expect(wrapper.find('small').text()).toBe('testText');
  });

  test('renders message inside a body', () => {
    wrapper = setup({ message: 'testMessage' });

    expect(
      wrapper
        .find('div')
        .last()
        .text()
    ).toBe('testMessage');
  });

  test('hides notification after clicking on the closeIcon', () => {
    jest.useFakeTimers();
    wrapper = setup({ show: true });
    expect(wrapper.state('componentState')).toBe('show');

    const closeIcon = wrapper.find('MDBCloseIcon');

    closeIcon.simulate('click');

    jest.runAllTimers();
    expect(wrapper.state('componentState')).toBe('hide');
  });

  test('hides norification if (autohide) property is passed', () => {
    jest.useFakeTimers();
    wrapper = setup({ show: true, autohide: 3000 });
    expect(wrapper.state('componentState')).toBe('show');

    jest.runAllTimers();
    expect(wrapper.state('componentState')).toBe('hide');
  });

  describe('sets classes', () => {
    test('adds \'toast\' class by default', () => {
      checkClass(wrapper, 'toast');
    });

    test('adds \'fade\' class if (fade)', () => {
      wrapper = setup({ fade: true });
      checkClass(wrapper, 'fade');
    });

    test('adds \'hide\' class if (!show)', () => {
      wrapper = setup({ show: false });
      checkClass(wrapper, 'hide');
    });

    test('adds \'show\' class if (show)', () => {
      wrapper = setup({ show: true });
      checkClass(wrapper, 'show');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'customTest' });
      checkClass(wrapper, 'customTest');
    });

    test('adds \'toast-header\' class to header by default)', () => {
      checkClass(wrapper.find('div'), 'toast-header');
    });

    test('adds custom class to header)', () => {
      wrapper = setup({ titleClassName: 'headerTest' });
      checkClass(wrapper.find('div'), 'headerTest');
    });

    test('adds \'mr-2\' class to icon by default)', () => {
      checkClass(wrapper.find('Fa'), 'mr-2');
    });

    test('adds custom class to icon)', () => {
      wrapper = setup({ iconClassName: 'iconTest' });
      checkClass(wrapper.find('Fa'), 'iconTest');
    });

    test('adds \'toast-body\' class to body by default)', () => {
      checkClass(wrapper.find('div').last(), 'toast-body');
    });

    test('adds custom class to body)', () => {
      wrapper = setup({ bodyClassName: 'bodyTest' });
      checkClass(wrapper.find('div').last(), 'bodyTest');
    });

    test('adds \'ml-2 mb-1\' classes to \'closeIcon\' by default)', () => {
      checkClass(wrapper.find('MDBCloseIcon').last(), 'ml-2.mb-1');
    });

    test('adds custom class to closeIcon)', () => {
      wrapper = setup({ closeClassName: 'closeTest' });
      checkClass(wrapper.find('MDBCloseIcon').last(), 'closeTest');
    });
  });
});
