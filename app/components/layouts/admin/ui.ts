/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { lmsStyle } from 'styles/ui.variables';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: lmsStyle['base-gray-100'],
      boxShadow: 'none',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down('sm')]: {
        width: `100% !important`,
        marginLeft: 0,
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginRight: '0'
      }
    },
    hide: {
      display: 'none !important',
    },
    title: {
      color: lmsStyle['base-secondary'],
      font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    freeTrialContent: {
      display: 'flex',
      background: '#32BF89 0% 0% no-repeat padding-box',
      border: `1px solid ${lmsStyle['base-gray-200']}`,
      borderRadius: '5px',
      alignItems: 'center',
    },
    freeTrialText: {
      marginInline: '25px',
      fontSize: '15px',
      color: lmsStyle['color-white'],
    },
    freeTrialButton: {
      fontSize: '15px !important',
      paddingInline: '25px !important',
      background: '#29AC79 !important',
      color: 'white !important',
      borderRadius: '0px 4px 4px 4px',
      textTransform: 'capitalize',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      marginTop: 8,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
      [theme.breakpoints.down('md')]: {
        marginRight: '0',
        marginLeft: '0'
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      pointer: 'mouse',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'inherit',
    },
    inputRoot: {
      color: '#ffffff',
    },
    inputInput: {
      borderRadius: 5,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      color: lmsStyle['base-secondary'],
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: lmsStyle['base-dark-500'],
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
    },
    whitespace: {
      margin: 0,
    },
    chevron: {
      color: lmsStyle['base-dark-500'],
    },
    help: {
      opacity: 1,
    },
    icons: {
      color: lmsStyle['base-secondary'],
    },
    listItem: {
      color: 'white',
    },
    footerItem: {
      color: 'white',
    },
    listIcon: {
      marginInline: 25,
      minWidth: 'unset !important',
    },
    subHeaderWrapper: {
      marginLeft: theme.spacing(-3),
      marginRight: theme.spacing(-3),
    },
    content: {
      width: '100%',
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      backgroundColor: lmsStyle['base-gray-100'],
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      backgroundColor: lmsStyle['base-gray-100'],
      minHeight: '100vh',
      flexDirection: 'column',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        marginLeft: -drawerWidth,
      }
    },
    sideBar: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    subMenu: {
      color: lmsStyle['color-white'],
      font: ` normal normal 600 14px/17px ${lmsStyle['base-font']}`,
    },
    headerContent: {
      marginLeft: '30px',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0'
      }
    },
    offset: theme.mixins.toolbar,
  })
);
