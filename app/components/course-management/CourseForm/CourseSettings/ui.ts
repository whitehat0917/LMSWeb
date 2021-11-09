import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginTop: 18,

    '& > *': {
      margin: '0 auto',
    },
  },

  media: {
    height: 140,
    display: 'flex',
    alignItems: 'flex-start',
  },

  textField: {
    marginTop: 8,

    '& select': {
      padding: '7.5px 14px',
    },

    '& input': {
      paddingTop: 7.5,
      paddingBottom: 7.5,
    },

    '& .MuiInputAdornment-root > span': {
      paddingTop: 4,
      paddingBottom: 4,
      height: 34,
    },
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',

    fontSize: '10px',
  },
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    textAlign: 'center',
    width: '163px',
    marginLeft: '10px',
    height: '36px',
  },
  coloredButton1: {
    backgroundColor: lmsStyle['box-shadow'],
    color: 'white',
    marginLeft: '10px',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
  },
  editbtn: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    margin: 15,
  },
  cbox: {
    marginTop: '-20px',
    '& svg': {
      width: '17px',
    },
  },
  para: {
    lineHeight: '1rem',
    color: `${lmsStyle['base-gray-500']} !important`,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: '10px',
    marginTop: '10px',
    alignContent: 'center',
  },

  inputAndorsment: {
    '& > span': {
      backgroundColor: lmsStyle['base-gray-100'],
      padding: '4px',
      marginRight: '-13px',
      fontSize: '10px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopRightRadius: '4px',
      color: lmsStyle['base-secondary'],
      borderBottomRightRadius: ' 4px',
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      paddingRight: 15,
      paddingLeft: 25,
      '& > span': {
        marginRight: 5,
      },
    },
  },

  inputAndorsment1: {
    '& > span': {
      backgroundColor: lmsStyle['base-gray-500'],
      padding: '7px',
      marginRight: '-13px',
      fontSize: '10px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopRightRadius: '4px',
      color: lmsStyle['base-secondary'],
      borderBottomRightRadius: ' 4px',
      display: 'flex',
      alignItems: 'center',

      paddingRight: 15,
      paddingLeft: 25,
      '& > span': {
        marginRight: 5,
      },
    },
  },

  textDate: {
    marginTop: theme.spacing(1),
  },

  textReviewer: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
    marginTop: '0px',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 11,
    color: lmsStyle['base-gray-500'],
    fontWeight: 'bold',

    '& > span': {
      fontWeight: 'normal',
    },
  },
  disp: {
    display: 'flex',
  },
  textcover: {
    textAlign: 'left',

    marginBottom: '0px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },

  chipcolor: {
    borderRadius: '3px',
    backgroundColor: lmsStyle['base-gray-500'],
    width: '214px',
    color: 'white !important',
    '& > svg': {
      color: 'white',
    },
  },
  chipsGrid: {
    gap: 10,
    marginTop: '10px',
    display: 'flex',
  },

  typo: {
    fontSize: '14px',
    color: lmsStyle['base-secondary'],
  },

  span: {
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
  },

  leftInputsContainer: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
  },

  rightInputsContainer: {
    '& > div:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
  },

  descriptionBox: {
    maxHeight: '100%',
    overflowY: 'auto',
  },

  outsidebtn: {
    marginTop: 20,
  },
}));
