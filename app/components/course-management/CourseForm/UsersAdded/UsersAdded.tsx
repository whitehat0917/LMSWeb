import { UserEnrollmentFactory } from '@lms-api/factory';
import { Box, Grid, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import { useStyles } from './ui';

const UsersAdded = ({
  users = [],
  courseId,
  selectedUsers,
  getAllSelectedUsers,
}) => {
  const classes = useStyles();
  // const [deletingUser, setDeletingUser] = useState(false);
  const onRemove = async (id) => {
    if (selectedUsers && selectedUsers.length > 0) {
      const idx = selectedUsers.findIndex((res) => res.id == id);
      if (idx > -1) {
        const removeInfo = selectedUsers[idx];
        if (removeInfo && removeInfo.enrollmentId) {
          await UserEnrollmentFactory.del(removeInfo.enrollmentId);
          getAllSelectedUsers();
        }
      }
    }
    // setDeletingUser(true);
    // onRemoveUserEnrollment(id).finally(() => setDeletingUser(false));
  };

  const isUserAlreadyAdded = (id) => {
    let isAdded = false;
    if (selectedUsers && selectedUsers.length > 0) {
      const inx = selectedUsers.findIndex((res) => res.id == id);
      if (inx > -1) {
        isAdded = true;
      }
    }
    return isAdded;
  };

  const addUser = async (id) => {
    const payload = {
      usersId: id,
      courseId: courseId,
      completionDate: new Date().toLocaleDateString(),
    };
    await UserEnrollmentFactory.create(payload);
    getAllSelectedUsers();
  };

  return (
    <>
      <Box display="flex" justifyContent="center" mx="auto">
        <Grid container spacing={1}>
          {users.map((dt) => (
            <Grid key={dt} item xs={12} sm={12} md={6} lg={4}>
              <Card className={classes.root}>
                <CardHeader
                  classes={{
                    action: classes.cardAction,
                  }}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      F
                    </Avatar>
                  }
                  action={
                    isUserAlreadyAdded(dt.id) ? (
                      <Button
                        onClick={() => onRemove(dt.id)}
                        // disabled={deletingUser}
                        className={classes.color}
                      >
                        REMOVE
                      </Button>
                    ) : (
                      <Button
                        onClick={() => addUser(dt.id)}
                        // disabled={deletingUser}
                        className={classes.colorAdd}
                      >
                        ADD
                      </Button>
                    )
                  }
                  title={
                    <p
                      className={classes.title}
                    >{`${dt?.firstName} ${dt?.lastName}`}</p>
                  }
                  subheader={<p className={classes.subheader}>{dt?.email}</p>}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default UsersAdded;
