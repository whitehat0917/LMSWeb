import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  root: {
    border: '1px solid grey',
  },

  fieldwidth: {
    width: '552px',
    '& > div': {
      height: '44px',
    },
    '& input': {
      fontSize: 10,
    },
  },

  boxDialog: {
    width: '100%',
    height: '725px',
    '&  > div': {
      width: '100%',
      display: 'flex',
      '& > div': {
        width: '100%'
      }
    },
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lmsStyle['base-gray-100'],
    color: lmsStyle['base-secondary'],

    padding: '0 24px',
    '& h6': {
      fontSize: '10px',
      fontWeight: 'bold',
    },
  },

  dialogheight: {
    padding: '12px 24px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    marginLeft: '17px',
    fontSize: '13px',
    marginTop: '-30px',
    marginBottom: '15px',
    width: '148px',
    textTransform: 'capitalize',
    height: '36px',
  },

  dialogpara: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 'inherit',
    letterSpacing: '0px',
    marginTop: '10px',
  },

  paraheading: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    marginLeft: '25px',
    marginRight: '10px',
    marginTop: '15px',
    display: 'flex',
  },
  textfield: {
    height: '150px',

    '& >div': {
      height: '500px',
    },
  },

  checkbox: {
    display: 'flex',
    alignItems: 'center',
  },
  cbox: {
    marginTop: '0px',
    marginLeft: '-9px',
    '& svg': {
      width: '17px',
    },
  },
  para: {
    lineHeight: '1rem',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: '10px',
    alignContent: 'center',
  },
}));
