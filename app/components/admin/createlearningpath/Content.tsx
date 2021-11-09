import { Box, CardMedia, Button, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { learningPathState } from 'store/course';
import styles from './createlearning.module.scss';
import { authnState } from 'store';
import { useStyles } from './ui';
import { CourseFactory, UserEnrollmentFactory } from '@lms-api/factory';

const Content = (props) => {
  const classes = useStyles();
  const authnInfo = useRecoilValue(authnState);
  const [,] = useState('');

  const [contentList, setContentList] = useState([]);
  const [selectedContentList, setSelectedContentList] = useState([]);

  const [learningFormData] = useRecoilState(learningPathState);

  const [search, setSearch] = React.useState('');

  useEffect(() => {
    getContenList();
    getSelectedCourse();
  }, []);

  const getContenList = async () => {
    // Get org courses
    const organizationId = authnInfo.userInfo?.organizationId;
    if (organizationId) {
      const allCourses = await CourseFactory.getAll(organizationId);
      setContentList(allCourses);
    }
  };

  const getSelectedCourse = async () => {
    // get courses added with
    if (learningFormData && learningFormData.id) {
      const selectedCourse = await UserEnrollmentFactory.getByLearningPathId(
        learningFormData.id
      );
      setSelectedContentList(selectedCourse.courses);
    }
  };

  const handleRemove = async (id) => {
    // UserTeamFactory.del(id).then(() => {
    //   getTeams(organizationId);
    // });
    if (selectedContentList && selectedContentList.length > 0) {
      const idx = selectedContentList.findIndex((res) => res.id == id);
      if (idx > -1) {
        const removeInfo = selectedContentList[idx];
        if (removeInfo && removeInfo.enrollmentId) {
          await UserEnrollmentFactory.del(removeInfo.enrollmentId);
          getSelectedCourse();
        }
      }
    }
  };

  const addCourse = async (id) => {
    const payload = {
      courseId: id,
      learningPathId: learningFormData.id,
      completionDate: new Date().toLocaleDateString(),
    };
    await UserEnrollmentFactory.create(payload);
    getSelectedCourse();
  };

  const isCourseAlreadyAdded = (id) => {
    let isAdded = false;
    if (selectedContentList && selectedContentList.length > 0) {
      const inx = selectedContentList.findIndex((res) => res.id == id);
      if (inx > -1) {
        isAdded = true;
      }
    }
    return isAdded;
  };

  const displayList = () => {
    if (search.length > 0) {
      return contentList
        .filter((dt) => dt.title.toLowerCase().includes(search.toLowerCase()))
        .map((dt, i) => {
          return (
            <Card key={i} className={classes.root} style={{ display: 'flex' }}>
              <CardMedia
                className={classes.media}
                image={dt.imageUrl}
                title="Contemplative Reptile"
              />
              <CardHeader
                className={classes.cardheader}
                action={
                  isCourseAlreadyAdded(dt.id) ? (
                    <p
                      className={classes.color1}
                      style={{ marginLeft: '599px' }}
                      onClick={() => handleRemove(dt.id)}
                    >
                      REMOVE
                    </p>
                  ) : (
                    <p
                      className={classes.color2}
                      style={{ marginLeft: '599px' }}
                      onClick={() => addCourse(dt.id)}
                    >
                      ADD
                    </p>
                  )
                }
                title={<p className={classes.title1}>{dt.title}</p>}
                subheader={
                  <p className={classes.subheader}>{dt.description}</p>
                }
              />
            </Card>
          );
        });
    } else {
      return contentList.map((dt, i) => {
        return (
          <Card key={i} className={classes.root} style={{ display: 'flex' }}>
            <CardMedia
              className={classes.media}
              image={dt.imageUrl}
              title="Contemplative Reptile"
            />
            <CardHeader
              className={classes.cardheader}
              action={
                isCourseAlreadyAdded(dt.id) ? (
                  <p
                    className={classes.color1}
                    style={{ marginLeft: '599px' }}
                    onClick={() => handleRemove(dt.id)}
                  >
                    REMOVE
                  </p>
                ) : (
                  <p
                    className={classes.color2}
                    style={{ marginLeft: '599px' }}
                    onClick={() => addCourse(dt.id)}
                  >
                    ADD
                  </p>
                )
              }
              title={<p className={classes.title1}>{dt.title}</p>}
              subheader={<p className={classes.subheader}>{dt.description}</p>}
            />
          </Card>
        );
      });
    }
  };

  return (
    <>
      <Grid item className={classes.searchBar}>
        <div className={classes.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10.993}
            height={11}
            viewBox="0 0 10.993 11"
          >
            <path
              d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
              fill="var(--base-primary)"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchUser}
          placeholder={`Search to add courses and events`}
        />
      </Grid>

      {contentList && contentList.length > 0 ? displayList() : null}

      <Box mt={2}>
        <Button
          variant="contained"
          type="submit"
          className={classes.coloredButton}
          onClick={() => props.handleContentNext(2)}
          // disabled={formState.isSubmitting}
        >
          Next
        </Button>
        <Button
          onClick={props.handleClose}
          variant="contained"
          className={classes.coloredButton1}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default Content;
