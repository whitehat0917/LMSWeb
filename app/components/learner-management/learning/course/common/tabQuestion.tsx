import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import TextAreaButton from '@element/TextAreaButton/textareaButton';
import { CourseInfo } from '../../../../../data/mock';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentIcon from '@material-ui/icons/Comment';

const useStyle = makeStyles(() => ({
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
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
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
}));

export default function tabQuestion(props) {
  const classes = useStyle();

  return (
    <>
      <TextAreaButton
        id="comment"
        name="comment"
        placeholder="Do you have a question about course? Ask here to get answers from fellow learners, experts and others."
        rows={3}
        buttonValue="Ask"
        value={props.values.comment}
        handleChange={props.handleTextareaChange}
      />
      <Box mt={2}>
        {CourseInfo.questions.map((item, index) => (
          <Box className={classes.questionContainer} key={index}>
            <Box className={classes.answerContainer}>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Avatar src={item.avatar} alt={item.name} />
                  <Typography component="div" className="vertical-flex">
                    <Box
                      fontSize={12}
                      fontWeight="bold"
                      color="var(--color-primary-dark)"
                      ml={1}
                    >
                      {item.name}
                    </Box>
                    <Box fontSize={10} color="var(--color-primary-dark)" ml={1}>
                      {item.country}
                    </Box>
                  </Typography>
                </Box>
                <Box fontSize="8px" color="var(--base-gray-400)">
                  {item.source}
                </Box>
              </Box>
              <Box className={classes.smallText} mt={1}>
                {item.text}
              </Box>
              <Box className={classes.smallText} mt={2} mb={1}>
                {item.likeCount} Likes | {item.answerCount} Answers
              </Box>
              <Box display="flex">
                <Button className={classes.pinbtn}>
                  {item.liked ? (
                    <ThumbUpIcon viewBox="0 0 24 24" />
                  ) : (
                    <ThumbUpOutlinedIcon viewBox="0 0 24 24" />
                  )}
                  {item.liked ? 'Liked' : 'Like'}
                </Button>
                <Box className={classes.answerLabel}>
                  <CommentIcon viewBox="0 0 24 24" />
                  {item.answerText}
                </Box>
              </Box>
            </Box>
            <Box display="flex" className={classes.replyContainer}>
              <Avatar
                src={CourseInfo.instructor.avatar}
                alt={CourseInfo.instructor.name}
                style={{ marginRight: '8px' }}
              />
              <TextAreaButton
                id={`comment-${index}`}
                name={`comment-${index}`}
                placeholder="Have something helpful to say? Add your answer here"
                rows={2}
                buttonValue="Post"
                value={props.values.comment}
                handleChange={props.handleTextareaChange}
              />
            </Box>
            {item.subitems &&
              item.subitems.map((subitem, subindex) => (
                <Box key={subindex}>
                  <Box className={classes.replyContainer} ml={subitem.deep * 6}>
                    <Box display="flex">
                      <Avatar src={subitem.avatar} alt={subitem.name} />
                      <Box ml={1}>
                        <Typography component="div" className="vertical-flex">
                          <Box
                            fontSize={12}
                            fontWeight="bold"
                            color="var(--color-primary-dark)"
                          >
                            {subitem.name}
                          </Box>
                          <Box fontSize={10} color="var(--color-primary-dark)">
                            {subitem.country}
                          </Box>
                        </Typography>
                        <Box className={classes.smallText} mt={1}>
                          {subitem.text}
                        </Box>
                        <Box display="flex" my={2}>
                          <Button className={classes.pinbtn}>
                            {item.liked ? (
                              <ThumbUpIcon viewBox="0 0 24 24" />
                            ) : (
                              <ThumbUpOutlinedIcon viewBox="0 0 24 24" />
                            )}
                            {item.liked ? 'Liked' : 'Like'}
                          </Button>
                          <Box className={classes.answerLabel}>
                            <CommentIcon viewBox="0 0 24 24" />
                            Reply
                          </Box>
                          <Box className={classes.replyText}>
                            {item.likeCount} Likes | {item.answerCount} Answers
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    className={classes.replyContainer}
                    ml={subitem.deep * 6}
                  >
                    <Avatar
                      src={CourseInfo.instructor.avatar}
                      alt={CourseInfo.instructor.name}
                      style={{ marginRight: '8px' }}
                    />
                    <TextAreaButton
                      id={`comment-${index}-${subindex}`}
                      name={`comment-${index}-${subindex}`}
                      placeholder="Add a reply"
                      rows={2}
                      buttonValue="Post"
                      value={props.values.comment}
                      handleChange={props.handleTextareaChange}
                    />
                  </Box>
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </>
  );
}
