import React from 'react';
import { shallow } from 'enzyme';

import {
  findByTestAttr,
  checkClass,
  checkProps,
  checkTag
} from '../../../tests/utils';
import PopoverBody from './PopoverBody';

const setup = (props = {}) => shallow(<PopoverBody {...props} />);

describe('<PopoverBody />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test(`renders`, () => {
    expect(findByTestAttr(wrapper, 'popover-body').length).toBe(1);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: '',
      children: <div />,
      tag: 'h3'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test(`adds custom attributes passed as property`, () => {
    wrapper = setup({ attributes: { customAttr: 'custom' } });

    expect(wrapper.props()['customAttr']).toEqual('custom');
  });

  test('sets custom wrapper tag', () => {
    wrapper = setup({ tag: 'span' });
    checkTag(wrapper, 'span');
  });

  describe('sets classes', () => {
    test(`adds 'popover-body' class by default`, () => {
      checkClass(wrapper, 'popover-body');
    });

    test(`adds custom class passed as property`, () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });
  });
});
