/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { lmsStyle } from 'styles/ui.variables';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: lmsStyle['base-gray-400'],
      boxShadow: 'none',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    title: {
      color: lmsStyle['base-secondary'],
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      marginTop: 6,
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
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: lmsStyle['base-gray-100'],
      WebkitJustifyContent: 'center',
      marginBottom: 20,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
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
      paddingLeft: 25,
    },
    listIcon: {
      marginLeft: 25,
    },
    content: {
      width: '100%',
      flexGrow: 1,
      backgroundColor: lmsStyle['base-gray-100'],
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    sideBar: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    offset: theme.mixins.toolbar,
  })
);
