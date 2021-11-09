import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  fieldwidth: {
    width: '100%',
    '& > div': {
      height: '44px',
    },
    '& input': {
      fontSize: 10,
    },
  },

  paratext: {
    marginBottom: '0px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
    marginTop: '20px',
  },

  boxDialog: {
    width: '100%',
    // height: '725px',
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
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 'inherit',
    letterSpacing: '0px',
    marginTop: '10px',
  },

  paraheading: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    marginLeft: 'inherit',
    marginTop: '15px',
    display: 'flex',
  },
  textfield: {
    height: '150px',

    '& >div': {
      height: '500px',
    },
  },
  positionRelative: {
    position: 'relative',
  },
  positionCheckBox: {
    position: 'absolute',
    right: '5px',
    top: '6px',
    borderRadius: '5px',
  },
}));
