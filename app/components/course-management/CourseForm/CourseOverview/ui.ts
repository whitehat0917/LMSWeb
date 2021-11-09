import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) => ({
  fieldsContainer: {
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
  },
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginTop: '10px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginLeft: '10px',
    marginTop: '10px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    borderRadius: '5px',
    opacity: '1',
  },
  discription: {
    fontSize: '11px',
    marginTop: '10px',
    marginLeft: '10px',
  },
  coverphoto: {
    fontSize: '11px',
    marginLeft: '600px',
    marginTop: '20px',
  },
  root: {
    border: '1px solid grey',
  },

  OverviewCard: {
    width: '100%',
    position: 'relative',
    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    textAlign: 'center',
    marginTop: -3,
  },
  paper: {
    color: theme.palette.text.secondary,
    width: '100%',
  },
  fieldwidth: {
    width: '100%',
    '& > div': {
      height: '36px',
    },
  },

  inputAndorsment: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-100'],
      padding: '9.5px 18px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
      borderRight: `1px solid ${lmsStyle['base-gray-300']}`,
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      letterSpacing: 0,
    },
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 11,
    color: lmsStyle['base-gray-500'],
    marginTop: '20px',
    fontWeight: 'bold',
  },
  textcover: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: '0px !Important',
    fontSize: 11,
    color: lmsStyle['base-gray-500'],
    verticalAlign: 'top',
  },

  formControl: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  chipcolor: {
    borderRadius: '3px',
    backgroundColor: lmsStyle['base-gray-500'],
    minWidth: '50px',
    color: 'white !important',
    '& > svg': {
      color: 'white',
    },
  },
  chipsGrid: {
    gap: 10,
    display: 'flex',
  },
  browseFileText: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  inputextfield: {
    '& > div': {
      height: '36px',
    },
  },

  Selectfont: {
    fontSize: '15px',
    height: '34px',
  },

  editorContainer: {
    display: 'flex',
    flexDirection: 'column',

    '& > div': {
      flexGrow: 1,
    },
  },

  disp: {
    display: 'flex',
  },
  img: {
    paddingTop: 50,
    marginLeft: 0,
  },

  pDrag: {
    marginLeft: 0,
    marginBottom: '-10px !important',
    fontSize: 10,
  },
  textWrapper: {
    '& > div > textarea': {
      padding: '18.5px 14px',
    },
  },
  error: {
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '12px',
  color: 'red',
  margin: '0 0 30px 0'
  }
}));
