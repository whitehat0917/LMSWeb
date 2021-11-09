import React, { useState } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArcherContainer, ArcherElement } from 'react-archer';
import { quizColor } from '../../../../../data/mock';
import Explanation from '@module/learner-management/learning/course/common/explanation';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';

const useStyle = makeStyles(() => ({
  title: {
    fontSize: '12px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
  },
  questionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: '16px',
  },
  contentContainer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    color: 'var(--color-primary-dark)',
    fontSize: '11px',
    height: '35px',
    margin: '10px 0',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '4px',
    padding: '0 20px',
    cursor: 'pointer',
    '&.active': {
      color: 'white',
      backgroundColor: 'var(--color-primary-dark)',
    },
  },
}));

export default function matchQuiz(props) {
  const classes = useStyle();
  const [leftValue, setLeftValue] = useState(-1);
  const [rightValue, setRightValue] = useState(-1);
  const [leftData, setLeftData] = useState(
    props.type === 'question' ? props.data.leftContent : props.data.leftAnswer
  );
  const [rightData, setRightData] = useState(
    props.type === 'question' ? props.data.rightContent : props.data.rightAnswer
  );

  const handleLeft = (index) => {
    if (props.type === 'answer') {
      return;
    }
    if (rightValue !== -1) {
      const tempLeft = [...leftData];
      const tempRight = [...rightData];
      tempLeft[index] = { ...tempLeft[index], match: rightValue };
      setLeftData(tempLeft);
      tempRight[rightValue] = { ...tempRight[rightValue], match: index };
      setRightData(tempRight);
      resetValue();
    } else {
      setLeftValue(index);
    }
    return;
  };

  const handleRight = (index) => {
    if (props.type === 'answer') {
      return;
    }
    if (leftValue !== -1) {
      const tempLeft = [...leftData];
      const tempRight = [...rightData];
      tempLeft[leftValue] = { ...tempLeft[leftValue], match: index };
      setLeftData(tempLeft);
      tempRight[index] = { ...tempRight[index], match: leftValue };
      setRightData(tempRight);
      resetValue();
    } else {
      setRightValue(index);
    }
    return;
  };

  const resetValue = () => {
    setLeftValue(-1);
    setRightValue(-1);
  };

  return (
    <Box my={2}>
      <Typography className={classes.title}>
        {props.data.index + '. '}
        {props.data.title}
      </Typography>
      <ArcherContainer strokeColor="red">
        {props.type === 'answer' && (
          <Box
            fontSize="11px"
            color={'var(--color-primary-dark)'}
            margin={'20px 16px 10px 16px'}
          >
            Your Answer
          </Box>
        )}
        <Grid container spacing={1} className={classes.questionContainer}>
          <Grid item md={4}>
            {leftData.map((item, index) => (
              <Box key={index}>
                {item.match !== -1 && (
                  <ArcherElement
                    key={index}
                    id={`left-element-${index}`}
                    relations={[
                      {
                        targetId: 'right-element-' + item.match,
                        targetAnchor: 'left',
                        sourceAnchor: 'right',
                        style: { strokeColor: 'black', strokeWidth: 1 },
                      },
                    ]}
                  >
                    <Box
                      className={`${classes.contentContainer} ${
                        index === leftValue ? 'active' : ''
                      }`}
                      onClick={() => handleLeft(index)}
                    >
                      {item.text}
                      <div
                        className="match-quiz-circle"
                        style={{ backgroundColor: quizColor[index] }}
                      ></div>
                      {props.type === 'answer' && (
                        <CheckIcon
                          type={
                            item.result === true ? 'correctMatch' : 'wrongMatch'
                          }
                        />
                      )}
                    </Box>
                  </ArcherElement>
                )}
                {item.match === -1 && (
                  <Box
                    className={`${classes.contentContainer} ${
                      index === leftValue ? 'active' : ''
                    }`}
                    onClick={() => handleLeft(index)}
                  >
                    {item.text}
                  </Box>
                )}
              </Box>
            ))}
          </Grid>
          <Grid item md={4}>
            {rightData.map((item, index) => (
              <ArcherElement key={index} id={`right-element-${index}`}>
                <Box
                  className={`${classes.contentContainer} ${
                    index === rightValue ? 'active' : ''
                  }`}
                  onClick={() => handleRight(index)}
                >
                  {item.text}
                  {item.match !== -1 && (
                    <div
                      className="match-quiz-circle"
                      style={{ backgroundColor: quizColor[item.match] }}
                    ></div>
                  )}
                  {props.type === 'answer' && (
                    <CheckIcon
                      type={
                        item.result === true ? 'correctMatch' : 'wrongMatch'
                      }
                    />
                  )}
                </Box>
              </ArcherElement>
            ))}
          </Grid>
        </Grid>
      </ArcherContainer>
      {props.type === 'answer' && (
        <ArcherContainer strokeColor="red">
          <Box
            fontSize="11px"
            color={'var(--color-primary-dark)'}
            margin={'20px 16px 10px 16px'}
          >
            Correct Answer
          </Box>
          <Grid container spacing={1} className={classes.questionContainer}>
            <Grid item md={4}>
              {leftData.map((item, index) => (
                <Box key={index}>
                  <ArcherElement
                    key={index}
                    id={`left-answer-element-${index}`}
                    relations={[
                      {
                        targetId: 'right-answer-element-' + item.correct,
                        targetAnchor: 'left',
                        sourceAnchor: 'right',
                        style: { strokeColor: 'black', strokeWidth: 1 },
                      },
                    ]}
                  >
                    <Box className={classes.contentContainer}>
                      {item.text}
                      <div
                        className="match-quiz-circle"
                        style={{ backgroundColor: quizColor[index] }}
                      ></div>
                    </Box>
                  </ArcherElement>
                </Box>
              ))}
            </Grid>
            <Grid item md={4}>
              {rightData.map((item, index) => (
                <ArcherElement key={index} id={`right-answer-element-${index}`}>
                  <Box className={classes.contentContainer}>
                    {item.text}
                    {item.match !== -1 && (
                      <div
                        className="match-quiz-circle"
                        style={{ backgroundColor: quizColor[item.match] }}
                      ></div>
                    )}
                  </Box>
                </ArcherElement>
              ))}
            </Grid>
          </Grid>
        </ArcherContainer>
      )}
      {props.type === 'answer' && <Explanation data={props.data} />}
    </Box>
  );
}
