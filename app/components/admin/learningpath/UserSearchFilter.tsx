import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import * as React from 'react';
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
import styles from './learningpath.module.scss';

const useStyles = makeStyles((theme) =>
  createStyles({
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '7px',
      },
    },
    inputStyle: {
      background: '#F7F8FB 0% 0% no-repeat padding-box',
      borderRadius: '5px',
    },
  })
);

export default function UserSearchFilter(props) {
  const classes = useStyles();
  const router = useRouter();
  // const [, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Grid className={styles.userPanel}>
        <Grid item className={classes.searchBar} lg={4}>
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
            onChange={props.handleSearch}
            className={styles.searchUser}
            placeholder={`Search for Learning Paths`}
          ></input>
        </Grid>
        <Grid className={classes.searchBar} lg={8}>
          <TextInputOutline
            label=""
            name="category"
            select
            defaultValue="all"
            classes={{ root: classes.inputStyle }}
          >
            <MenuItem value="all">All Subscribers</MenuItem>
          </TextInputOutline>
        </Grid>
      </Grid>
    </>
  );
}
