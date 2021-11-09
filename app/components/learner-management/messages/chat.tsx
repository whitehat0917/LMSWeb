import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  createStyles,
  Divider,
  fade,
  Grow,
  Hidden,
  IconButton,
  InputAdornment,
  InputBase,
  Link,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Tab,
  Tabs,
  TextField,
} from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import {
  chatList,
  chatMessages,
  fileList,
} from '@module/learner-management/mock';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DescriptionIcon from '@material-ui/icons/Description';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box p="8px 8px 0 24px" height="100%">
          <Box height="100%">{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      height: `${'calc(100vh-100px)'}`,
    },
    newBtn: {
      color: 'white',
      backgroundColor: lmsStyle['base-secondary'],
      paddingLeft: '30px',
      paddingRight: '30px',
    },
    dropItem: {
      color: lmsStyle['base-secondary'],
      fontSize: '11px',
    },
    search: {
      position: 'relative',
      color: '#7D8793',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#F3F4F5', 0.9),
      '&:hover': {
        backgroundColor: '#ecedf4',
      },
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: '13px',
      marginBottom: theme.spacing(2),
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
      opacity: '50%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 6),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    tab_root: {
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      textDecoration: 'none',
      minWidth: '300px',
    },
    indicator: {
      left: 0,
      width: '4px',
      backgroundColor: lmsStyle['base-primary'],
    },
    chatTab: {
      textTransform: 'none',
      paddingBottom: '10px',
      marginLeft: '15px',
      borderBottom: `1px solid ${lmsStyle['base-gray-300']}`,
    },
    sendField: {
      width: '100%',
      marginRight: '8px',
    },
    fileLink: {
      fontSize: '9px',
      fontWeight: 'bold',
      color: lmsStyle['base-secondary'],
    },
    fileIcon: {
      fontSize: '20px',
      marginRight: '4px',
    },
  })
);
const ChatPage = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [value, setValue] = React.useState(1);

  const classes = useStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = React.useRef(open);

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      color={lmsStyle['base-secondary']}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      style={{ height: 'calc(100vh - 200px)' }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb="14px"
      >
        <Box fontSize="14px" fontWeight="600">
          Messaging
        </Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.newBtn}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          New Conversation
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
                marginTop: '5px',
                paddingLeft: '13px',
                paddingRight: '13px',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      New Personal Message
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      className={classes.dropItem}
                    >
                      Create New Group
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
      <Box
        boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
        bgcolor="white"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
        pt="13px"
        pb="13px"
      >
        <Box width="100%" height="100%">
          <div className={classes.tab_root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
              classes={{
                indicator: classes.indicator,
              }}
            >
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ fontSize: 13 }} />
                </div>
                <InputBase
                  placeholder="Search Messages or Users"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              {chatList.map((item, index) => (
                <Tab
                  key={index}
                  {...a11yProps(index)}
                  className={classes.chatTab}
                  label={
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      pl="3px"
                      pr="10px"
                      width="100%"
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Avatar alt="item.name" src={item.avatar} />
                        <Box
                          pl="9px"
                          display="flex"
                          justifyContent="center"
                          flexDirection="column"
                          alignItems="flex-start"
                        >
                          <Box fontSize="12px" fontWeight="600">
                            {item.name}
                          </Box>
                          <Box fontSize="10px">{item.lastMessage}</Box>
                        </Box>
                      </Box>
                      <Box fontSize="8px">{item.lastTime}</Box>
                    </Box>
                  }
                />
              ))}
            </Tabs>
            {chatList.map((item, index) => (
              <TabPanel key={index} value={value} index={index + 1}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    width="100%"
                    height="100%"
                    pr="8px"
                    borderRight={`1px solid ${lmsStyle['base-gray-200']}`}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      color={lmsStyle['base-secondary']}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        <Box fontSize="10px">Chat with</Box>
                        <Box fontSize="14px" fontWeight="600">
                          {item.name}
                        </Box>
                      </Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <ErrorOutlineIcon />
                        <div className={classes.search}>
                          <div className={classes.searchIcon}>
                            <SearchIcon style={{ fontSize: 13 }} />
                          </div>
                          <InputBase
                            placeholder="Search this conversation"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                          />
                        </div>
                      </Box>
                    </Box>
                    <Box flex="auto" pt="30px" overflow="auto">
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start"
                      >
                        {chatMessages.map((message, chatIndex) => (
                          <Box
                            key={chatIndex}
                            display="flex"
                            justifyContent={
                              message.from === 'other'
                                ? 'flex-start'
                                : 'flex-end'
                            }
                            alignItems="center"
                            width="100%"
                            pr="16px"
                          >
                            <Box
                              display="flex"
                              justifyContent={
                                message.from === 'other'
                                  ? 'flex-start'
                                  : 'flex-end'
                              }
                              alignItems="flex-start"
                              width="70%"
                            >
                              {message.from === 'other' ? (
                                <Avatar
                                  src="/images/imonial1.png"
                                  alt="chat-user"
                                />
                              ) : (
                                ''
                              )}
                              <Box
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="flex-start"
                                ml="11px"
                              >
                                <Box
                                  fontSize="10px"
                                  bgcolor={
                                    message.from === 'other'
                                      ? lmsStyle['base-secondary']
                                      : lmsStyle['base-gray-100']
                                  }
                                  color={
                                    message.from === 'other'
                                      ? 'white'
                                      : lmsStyle['base-secondary']
                                  }
                                  borderRadius="4px"
                                  mb="8px"
                                  p="12px"
                                >
                                  {message.content}
                                </Box>
                                <Box
                                  fontSize="8px"
                                  display="flex"
                                  justifyContent={
                                    message.from === 'other'
                                      ? 'flex-start'
                                      : 'flex-end'
                                  }
                                  width="100%"
                                >
                                  {message.time}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box
                      width="100%"
                      pr="16px"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        placeholder="Type a Message"
                        className={classes.sendField}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton size="small">
                                <MicIcon />
                              </IconButton>
                              <IconButton size="small">
                                <AttachFileIcon />
                              </IconButton>
                              <IconButton size="small">
                                <SentimentSatisfiedAltIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <IconButton>
                        <SendIcon
                          style={{ color: lmsStyle['base-secondary'] }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                  <Hidden mdDown>
                    <Box
                      width="300px"
                      height="100%"
                      pl="16px"
                      pr="16px"
                      color={lmsStyle['base-secondary']}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        pt="30px"
                        pb="15px"
                      >
                        <img
                          src="/images/imonial1.png"
                          alt="avatar"
                          style={{ width: '54px', height: '54px' }}
                        />
                        <Box fontSize="10px" fontWeight="600" pt="9px" pb="9px">
                          Jose Wallace
                        </Box>
                        <Box fontSize="10px" pb="4px">
                          From
                          <Box component="span" fontWeight="600" ml="10px">
                            United States of America
                          </Box>
                        </Box>
                        <Box fontSize="10px">
                          On Learn and Teach since
                          <Box component="span" fontWeight="600" ml="10px">
                            June 2021
                          </Box>
                        </Box>
                      </Box>
                      <Divider />
                      <Box pt="21px" pb="21px">
                        <Box
                          display="flex"
                          justifyContent="flex-start"
                          alignItems="center"
                          pb="21px"
                        >
                          <Box fontSize="12px" fontWeight="600" mr="11px">
                            Shared Files
                          </Box>
                          <Link underline="always" className={classes.fileLink}>
                            View All Files
                          </Link>
                        </Box>
                        <Box>
                          {fileList.map((item, index) => (
                            <Box
                              key={index}
                              display="flex"
                              justifyContent="space-between"
                              alignItems="flex-end"
                              pb="20px"
                            >
                              <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <DescriptionIcon className={classes.fileIcon} />
                                <Box
                                  display="flex"
                                  flexDirection="column"
                                  justifyContent="center"
                                  alignItems="flex-start"
                                >
                                  <Box fontSize="10px" fontWeight="600">
                                    {item.name}
                                  </Box>
                                  <Box
                                    fontSize="8px"
                                    color={lmsStyle['base-gray-500']}
                                  >
                                    {item.uploadDate}
                                  </Box>
                                </Box>
                              </Box>
                              <Box
                                fontSize="8px"
                                color={lmsStyle['base-gray-500']}
                              >
                                {item.fileSize}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Hidden>
                </Box>
              </TabPanel>
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatPage;
