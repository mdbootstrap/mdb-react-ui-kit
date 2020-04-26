import moment from 'moment';
// import variables from '../../dist/scss/core/_colors.scss';

// const { danger, warning, success, primary, info, secondary, light, dark } = variables;

export function getTetherAttachments(placement) {
  let attachments = {};
  switch (placement) {
    case 'top':
    case 'top center':
      attachments = {
        attachment: 'bottom center',
        targetAttachment: 'top center'
      };
      break;
    case 'bottom':
    case 'bottom center':
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
      break;
    case 'left':
    case 'left center':
      attachments = {
        attachment: 'middle right',
        targetAttachment: 'middle left'
      };
      break;
    case 'right':
    case 'right center':
      attachments = {
        attachment: 'middle left',
        targetAttachment: 'middle right'
      };
      break;
    case 'top left':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'top left'
      };
      break;
    case 'top right':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'top right'
      };
      break;
    case 'bottom left':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'bottom left'
      };
      break;
    case 'bottom right':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'bottom right'
      };
      break;
    case 'right top':
      attachments = {
        attachment: 'top left',
        targetAttachment: 'top right'
      };
      break;
    case 'right bottom':
      attachments = {
        attachment: 'bottom left',
        targetAttachment: 'bottom right'
      };
      break;
    case 'left top':
      attachments = {
        attachment: 'top right',
        targetAttachment: 'top left'
      };
      break;
    case 'left bottom':
      attachments = {
        attachment: 'bottom right',
        targetAttachment: 'bottom left'
      };
      break;
    default:
      attachments = {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
  }

  return attachments;
}

export const tetherAttachements = [
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top center',
  'top right',
  'right top',
  'right middle',
  'right bottom',
  'bottom right',
  'bottom center',
  'bottom left',
  'left top',
  'left middle',
  'left bottom'
];

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
export function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}

export function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

export function getOriginalBodyPadding() {
  return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L420
  const fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
  const bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

export function mapToCssModules(className, cssModule) {
  if (!cssModule) {
    return className;
  }
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
}

// Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.

export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

export const keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};

export const returnAttributes = attributes => {
  const newAttributesObject = Object.keys(attributes).reduce((previousValue, currentElement) => {
    if (attributes[currentElement]) {
      previousValue[currentElement] = attributes[currentElement];
    }
    return previousValue;
  }, {});

  return newAttributesObject;
};

export const getColorClass = color => {
  const colorArray = color.split(' ');
  const specialColors = [
    'danger',
    'warning',
    'success',
    'info',
    'default',
    'primary',
    'secondary',
    'elegant',
    'stylish',
    'unique',
    'special'
  ];
  let colorClasses = '';

  colorArray.forEach(color => {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += `${color} `;
      } else {
        colorClasses += `${color}-color`;
      }
    } else {
      colorClasses += `${color} `;
    }
  });

  return colorClasses;
};

export function debounce(fn, time = 166) {
  let timeout;

  function debounced(...args) {
    const that = this;
    const later = () => {
      fn.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, time);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

export const makeFirstLetterUpper = element => {
  return element.charAt(0).toUpperCase() + element.slice(1);
};

export const makeRandomID = (id = '1') => {
  return Array(id.length)
    .fill(null)
    .map(() =>
      Math.random()
        .toString(16)
        .substr(2)
    )
    .join('');
};

const themeColors = {
  danger: 'rgba(255, 53, 71)',
  warning: 'rgba(255, 187, 51)',
  success: 'rgba(0, 200, 81)',
  primary: 'rgba(66, 133, 244)',
  info: 'rgba(51, 181, 229)',
  secondary: 'rgba(170, 102, 204)',
  light: 'rgba(224, 224, 224)',
  dark: 'rgba(33, 33, 33)'
};

const themeColorsOpacity = {
  danger: 'rgba(255, 53, 71, .2)',
  warning: 'rgba(255, 187, 51, .2)',
  success: 'rgba(0, 200, 81, .2)',
  primary: 'rgba(66, 133, 244, .2)',
  info: 'rgba(51, 181, 229, .2)',
  secondary: 'rgba(170, 102, 204, .2)',
  light: 'rgba(224, 224, 224, 1) ',
  dark: 'rgba(33, 33, 33, .2)'
};

export const takeThemeColor = theme => themeColors[theme];
export const takeThemeColorOpacity = theme => themeColorsOpacity[theme];

export const takeAcutalDate = date => moment(date || new Date());
