import React from 'react';
import {
  Avatar,
  Box,
  createStyles,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import { unReadMessages } from 'data/mock';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      minWidth: '32ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    clickLink: {
      marginLeft: '10px',
      fontSize: '12px',
    },
    listItem: {
      paddingLeft: '20px',
      '&:hover': {
        backgroundColor: '#d3d4d5',
      },
      display: 'flex',
      justifyContent: 'flex-end',
      borderBottom: `1px solid ${lmsStyle['base-gray-100']}`,
    },
    timeSection: {
      right: '20px',
      top: '25px',
    },
  })
);

const UnReadMessages = () => {
  const classes = useStyles();
  return (
    <Box p="20px 20px" color={lmsStyle['base-secondary']}>
      <Box fontSize="14px" fontWeight="600">
        Messages
        <Link
          href="/student/messages"
          underline="always"
          color="inherit"
          className={classes.clickLink}
        >
          View All Messages
        </Link>
      </Box>
      <List className={classes.root}>
        {unReadMessages.map((item, index) => (
          <ListItem
            key={index}
            alignItems="flex-start"
            className={classes.listItem}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box
                  component="span"
                  fontSize="14px"
                  fontWeight="600"
                  color={lmsStyle['base-secondary']}
                >
                  {item.name}
                </Box>
              }
              secondary={
                <Box
                  component="span"
                  fontSize="12px"
                  color={lmsStyle['base-secondary']}
                >
                  {item.lastMessage}
                </Box>
              }
            />
            <Box fontSize="12px" color={lmsStyle['base-secondary']} mt="10px">
              {item.time}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UnReadMessages;
