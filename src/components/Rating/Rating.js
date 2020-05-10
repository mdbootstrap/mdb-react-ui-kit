import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Fa, MDBBtn, MDBPopoverBody, MDBPopoverHeader, MDBTooltip } from 'mdbreact';
import PropTypes from 'prop-types';

const Rating = props => {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [choosed, setChoosed] = useState({
    title: '',
    index: null
  });
  const [feedbackValue, setFeedbackValue] = useState('');
  const [openedForm, setOpenedForm] = useState(null);

  const onDocumentClick = e => {
    if (!e.target.closest('.popover')) {
      setOpenedForm(null);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onDocumentClick);
    return () => window.removeEventListener('click', onDocumentClick);
  }, []);

  useEffect(() => {
    setData(props.data);
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.data]);

  useEffect(() => {
    const choosedIndex = data.findIndex(item => item.choosed);

    if (choosedIndex !== -1) {
      setChoosed({ title: data[choosedIndex].tooltip, index: choosedIndex });
    }
  }, [data]);

  useEffect(() => {
    if (props.getValue) {
      let { title, index } = choosed;
      index = index !== null ? index + 1 : index;

      props.getValue({ title, value: index });
    }
  }, [choosed, props]);

  const handleMouseEnter = (_, index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (title, index, e) => {
    e.stopPropagation();
    if (title === choosed.title && index === choosed.index) {
      setChoosed({ title: '', index: null });
      feedback && setOpenedForm(null);
    } else {
      setChoosed({ title, index });
      feedback &&
        setTimeout(() => {
          setOpenedForm(index);
        }, 1);
    }
  };

  const onCloseHanlder = () => {
    setFeedbackValue('');
    setOpenedForm(null);
  };

  const feedbackValueHandler = e => {
    setFeedbackValue(e.target.value);
  };

  const {
    tag: Tag,
    containerClassName,
    iconClassName,
    iconFaces,
    iconSize,
    iconRegular,
    fillClassName,
    fillColors,
    getValue,
    feedback,
    submitHandler,
    ...commonAttributes
  } = props;

  const containerClasses = classNames(
    'mdb-rating',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    containerClassName
  );

  let renderedIcons = [];

  if (data.length) {
    renderedIcons = data.map(({ icon = 'star', tooltip, far, size, choosed: _, ...itemAttributes }, index) => {
      const isChoosed = choosed.index !== null;
      const isHovered = hovered !== null;
      const isFormOpened = openedForm !== null;
      const isFormActive = feedback && isFormOpened && openedForm === index;

      let toFill = false;

      if (isChoosed) {
        toFill = index <= choosed.index;

        if (isHovered && hovered > choosed.index) {
          toFill = index <= hovered;
        }
      } else if (isHovered) {
        toFill = index <= hovered;
      }

      let fillColor = '';

      if (fillColors) {
        let current = null;

        if (isChoosed) {
          current = choosed.index;
          if (isHovered) {
            current = hovered;
          }
        } else if (isHovered) {
          current = hovered;
        }

        const isCustom = Array.isArray(fillColors);

        const defaultFillColors = ['oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'];

        if (current !== null) {
          fillColor = isCustom ? fillColors[current] : defaultFillColors[current];
        }
      }

      const iconClasses = classNames(
        'py-2 px-1 rate-popover',
        toFill && (fillColors ? fillColor : fillClassName),
        iconClassName
      );

      let renderIcon = icon;

      if (iconFaces) {
        const faces = ['angry', 'frown', 'meh', 'smile', 'laugh'];
        renderIcon = 'meh-blank';

        if (isChoosed && index <= choosed.index) {
          renderIcon = faces[choosed.index];

          if (isHovered) {
            renderIcon = faces[hovered];
          }
        } else if (isHovered && index <= hovered) {
          renderIcon = faces[hovered];
        }
      }

      let tooltipContent = tooltip;

      if (isFormActive) {
        tooltipContent = (
          <form
            onSubmit={e => {
              submitHandler(e, tooltip, openedForm + 1, feedbackValue);
              onCloseHanlder();
            }}
          >
            <MDBPopoverHeader>{tooltip}</MDBPopoverHeader>
            <MDBPopoverBody>
              <textarea
                type='text'
                className='md-textarea form-control py-0'
                value={feedbackValue}
                onChange={feedbackValueHandler}
                // style={{ resize: 'none' }}
              />
              <div className='d-flex align-items-center justify-content-around mt-2'>
                <MDBBtn type='submit' color='primary' size='sm'>
                  Submit!
                </MDBBtn>
                <button
                  onMouseDown={onCloseHanlder}
                  style={{
                    backgroundColor: '#fff',
                    border: 'none',
                    padding: '0.5rem 1.6rem'
                  }}
                >
                  Close
                </button>
              </div>
            </MDBPopoverBody>
          </form>
        );
      }

      return (
        <MDBTooltip
          key={tooltip}
          domElement
          placement='top'
          tag='span'
          popover={isFormActive}
          isVisible={isFormActive}
          clickable={isFormActive}
        >
          <span>
            <Fa
              style={{ cursor: 'pointer' }}
              {...commonAttributes}
              {...itemAttributes}
              icon={renderIcon}
              size={size || iconSize}
              far={far || iconRegular}
              className={iconClasses}
              data-index={index}
              data-original-title={tooltip}
              onMouseEnter={() => handleMouseEnter(tooltip, index)}
              onMouseLeave={handleMouseLeave}
              onClick={e => handleClick(tooltip, index, e)}
            />
          </span>
          <div style={{ userSelect: 'none' }}>{tooltipContent}</div>
        </MDBTooltip>
      );
    });
  }

  return (
    <Tag data-test='rating' className={containerClasses}>
      {renderedIcons}
    </Tag>
  );
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      choosed: PropTypes.bool,
      icon: PropTypes.string,
      tooltip: PropTypes.string
    })
  ),
  feedback: PropTypes.bool,
  fillClassName: PropTypes.string,
  fillColors: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
  getValue: PropTypes.func,
  iconClassName: PropTypes.string,
  iconFaces: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  submitHandler: PropTypes.func,
  tag: PropTypes.string
};

Rating.defaultProps = {
  containerClassName: '',
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
  feedback: false,
  fillClassName: 'fiveStars',
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div',
  submitHandler: e => e.preventDefault()
};

export default Rating;
export { Rating as MDBRating };
