/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline, Typography, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { useStyles } from './ui';
import SideBar from './SideBar';
import TopBar from './TopBar';
import AccountMenu from '@layout/admin/AccountMenu';
import MobileMenu from './MobileMenu';
import { GlobalUrls } from '@util/app-utils';
import ToastNotification from '@element/ToastNotification/ToastNotification';

import { toastMessagesList } from 'store/toastMessage';
import LoadingView from '@element/loading/loading-view';
import { Authentication } from '@lms-api/services';

interface LayoutContext {
  setHeader: (value?: string | React.ReactNode) => void;
  setLayoutContainerClass: (value?: string) => void;
  setIsVisibleFreeTrial: (value?: boolean) => void;
  setIsVisibleSearchBar: (value?: boolean) => void;
  setTopBarClass: (value?: string) => void;
  setSubHeader: (value?: string | React.ReactNode) => void;
  setHeaderContent: (value?: string | React.ReactNode) => void;
}

export const layoutContext: React.Context<LayoutContext> = React.createContext({
  setHeader: () => {},
  setLayoutContainerClass: () => {},
  setIsVisibleFreeTrial: () => {},
  setIsVisibleSearchBar: () => {},
  setTopBarClass: () => {},
  setSubHeader: () => {},
  setHeaderContent: () => {},
});
export default function AdminLayout({ children }) {
  const authnInfo = useRecoilValue(authnState);
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));
  const [toastMessages, setToastMessages] = useRecoilState(toastMessagesList);
  const [authn, setAuthn] = useRecoilState(authnState);
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    console.log('open is', open);
    open === true ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    async function refresh() {
      try {
        const authentication = await Authentication.refreshAuthnUser();
        setAuthn(authentication.authn);
        if (
          !authentication.authn.userInfo &&
          !authentication.authn.isAuthenticate
        ) {
          window.location.href = GlobalUrls.INDEX;
        }
      } catch (error) {
        console.log(error);
      }
    }
    refresh();
  }, []);

  const handleDrawerOnMobile = () => {
    if (isMobileSize) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (isMobileSize) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobileSize]);

  const displayName = authnInfo.userInfo
    ? authnInfo.userInfo.lastName + ', ' + authnInfo.userInfo.firstName
    : 'Fake User';

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    authnInfo.userLogOut();
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const onRemoveToastMessage = (id) => {
    setToastMessages((prev) => prev.filter((dt) => dt.id !== id));
  };
  const [header, setHeader] = useState(null);
  const [layoutContainerClass, setLayoutContainerClass] = useState(null);
  const [isVisibleFreeTrial, setIsVisibleFreeTrial] = useState(true);
  const [isVisibleSearchBar, setIsVisibleSearchBar] = useState(true);
  const [topBarClass, setTopBarClass] = useState(null);
  const [subHeader, setSubHeader] = useState(null);
  const [headerContent, setHeaderContent] = useState(null);

  if (!authnInfo.isAuthenticate) {
    return <LoadingView />;
  }

  return (
    <layoutContext.Provider
      value={{
        setHeader,
        setLayoutContainerClass,
        setIsVisibleFreeTrial,
        setIsVisibleSearchBar,
        setTopBarClass,
        setSubHeader,
        setHeaderContent,
      }}
    >
      <div className={classes.grow}>
        <CssBaseline />

        <TopBar
          handleDrawerToggle={handleDrawerToggle}
          open={open}
          handleMobileMenuOpen={handleMobileMenuOpen}
          handleProfileMenuOpen={handleProfileMenuOpen}
          menuId={menuId}
          mobileMenuId={mobileMenuId}
          isVisibleFreeTrial={isVisibleFreeTrial}
          isVisibleSearchBar={isVisibleSearchBar}
          topBarClass={topBarClass}
          headerContent={headerContent}
        >
          <Typography className={classes.title} variant="h6" noWrap>
            {header ? header : `Hi ${displayName}`}
          </Typography>
        </TopBar>

        <SideBar
          isMobile={isMobileSize}
          handleDrawerToggle={handleDrawerToggle}
          open={open}
          logOut={handleLogOut}
        />
        <main
          onClick={handleDrawerOnMobile}
          className={`${clsx(classes.content, {
            [classes.contentShift]: open,
          })} ${layoutContainerClass || ''}`}
        >
          {subHeader ? (
            <div className={`${topBarClass} ${classes.subHeaderWrapper}`}>
              <div
                className={`${classes.drawerHeader} ${classes.whitespace}`}
              />
              {subHeader}
            </div>
          ) : (
            <div className={`${classes.drawerHeader} ${classes.whitespace}`} />
          )}
          {toastMessages.map((dt) => (
            <ToastNotification
              onExited={() => onRemoveToastMessage(dt.id)}
              key={dt.id}
              data={dt}
            />
          ))}
          {children}
        </main>
        <MobileMenu
          handleProfileMenuOpen={handleProfileMenuOpen}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          mobileMenuId={mobileMenuId}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
        />
        <AccountMenu
          handleMenuClose={handleMenuClose}
          handleLogOut={handleLogOut}
          isMenuOpen={isMenuOpen}
          anchorEl={anchorEl}
        />
      </div>
    </layoutContext.Provider>
  );
}
