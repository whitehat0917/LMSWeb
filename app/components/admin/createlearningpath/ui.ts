import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) => ({
  fieldsContainer: {
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
  },
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    // backgroundColor: 'var(--base-primary)',
    color: 'white',
    width: '195px',
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
    // border: '1px solid grey',
    boxShadow: '0px 3px 6px #00000005',
    //border: '1px solid #DCE0E3',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    marginBottom: '5px',
    borderRadius: '5px',
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
      // backgroundColor: 'var(--base-gray-100)',
      backgroundColor: lmsStyle['base-gray-100'],

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
    fontSize: 10,
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
    marginBottom: '-5px !important',
    fontSize: 10,
  },
  pDrag1: {
    fontSize: 8,
    color: '#BEC4CB',
    marginTop: -9,
  },
  pDrag2: {
    fontSize: 8,
    color: '#BEC4CB',
    marginTop: -1,
  },

  title: {
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    marginLeft: 10,
  },
  subheader: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
    marginLeft: 20,
  },
  title1: {
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    marginLeft: 20,
  },
  subheader1: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
    marginLeft: 20,
  },

  title2: {
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  subheader2: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
  },

  avatar: {
    backgroundColor: red[500],
  },
  cardheader: {
    flexGrow: 1,
    marginTop: '12px',
    alignItems: 'flexStart',
  },
  color1: {
    cursor: 'pointer',
    color: 'var(--base-accent)',
    fontWeight: 'bold',
    marginTop: '18px',
    marginRight: '22px',
    fontSize: '14px',
  },
  color2: {
    cursor: 'pointer',
    color: '#37f145',
    fontWeight: 'bold',
    marginTop: '18px',
    marginRight: '22px',
    fontSize: '14px',
  },
  cardAction: {
    alignSelf: 'center',
    margin: 0,
  },

  search: {
    boxShadow: '0px 3px 3px #00000007',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '4px',
    opacity: '1',
    height: '46px',
    marginBottom: '15px',
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

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    position: 'relative',
    marginInline: '0px',
    marginBottom: 15,
    width: '100%',
  },

  media: {
    height: 95,
    width: '150px',
  },
  error: {
    fontSize: '14px',
    color: 'red',
    fontWeight: 600,
    lineHeight: '12px',
    marginBottom: '30px',
  },
}));
