import { Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useInputBaseStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 4,
    // border: '1px solid',
    borderColor: lmsStyle['base-gray-300'],
    boxShadow: '0px 3px 3px #00000007',
    '&:hover:not($disabled)': {
      borderColor: blueGrey[500],
    },
    '& > svg': {
      color: blueGrey[300],
    },

    '& .MuiInputAdornment-root > span': {
      paddingTop: 4,
      paddingBottom: 4,
      height: 34,
    },
  },
  multiline: {
    padding: 0,
  },
  error: {
    borderColor: theme.palette.error.main,
    '&:hover:not($disabled)': {
      borderColor: theme.palette.error.main,
    },
  },
  input: {
    padding: 11,
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  disabled: {
    borderColor: blueGrey[300],
    backgroundColor: blueGrey[100],
  },
  formControl: {
    'label + &': {
      marginTop: 19,
    },
  },
  formHelperText: {
    marginLeft: 0,
  },
}));

export const useInputLabelStyles = makeStyles((theme: Theme) => ({
  root: {
    color: lmsStyle['base-gray-500'],
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    fontSize: 11,
    fontWeight: 'bold',
    transform: 'none !important',
    '&$focused:not($error)': {
      color: theme.palette.primary.main,
    },
  },
  error: {},
  focused: {},
  shrink: {
    transform: 'translate(0, 1.5px) scale(1)',
  },
}));
