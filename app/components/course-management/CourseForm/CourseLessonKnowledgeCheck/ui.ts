import { makeStyles } from '@material-ui/core/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme) => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '155px',
    height: '36px',
    display: 'flex',
    margin: '0 auto',
    marginTop: '20px',
    marginBottom: '60px',
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
    width: '100%',
    '& > div': {
      height: '44px',
    },
    '& input': {
      fontSize: 10,
    },
  },

  pQ: {
    fontSize: '14',
    marginTop: '20px',
    paddingBottom: '10px',
    color: lmsStyle['base-secondary'],
    marginBottom: '0px',
    fontWeight: 'bold',
  },
  editbtn: {
    color: lmsStyle['base-primary'],
    backgroundColor: 'none',
    // position: 'absolute',
    // right: '40px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    // marginTop: '-25px',
    whiteSpace: 'nowrap',
    fontSize: '14px',
  },
  plusIcon: {
    marginRight: '10px',
  },

  editorClass: {
    marginLeft: '-0px',

    marginRight: '0px',
  },

  inputAndorsmentA: {
    '& p': {
      backgroundColor: lmsStyle['base-secondary'],
      padding: '11px',

      marginLeft: '-13px',
      overflow: 'hidden',
      borderTopLeftRadius: '4px',
      fontSize: '15px',
      color: '#FFFFFF',
      borderBottomLeftRadius: ' 4px',
    },
  },
  inputAndorsmentB: {
    '& p': {
      backgroundColor: lmsStyle['base-gray-500'],
      padding: '11px',
      marginLeft: '-13px',
      overflow: 'hidden',
      fontSize: '15px',
      borderTopLeftRadius: '4px',
      color: '#FFFFFF',
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
    overflow: 'hidden',
    width: '100%',
  },
  discription: {
    margin: 0,
    padding: 0,
    marginBottom: '0px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },
  text: {
    marginBottom: '-10px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },

  paratext: {
    marginBottom: '0px !Important',
    fontSize: 10,
    fontWeight: 'bold',
    color: lmsStyle['base-gray-500'],
    marginTop: '20px',
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

  Editordiv: {
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    width: '100%',
    // height: '265px',
  },

  coloredButton1: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    marginRight: 'auto',
    marginLeft: '17px',
    fontSize: '13px',
    textTransform: 'capitalize',
    marginBottom: '15px',
    width: '148px',
    height: '36px',
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

  paraheading: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    marginLeft: 'inherit',
    marginTop: '15px',
    display: 'flex',
  },
  textfield: {
    height: '150px',

    '& >div': {
      height: '500px',
    },
  },

  boxHeight: {
    width: '100%',
    // height: '95px',
    backgroundColor: lmsStyle['base-gray-100'],
    display: 'flex',
    borderRadius: '5px',
    flexWrap: 'wrap',
    margin: '10px',
  },
  Deletebtn: {
    color: lmsStyle['base-accent'],
    fontWeight: 'bold',
  },
  Editbtn: {
    color: lmsStyle['base-primary'],
    fontWeight: 'bold',
  },
  btn: {
    // margin:'0 auto',
    marginLeft: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  Wavbtn: {
    backgroundColor: lmsStyle['base-secondary'],
    color: 'white',
    width: '58',
    height: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  p1: {
    padding: '35px',
  },
  // new classes
  lessonListLeftBox: {
    display: 'flex',
    padding: '35px',
  },
  lessonList: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '34px',
  },
  lessonListTitle: {
    fontSize: '16',
    fontWeight: 700,
    marginBottom: '5px',
    color: lmsStyle['base-secondary'],
  },
  questionRow: {
    marginTop: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postionRelative: {
    position: 'relative',
  },
  postionAbsolute: {
    position: 'absolute',
    right: ' 2px',
    top: '16px',
  },
  lessonListDescription: {},
}));
