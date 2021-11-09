import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //width: '1044px ',

    height: '60px',
  },

  coloredButton: {
    backgroundColor: lmsStyle['base-gray-500'],
    color: 'white',

    width: '200px',
    height: '36px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
  },
  Tabcolor: {
    backgroundColor: 'white',
    zIndex: 1,
    textTransform: 'none',
    boxShadow: 'none',
    borderBottom: `2px solid ${lmsStyle['base-gray-200)']}`,
    height: '60px',
    opacity: 1,
  },
  Tabtext: {
    textTransform: 'none',
    color: lmsStyle['base-secondary'],
    height: '60px',
    fontWeight: 'bold',

    '&:not(:last-child)': {
      borderRight: `2px solid ${lmsStyle['base-gray-200']}`,
    },
  },

  TabtextColor: {
    textColor: lmsStyle['base-secondary'],
  },

  boxcolor: {
    display: 'flex',

    justifyContent: 'center',
    backgroundColor: 'white',
    margin: '0 !important',
  },

  tabwidth: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),

    // '& > div': {
    //   flexGrow: 1,
    //   display: 'flex',
    //   flexDirection: 'column',
    //   '& > p': {
    //     flexGrow: 1,
    //   },
    // },
  },

  text: {
    marginBottom: '-20px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },
}));
