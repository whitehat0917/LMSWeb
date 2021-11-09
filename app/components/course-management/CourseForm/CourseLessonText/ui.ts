import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    height: '36px',
    fontSize: '13px',
    marginTop: '30px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    height: '36px',
    marginLeft: '10px',
    fontSize: '13px',
    marginTop: '30px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['shadow-color']}`,
    borderRadius: '5px',
    opacity: '1',
  },

  root: {
    border: '1px solid grey',
  },

  fieldwidth: {
    width: '497px',
  },

  editorClass: {
    marginLeft: '-0px',

    marginRight: '0px',
  },
  inputAndorsment: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-300'],
      padding: '12px',
      marginLeft: '-13px',
      overflow: 'hidden',
      /* border-radius: 4px; */
      borderTopLeftRadius: '4px',
      fontSize: '10px',
      color: '#29AC79',
      borderBottomLeftRadius: ' 4px',
    },
  },

  img: {
    paddingTop: '50px',
  },

  OverviewCard: {
    width: '482px',
    height: '265px',
    marginBottom: '-7px',

    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '380px',
  },
  boxcolor: {
    padding: '20px',
    backgroundColor: 'white',
  },
  discription: {
    marginTop: 10,
    padding: 0,
    marginBottom: '8px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
    fontWeight: 'bold',
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  Editordiv: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '5px',
    width: '1038px',
    height: '474px',
  },
}));
