import React, { useState } from 'react';
import { Box, IconButton, makeStyles, Typography } from '@material-ui/core';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';
import Explanation from '@module/learner-management/learning/course/common/explanation';

const useStyle = makeStyles(() => ({
  title: {
    fontSize: '12px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 0',
  },
  itemContainer: {
    display: 'flex',
    paddingLeft: '16px',
    height: '30px',
    marginBottom: '12px',
  },
  indexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: 'var(--color-primary-dark)',
    border: '1px solid var(--color-primary-dark)',
    borderRadius: '4px 0 0 4px',
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 60px)',
    color: 'var(--color-primary-dark)',
    fontSize: '11px',
    height: '100%',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '0 4px 4px 0',
    paddingLeft: '20px',
    '&.active': {
      color: 'var(--color-primary-dark)',
    },
  },
  toggleButton: {
    color: 'white',
  },
  explanation: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0',
    fontSize: '10px',
    color: 'var(--base-gray-500)',
  },
}));

const SortableItem = SortableElement(({ value }) => {
  const classes = useStyle();
  return (
    <Box className={classes.itemContainer}>
      <Box className={classes.indexContainer}>
        <IconButton className={classes.toggleButton}>
          <DragHandleIcon />
        </IconButton>
      </Box>
      <Box className={classes.contentContainer}>{value}</Box>
    </Box>
  );
});

const SortableList = SortableContainer(({ items }) => {
  const classes = useStyle();
  return (
    <Box className={classes.questionContainer}>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value} />
      ))}
    </Box>
  );
});

export default function sortQuiz(props) {
  const classes = useStyle();
  const [data, setData] = useState(props.data.content);

  const onSortEnd = (oldIndex, newIndex) => {
    setData(arrayMove(data, oldIndex, newIndex));
  };
  return (
    <Box my={2}>
      <Typography className={classes.title}>
        {props.data.index + '. '}
        {props.data.title}
      </Typography>
      {props.type === 'question' && (
        <Box>
          <SortableList items={data} onSortEnd={onSortEnd} />
        </Box>
      )}
      {props.type === 'answer' && (
        <Box>
          <Box className={classes.explanation}>
            Your Answer
            <CheckIcon
              type={props.data.result === true ? 'correctText' : 'wrongText'}
            />
          </Box>
          <Box className={classes.questionContainer}>
            {props.data.answer.map((value, index) => (
              <Box className={classes.itemContainer} key={index}>
                <Box className={classes.indexContainer}>
                  <IconButton className={classes.toggleButton}>
                    <DragHandleIcon />
                  </IconButton>
                </Box>
                <Box className={classes.contentContainer}>{value}</Box>
              </Box>
            ))}
          </Box>
          {props.data.result === false && (
            <Box>
              <Box className={classes.explanation}>
                Correct Answer
                <CheckIcon type={'correctText'} />
              </Box>
              <Box className={classes.questionContainer}>
                {props.data.answer.map((value, index) => (
                  <Box className={classes.itemContainer} key={index}>
                    <Box className={classes.indexContainer}>
                      <IconButton className={classes.toggleButton}>
                        <DragHandleIcon />
                      </IconButton>
                    </Box>
                    <Box className={classes.contentContainer}>{value}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      )}
      {props.type === 'answer' && <Explanation data={props.data} />}
    </Box>
  );
}
