import { makeStyles } from '@material-ui/core/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
    fontSize: '13px',
    marginTop: '180px',
  },
  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '119px',
    height: '36px',
    marginLeft: '10px',
    fontSize: '13px',
    marginTop: '180px',
  },
  coloredButtonadd: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '160px',
    height: '36px',

    marginLeft: '10px',
    fontSize: '13px',
    marginTop: '30px',
  },
  boxcolor: {
    padding: '20px',
    backgroundColor: 'white',
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  pQ: {
    fontSize: '14',
    marginTop: '20px',
    color: lmsStyle['base-secondary'],
    marginBottom: '0px',
    fontWeight: 'bold',
  },
  editbtn: {
    color: lmsStyle['base-primary'],
    backgroundColor: 'none',
    position: 'absolute',
    right: '40px',
    textTransform: 'initial',
    fontWeight: 'bold',
    marginTop: '-25px',
    whiteSpace: 'nowrap',
    fontSize: '14px',
  },
  audioimg: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginTop: '170px',
  },
  addbtn: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },
  boxHeight: {
    width: '100%',
    height: '95px',
    backgroundColor: lmsStyle['base-gray-100'],
    display: 'flex',
    borderRadius: '5px',
  },
  btn: {
    // margin:'0 auto',
    marginLeft: 'auto',
    display: 'flex',
  },
  Deletebtn: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
  },
  Editbtn: {
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
  },
  Wavbtn: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '58',
    height: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
}));
