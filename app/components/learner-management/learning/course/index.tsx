import React, { useState } from 'react';
import { useMedia } from 'react-use';
import {
  Box,
  IconButton,
  makeStyles,
  withStyles,
  createStyles,
  LinearProgress,
  Theme,
  Radio,
  Typography,
  Divider,
} from '@material-ui/core';
import Introduction from './introduction';
import Glossary from './glossary';
import Quiz from './quiz';
import Audio from './audio';
import Qualify from './qualify';
import Discrim from './discrim';
import File from './file';
import Tree from './tree';
import Summary from './summary';
import { lmsStyle } from '../../../../styles/ui.variables';
import { CourseInfo } from '../../../../data/mock';
import SearchInput from '@module/elements/SearchInput/searchInput';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles(() => ({
  toggleContainer: {
    position: 'relative',
    width: 'fit-content',
    maxWidth: '280px',
    paddingRight: '30px',
  },
  text: {
    fontSize: '14px',
    color: 'var(--color-primary-dark)',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
  },
  toggleButton: {
    position: 'absolute',
    top: '-12px',
    right: '18px',
    color: 'var(--color-primary-dark)',
  },
  contentImage: {
    width: '18px',
    marginRight: '8px',
  },
  menuItem: {
    paddingLeft: '10px',
    minHeight: '32px',
    lineHeight: '16px',
    alignItems: 'center',
  },
  activeMenuItem: {
    paddingLeft: '7px',
    minHeight: '32px',
    lineHeight: '16px',
    alignItems: 'center',
    borderLeft: '3px solid var(--base-primary)',
  },
  radio: {
    width: 'fit-content',
    marginRight: '0',
    padding: '0',
    '& > span': {
      fontSize: '10px',
      color: 'var(--color-primary-dark) !important',
      padding: '6px',
    },
  },
}));

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 15,
      borderRadius: 3,
      marginTop: 20,
      marginBottom: 20,
      border: '1px solid var(--big-bar-color)',
      backgroundColor: 'transparent !important',
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 3,
      backgroundColor: 'var(--big-bar-color)',
    },
  })
)(LinearProgress);

const Course = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);
  const classes = useStyle();
  const isMobile = useMedia('(max-width: 600px)');

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleNextLesson = () => {
    setActiveMenu(activeMenu + 1);
  };
  return (
    <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
      <Box
        className={classes.toggleContainer}
        style={{ margin: isMobile ? 'auto' : '0' }}
      >
        <IconButton
          className={classes.toggleButton}
          style={{ left: toggleMenu ? 'auto' : '0' }}
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Box
          className={`${classes.boldText} ${
            'toggle-menu toggle-menu-' + toggleMenu
          }`}
          fontSize="18px"
          marginRight={6}
        >
          ADA Compliance for Employees
        </Box>
        <BorderLinearProgress
          variant="determinate"
          value={20}
          className={`${'toggle-menu toggle-menu-' + toggleMenu}`}
        />
        {toggleMenu && <SearchInput color="white" />}
        <Box mt={toggleMenu ? 2 : 5} />
        {CourseInfo.content.map((item, index) => (
          <Box key={index} mb={2}>
            <Typography className={classes.text} component="div">
              <Box fontWeight="bold" mb={0.5}>
                {toggleMenu ? item.title : ''}
              </Box>
              <Box pl={1.5}>
                {item.content.map((subitem, subindex) => (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    key={subindex}
                    my={2}
                    className={`cursor ${
                      subitem.index === activeMenu
                        ? classes.activeMenuItem
                        : classes.menuItem
                    }`}
                    onClick={() => setActiveMenu(subitem.index)}
                  >
                    <Box display="flex">
                      <img
                        src={subitem.img}
                        alt="content icon"
                        className={classes.contentImage}
                      />
                      {toggleMenu && (
                        <Box
                          fontWeight={
                            subitem.index === activeMenu ? 'bold' : 'normal'
                          }
                        >
                          {subitem.text}
                        </Box>
                      )}
                    </Box>
                    <Radio
                      checked={subitem.index <= activeMenu}
                      value={subitem.index}
                      color="default"
                      name="toggle-menu"
                      inputProps={{ 'aria-label': 'D' }}
                      className={classes.radio}
                    />
                  </Box>
                ))}
              </Box>
            </Typography>
            {index !== CourseInfo.content.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
      <Box
        boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
        bgcolor="white"
        borderRadius="5px"
        p="13px 20px"
        position="relative"
        marginBottom="60px"
        width={isMobile ? '100%' : 'calc(100% - 280px)'}
      >
        {activeMenu === 0 && (
          <Introduction handleNextLesson={handleNextLesson} />
        )}
        {activeMenu === 1 && <Glossary handleNextLesson={handleNextLesson} />}
        {activeMenu === 2 && <Quiz handleNextLesson={handleNextLesson} />}
        {activeMenu === 3 && <Audio handleNextLesson={handleNextLesson} />}
        {activeMenu === 4 && <Qualify handleNextLesson={handleNextLesson} />}
        {activeMenu === 5 && <Discrim handleNextLesson={handleNextLesson} />}
        {activeMenu === 6 && <File handleNextLesson={handleNextLesson} />}
        {activeMenu === 7 && <Tree handleNextLesson={handleNextLesson} />}
        {activeMenu === 8 && <Summary handleNextLesson={handleNextLesson} />}
      </Box>
    </Box>
  );
};

export default Course;
