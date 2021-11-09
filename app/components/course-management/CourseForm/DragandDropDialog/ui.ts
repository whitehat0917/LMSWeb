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

  inputAndorsmentA: {
    '& p': {
      backgroundColor: lmsStyle['base-secondary'],
      padding: '9px',

      marginLeft: '-13px',
      overflow: 'hidden',
      borderTopLeftRadius: '4px',
      fontSize: '15px',
      color: '#FFFFFF',
      borderBottomLeftRadius: ' 4px',
    },
  },

  inputAndorsmentB: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-500'],
      padding: '9px',
      marginLeft: '-13px',
      overflow: 'hidden',
      fontSize: '15px',
      borderTopLeftRadius: '4px',
      color: '#FFFFFF',
      borderBottomLeftRadius: ' 4px',
    },
  },

  boxDialog: {
    width: '100%',
    height: '725px',
    '&  > div': {
      width: '100%',
      display: 'flex',
    },
  },

  dialogtitle: {
    '&  > div': {
      display: 'flex',
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

  Editordiv: {
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    width: '1040px',
    height: '265px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    marginLeft: '17px',
    fontSize: '13px',
    textTransform: 'capitalize',
    marginBottom: '15px',
    width: '148px',
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
  optionButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    marginRight: 'auto',
    fontSize: '13px',
    textTransform: 'capitalize',
    margin: '10px 0',
    width: '148px',
    height: '36px',
  },
}));
