import { makeStyles, Theme } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) => ({
  fieldsContainer: {
    '& > div': {
      marginBottom: theme.spacing(0.5),
    },
  },

  root: {
    // border: '1px solid grey',
    boxShadow: '0px 3px 6px #00000005',
    //border: '1px solid #DCE0E3',
    border: `1px solid ${lmsStyle['base-gray-300']}`,

    borderRadius: '5px',
  },
  editbtn: {
    color: 'white',
    background: '#16395B',
    boxShadow: '0px 3px 3px #00000007',
    borderRadius: '4px',
    opacity: 1,
    width: 142,
    height: 36,
    whiteSpace: 'nowrap',
    fontSize: '14px',
    marginTop: 18,
    textTransform: 'capitalize',
  },

  paper: {
    color: theme.palette.text.secondary,
    width: '100%',
  },
  fieldwidth: {
    width: '100%',
    '& > div': {
      height: '36px',
    },
  },

  inputAndorsment: {
    '& p': {
      // backgroundColor: 'var(--base-gray-100)',
      backgroundColor: lmsStyle['base-gray-100'],

      padding: '9.5px 18px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
      borderRight: '1px solid var(--base-gray-300)',
      font: 'normal normal 600 10px/12px var(--base-font)',
      letterSpacing: 0,
    },
  },
  formControl: {
    width: '100%',
  },
  text: {
    marginBottom: '-10px !Important',
    fontSize: 11,
    color: 'var(--base-gray-500)',
    marginTop: '20px',
    fontWeight: 'bold',
  },
  textField: {
    marginTop: 18,

    '& select': {
      padding: '7.5px 14px',
    },

    '& input': {
      paddingTop: 8.5,
      paddingBottom: 9.5,
      width: '200px',
    },

    '& .MuiInputAdornment-root > span': {
      paddingTop: 4,
      paddingBottom: 4,
      height: 34,
    },
  },
  subscribeFilter: {
    background: `${lmsStyle['base-gray-100']}  0% 0% no-repeat padding-box`,
    borderRadius: '5px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '10px'
    }
  }
}));
