import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';
import styles from '../sales.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles((theme) =>
  createStyles({
    buttonContent: {
      marginTop: '22px',
      paddingLeft: '8px',
    },
    saveButton: {
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
    deleteButton: {
      margin: '0 10px',
      padding: '10px 30px',
      background: `${lmsStyle['base-accent']} 0% 0% no-repeat padding-box`,
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'none',
      '&:hover': {
        background: `${lmsStyle['base-accent']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        margin: '10px 0',
      },
    },
    inputAdornment: {
      padding: '15px',
      marginLeft: '-14px',
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: `4px 0px 0px 4px`,
    },
    inputAdornmentText: {
      font: ` normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    copyButton: {
      padding: '10px 30px',
      height: '35px',
      color: lmsStyle['color-white'],
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: `0px 4px 4px 0px`,
      textTransform: 'capitalize',
      '&:hover': {
        background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    endAdornment: {
      padding: 0,
    },
    inputCopySvg: {
      padding: '17px 13px',
      marginRight: '-14px',
      background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: `0px 3px 3px 0px`,
    },
    copySvg: { width: '10px', height: '10px', marginRight: '10px' },
    textStyle: {
      font: ` normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    borderRemove: {
      '&:before': {
        borderBottom: 0,
      },
      '&:after': {
        borderBottom: 0,
      },
    },
  })
);

export default function EditDiscountModal({ onClose }) {
  const classes = useStyle();

  //   const queryClient = useQueryClient();
  //   const categoryQuery = queryKeys.getCategoriesByOrgId(organizationId);
  //   const createCategoryMutation = useMutation(CategoryFactory.create, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(categoryQuery);
  //     },
  //   });

  //   const updateCategoryMutation = useMutation(
  //     ({ ...updateData }: Partial<CategoryDto>) =>
  //       CategoryFactory.update(selectedCategory.id, updateData)
  //   );

  //   const router = useRouter();
  //   function onSubmit(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const data: any = Object.fromEntries(formData);
  //     if (selectedCategory?.id) {
  //       updateCategoryMutation.mutate({
  //         name: data.name,
  //       });
  //     } else {
  //       createCategoryMutation.mutate({
  //         name: data.name,
  //         organizationId: organizationId,
  //       });
  //     }

  //     router.push('/admin/courses/categories');
  //   }
  const copyField = React.useRef();
  const copyCodeToClipboard = () => {
    //if (copyField && copyField.current) console.log(copyField.current.value);
    //copyField.current.value.select()
    document.execCommand('copy');
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.editCategoryText}>Edit Category</h1>
            <div className={styles.close} onClick={onClose}>
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
          <form>
            <Grid container className={styles.modalContent} spacing={2}>
              <Grid item xs={12} md={8}>
                <TextInputOutline
                  name="name"
                  className={classes.textStyle}
                  label={<span>Name</span>}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInputOutline
                  name="name"
                  className={classes.textStyle}
                  label={<span>Code</span>}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        classes={{
                          root: classes.inputCopySvg,
                        }}
                      >
                        <div className={classes.copySvg}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12.019}
                            height={12.02}
                            viewBox="0 0 12.019 12.02"
                          >
                            <path
                              d="M10.631 0a1.39 1.39 0 011.389 1.389v7.739a1.39 1.39 0 01-1.389 1.389H8.714v.114a1.39 1.39 0 01-1.389 1.389H1.389A1.39 1.39 0 010 10.631v-7.74a1.39 1.39 0 011.389-1.389h1.916v-.113A1.39 1.39 0 014.694 0zM1.389 11.118h5.936a.488.488 0 00.488-.488V2.891a.488.488 0 00-.488-.488H1.389a.488.488 0 00-.488.488v7.739a.488.488 0 00.488.488zm9.729-1.99V1.389a.488.488 0 00-.488-.488H4.694a.488.488 0 00-.488.488v.114h3.119a1.39 1.39 0 011.389 1.389v6.725h1.916a.488.488 0 00.488-.488zM6.16 4.207a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm0 2.1a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm-1.2 2.1a.451.451 0 010 .9H2.553a.451.451 0 110-.9z"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                      </InputAdornment>
                    ),
                  }}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInputOutline
                  name="name"
                  label={<span>Discount Amount or Percentage</span>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        classes={{
                          root: classes.inputAdornment,
                        }}
                      >
                        <Select
                          value="percentage"
                          className={`${classes.textStyle} ${classes.borderRemove}`}
                        >
                          <MenuItem
                            value="percentage"
                            className={classes.textStyle}
                          >
                            Percentage
                          </MenuItem>
                          <MenuItem
                            value="percentage"
                            className={classes.textStyle}
                          >
                            Amount
                          </MenuItem>
                        </Select>
                      </InputAdornment>
                    ),
                  }}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInputOutline
                  name="validDate"
                  label="Valid Until"
                  type="date"
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12}>
                <TextInputOutline
                  name="name"
                  label={<span>Select a Course</span>}
                  placeholder="Search for a course"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="search"
                          style={{ width: '11px', height: '11px' }}
                        >
                          <SearchIcon color="primary" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12}>
                <TextInputOutline
                  name="selectedCourse"
                  label=""
                ></TextInputOutline>
              </Grid>
              <Grid xs={12} className={classes.buttonContent}>
                <Button type="submit" className={classes.saveButton}>
                  Save Changes
                </Button>
                <Button className={classes.deleteButton}>Disable Code</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.editCategoryText}>
              Invite Using Invite Link
            </h1>
          </div>
          <Grid container>
            <div className={styles.inviteLink}>
              <TextField
                ref={copyField}
                className={classes.textStyle}
                fullWidth
                size="small"
                variant="outlined"
                value="https://learnorteach.com/invite/collab/auwgfuoqwgeoi1nkh"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" variant="filled">
                      <Button
                        onClick={copyCodeToClipboard}
                        className={classes.copyButton}
                      >
                        <div className={classes.copySvg}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12.019}
                            height={12.02}
                            viewBox="0 0 12.019 12.02"
                          >
                            <path
                              d="M10.631 0a1.39 1.39 0 011.389 1.389v7.739a1.39 1.39 0 01-1.389 1.389H8.714v.114a1.39 1.39 0 01-1.389 1.389H1.389A1.39 1.39 0 010 10.631v-7.74a1.39 1.39 0 011.389-1.389h1.916v-.113A1.39 1.39 0 014.694 0zM1.389 11.118h5.936a.488.488 0 00.488-.488V2.891a.488.488 0 00-.488-.488H1.389a.488.488 0 00-.488.488v7.739a.488.488 0 00.488.488zm9.729-1.99V1.389a.488.488 0 00-.488-.488H4.694a.488.488 0 00-.488.488v.114h3.119a1.39 1.39 0 011.389 1.389v6.725h1.916a.488.488 0 00.488-.488zM6.16 4.207a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm0 2.1a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm-1.2 2.1a.451.451 0 010 .9H2.553a.451.451 0 110-.9z"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                        Copy
                      </Button>
                    </InputAdornment>
                  ),
                  classes: {
                    adornedEnd: classes.endAdornment,
                    root: classes.textStyle,
                  },
                }}
              ></TextField>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
