import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles(() => ({
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

  card: {
    backgroundColor: lmsStyle['base-gray-100'],

    width: '552px',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },

  boxDialog: {
    width: '100%',
    height: '725px',
    '&  > div': {
      width: '100%',
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

  dialogheight: {
    padding: '12px 24px',
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
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 'inherit',
    letterSpacing: '0px',
    marginTop: '10px',
  },

  paraheading: {
    fontSize: '10px',
    color: lmsStyle['base-gray-500'],
    textAlign: 'left',
    marginLeft: '25px',
    marginRight: '10px',
    marginTop: '15px',
    display: 'flex',
  },

  media: {
    height: 200,
  },
  cardtitle: {
    padding: '8px 24px',
    color: lmsStyle['base-secondary'],
    fontSize: '15px',
    '& span': {
      fontSize: '15px',
      marginTop: '0px',
    },
    '& svg': {
      marginTop: '10px',
    },
  },

  OverviewCard: {
    width: '376x',
    height: '264px',
    position: 'relative',
    marginTop: '6px',
    marginBottom: '-7px',
    boxShadow: '0px 3px 6px #00000008',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
  },
  dropbox: {
    border: '1px dashed grey',
    margin: '17px',
    height: '230px',
    boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    borderRadius: '5px',
    opacity: '1',
  },
  positionRelative: {
    position: 'relative',
  },
  positionCheckBox: {
    position: 'absolute',
    right: '5px',
    top: '6px',
    borderRadius: '5px',
  },
  browseFileText: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  img: {
    paddingTop: '50px',
  },
}));
