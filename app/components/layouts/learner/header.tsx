import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Badge,
  Container,
  Drawer,
  fade,
  Hidden,
  IconButton,
  InputBase,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  Toolbar,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import { navLinks } from 'data/mock';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import CourseLibraryList from '@module/learner-management/course/courseLibraryList';
import UnReadMessages from '@module/learner-management/messages/unReadMessages';
import { lmsStyle } from '../../../styles/ui.variables';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 0,
    paddingRight: 0,
    '@media (max-width: 1000px)': {
      paddingLeft: 10,
    },
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '64px',
  },
  logoImg: {
    minWidth: '80px',
  },
  navs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '80px',
    minHeight: '64px',
  },
  menuLink: {
    minHeight: '64px',
    fontWeight: 600,
    fontSize: '13px',
    marginLeft: '3px',
    color: '#16395B',
    marginRight: '10px',
    '&:hover': {
      background: 'none',
      borderBottom: '3px solid #006DFF',
      color: '#006DFF',
      fontWeight: 'bolder',
    },
  },
  activedMenu: {
    minHeight: '64px',
    fontSize: '13px',
    marginLeft: '3px',
    marginRight: '10px',
    background: 'none',
    borderBottom: '3px solid #006DFF',
    color: '#006DFF',
    fontWeight: 'bolder',
    '&:hover': {
      background: 'none',
    },
  },
  search: {
    position: 'relative',
    color: '#7D8793',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#F3F4F5', 0.9),
    '&:hover': {
      backgroundColor: '#ecedf4',
    },
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: '8px',
    height: '8px',
    left: '20px',
    top: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006DFF',
  },
  inputRoot: {
    color: '#7D8793',
    fontSize: '10px',
    opacity: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 50,
    },
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  drawerButtom: {
    padding: '20px 30px',
    bottom: 0,
  },
  iconButton: {
    color: lmsStyle['base-secondary'],
  },
  badgeInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '27px',
    height: '27px',
  },
  iconBtn: {
    padding: 0,
    margin: '0 12px',
    cursor: 'default',
    background: 'none',
    height: '100%',
    '&:hover': {
      background: 'none',
    },
    '&:focus': {
      background: 'none',
    },
  },
  dropdownMenu: {
    marginTop: '20px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    color: lmsStyle['base-secondary'],
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#d3d4d5',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export function Header() {
  const router = useRouter();
  const authnInfo = useRecoilValue(authnState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    anchorMessageEl,
    setAnchorMessageEl,
  ] = React.useState<null | HTMLElement>(null);
  const [
    anchorAccountEl,
    setAnchorAccountEl,
  ] = React.useState<null | HTMLElement>(null);

  const [state, setState] = useState({ mobileView: false, drawerOpen: false });
  const { mobileView, drawerOpen } = state;

  const classes = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1020
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  // useEffect(() => {
  //   if (authnInfo.isAuthenticate && authnInfo.userInfo) {
  //     setDisplayName(authnInfo.userInfo.lastName + ', ' + authnInfo.userInfo.firstName);
  //   }
  // }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorAccountEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAnchorAccountEl(null);
  };

  const handleHome = (e) => {
    e.preventDefault();
    router.push('/student');
  };

  const handleLogOut = () => {
    authnInfo.userLogOut();
  };

  const handleOpenMessages = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
    setAnchorMessageEl(event.currentTarget);
  };

  const handleCourseLibrary = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMessageEl(null);
    setAnchorEl(event.currentTarget);
  };

  const handleLibraryClose = () => {
    setAnchorEl(null);
  };

  const handleMessageClose = () => {
    setAnchorMessageEl(null);
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Container>
          <div className={classes.menu}>
            <img
              src="/images/logo_header.svg"
              alt="logo"
              onClick={handleHome}
              className={classes.logoImg}
            />
            <div className={classes.navs}>{getMenuButtons()}</div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ fontSize: 13 }} />
              </div>
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.badgeInfo}>
              <Hidden mdDown>
                <IconButton
                  color="inherit"
                  className={classes.iconBtn}
                  onClick={handleCourseLibrary}
                  onMouseOver={handleCourseLibrary}
                >
                  <img src="/images/course-library.svg" alt="book" />
                </IconButton>

                <IconButton
                  color="inherit"
                  className={classes.iconBtn}
                  onClick={handleOpenMessages}
                  onMouseOver={handleOpenMessages}
                >
                  <Badge badgeContent={3} color="primary">
                    <img src="/images/messaging.svg" alt="message" />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" className={classes.iconBtn}>
                  <img src="/images/notification.svg" alt="alarm" />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={handleClick}
                  onMouseOver={handleClick}
                  style={{ cursor: 'default' }}
                >
                  <img
                    src="/images/avatar.png"
                    alt="avatar"
                    className={classes.avatar}
                  />
                </IconButton>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorAccountEl}
                  keepMounted
                  open={Boolean(anchorAccountEl)}
                  onClose={handleAccountClose}
                  className={classes.dropdownMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <StyledMenuItem>
                    <ListItemText primary="Settings" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemText primary="Help" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleLogOut}>
                    <ListItemText primary="Sign Out" />
                  </StyledMenuItem>
                </StyledMenu>
              </Hidden>
            </div>
          </div>
        </Container>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleLibraryClose}
          className={classes.dropdownMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <CourseLibraryList />
        </StyledMenu>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorMessageEl}
          keepMounted
          open={Boolean(anchorMessageEl)}
          onClose={handleMessageClose}
          className={classes.dropdownMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <UnReadMessages />
        </StyledMenu>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
            className: classes.iconButton,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
          <div className={classes.drawerButtom}>
            <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
          </div>
        </Drawer>
        <img
          src="/images/logo_header.svg"
          alt="logo"
          className={classes.logoImg}
        />
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return navLinks.map(({ label, href }, index) => {
      return (
        <Link
          key={index}
          {...{
            href: href,
            color: 'inherit',
            style: { textDecoration: 'underline overline' },
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return navLinks.map(({ label, href }, index) => {
      return (
        <Link
          key={index}
          {...{
            href: href,
            color: 'primary',
            style: { textDecoration: 'underline overline' },
          }}
        >
          <MenuItem
            className={
              router.pathname !== href ? classes.menuLink : classes.activedMenu
            }
          >
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default Header;
