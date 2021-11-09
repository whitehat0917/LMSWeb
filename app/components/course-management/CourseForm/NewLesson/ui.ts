import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  coloredButton: {
    color: lmsStyle['base-accent'],
    marginTop: '19px',
    fontWeight: 'bold',
  },
  coloredButton1: {
    marginTop: '19px',
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
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
  addmodule: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '192px',
    height: '36px',
    marginTop: '20px',
  },
  spn: {
    color: lmsStyle['base-gray-500'],
    fontSize: '10px',
  },
  accorsummary: {
    backgroundColor: lmsStyle['base-gray-100'],
    height: '81px',
  },
  heading: {
    marginTop: '10px',
    fontSize: '14px',
    color: lmsStyle['base-secondary'],
    fontWeight: 'bold',
  },
  btn1: {
    marginLeft: 'auto',
    marginTop: '0px',
  },
}));
