import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up('sm')]: {
    primaryButton: {
      backgroundColor: lmsStyle['base-primary'],
      color: 'white',
      width: '100%',
      height: '36px',
    },
    secondaryButton: {
      backgroundColor: lmsStyle['base-secondary'],
      color: 'white',
      width: '100%',
      height: '36px',
    },
    tertiaryButton: {
      backgroundColor: lmsStyle['base-tertiary'],
      color: 'white',
      width: '100%',
      height: '36px',
    },
  },
  primaryButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
  },
  secondaryButton: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '119px',
    height: '36px',
  },
  tertiaryButton: {
    backgroundColor: lmsStyle['base-tertiary'],
    color: 'white',
    width: '119px',
    height: '36px',
  },
  mtSm: {
    marginTop: '10px',
  },
  mySm: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  mbSm: {
    marginTop: '10px',
  },
  mxSm: {
    marginRight: '10px',
    marginLeft: '10px',
  },
}));
