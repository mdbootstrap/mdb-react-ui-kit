import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Typography.css';
import { MDBBox } from 'mdbreact';

class Typography extends React.Component {
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
    }
    if (listUnStyled) {
      return (
        <MDBBox tag='ul' className='list-unstyled'>
          {children}
        </MDBBox>
      );
    }
    if (listInLine) {
      return (
        <MDBBox tag='ul' className='list-inline'>
          {children}
        </MDBBox>
      );
    }
    if (note) {
      return (
        <MDBBox tag='p' className={notes}>
          <strong>{noteTitle}</strong>
          {children}
        </MDBBox>
      );
    }
    return (
      <Tag {...attributes} className={isEmptyClass}>
        {children}
      </Tag>
    );
  }
}

Typography.propTypes = {
  blockquote: PropTypes.bool,
  bqColor: PropTypes.string,
  bqTitle: PropTypes.string,
  className: PropTypes.string,
  colorText: PropTypes.string,
  listInLine: PropTypes.bool,
  listUnStyled: PropTypes.bool,
  note: PropTypes.bool,
  noteColor: PropTypes.string,
  noteTitle: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  variant: PropTypes.string
};
Typography.defaultProps = {
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listInLine: false,
  listUnStyled: false,
  noteColor: 'primary',
  tag: 'p'
};

export default Typography;
export { Typography as MDBTypo };
export { Typography as MDBTypography };
