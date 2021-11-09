import { makeStyles } from '@material-ui/core';
import { capitalize } from 'cypress/types/lodash';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '165px',
    height: '36px',
    display: 'flex',
    justifyContent: 'center',
    letterSpacing: '0px',
    margin: '0 auto',
    marginTop: '20px',
    textTransform: 'none',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  lessonParentdiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    left: '15px',
    marginBottom: '15px',
    textTransform: 'capitalize',
  },

  textfield: {},

  text: {
    marginBottom: '0px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
    marginTop: '20px',
  },

  boxDialog: {
    width: '100%',
    height: '725px',
    '&  div': {
      width: '100%',
    },
  },

  title: {
    backgroundColor: lmsStyle['base-gray-100'],
    color: lmsStyle['base-secondary'],
    fontSize: '10px',
    fontWeight: 'bold',
  },

  deleteButton: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
  },
  editButton: {
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
  },

  spn: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
  },
  accorsummary: {
    backgroundColor: lmsStyle['base-gray-100'],
    height: '81px',

    '& > div': {
      alignItems: 'center',
    },
  },
  heading: {
    fontSize: '14px',
    color: lmsStyle['base-secondary'],
    fontWeight: 'bold',
  },
  btn1: {
    marginLeft: 'auto',
    marginTop: '0px',
  },
  addmodule: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '192px',
    height: '36px',
    marginTop: '20px',
  },

  expandicon: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    borderRadius: '25px',
  },
  createlesson: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    marginTop: '20px',
    width: '163px',
    textTransform: 'initial',
    height: '36',
    marginBottom: '30px',
  },
  nextButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginTop: '10px',
  },
  prevButton: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginLeft: '10px',
    marginTop: '10px',
  },
}));
