import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Rating from './Rating';

const setup = (props = {}) => shallow(<Rating {...props} />);

describe('<Rating />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const rating = findByTestAttr(wrapper, 'rating');
    expect(rating.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Rating />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      tag: 'span',
      iconFaces: true,
      iconRegular: true,
      iconClassName: 'home',
      getValue: () => {},
      fillColors: true,
      fillClassName: 'test',
      feedback: false,
      data: [
        {
          tooltip: 'Very Bad'
        },
        {
          tooltip: 'Poor'
        },
        {
          tooltip: 'Ok'
        },
        {
          tooltip: 'Good'
        },
        {
          tooltip: 'Excellent'
        }
      ],
      containerClassName: 'tested'
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
  test('check tag if is a h1', () => {
    wrapper = setup({ tag: 'h1' });
    checkTag(wrapper, 'h1');
  });

  describe('sets classes', () => {
    test('add containerClassName class', () => {
      wrapper = setup({
        containerClassName: 'testesdClassName'
      });
      checkClass(wrapper, 'testesdClassName');
    });
  });
});
