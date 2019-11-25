import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Typography.css';
import { MDBBox } from 'mdbreact';

class Typogrphy extends React.Component {
  render() {
    const {
      className,
      tag: Tag,
      children,
      variant,
      blockquote,
      bqColor,
      bqTitle,
      bqFooter,
      bqText,
      listUnStyled,
      listInLine,
      colorText,
      text,
      note,
      noteColor,
      noteTitle,
      ...attributes
    } = this.props;

    const classes = classNames(
      variant && variant,
      colorText && `${colorText.toLowerCase()}-text`,
      text && `text-${text}`,
      className
    );
    const bc = classNames('blockquote', bqColor && `bq-${bqColor}`, className);
    const notes = classNames(
      'note',
      noteColor && `note-${noteColor}`,
      className
    );
    const isEmptyClass = classes !== '' ? classes : null;

    if (blockquote) {
      return (
        <MDBBox tag='blockquote' className={bc}>
          {children}
        </MDBBox>
      );
    } else if (listUnStyled) {
      return (
        <MDBBox tag='ul' className='list-unstyled'>
          {children}
        </MDBBox>
      );
    } else if (listInLine) {
      return (
        <MDBBox tag='ul' className='list-inline'>
          {children}
        </MDBBox>
      );
    } else if (note) {
      return (
        <MDBBox tag='p' className={notes}>
          <strong>{noteTitle}</strong>
          {children}
        </MDBBox>
      );
    } else {
      return (
        <Tag {...attributes} className={isEmptyClass}>
          {children}
        </Tag>
      );
    }
  }
}

Typogrphy.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  variant: PropTypes.string,
  blockquote: PropTypes.bool,
  bqColor: PropTypes.string,
  bqTitle: PropTypes.string,
  listUnStyled: PropTypes.bool,
  listInLine: PropTypes.bool,
  colorText: PropTypes.string,
  note: PropTypes.bool,
  noteColor: PropTypes.string,
  noteTitle: PropTypes.string
};
Typogrphy.defaultProps = {
  tag: 'p',
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listUnStyled: false,
  listInLine: false,
  noteColor: 'primary'
};

export default Typogrphy;
export { Typogrphy as MDBTypo };
export { Typogrphy as MDBTypogrphy };
