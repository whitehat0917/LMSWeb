import React, { useState } from 'react';
import { useMedia } from 'react-use';
import {
  Box,
  makeStyles,
  Typography,
  Tabs,
  Tab,
  Button,
  DialogContent,
} from '@material-ui/core';
import TabQuestion from '@module/learner-management/learning/course/common/tabQuestion';
import TabScratchPad from '@module/learner-management/learning/course/common/tabScratchPad';
import TabOverview from '@module/learner-management/learning/course/common/tabOverview';
import SelectQuiz from '@module/learner-management/learning/course/common/selectQuiz';
import SelectImageQuiz from '@module/learner-management/learning/course/common/selectImageQuiz';
import TrueQuiz from '@module/learner-management/learning/course/common/trueQuiz';
import MatchQuiz from '@module/learner-management/learning/course/common/matchQuiz';
import TextQuiz from '@module/learner-management/learning/course/common/textQuiz';
import SortQuiz from '@module/learner-management/learning/course/common/sortQuiz';
import SearchInput from '@element/SearchInput/searchInput';
import { quiz, quizResult } from '../../../../data/mock';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import Dialog from '@material-ui/core/Dialog';
import { useRouter } from 'next/router';

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
  modalTitle: {
    fontSize: '14px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '16px 0',
  },
  failEmoticon: {
    color: '#AC5F5F',
    width: '40px',
    height: '40px',
  },
  successEmoticon: {
    color: '#94BE9B',
    width: '40px',
    height: '40px',
  },
  warningModal: {
    padding: '12px 0 !important',
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

function ConfirmModal(props) {
  const classes = useStyle();
  const { toggle, next, open } = props;

  return (
    <div>
      <Dialog
        onClose={toggle}
        aria-labelledby="customized-dialog-title"
        maxWidth="sm"
        fullWidth
        open={open}
      >
        <DialogContent>
          <Box className={classes.modalTitle}>
            Confirm that you want to submit your answers and proceed to check
            the results
          </Box>
          <Box display="flex" justifyContent="center" mb={3}>
            <Button
              variant="contained"
              style={{
                minWidth: '150px',
                fontSize: '13px',
                marginRight: '12px',
                color: 'white',
                backgroundColor: 'var(--color-primary-dark)',
              }}
              onClick={toggle}
            >
              Retake Exam
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ minWidth: '150px', fontSize: '13px' }}
              onClick={next}
            >
              Confirm and Check Results
              <ArrowForwardIcon style={{ width: '1rem' }} />
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function WarningModal(props) {
  const classes = useStyle();
  const { toggle, open } = props;

  return (
    <div>
      <Dialog
        onClose={toggle}
        aria-labelledby="customized-dialog-title"
        maxWidth="sm"
        fullWidth
        open={open}
      >
        <DialogContent className={classes.warningModal}>
          <Box fontSize={'18px'} color={'#AC5F5F'} textAlign={'center'}>
            Please answer for all questions!
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Quiz(props) {
  const classes = useStyle();
  const [openModal, setOpenModal] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [values, setValues] = React.useState<State>({
    comment: '',
    lesson: '',
  });
  const isMobile = useMedia('(max-width: 600px)');
  const router = useRouter();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTextareaChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleWarning = () => {
    setOpenWarning(!openWarning);
  };

  const handleNext = () => {
    setOpenModal(false);
    if (quizResult.allAnswered === true) {
      setShowAnswer(true);
    } else {
      setOpenWarning(true);
    }
  };

  const handleReports = () => {
    router.push('/student/reports');
  };

  return (
    <>
      <ConfirmModal toggle={handleModal} next={handleNext} open={openModal} />
      <WarningModal toggle={handleWarning} open={openWarning} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexDirection={isMobile ? 'column' : 'row'}
      >
        <Typography className={`${classes.text} ${classes.boldText}`}>
          Quiz
        </Typography>
        <Box display={'flex'} mt={isMobile ? 1 : 0}>
          {showAnswer === true && (
            <Button
              variant="contained"
              color="primary"
              style={{ minWidth: '150px', marginRight: '12px' }}
              onClick={props.handleNextLesson}
            >
              Next Lesson
              <ArrowForwardIcon style={{ width: '1rem' }} />
            </Button>
          )}
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
          <Tab label="Questions" {...a11yProps(0)} className="MuiTab_root" />
          <Tab label="Q&A" {...a11yProps(1)} className="MuiTab_root" />
          <Tab label="Scratchpad" {...a11yProps(2)} className="MuiTab_root" />
          <Tab label="Overview" {...a11yProps(3)} className="MuiTab_root" />
        </Tabs>
        {showAnswer === false && (
          <TabPanel value={tabValue} index={0}>
            {quiz.map((item, index) => (
              <Box key={index}>
                {item.quizType == 'select' && (
                  <SelectQuiz data={item} type="question" />
                )}
                {item.quizType == 'true' && (
                  <TrueQuiz data={item} type="question" />
                )}
                {item.quizType == 'selectImage' && (
                  <SelectImageQuiz data={item} type="question" />
                )}
                {item.quizType == 'match' && (
                  <MatchQuiz data={item} type="question" />
                )}
                {item.quizType == 'text' && (
                  <TextQuiz data={item} type="question" />
                )}
                {item.quizType == 'sort' && (
                  <SortQuiz data={item} type="question" />
                )}
              </Box>
            ))}
            <Button
              variant="contained"
              color="primary"
              style={{
                minWidth: '150px',
                marginRight: '12px',
                fontSize: '13px',
              }}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Submit and Check Results
              <ArrowForwardIcon style={{ width: '1rem' }} />
            </Button>
          </TabPanel>
        )}
        {showAnswer === true && (
          <TabPanel value={tabValue} index={0}>
            <Box
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
              mb={5}
            >
              <Box display="flex" flexWrap="wrap" alignItems="flex-end">
                <Box mx={2}>
                  <Box fontSize="12px" color="var(--color-primary-dark)">
                    Your Score
                  </Box>
                  <Box
                    fontSize="35px"
                    lineHeight="35px"
                    className={classes.boldText}
                  >
                    {quizResult.score}%
                  </Box>
                </Box>
                {quizResult.score > 30 && (
                  <SentimentSatisfiedAltIcon
                    className={classes.successEmoticon}
                  />
                )}
                {quizResult.score < 30 && (
                  <SentimentVeryDissatisfiedIcon
                    className={classes.failEmoticon}
                  />
                )}
                <Box mx={3}>
                  <Box fontSize="12px" color="var(--color-primary-dark)">
                    Your Answers
                  </Box>
                  <Box display="flex" alignItems="flex-end">
                    <Box
                      fontSize="35px"
                      lineHeight="35px"
                      className={classes.boldText}
                    >
                      {quizResult.correctAnswers}
                    </Box>
                    <Box fontSize="16px" className={classes.boldText}>
                      correct
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" alignItems="flex-end">
                  <Box
                    fontSize="35px"
                    lineHeight="35px"
                    className={classes.boldText}
                  >
                    {quizResult.wrongAnswers}
                  </Box>
                  <Box fontSize="16px" className={classes.boldText}>
                    wrong
                  </Box>
                </Box>
                <Box mx={3}>
                  <Box fontSize="12px" color="var(--color-primary-dark)">
                    Your Speed
                  </Box>
                  <Box display="flex" alignItems="flex-end">
                    <Box
                      fontSize="35px"
                      lineHeight="35px"
                      className={classes.boldText}
                    >
                      {quizResult.speed}
                    </Box>
                    <Box fontSize="16px" className={classes.boldText}>
                      minutes
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-end" flexDirection="column">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    fontSize: '13px',
                    marginBottom: '10px',
                  }}
                  onClick={() => setShowAnswer(false)}
                >
                  Retake Exam
                </Button>
                <Button
                  variant="contained"
                  style={{
                    fontSize: '13px',
                    color: 'white',
                    backgroundColor: 'var(--color-primary-dark)',
                  }}
                  onClick={handleReports}
                >
                  View Past Results
                </Button>
              </Box>
            </Box>
            {quiz.map((item, index) => (
              <Box key={index}>
                {item.quizType == 'select' && (
                  <SelectQuiz data={item} type="answer" />
                )}
                {item.quizType == 'true' && (
                  <TrueQuiz data={item} type="answer" />
                )}
                {item.quizType == 'selectImage' && (
                  <SelectImageQuiz data={item} type="answer" />
                )}
                {item.quizType == 'match' && (
                  <MatchQuiz data={item} type="answer" />
                )}
                {item.quizType == 'text' && (
                  <TextQuiz data={item} type="answer" />
                )}
                {item.quizType == 'sort' && (
                  <SortQuiz data={item} type="answer" />
                )}
              </Box>
            ))}
          </TabPanel>
        )}
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
