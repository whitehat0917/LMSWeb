import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  anchorOriginBottomCenter: {
    '& > div': {
      width: '100%',
    },
  },

  alert: {
    boxShadow: 'none',
  },
}));
