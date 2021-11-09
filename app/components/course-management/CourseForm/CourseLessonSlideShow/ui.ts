import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: '1px solid grey',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  coloredButton: {
    backgroundColor: '#FF3B00',
    color: 'white',
    width: '200px',
    height: '36px',
    fontSize: '13px',
  },

  coloredButton1: {
    backgroundColor: '#E69E37',
    color: 'white',
    width: '200px',
    height: '36px',
    fontSize: '13px',
  },
  coloredButton2: {
    backgroundColor: '#57C1CA',
    color: 'white',
    width: '200px',
    height: '36px',
    fontSize: '13px',
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    opacity: '1',
  },

  // root: {
  //   ,
  // },
  image: {
    width: 128,
    height: 128,
  },
  imgSlidImage: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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

  boxcolor: {
    padding: '20px',
    backgroundColor: 'white',
    width: '100%',
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
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    width: '1038px',
    height: '474px',
  },
  boxDialog: {
    width: '100%',
    height: '725px',
    '&  > div': {
      width: '100%',
      display: 'flex',
    },
  },

  dialogtitle: {
    '&  > div': {
      display: 'flex',
    },
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: lmsStyle['base-gray-100'],
    color: lmsStyle['base-secondary'],

    padding: '0 24px',
    '& h6': {
      fontSize: '10px',
      fontWeight: 'bold',
    },
  },
  container: {
    // height: '3',
    width: '100%',
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
  },
  item1: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '9px !important',
  },
  box1: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    boxShadow: 'none',
    padding: '20px',
    alignItems: 'center',
    height: '100%',
  },
  coloredButtonAddLesson: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    marginLeft: '17px',
    fontSize: '13px',
    marginBottom: '15px',
    width: '148px',
    height: '36px',
  },
  coloredButtonCancel: {
    backgroundColor: lmsStyle['base-primary'],
    color: 'white',
    width: '200px',
    height: '36px',
    fontSize: '13px',
    marginLeft: '20px',
  },
  mt: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  //   @media (max-width: 600px) {
  //     .box {
  //       display: grid;
  //     }
  //   }
}));
