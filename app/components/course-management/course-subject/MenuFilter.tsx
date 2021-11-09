import * as React from 'react';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
  Modal,
} from '@material-ui/core';
import styles from '../coursemanagement.module.scss';
import { lmsStyle } from 'styles/ui.variables';
import EditSubjectModal from './EditSubjectModal';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { useQuery } from 'react-query';
import { CategoryFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { CategorySharp } from '@material-ui/icons';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
// import EditCategoryModal from './EditCategoryModal';

const useStyles = makeStyles((theme) =>
  createStyles({
    createCategory: {
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
        marginBottom: '7px',
      },
    },
    plusSign: {
      marginRight: '20px',
    },
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      width: '100%',
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
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    inputStyle: {
      background: '#F7F8FB 0% 0% no-repeat padding-box',
      borderRadius: '5px',
    },
  })
);

export default function MenuFilter({
  selectedSubject,
  organizationId,
  setSelectedSubject,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const authnInfo = useRecoilValue(authnState);

  const categoryQuery = useQuery(
    queryKeys.getCategoriesByOrgId(authnInfo?.userInfo?.organizationId),
    () => CategoryFactory.getAll(authnInfo?.userInfo?.organizationId)
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid className={styles.userPanel}>
        <Grid item>
          <Button
            className={classes.createCategory}
            onClick={() => {
              setSelectedSubject(null);
              handleOpen();
            }}
          >
            <span className={classes.plusSign}>+</span>
            <span>Create New Subject</span>
          </Button>
          <Modal open={open} onClose={handleClose}>
            <div className={classes.inviteModal}>
              <EditSubjectModal
                organizationId={organizationId}
                handleClose={handleClose}
                selectedSubject={selectedSubject}
              />
            </div>
          </Modal>
        </Grid>
        <Grid className={classes.searchBar}>
          {
            categoryQuery.isLoading && (<>Loading....</>)
          }
          {
            categoryQuery.data && (<div className="lms-input">
              <label>&nbsp;</label>
              <select name="categoryId">
                <option value="all">All Categories</option>
                {categoryQuery.data.map((item, index) => (
                  <option key={index} value={item.id}>{item.name}</option>
                ))}
              </select>
            </div>)
          }
        </Grid>
      </Grid>
    </>
  );
}
