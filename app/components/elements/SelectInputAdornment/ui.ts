import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  inputAndorsment: {
    '& > div': {
      borderLeft: `1px solid ${lmsStyle['base-gray-300']}`,
      fontSize: '10px',
      color: lmsStyle['base-secondary'],
      cursor: 'pointer',
      fontWeight: 'bold',
      marginRight: -14,
      transition: 'width .3s',
    },
  },

  valueContainer: {
    backgroundColor: lmsStyle['base-gray-100'],
    padding: '4px 20px',
    overflow: 'hidden',
    display: 'flex',
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > span': {
      marginRight: 5,
    },

    '& > svg': {
      fill: lmsStyle['base-gray-500'],
      marginRight: -5,
      transition: 'all .3s',
    },
    transition: 'width .3s',
  },

  dropDownContainer: {
    top: '99%',
    right: 0,
    backgroundColor: lmsStyle['base-gray-100'],
    borderTop: 0,
    zIndex: 2,
    overflow: 'hidden',
    width: 'calc(100% + 1px)',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    transition: 'height .4s',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },

  dropDownSeparator: {
    backgroundColor: lmsStyle['base-gray-300'],
    height: 1,
  },

  dropDownOption: {
    padding: '0 20px',
    height: 32.5,
    display: 'flex',
    alignItems: 'center',
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
  },
}));
