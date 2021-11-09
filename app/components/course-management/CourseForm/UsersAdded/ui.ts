import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '324px',
    boxShadow: '0px 3px 6px #00000005',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    opacity: '1',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  media: {
    height: 0,
  },

  title: {
    color: lmsStyle['base-secondary'],
    fontWeight: 'bold',
    fontSize: '12px',
  },
  subheader: {
    color: lmsStyle['base-secondary'],
    fontSize: '10px',
  },

  avatar: {
    backgroundColor: red[500],
  },
  color: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
    fontSize: '14px',
  },
  colorAdd: {
    color: '#04ff00',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  cardAction: {
    alignSelf: 'center',
    margin: 0,
  },
  // maxwidth:{
  //   maxWidth:'32.3%',
  // }
}));
