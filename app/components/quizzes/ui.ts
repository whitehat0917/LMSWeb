import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
  },
  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginLeft: '10px',
  },
  audince: {
    // height: '370px',
    flexGrow: 1,
  },

  search: {
    boxShadow: '0px 3px 3px #00000007',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '4px',
    opacity: '1',
    height: '46px',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row-reverse',
    '& button:nth-child(2)': {
      marginRight: -15,
      transform: 'scale(1, 1) !important',
    },
    '& button:nth-child(3)': {
      display: 'none',
    },
  },

  outsidebtn: {
    marginLeft: '20px',
    marginTop: '20px',
  },

  audince2: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },

  audince1: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginTop: 20,
    color: lmsStyle['base-secondary'],
  },
}));
