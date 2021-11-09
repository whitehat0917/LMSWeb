import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Avatar,
  Button,
  createStyles,
  Grid,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import styles from '../usermanagement.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { UserInfoFactory, UserTeamFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { Autocomplete } from '@material-ui/lab';
import Loader from '@element/Loader/Loader';
import { Team as TeamDto } from '@lms-api/models';

const useStyle = makeStyles(() =>
  createStyles({
    inviteButton: {
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'none',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    singleUserCard: {
      display: 'flex',
      justifyContent: 'space-between',
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 6px #00000005',
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      padding: '20px',
      borderRadius: '7px',
    },
    name: {
      font: `normal normal 600 12px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    email: {
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    removeButton: {
      color: lmsStyle['base-accent'],
      font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
    },
    scrollableContent: {
      gridTemplateColumns: `250px 1fr 300px`,
      overflow: 'scroll',
    },
    labelName: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
  })
);

export default function CreateNewTeam({
  handleModalToggle,
  selectedTeam,
  organizationId,
}) {
  const classes = useStyle();
  const [inputValue, setInputValue] = React.useState([]);

  React.useEffect(() => {
    if (selectedTeam) {
      setInputValue(selectedTeam.users);
    }
  }, []);

  const addInputValue = (newValue) => {
    if (setInputValue) {
      setInputValue([...inputValue, Object.assign({}, ...newValue)]);
    }
  };
  console.log('input Value', inputValue);
  const userQuery = useQuery(queryKeys.getUserInfoByOrgId(organizationId), () =>
    UserInfoFactory.getByOrgId(organizationId)
  );

  const removeUser = (user) => {
    // deleteUserMutation.mutate(user.)
    // setInputValue(
    //   inputValue.filter((v) => {
    //     return v.id !== user.id;
    //   })
    // );
  };

  const userData = userQuery.data;

  const teamQuery = queryKeys.getTeamsByOrgId(organizationId);

  const queryClient = useQueryClient();
  const createTeamMutation = useMutation(UserTeamFactory.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(teamQuery);
      handleModalToggle();
    },
  });

  const updateTeamMutation = useMutation(
    ({ ...updateData }: TeamDto) =>
      UserTeamFactory.update(selectedTeam?.id, updateData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(teamQuery);
        handleModalToggle();
      },
    }
  );

  const deleteUserMutation = useMutation(
    (teamId: string) => UserTeamFactory.del(teamId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(teamQuery);
        // handleModalToggle();
      },
    }
  );
  console.log('selected', selectedTeam);
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = Object.fromEntries(formData);
    const userList = [];
    inputValue.forEach((user) => {
      userList.push({
        fullName: user.firstName + user.lastName || user.fullName,
        email: user.email,
        userId: user.id,
      });
    });

    console.log('fuyll names is', userList);
    if (selectedTeam) {
      updateTeamMutation.mutate({
        organizationId: organizationId,
        name: data.name,
        users: userList,
      });
    } else {
      createTeamMutation.mutate({
        organizationId: organizationId,
        name: data.name,
        users: userList,
      });
    }
  }
  if (userQuery.isLoading) {
    <Loader />;
  }
  return (
    <Grid container spacing={5}>
      <Paper style={{ width: '100%' }}>
        <div className={styles.header}>
          <h1 className={styles.inviteNewUserText}>
            {selectedTeam ? 'Edit New Team' : 'Create New Team'}
          </h1>
          <div className={styles.close} onClick={handleModalToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9.558}
              height={9.557}
              viewBox="0 0 9.558 9.557"
            >
              <path
                d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                fill="#7d8793"
              />
            </svg>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <Grid container className={styles.modalContent} spacing={2}>
            <Grid item xs={12}>
              <TextInputOutline
                id="name"
                name="name"
                label={<span>Team Name</span>}
                defaultValue={selectedTeam ? selectedTeam.name : ''}
              ></TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <label className={classes.labelName}>Add Users</label>
              <Autocomplete
                multiple
                id="add-user-team"
                size="small"
                options={userData || []}
                filterSelectedOptions
                getOptionLabel={(option) => option.firstName}
                onChange={(event, newValue) => {
                  addInputValue(newValue);
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      name="users"
                      {...params}
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ paddingLeft: '10px' }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10.993}
                              height={11}
                              viewBox="0 0 10.993 11"
                            >
                              <path
                                d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                                fill="#006dff"
                              />
                            </svg>
                          </InputAdornment>
                        ),
                      }}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.scrollableContent}>
                {inputValue?.map((user, index) => (
                  <Grid
                    item
                    lg={6}
                    key={`team-user-id-${index}`}
                    className={classes.singleUserCard}
                  >
                    <ListItem button disableGutters>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src="{user.avatar}" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          user.fullName || `${user.firstName} ${user.lastName}`
                        }
                        secondary={user.email}
                        classes={{
                          primary: classes.name,
                          secondary: classes.email,
                        }}
                      />
                    </ListItem>
                    <Button
                      className={classes.removeButton}
                      onClick={() => {
                        removeUser(user);
                      }}
                    >
                      REMOVE
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Button className={classes.inviteButton} type="submit">
                Create New Team
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
