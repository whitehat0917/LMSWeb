import React from 'react';
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';

const useStyle = makeStyles(() => ({
  text: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    lineHeight: '16px',
  },
  pinbtn: {
    color: 'var(--color-primary-dark)',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&>span>svg': {
      height: '14px',
    },
  },
}));

const StyledRating = withStyles({
  iconFilled: {
    color: 'var(--color-primary-dark)',
  },
  iconEmpty: {
    color: 'var(--color-primary-dark)',
    '&>svg': {
      height: '18px',
    },
  },
})(Rating);

export default function Review(props) {
  const classes = useStyle();

  return (
    <Box mt={1}>
      {props.data.map((item, index) => (
        <Box key={index} mt={3}>
          <Box display="flex" my={1}>
            <Avatar src={item.avatar} alt={item.name} />
            <Typography component="div" className="vertical-flex">
              <Box
                fontSize={12}
                fontWeight="bold"
                color="var(--color-primary-dark)"
                ml={0.5}
              >
                {item.name}
              </Box>
              <Box
                className="horizontal-flex"
                fontSize={10}
                color="var(--color-primary-dark)"
                ml={0.5}
              >
                <StyledRating
                  name="size-medium"
                  size="small"
                  defaultValue={item.rating}
                  readOnly
                  emptyIcon={<StarBorderIcon />}
                />
                <Typography component="div">
                  <Box
                    fontSize={10}
                    color="--color-primary-dark"
                    fontWeight="bold"
                    ml={1}
                  >
                    {item.rating} Stars
                  </Box>
                </Typography>
              </Box>
            </Typography>
          </Box>
          <Typography className={classes.text} component="div">
            <Box mb={1.5}>{item.comment}</Box>
          </Typography>
          <Divider />
          <Box display="flex" mt={1.5}>
            <Typography className={classes.text}>
              {item.recommend} Likes
            </Typography>
            <Button className={classes.pinbtn}>
              {item.liked ? (
                <ThumbUpIcon viewBox="0 0 24 24" />
              ) : (
                <ThumbUpOutlinedIcon viewBox="0 0 24 24" />
              )}
              {item.liked ? 'Liked' : 'Like'}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
