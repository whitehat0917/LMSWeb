import { Grid, Box, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { UserEnrollmentFactory, UserInfoFactory } from '@lms-api/factory';
import React, { useEffect, useState } from 'react';
import { useStyles } from './ui';
import { useRecoilState, useRecoilValue } from 'recoil';
import { learningPathState } from 'store/course';
import styles from './createlearning.module.scss';
import { authnState } from 'store';

const UsersAdded = (props) => {
  const classes = useStyles();
  const [learners, setLearners] = useState([]);
  const [selectedLearners, setSelectedLearner] = useState([]);

  const [search, setSearch] = React.useState('');
  const [learningFormData] = useRecoilState(learningPathState);
  const authnInfo = useRecoilValue(authnState);

  useEffect(() => {
    getAllSelectedLearners();
    getUsers();
  }, []);

  const getAllSelectedLearners = () => {
    console.log(learningFormData)
    if (learningFormData && learningFormData.id) {
      UserEnrollmentFactory.getByLearningPathId(learningFormData.id).then(
        (data: any) => {
          setSelectedLearner(data.users);
        }
      );
    }
  };

  const getUsers = async () => {
    if (authnInfo?.userInfo?.organizationId) {
      const list: any = await UserInfoFactory.getByOrgId(
        authnInfo.userInfo.organizationId
      );
      setLearners(list);
    }
  };

  const isLearnerAlreadyAdded = (id) => {
    let isAdded = false;
    if (selectedLearners && selectedLearners.length > 0) {
      const inx = selectedLearners.findIndex((res) => res.id == id);
      if (inx > -1) {
        isAdded = true;
      }
    }
    return isAdded;
  };

  const addLearner = async (id) => {
    const payload = {
      usersId: id,
      learningPathId: learningFormData.id,
      completionDate: new Date().toLocaleDateString(),
    };
    await UserEnrollmentFactory.create(payload);
    getAllSelectedLearners();
  };

  const getLearners = () => {
    if (search && search.length > 0) {
      return learners
        .filter(
          (dt) =>
            dt.firstName.toLowerCase().includes(search.toLowerCase()) ||
            dt.lastName.toLowerCase().includes(search.toLowerCase())
        )
        .map((dt, i) => {
          return (
            <Grid key={i} container spacing={1}>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        F
                      </Avatar>
                    }
                    action={
                      isLearnerAlreadyAdded(dt.id) ? (
                        <p
                          className={classes.color1}
                          onClick={() => handleRemove(dt.id)}
                        >
                          REMOVE
                        </p>
                      ) : (
                        <p
                          className={classes.color2}
                          onClick={() => addLearner(dt.id)}
                        >
                          ADD
                        </p>
                      )
                    }
                    // onClick={() => handleRemove(dt.id)}
                    title={
                      <p className={classes.title2}>
                        {dt.firstName + ' ' + dt.lastName}
                      </p>
                    }
                    subheader={<p className={classes.subheader2}>{dt.email}</p>}
                  />
                </Card>
              </Grid>
            </Grid>
          );
        });
    } else {
      return learners.map((dt, i) => {
        return (
          <Grid key={i} container spacing={1}>
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      F
                    </Avatar>
                  }
                  action={
                    isLearnerAlreadyAdded(dt.id) ? (
                      <p
                        className={classes.color1}
                        onClick={() => handleRemove(dt.id)}
                      >
                        REMOVE
                      </p>
                    ) : (
                      <p
                        className={classes.color2}
                        onClick={() => addLearner(dt.id)}
                      >
                        ADD
                      </p>
                    )
                  }
                  // onClick={() => handleRemove(dt.id)}
                  title={
                    <p className={classes.title2}>
                      {dt.firstName + ' ' + dt.lastName}
                    </p>
                  }
                  subheader={<p className={classes.subheader2}>{dt.email}</p>}
                />
              </Card>
            </Grid>
          </Grid>
        );
      });
    }
  };

  const handleRemove = async (id) => {
    if (selectedLearners && selectedLearners.length > 0) {
      const idx = selectedLearners.findIndex((res) => res.id == id);
      if (idx > -1) {
        const removeInfo = selectedLearners[idx];
        if (removeInfo && removeInfo.enrollmentId) {
          await UserEnrollmentFactory.del(removeInfo.enrollmentId);
          getAllSelectedLearners();
        }
      }
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
          placeholder={`Search and add courses`}
        ></input>
      </Grid>

      {learners.length > 0 ? getLearners() : null}

      <Box mt={2}>
        <Button
          variant="contained"
          type="submit"
          onClick={props.handleClose}
          className={classes.coloredButton}
        >
          Finish
        </Button>
        {/* <Button
          onClick={props.handlePrev}
          variant="contained"
          className={classes.coloredButton1}
        >
          Cancel
        </Button> */}
      </Box>
    </>
  );
};

export default UsersAdded;
