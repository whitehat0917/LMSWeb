import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  chipcolor: {
    borderRadius: '3px',
    backgroundColor: lmsStyle['base-gray-500'],
    minWidth: '50px',
    color: 'white !important',
    '& > svg': {
      color: 'white',
    },
  },
  chipsGrid: {
    gap: 10,
    display: 'flex',
    marginTop: 7,
  },
}));
