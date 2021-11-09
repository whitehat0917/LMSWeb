import * as React from 'react';
import { footerMenu, MainMenu as menus } from '@layout/admin/MenuOptions';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Layout.module.scss';
import {
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { GlobalUrls } from '@util/app-utils';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { useStyles } from './ui';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { lmsStyle } from 'styles/ui.variables';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { AccountStatus } from '@lms-api/models/user-info.model';

export default function SideBar({
  isMobile,
  handleDrawerToggle,
  open,
  logOut,
}) {
  const classes = useStyles();
  const router = useRouter();
  const [openMenu, setOpenMenu] = React.useState(-1);
  const handleClick = (index) => {
    setOpenMenu(openMenu === index ? -1 : index);
  };
  const { asPath } = router;

  React.useEffect(() => {
    const activeIndex = menus.findIndex(
      (menu) => asPath.includes(menu.path) && menu.children
    );
    setOpenMenu(activeIndex);
  }, [asPath]);

  const authnInfo = useRecoilValue(authnState);
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;

  return (
    <Drawer
      className={`${classes.drawer}`}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: `${classes.drawerPaper} ${styles.drawerPaper}`,
      }}
      onClose={() => handleDrawerToggle()}
    >
      <div className={`${classes.drawerHeader} ${styles.drawerHeader}`}>
        <IconButton onClick={() => handleDrawerToggle()}>
          <div className={styles.logo}></div>
        </IconButton>
      </div>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push(`${GlobalUrls.ADMIN}/courses/add`)}
          startIcon={<CreateOutlinedIcon />}
        >
          Create Course
        </Button>
      </Box>
      <Divider />
      <div className={classes.sideBar}>
        <List>
          {menus.map((menuItem, index) => {
            const { title, path } = menuItem;
            const isActive = asPath === path;
            const childActive =
              asPath.includes(menuItem.path) && !menuItem.isRoot;
            if (menuItem.children) {
              return (
                <>
                  <ListItem
                    button
                    onClick={() => handleClick(index)}
                    className={`${styles.hasChildren} ${
                      childActive ? styles.listItemActive : ''
                    }`}
                  >
                    <ListItemIcon className={`${classes.listIcon}`}>
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={title}
                      className={classes.listItem}
                    />
                    {openMenu === index ? (
                      <ExpandLess style={{ color: lmsStyle['color-white'] }} />
                    ) : (
                      <ExpandMore style={{ color: lmsStyle['color-white'] }} />
                    )}
                  </ListItem>
                  <Collapse
                    in={openMenu === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menuItem.children.map((child, ind) => (
                        <Link
                          href={child.path}
                          passHref
                          key={`child-id-${index}-${ind}`}
                        >
                          <ListItem
                            button
                            className={`${
                              child.path === asPath
                                ? `${styles.listItemActive} ${styles.activeSubMenu}`
                                : ''
                            } ${classes.subMenu}`}
                          >
                            <ListItemIcon className={`${classes.listIcon}`}>
                              {' '}
                            </ListItemIcon>
                            <ListItemText
                              className={classes.listItem}
                              primary={`${child.title}`}
                            />
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </Collapse>
                </>
              );
            } else {
              return menuItem.admin && isSuperUser ? (
                ''
              ) : (
                <Link key={`listItem-${index}`} href={path} passHref>
                  <ListItem
                    className={
                      isActive || childActive ? styles.listItemActive : ''
                    }
                    button
                  >
                    <ListItemIcon className={`${classes.listIcon}`}>
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={title}
                      className={classes.listItem}
                    />
                  </ListItem>
                </Link>
              );
            }
          })}
        </List>
        {/* <Divider /> */}
        <List>
          {footerMenu.map((text, index) => {
            const { title, path } = text;
            const childActive = asPath.includes(text.path);
            return text.admin && isSuperUser ? (
              ''
            ) : (
              <Link key={`footer-item-${index}`} href={path} passHref>
                <ListItem
                  button
                  component="a"
                  className={childActive ? styles.listItemActive : ''}
                >
                  <ListItemIcon className={`${classes.listIcon}`}>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    className={classes.footerItem}
                  />
                </ListItem>
              </Link>
            );
          })}
          {isMobile && (
            <ListItem button component="a">
              <ListItemText
                primary="Sign Out"
                className={classes.footerItem}
                onClick={logOut}
              />
            </ListItem>
          )}
        </List>
      </div>
    </Drawer>
  );
}
