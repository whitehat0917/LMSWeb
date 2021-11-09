import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useMedia } from 'react-use';
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Tabs,
  Tab,
  IconButton,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchInput from '@element/SearchInput/searchInput';
import { CourseInfo } from '../../../../data/mock';
import PropTypes from 'prop-types';
import TabQuestion from '@module/learner-management/learning/course/common/tabQuestion';
import TabScratchPad from '@module/learner-management/learning/course/common/tabScratchPad';
import TabOverview from '@module/learner-management/learning/course/common/tabOverview';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

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
  waveButton: {
    padding: '5px',
  },
  waveContainer: {
    width: '100%',
    '& > wave > wave': {
      borderRight: '0 !important',
    },
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

export default function Audio(props) {
  const classes = useStyle();
  const [wavePlaying, setWavePlaying] = useState(false);
  const [waveCurrentTime, setWaveCurrentTime] = useState('00:00:00');
  const [waveDurationTime, setWaveDurationTime] = useState('00:00:00');
  const [tabValue, setTabValue] = useState(0);
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

  const WaveSurfer = require('wavesurfer.js');
  let wavesurfer;
  const waveform = useRef(null);
  useEffect(() => {
    if (waveform.current.children.length > 0)
      waveform.current.removeChild(waveform.current.children[0]);
    wavesurfer = WaveSurfer.create({
      container: document.querySelector('#waveform'),
      waveColor: '#bec4cb',
      progressColor: '#006dff',
      barWidth: '2',
      barHeight: '0.5',
      barGap: '1',
    });
    wavesurfer.load('https://iu0jr.csb.app/bensound-ukulele.mp3');
    wavesurfer.on('ready', () => {
      setWaveDurationTime(calcTime(wavesurfer.getDuration()));
    });
    wavesurfer.on('audioprocess', () => {
      setWaveCurrentTime(calcTime(wavesurfer.getCurrentTime()));
    });
  }, []);

  const play = () => {
    setWavePlaying(!wavePlaying);
    playPause();
  };

  const playPause = useCallback(() => {
    wavesurfer.playPause();
  }, []);

  const calcTime = (value) => {
    const seconds = Number(value);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hDisplay = h > 0 ? (h <= 9 ? '0' + h + ':' : h + ':') : '00:';
    const mDisplay = m > 0 ? (m <= 9 ? '0' + m + ':' : m + ':') : '00:';
    const sDisplay = s > 0 ? (s <= 9 ? '0' + s : s) : '00';
    return hDisplay + mDisplay + sDisplay;
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
          What are Essential Job Functions
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
      <Box my={2} display={'flex'} alignItems={'center'}>
        <Box display={'flex'} alignItems={'center'}>
          <IconButton className={classes.waveButton}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton className={classes.waveButton} onClick={play}>
            {wavePlaying === false && (
              <PlayCircleFilledIcon
                style={{
                  width: '2em',
                  height: '2em',
                  fill: 'var(--color-primary-dark)',
                }}
              />
            )}
            {wavePlaying === true && (
              <PauseCircleFilledIcon
                style={{
                  width: '2em',
                  height: '2em',
                  fill: 'var(--color-primary-dark)',
                }}
              />
            )}
          </IconButton>
          <IconButton className={classes.waveButton}>
            <SkipNextIcon />
          </IconButton>
        </Box>
        <Box width={'100%'} position={'relative'}>
          <div
            id="waveform"
            ref={waveform}
            className={classes.waveContainer}
          ></div>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            position={'absolute'}
            width={'100%'}
            bottom={'0'}
          >
            <Typography className={classes.smallText}>
              {waveCurrentTime}
            </Typography>
            <Typography className={classes.smallText}>
              {waveDurationTime}
            </Typography>
          </Box>
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
          <Tab label="Description" {...a11yProps(0)} className="MuiTab_root" />
          <Tab label="Q&A" {...a11yProps(1)} className="MuiTab_root" />
          <Tab label="Scratchpad" {...a11yProps(2)} className="MuiTab_root" />
          <Tab label="Overview" {...a11yProps(3)} className="MuiTab_root" />
        </Tabs>
        <TabPanel value={tabValue} index={0}>
          <Box fontSize="10px" color="var(--base-gray-500)">
            {CourseInfo.textDescription}
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
