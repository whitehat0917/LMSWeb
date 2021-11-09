import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  coloredButton: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
    marginTop: '19px',
  },
  coloredButton1: {
    marginTop: '19px',
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
  },
}));
