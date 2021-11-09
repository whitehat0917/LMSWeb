import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) => ({
  fieldsContainer: {
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
  },

  root: {
    boxShadow: 'none ',
    '& > div': { textTransform: 'none !important' },
  },

  notify: {
    fontSize: 10,
    color: '#16395B',
  },
  notify2: {
    fontSize: 10,
    color: '#7D8793',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '-42px',
    marginTop: '-6px',
  },
  para: {
    lineHeight: '1rem',
    color: 'var(--base-gray-500) !important',
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: '10px',
    marginTop: '-20px',
    alignContent: 'center',
  },
  editbtn: {
    backgroundColor: 'var(--color-primary-dark)',
    color: 'white',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
    margin: 15,
  },
  cbox: {
    marginTop: '-20px',
    marginLeft: -10,
    '& svg': {
      width: '17px',
    },
  },
  avtar: {
    margin: 'auto',
    marginTop: '10px',
    '& > img': {
      color: 'transparent',
      width: 'auto',
      height: 'auto',
      objectFit: 'none',
      textAlign: 'center',
      textIndent: '10000px',
    },
  },
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '176px',
    height: '36px',
    marginTop: '10px',
  },

  coloredButton1: {
    backgroundColor: 'var(--color-primary-dark)',
    color: 'white',
    width: '119px',
    height: '36px',
    marginLeft: '10px',
    marginTop: '10px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '126px',
    boxShadow: '0px 3px 6px var(--shadow-color)',
    borderRadius: '5px',
    opacity: '1',
    display: 'flex',
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

  OverviewCard: {
    width: '98%',
    height: '360px',

    position: 'relative',
    boxShadow: '0px 3px 6px #00000008',
    border: '1px solid var(--base-gray-300)',
    textAlign: 'center',
    marginTop: -4,
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
      backgroundColor: '#f7f8fb',
      padding: '9.5px 18px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
      borderRight: '1px solid var(--base-gray-300)',
      font: 'normal normal 600 10px/12px var(--base-font)',
      letterSpacing: 0,
    },
  },

  inputAndorsment1: {
    backgroundColor: '#f7f8fb',
    width: 85,
    border: '1px solid #dce0e3',
    height: 51,
    paddingLeft: 13,
    marginLeft: -13,
    '& p': {
      backgroundColor: '#f7f8fb',
      padding: '9.5px 18px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
      borderRight: '1px solid var(--base-gray-300)',
      font: 'normal normal 600 10px/12px var(--base-font)',
      letterSpacing: 0,
    },
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 11,
    color: 'var(--base-gray-500)',
    marginTop: '20px',
    fontWeight: 'bold',
  },
  textcover: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: '0px !Important',
    fontSize: 11,
    color: 'var(--base-gray-500)',
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
    backgroundColor: 'var(--base-gray-500)',
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
    paddingTop: 53,
    marginLeft: 25,
    marginTop: '-15px',
  },

  pDrag: {
    marginTop: 20,
    marginBottom: '-10px !important',
    fontSize: 10,
    color: '#555A6B',
    marginLeft: -24,
  },
  pDrag1: {
    marginTop: 0,
    marginBottom: '-10px !important',
    fontSize: 8,
    color: '#BEC4CB',
    textAlign: 'left',
    marginLeft: 42,
  },
}));
