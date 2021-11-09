import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) => ({
  editorClass: {
    height: 117,
    overflowY: 'auto',
    minHeight: 135,
  },
  Editordiv: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
  },
  label: {
    color: lmsStyle['base-gray-500'],
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    fontSize: 11,
    fontWeight: 'bold',
    '&$focused:not($error)': {
      color: theme.palette.primary.main,
    },
  },
  formControl: {
    '& > label + div': {
      marginTop: 14,
    },
    '& legend > span': {
      display: 'none',
    },
  },

  input: {
    flexGrow: 1,
    alignItems: 'flex-start',
    '& .rdw-editor-toolbar': {
      borderTop: 0,
    },

    '& .rdw-editor-main': {
      padding: 7,
    },
  },
}));
