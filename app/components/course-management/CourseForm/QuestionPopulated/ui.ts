import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
  },
  coloredButton1: {
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
  },

  boxHeight: {
    width: '1020px',
    height: '95px',
    backgroundColor: lmsStyle['base-gray-100'],
    display: 'flex',
    borderRadius: '5px',
  },

  root: {
    border: '1px solid grey',
  },

  fieldwidth: {
    width: '497px',
  },

  btn: {
    marginLeft: '435px',
    marginTop: '34px',
  },
  btn1: {
    marginLeft: '377px',
    marginTop: '34px',
  },
  pQ: {
    fontSize: '14',
    marginTop: '20px',
    color: lmsStyle['base-secondary'],
    fontWeight: 'bold',
  },

  editorClass: {
    marginLeft: '-0px',

    marginRight: '0px',
  },
  editbtn: {
    color: lmsStyle['base-primary'],
    backgroundColor: 'none',
    position: 'absolute',
    right: '30px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginTop: '-40px',
    whiteSpace: 'nowrap',
  },

  inputAndorsment: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-300'],
      padding: '12px',
      marginLeft: '-13px',
      overflow: 'hidden',

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
  },
  discription: {
    margin: 0,
    padding: 0,
    marginBottom: '0px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },
  text: {
    marginBottom: '-20px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },

  addslide: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
    fontSize: '13px',
    marginTop: '30px',
  },

  cancel: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginLeft: '10px',
    fontSize: '13px',
    marginTop: '30px',
  },
}));
