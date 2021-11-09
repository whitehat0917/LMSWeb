import React, { useState } from 'react';
import { useMedia } from 'react-use';
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@material-ui/core';
// import { SteppedLineTo } from 'react-lineto';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchInput from '@element/SearchInput/searchInput';
import { CourseInfo } from '../../../../data/mock';
import PropTypes from 'prop-types';
import TabQuestion from '@module/learner-management/learning/course/common/tabQuestion';
import TabScratchPad from '@module/learner-management/learning/course/common/tabScratchPad';
import TabOverview from '@module/learner-management/learning/course/common/tabOverview';

const useStyle = makeStyles(() => ({
  text: {
    fontSize: '14px',
    color: 'var(--color-primary-dark)',
  },
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
  },
  questionContainer: {
    backgroundColor: 'var(--base-gray-100)',
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
  },
  answerContainer: {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    border: '1px solid var(--base-gray-300)',
    padding: '16px',
  },
  pinbtn: {
    color: 'var(--color-primary-dark)',
    fontSize: '10px',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&>span': {
      justifyContent: 'flex-start',
    },
    '&>span>svg': {
      height: '14px',
    },
  },
  answerLabel: {
    color: 'var(--color-primary-dark)',
    fontSize: '10px',
    display: 'flex',
    alignItems: 'center',
    '&>svg': {
      height: '14px',
      marginRight: '4px',
    },
  },
  replyContainer: {
    padding: '16px',
  },
  replyText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
  chip: {
    fontSize: '11px',
    marginRight: '8px',
    color: 'var(--base-primary)',
    borderColor: 'var(--base-primary)',
  },
  objective: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    paddingLeft: '14px',
    lineHeight: '20px',
  },
  avatar: {
    '& > *': {
      width: '35px',
      height: '35px',
      border: '0',
      zIndex: '1 !important',
    },
  },
  treeItem: {
    textAlign: 'center',
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
    backgroundColor: 'white',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '5px',
    boxShadow: '0px 3px 3px #00000008',
    padding: '15px 25px',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

interface State {
  comment: string;
  lesson: string;
}

export default function Tree(props) {
  const classes = useStyle();
  const [tabValue, setTabValue] = useState(0);
  const [treeValue, setTreeValue] = useState(0);
  const [values, setValues] = React.useState<State>({
    comment: '',
    lesson: '',
  });
  const isMobile = useMedia('(max-width: 600px)');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTextareaChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const style = {
    delay: true,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderWidth: 3,
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Typography className={`${classes.text} ${classes.boldText}`}>
          Determining If You&apos;re A Qualified Individual
        </Typography>
        <Box display={'flex'} mt={isMobile ? 1 : 0}>
          <Button
            variant="contained"
            color="primary"
            style={{ minWidth: '150px', marginRight: '12px' }}
            onClick={props.handleNextLesson}
          >
            Next Lesson
            <ArrowForwardIcon style={{ width: '1rem' }} />
          </Button>
          <SearchInput color="var(--base-gray-200)" />
        </Box>
      </Box>
      <Box mt={3}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          className="tabs"
        >
          <Tab label="Lesson" {...a11yProps(0)} className="MuiTab_root" />
          <Tab label="Q&A" {...a11yProps(1)} className="MuiTab_root" />
          <Tab label="Scratchpad" {...a11yProps(2)} className="MuiTab_root" />
          <Tab label="Overview" {...a11yProps(3)} className="MuiTab_root" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Box className="tree-wrapper" position={'relative'}>
            {CourseInfo.treeData.map((item, index) => (
              <Box
                display={'flex'}
                justifyContent={'center'}
                my={4}
                key={index}
              >
                {item.map(
                  (subitem, subindex) =>
                    (subitem.parent === -1 ||
                      subitem.id === treeValue ||
                      subitem.parent === treeValue) && (
                      <Box key={subindex} width={'100%'}>
                        <Box
                          className={`cursor tree-${subitem.id} ${classes.treeItem}`}
                          mx={2}
                          onClick={() => {
                            if (subitem.children === true)
                              setTreeValue(subitem.id);
                          }}
                        >
                          {subitem.title}
                        </Box>
                        {/* {subitem.parent !== -1 && (
                          <SteppedLineTo
                            within="tree-wrapper"
                            from={`tree-${subitem.parent}`}
                            to={`tree-${subitem.id}`}
                            fromAnchor="bottom"
                            toAnchor="top"
                            {...style}
                          />
                        )} */}
                      </Box>
                    )
                )}
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <TabQuestion
            values={values}
            handleTextareaChange={handleTextareaChange}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <TabScratchPad
            values={values}
            handleTextareaChange={handleTextareaChange}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <TabOverview />
        </TabPanel>
      </Box>
    </>
  );
}
