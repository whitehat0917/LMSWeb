import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '111px',
    height: '26px',
    fontSize: '10px',
    marginLeft: '10px',
  },

  table: {
    minWidth: 650,
  },

  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  tableHead: {
    '& th': {
      textAlign: 'left',
      fontWeight: 400,
      color: lmsStyle['base-gray-500'],
    },
  },

  row: {
    color: lmsStyle['base-secondary'],
    textAlign: 'left',
    '& th': {
      fontWeight: 'bold',
      color: lmsStyle['base-secondary'],
    },
  },

  pagination: {
    '& ul': {
      justifyContent: 'center',
      marginTop: '10px',
    },
  },

  anchorOriginBottomCenter: {
    '& > div': {
      width: '100%',
    },
  },
  backLink: {
    cursor: "pointer",
    textDecoration: 'underline',
    color: lmsStyle['base-secondary'],
    font: `normal normal bold 10px / 15px ${lmsStyle['base-font']}`
  },
}));
