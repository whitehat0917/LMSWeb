import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // border: '1px solid grey',
    boxShadow: '0px 3px 6px #00000005',
    //border: '1px solid #DCE0E3',
    border: `1px solid ${lmsStyle['base-gray-300']}`,

    borderRadius: '5px',
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
    marginLeft: 10,
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
  color: {
    color: 'var(--base-accent)',
    fontWeight: 'bold',
    marginTop: '32px',
    marginRight: '13px',
    fontSize: '14px',
  },
  color1: {
    color: 'var(--base-accent)',
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
    height: 39,
    width: '31px',
  },

  pQ: {
    fontSize: '14',
    marginTop: '20px',
    color: '#16395B',
    marginBottom: '0px',
    opacity: 1,
  },

  editbtn: {
    color: 'white',
    background: '#16395B',
    boxShadow: '0px 3px 3px #00000007',
    borderRadius: '4px',
    opacity: 1,
    width: 131,
    height: 36,
    whiteSpace: 'nowrap',
    fontSize: '14px',
    marginTop: 15,
    textTransform: 'capitalize',
    '&:hover': {
      color: 'white',
      background: '#16395B',
      boxShadow: '0px 3px 3px #00000007',
    },
  },
  boxHeight: {
    width: '100%',
    height: '95px',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '5px',
  },
  coloredButton: {
    color: 'var(--base-accent)',
    fontWeight: 'bold',
  },
  coloredButton1: {
    color: 'var(--base-primary)',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
    marginTop: -10,
    marginRight: 18,
  },
  btn: {
    margin: 'auto',
    marginRight: '20px',
    textAlign: 'right',
  },
}));
