import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

import clsx from 'clsx';
import styles from './Layout.module.scss';
import { useStyles } from './ui';
import { Button } from '@material-ui/core';

export default function TopBar({
  handleDrawerToggle,
  open,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
  menuId,
  mobileMenuId,
  children,
  isVisibleFreeTrial,
  isVisibleSearchBar,
  topBarClass,
  headerContent,
}) {
  const classes = useStyles();

  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="fixed"
      className={`${clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })} ${topBarClass || ''}`}
    >
      <Toolbar className={styles.headerContainer}>
        <div className={styles.leftContainer}>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon className={classes.chevron} />
          </IconButton>
          {children}
          <div className={classes.headerContent}>
            {headerContent ? headerContent : ''}
          </div>
        </div>

        {isVisibleFreeTrial && (
          <div className={classes.freeTrialContent}>
            <Typography className={classes.freeTrialText}>
              Free trial: 13 days remaining
            </Typography>
            <Button className={classes.freeTrialButton}>Upgrade</Button>
          </div>
        )}

        <div className={styles.rightContainer}>
          {isVisibleSearchBar && (
            <div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10.993}
                    height={11}
                    viewBox="0 0 10.993 11"
                  >
                    <path
                      d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                      fill="#006dff"
                    />
                  </svg>
                </div>
                <input className={styles.input} placeholder="Search" />
              </div>
            </div>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon className={classes.icons} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle className={classes.icons} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
