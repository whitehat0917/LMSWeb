import * as React from 'react';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Modal,
} from '@material-ui/core';
import styles from '../usermanagement.module.scss';
import '../../../../styles/ui.variables';
import { lmsStyle } from '../../../../styles/ui.variables';
import UserMenu from '../UserMenu';
import CreateNewTeam from './CreateNewTeam';

const useStyles = makeStyles((theme) =>
  createStyles({
    inviteNewUser: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    plusSign: {
      marginRight: '20px',
    },
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      [theme.breakpoints.down('xs')]: {
        margin: '10px 0',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('xs')]: {
        width: '75%',
      },
    },
  })
);

export default function SearchFilter({
  open,
  handleModalToggle,
  selectedTeam,
  setSelectedTeam,
  organizationId,
  ...props
}) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={styles.userPanel}>
        <Grid item sm={9} lg={10}>
          <Grid container>
            <Grid item xs={12} sm={5} lg={3}>
              <Button
                className={classes.inviteNewUser}
                onClick={() => {
                  handleModalToggle();
                  setSelectedTeam(null);
                }}
              >
                <span className={classes.plusSign}>+</span>
                <span>Create New Team</span>
              </Button>
            </Grid>

            <Grid item sm={7} lg={9} xs={12}>
              <Grid className={classes.searchBar}>
                <div className={classes.searchIcon}>
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
                </div>
                <input
                  className={styles.searchUser}
                  placeholder={`Filter users by name or email`}
                  onChange={(e) => props.handleSearch(e.target.value)}
                ></input>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={3} lg={2} className={styles.userButton}>
          <UserMenu selected="User Team" />
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleModalToggle}>
        <div className={classes.inviteModal}>
          <CreateNewTeam
            handleModalToggle={handleModalToggle}
            selectedTeam={selectedTeam}
            organizationId={organizationId}
          />
        </div>
      </Modal>
    </>
  );
}
