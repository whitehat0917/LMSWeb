import { makeStyles } from '@material-ui/core/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    marginLeft: '17px',
    fontSize: '13px',
    marginBottom: '15px',
    width: '135px',
    height: '36px',
  },
  textfield: {
    marginTop: 10,
  },
  title: {
    backgroundColor: lmsStyle['base-gray-100'],
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },
  typo: {
    fontSize: '14px',
    color: lmsStyle['base-secondary'],
    fontWeight: 'bold',
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogeContainer: {
    display: 'flex',
    // width: '100%',
    width:"373px",
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialoge: {
    // width:"373px",
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center"
  },
}));
