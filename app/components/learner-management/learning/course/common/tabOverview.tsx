import React from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { carouselData, CourseInfo } from '../../../../../data/mock';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ReportCourses from '@module/learner-management/reports/ReportCourses';

const useStyle = makeStyles(() => ({
  text: {
    fontSize: '14px',
    color: 'var(--color-primary-dark)',
  },
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
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
}));

export default function tabOverview() {
  const classes = useStyle();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={5} xs={12}>
          <Typography className={classes.smallText}>INSTRUCTOR</Typography>
          <Box display="flex" mt={1}>
            <Avatar
              src={CourseInfo.instructor.avatar}
              alt={CourseInfo.instructor.name}
            />
            <Typography component="div" className="vertical-flex">
              <Box
                fontSize={10}
                fontWeight="bold"
                color="var(--color-primary-dark)"
                ml={0.5}
              >
                {CourseInfo.instructor.name}
              </Box>
              <Box fontSize={10} color="var(--color-primary-dark)" ml={0.5}>
                {CourseInfo.instructor.role}
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={7} xs={12}>
          <Typography className={classes.smallText}>SKILLS COVERED</Typography>
          <Box display="flex" flexWrap="wrap" mt={1}>
            {CourseInfo.instructor.skills.map((item, index) => (
              <Chip
                key={index}
                variant="outlined"
                size="small"
                label={item}
                className={classes.chip}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box p={1} mt={2}>
        <Typography component="div">
          <Box
            fontSize={10}
            fontWeight="fontWeightBold"
            color={'var(--base-gray-500)'}
            pb={2}
          >
            COURSE DESCRIPTION
          </Box>
          <Box
            fontSize={10}
            pb={3}
            color={'var(--base-gray-500)'}
            lineHeight={1.6}
          >
            {CourseInfo.textDescription}
          </Box>
        </Typography>
        <Typography variant="h1" className={classes.text} component="div">
          <Box
            fontSize={10}
            fontWeight="fontWeightBold"
            color={'var(--base-gray-500)'}
            pb={2}
          >
            COURSE OBJECTIVES
          </Box>
          <ul className={classes.objective}>
            {CourseInfo.objectives.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Typography>
        <Box display="flex" mt={3}>
          <AvatarGroup max={6} spacing={20} className={classes.avatar}>
            {CourseInfo.learners.avatars.map((item, index) => (
              <Avatar key={index} alt="learner" src={item} />
            ))}
          </AvatarGroup>
          <Typography
            className={classes.smallText + ' vertical-flex'}
            component="div"
          >
            <Box ml={2}>
              <u>{CourseInfo.learners.amount} learners</u>
            </Box>
          </Typography>
        </Box>
        <Box>
          <ReportCourses
            title="Related Courses"
            data={carouselData}
            btnTitle=""
          />
        </Box>
      </Box>
    </>
  );
}
