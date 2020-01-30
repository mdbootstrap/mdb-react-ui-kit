import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkTag
} from '../../tests/utils';
import Typography from './Typography';

const setup = (props = {}) => shallow(<Typography {...props} />);

describe('<Typography />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const typography = findByTestAttr(wrapper, 'typography');
    expect(typography.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Typography />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      blockquote: true,
      bqColor: 'primary',
      bqTitle: 'primary',
      className: 'test',
      colorText: 'blue',
      listInLine: true,
      listUnStyled: true,
      note: true,
      noteColor: 'info',
      noteTitle: 'test'
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
    test('check if is blockquote is true set color', () => {
      wrapper = setup({ blockquote: true, bqColor: 'primary' });
      checkClass(wrapper, 'bq-primary');
    });

    test('adds custom class passed as property', () => {
      wrapper = setup({ className: 'testClassName' });

      checkClass(wrapper, 'testClassName');
    });

    test('adds note colors', () => {
      wrapper = setup({ note: true, noteColor: 'info' });

      checkClass(wrapper, 'note-info');
    });
  });
});
