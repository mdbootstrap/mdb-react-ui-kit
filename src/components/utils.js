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

export const testData = {
  columns: [
    {
      label: 'Name',
      field: 'name',
      width: 150,
      attributes: {
        'aria-controls': 'DataTable',
        'aria-label': 'Name'
      }
    },
    {
      label: 'Position',
      field: 'position',
      width: 270
    },
    {
      label: 'Office',
      field: 'office',
      width: 200
    },
    {
      label: 'Age',
      field: 'age',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Start date',
      field: 'date',
      sort: 'disabled',
      width: 150
    },
    {
      label: 'Salary',
      field: 'salary',
      sort: 'disabled',
      width: 100
    }
  ],
  rows: [
    {
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: '61',
      date: '2011/04/25',
      salary: '$320'
    },
    {
      name: 'Garrett Winters',
      position: 'Accountant',
      office: 'Tokyo',
      age: '63',
      date: '2011/07/25',
      salary: '$170'
    },
    {
      name: 'Ashton Cox',
      position: 'Junior Technical Author',
      office: 'San Francisco',
      age: '66',
      date: '2009/01/12',
      salary: '$86'
    },
    {
      name: 'Cedric Kelly',
      position: 'Senior Javascript Developer',
      office: 'Edinburgh',
      age: '22',
      date: '2012/03/29',
      salary: '$433'
    },
    {
      name: 'Airi Satou',
      position: 'Accountant',
      office: 'Tokyo',
      age: '33',
      date: '2008/11/28',
      salary: '$162'
    },
    {
      name: 'Brielle Williamson',
      position: 'Integration Specialist',
      office: 'New York',
      age: '61',
      date: '2012/12/02',
      salary: '$372'
    },
    {
      name: 'Herrod Chandler',
      position: 'Sales Assistant',
      office: 'San Francisco',
      age: '59',
      date: '2012/08/06',
      salary: '$137'
    },
    {
      name: 'Rhona Davidson',
      position: 'Integration Specialist',
      office: 'Tokyo',
      age: '55',
      date: '2010/10/14',
      salary: '$327'
    },
    {
      name: 'Colleen Hurst',
      position: 'Javascript Developer',
      office: 'San Francisco',
      age: '39',
      date: '2009/09/15',
      salary: '$205'
    },
    {
      name: 'Sonya Frost',
      position: 'Software Engineer',
      office: 'Edinburgh',
      age: '23',
      date: '2008/12/13',
      salary: '$103'
    },
    {
      name: 'Jena Gaines',
      position: 'Office Manager',
      office: 'London',
      age: '30',
      date: '2008/12/19',
      salary: '$90'
    },
    {
      name: 'Quinn Flynn',
      position: 'Support Lead',
      office: 'Edinburgh',
      age: '22',
      date: '2013/03/03',
      salary: '$342'
    },
    {
      name: 'Charde Marshall',
      position: 'Regional Director',
      office: 'San Francisco',
      age: '36',
      date: '2008/10/16',
      salary: '$470'
    },
    {
      name: 'Haley Kennedy',
      position: 'Senior Marketing Designer',
      office: 'London',
      age: '43',
      date: '2012/12/18',
      salary: '$313'
    },
    {
      name: 'Tatyana Fitzpatrick',
      position: 'Regional Director',
      office: 'London',
      age: '19',
      date: '2010/03/17',
      salary: '$385'
    },
    {
      name: 'Michael Silva',
      position: 'Marketing Designer',
      office: 'London',
      age: '66',
      date: '2012/11/27',
      salary: '$198'
    },
    {
      name: 'Paul Byrd',
      position: 'Chief Financial Officer (CFO)',
      office: 'New York',
      age: '64',
      date: '2010/06/09',
      salary: '$725'
    },
    {
      name: 'Gloria Little',
      position: 'Systems Administrator',
      office: 'New York',
      age: '59',
      date: '2009/04/10',
      salary: '$237'
    },
    {
      name: 'Bradley Greer',
      position: 'Software Engineer',
      office: 'London',
      age: '41',
      date: '2012/10/13',
      salary: '$132'
    },
    {
      name: 'Dai Rios',
      position: 'Personnel Lead',
      office: 'Edinburgh',
      age: '35',
      date: '2012/09/26',
      salary: '$217'
    },
    {
      name: 'Jenette Caldwell',
      position: 'Development Lead',
      office: 'New York',
      age: '30',
      date: '2011/09/03',
      salary: '$345'
    },
    {
      name: 'Yuri Berry',
      position: 'Chief Marketing Officer (CMO)',
      office: 'New York',
      age: '40',
      date: '2009/06/25',
      salary: '$675'
    },
    {
      name: 'Caesar Vance',
      position: 'Pre-Sales Support',
      office: 'New York',
      age: '21',
      date: '2011/12/12',
      salary: '$106'
    },
    {
      name: 'Doris Wilder',
      position: 'Sales Assistant',
      office: 'Sidney',
      age: '23',
      date: '2010/09/20',
      salary: '$85'
    },
    {
      name: 'Angelica Ramos',
      position: 'Chief Executive Officer (CEO)',
      office: 'London',
      age: '47',
      date: '2009/10/09',
      salary: '$1'
    },
    {
      name: 'Gavin Joyce',
      position: 'Developer',
      office: 'Edinburgh',
      age: '42',
      date: '2010/12/22',
      salary: '$92'
    },
    {
      name: 'Jennifer Chang',
      position: 'Regional Director',
      office: 'Singapore',
      age: '28',
      date: '2010/11/14',
      salary: '$357'
    },
    {
      name: 'Brenden Wagner',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '28',
      date: '2011/06/07',
      salary: '$206'
    },
    {
      name: 'Fiona Green',
      position: 'Chief Operating Officer (COO)',
      office: 'San Francisco',
      age: '48',
      date: '2010/03/11',
      salary: '$850'
    },
    {
      name: 'Shou Itou',
      position: 'Regional Marketing',
      office: 'Tokyo',
      age: '20',
      date: '2011/08/14',
      salary: '$163'
    },
    {
      name: 'Michelle House',
      position: 'Integration Specialist',
      office: 'Sidney',
      age: '37',
      date: '2011/06/02',
      salary: '$95'
    },
    {
      name: 'Suki Burks',
      position: 'Developer',
      office: 'London',
      age: '53',
      date: '2009/10/22',
      salary: '$114'
    },
    {
      name: 'Prescott Bartlett',
      position: 'Technical Author',
      office: 'London',
      age: '27',
      date: '2011/05/07',
      salary: '$145'
    },
    {
      name: 'Gavin Cortez',
      position: 'Team Leader',
      office: 'San Francisco',
      age: '22',
      date: '2008/10/26',
      salary: '$235'
    },
    {
      name: 'Martena Mccray',
      position: 'Post-Sales support',
      office: 'Edinburgh',
      age: '46',
      date: '2011/03/09',
      salary: '$324'
    },
    {
      name: 'Unity Butler',
      position: 'Marketing Designer',
      office: 'San Francisco',
      age: '47',
      date: '2009/12/09',
      salary: '$85'
    },
    {
      name: 'Howard Hatfield',
      position: 'Office Manager',
      office: 'San Francisco',
      age: '51',
      date: '2008/12/16',
      salary: '$164'
    },
    {
      name: 'Hope Fuentes',
      position: 'Secretary',
      office: 'San Francisco',
      age: '41',
      date: '2010/02/12',
      salary: '$109'
    },
    {
      name: 'Vivian Harrell',
      position: 'Financial Controller',
      office: 'San Francisco',
      age: '62',
      date: '2009/02/14',
      salary: '$452'
    },
    {
      name: 'Timothy Mooney',
      position: 'Office Manager',
      office: 'London',
      age: '37',
      date: '2008/12/11',
      salary: '$136'
    },
    {
      name: 'Jackson Bradshaw',
      position: 'Director',
      office: 'New York',
      age: '65',
      date: '2008/09/26',
      salary: '$645'
    },
    {
      name: 'Olivia Liang',
      position: 'Support Engineer',
      office: 'Singapore',
      age: '64',
      date: '2011/02/03',
      salary: '$234'
    },
    {
      name: 'Bruno Nash',
      position: 'Software Engineer',
      office: 'London',
      age: '38',
      date: '2011/05/03',
      salary: '$163'
    },
    {
      name: 'Sakura Yamamoto',
      position: 'Support Engineer',
      office: 'Tokyo',
      age: '37',
      date: '2009/08/19',
      salary: '$139'
    },
    {
      name: 'Thor Walton',
      position: 'Developer',
      office: 'New York',
      age: '61',
      date: '2013/08/11',
      salary: '$98'
    },
    {
      name: 'Finn Camacho',
      position: 'Support Engineer',
      office: 'San Francisco',
      age: '47',
      date: '2009/07/07',
      salary: '$87'
    },
    {
      name: 'Serge Baldwin',
      position: 'Data Coordinator',
      office: 'Singapore',
      age: '64',
      date: '2012/04/09',
      salary: '$138'
    },
    {
      name: 'Zenaida Frank',
      position: 'Software Engineer',
      office: 'New York',
      age: '63',
      date: '2010/01/04',
      salary: '$125'
    },
    {
      name: 'Zorita Serrano',
      position: 'Software Engineer',
      office: 'San Francisco',
      age: '56',
      date: '2012/06/01',
      salary: '$115'
    },
    {
      name: 'Jennifer Acosta',
      position: 'Junior Javascript Developer',
      office: 'Edinburgh',
      age: '43',
      date: '2013/02/01',
      salary: '$75'
    },
    {
      name: 'Cara Stevens',
      position: 'Sales Assistant',
      office: 'New York',
      age: '46',
      date: '2011/12/06',
      salary: '$145'
    },
    {
      name: 'Hermione Butler',
      position: 'Regional Director',
      office: 'London',
      age: '47',
      date: '2011/03/21',
      salary: '$356'
    },
    {
      name: 'Lael Greer',
      position: 'Systems Administrator',
      office: 'London',
      age: '21',
      date: '2009/02/27',
      salary: '$103'
    },
    {
      name: 'Jonas Alexander',
      position: 'Developer',
      office: 'San Francisco',
      age: '30',
      date: '2010/07/14',
      salary: '$86'
    },
    {
      name: 'Shad Decker',
      position: 'Regional Director',
      office: 'Edinburgh',
      age: '51',
      date: '2008/11/13',
      salary: '$183'
    },
    {
      name: 'Michael Bruce',
      position: 'Javascript Developer',
      office: 'Singapore',
      age: '29',
      date: '2011/06/27',
      salary: '$183'
    },
    {
      name: 'Donna Snider',
      position: 'Customer Support',
      office: 'New York',
      age: '27',
      date: '2011/01/25',
      salary: '$112'
    }
  ]
};
