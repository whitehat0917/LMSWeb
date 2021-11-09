import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '200px',
    height: '36px',
    fontSize: '13px',
    marginLeft: '20px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    borderRadius: '5px',
    opacity: '1',
  },

  root: {
    border: '1px solid grey',
  },

  fieldwidth: {
    width: '550px',
    '& > div': {
      height: '44px',
    },
    '& input': {
      fontSize: 10,
    },
  },

  editorClass: {
    marginLeft: '-0px',

    marginRight: '0px',
  },
  inputAndorsment: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-300'],
      padding: '12px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      fontSize: '10px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
    },
  },

  img: {
    paddingTop: '50px',
  },

  OverviewCard: {
    width: '482px',
    height: '265px',
    marginBottom: '-7px',

    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '380px',
  },
  boxcolor: {
    padding: '20px',
    backgroundColor: 'white',
    width: '100%',
  },
  discription: {
    marginTop: 10,
    padding: 0,
    marginBottom: '8px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
    fontWeight: 'bold',
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  Editordiv: {
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    width: '1038px',
    height: '474px',
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
  container: {
    height: '440px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  containerTree: {
    height: '340px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  item1: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '9px !important',
  },

  box1: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    boxShadow: 'none',
    padding: '20px',
    alignItems: 'center',
    height: '100%',
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
  inputAndorsmentA: {
    '& p': {
      backgroundColor: lmsStyle['base-secondary'],
      padding: '11px',

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
      padding: '11px',
      marginLeft: '-13px',
      overflow: 'hidden',
      fontSize: '15px',
      borderTopLeftRadius: '4px',
      color: '#FFFFFF',
      borderBottomLeftRadius: ' 4px',
    },
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

  binaryParent: {
    padding: '18px',
    background: '#cccccc14',
    fontWeight: 600,
  },

  binaryChild: {
    padding: '18px 130px',
    fontWeight: 600,
  },
}));
