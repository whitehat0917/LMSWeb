import { makeStyles, Theme } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
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

    '& input': {
      paddingTop: 7.5,
      paddingBottom: 7.5,
    },

    '& .MuiInputAdornment-root > span': {
      paddingTop: 4,
      paddingBottom: 4,
      height: 34,
    },
  },
  adornedStart: {
    paddingLeft: '0.5rem',
  },
  adornedEnd: {
    paddingRight: '0.5rem',
  },
  error: {
    borderColor: theme.palette.error.main,
    '&:hover:not($disabled)': {
      borderColor: theme.palette.error.main,
    },
  },
  input: {
    padding: '0.625rem 0.5rem',
  },
  disabled: {
    borderColor: blueGrey[300],
    backgroundColor: blueGrey[100],
  },
  formControl: {
    'label + &': {
      marginTop: 29,
    },
    '& legend > span': {
      display: 'none',
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

export const useStyles = makeStyles(() => ({
  inputLabel: {
    transform: 'scale(1) !important',
    fontSize: 11,
  },
  select: {
    padding: '7.5px 14px',
    marginTop: -3,
  },
  formControl: {
    '& > label + div': {
      marginTop: 25,
    },
    '& legend > span': {
      display: 'none',
    },

    '& svg': {
      marginTop: -3,
    },
  },
  formHelperText: {
    marginLeft: 0,
  },
}));
