import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    height: '36px',
    fontSize: '13px',
    marginTop: '30px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    height: '36px',
    marginLeft: '10px',
    fontSize: '13px',
    marginTop: '30px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '200px',
    boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    borderRadius: '5px',
    opacity: '1',
  },

  root: {
    border: '1px solid grey',
  },

  fieldwidth: {},

  editorClass: {
    marginLeft: '-0px',

    marginRight: '0px',
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

  gridContainer: {
    '& > div': {
      // marginBottom: theme.spacing(2.7),
    },
  },

  img: {
    paddingTop: '50px',
  },

  OverviewCard: {
    width: '100%',
    height: '240px',
    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    textAlign: 'center',
  },
  boxcolor: {
    padding: '30px',
    margin: '10px',
    backgroundColor: 'white',
  },
  discription: {
    marginTop: 10,
    padding: 0,
    marginBottom: '8px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  player: {},
  disp: {
    display: 'flex',
    alignItems: 'center',
    '& > div': {
      flexGrow: 1,
    },
  },
  textcover: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: '5px !Important',
    fontSize: 11,
    color: lmsStyle['base-gray-500'],
    verticalAlign: 'top',
    width: '100%',
  },

  inputfield: {
    width: '100%',
    marginTop: '10px',
    marginLeft: '-7px',
  },
  browseFileText: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  makeStyles: {
    marginBottom: 0,
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
