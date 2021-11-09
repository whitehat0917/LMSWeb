import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { lmsStyle } from '../../../../styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '119px',
    height: '36px',
    fontSize: '13px',
    marginTop: '30px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    //   width: '119px',
    marginRight: 'auto',
    height: '36px',
    marginLeft: '17px',
    fontSize: '13px',
    marginTop: '30px',
    // marginBottom: '30px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    borderRadius: '5px',
    opacity: '1',
  },

  root: {
    border: '1px solid grey',
  },

  fieldwidth: {
    // width: '497px',
    width: '100%',
    marginBottom: '6px',
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
    width: '100%',
    height: '265px',
    marginBottom: '-7px',
    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // width: '380px',
    width: '100%',
  },
  boxcolor: {
    padding: '20px',
    backgroundColor: 'white',
    width: '100%',
  },
  discription: {
    width: '100%',
    marginBottom: '6px',
  },

  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
  },
  Editordiv: {
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    width: '1038px',
    height: '474px',
  },
  boxDialog: {
    width: '100%',
    height: '100vh',
    '&  > div': {
      width: '100%',
      display: 'flex',
    },
    '& > div > div': {
      width: '100%',
      height: '100%'
    }
  },

  dialogtitle: {
    '&  > div': {
      display: 'flex',
    },
  },
  dialogheight: {
    padding: '12px 24px',
    height: '390px',
  },
  dialogpara: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 'inherit',
    letterSpacing: '0px',
    marginTop: '10px',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lmsStyle['base-gray-100'],
    color: lmsStyle['color-primary-dark'],

    padding: '0 24px',
    '& h6': {
      fontSize: '10px',
      fontWeight: 'bold',
    },
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
    padding: '10px 10px 20px 10px',
  },
  image: {
    marginTop: '30px',
    paddingTop: '50px',
    marginLeft: '60px',
    justifyContent: 'right',
    display: 'flex',
  },
  pDrag: {
    justifyContent: 'center',
    display: 'flex',
    margin: '0 auto',
    marginBottom: '-10px',
    marginLeft: '50px',
    marginTop: '10px',
    fontSize: '10px',
  },
  pDrag1: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginLeft: '113px',
    marginBottom: '-10px',
    marginTop: '10px',
    fontSize: '10px',
    color: lmsStyle['base-gray-400'],
  },
  pDrag2: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    marginLeft: '-30px',
    marginBottom: '-10px',
    marginTop: '10px',
    fontSize: '10px',
  },
  pDragmargin: {
    marginTop: '-60px',
  },
  addAccordionField: {
    borderRadius: '0px 0px 7px 7px !important',
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
  browseFileText: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  accordionHeading: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
  },
  accordionIcon: {
    backgroundColor: 'var(--color-primary-dark)',
    borderRadius: '50%',
    color: 'white',
    padding: '5px 4px 5px 6px',
  },
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
  },
}));
