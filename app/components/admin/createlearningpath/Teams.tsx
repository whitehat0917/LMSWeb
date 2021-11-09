import { Grid, Box, Button } from '@material-ui/core';
import { UserTeamFactory, UserEnrollmentFactory } from '@lms-api/factory';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React, { useState } from 'react';
import { useStyles } from './ui';
import { learningPathState } from 'store/course';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authnState } from 'store';
import styles from './createlearning.module.scss';

const Teams = (props) => {
  const classes = useStyles();
  const [,] = useState('');
  const [,] = useRecoilState(learningPathState);

  const [teamList, setTeamList] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const authnInfo = useRecoilValue(authnState);
  const [learningFormData] = useRecoilState(learningPathState);
  const [selectedTeamsList, setSelectedTeamsList] = useState([]);

  React.useEffect(() => {
    const organizationId = authnInfo.userInfo?.organizationId;
    getTeams(organizationId);
    getSelectedTeams();
  }, []);

  const getSelectedTeams = async () => {
    // get courses added with
    if (learningFormData && learningFormData.id) {
      const selectedCourse = await UserEnrollmentFactory.getByLearningPathId(
        learningFormData.id
      );
      setSelectedTeamsList(selectedCourse.teams);
    }
  };

  const getTeams = async (orgId: string) => {
    const list = await UserTeamFactory.getTeamsByOrgId(orgId);
    setTeamList(list);
  };

  const handleRemove = async (id) => {
    if (selectedTeamsList && selectedTeamsList.length > 0) {
      const idx = selectedTeamsList.findIndex((res) => res.id == id);
      if (idx > -1) {
        const removeInfo = selectedTeamsList[idx];
        if (removeInfo && removeInfo.enrollmentId) {
          await UserEnrollmentFactory.del(removeInfo.enrollmentId);
          getSelectedTeams();
        }
      }
    }

    // const organizationId = authnInfo.userInfo?.organizationId;
    // UserTeamFactory.del(id).then(() => {
    //   // getTeams(organizationId);
    //   getSelectedTeams();
    // });
  };

  const addTeam = async (id) => {
    const payload = {
      teamId: id,
      learningPathId: learningFormData.id,
      completionDate: new Date().toLocaleDateString(),
    };
    await UserEnrollmentFactory.create(payload);
    getSelectedTeams();
  };

  const isTeamAlreadyAdded = (id) => {
    let isAdded = false;
    if (selectedTeamsList && selectedTeamsList.length > 0) {
      const inx = selectedTeamsList.findIndex((res) => res.id == id);
      if (inx > -1) {
        isAdded = true;
      }
    }
    return isAdded;
  };

  const displayList = () => {
    if (search.length > 0) {
      return teamList
        .filter((dt) => dt.name.toLowerCase().includes(search.toLowerCase()))
        .map((dt, i) => {
          return (
            <Card key={i} className={classes.root}>
              <CardHeader
                action={
                  isTeamAlreadyAdded(dt.id) ? (
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
                      onClick={() => addTeam(dt.id)}
                    >
                      ADD
                    </p>
                  )
                }
                title={<p className={classes.title1}>{dt.name}</p>}
                subheader={
                  <p className={classes.subheader1}>
                    {dt.users.length} Learners
                  </p>
                }
              />
            </Card>
          );
        });
    } else {
      return teamList.map((dt, i) => {
        return (
          <Card key={i} className={classes.root}>
            <CardHeader
              action={
                // <p
                //   className={classes.color1}
                //   onClick={() => handleRemove(dt.id)}
                // >
                //   REMOVE
                // </p>
                isTeamAlreadyAdded(dt.id) ? (
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
                    onClick={() => addTeam(dt.id)}
                  >
                    ADD
                  </p>
                )
              }
              title={<p className={classes.title1}>{dt.name}</p>}
              subheader={
                <p className={classes.subheader1}>{dt.users.length} Learners</p>
              }
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
          placeholder={`Search and add courses`}
        ></input>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          {teamList.length > 0 ? displayList() : null}
        </Grid>
      </Grid>

      <Box mt={2}>
        <Button
          variant="contained"
          type="submit"
          className={classes.coloredButton}
          onClick={() => props.handleTeanNext(3)}
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

export default Teams;
