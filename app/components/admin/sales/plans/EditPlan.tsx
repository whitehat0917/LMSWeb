import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
} from '@material-ui/core';
import styles from '../sales.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';

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
      whiteSpace: 'nowrap',
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
  })
);

export default function EditPlanModal({ onClose }) {
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
              <Grid item xs={12} sm={9}>
                <TextInputOutline
                  name="name"
                  label={<span>Name</span>}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextInputOutline
                  name="name"
                  label={<span>User Limit</span>}
                ></TextInputOutline>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextInputOutline
                  name="name"
                  label={<span>Price</span>}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        classes={{
                          root: classes.inputAdornment,
                        }}
                      >
                        <span className={classes.inputAdornmentText}>$</span>
                      </InputAdornment>
                    ),
                  }}
                ></TextInputOutline>
              </Grid>
              <Grid xs={12} className={classes.buttonContent}>
                <Button type="submit" className={classes.saveButton}>
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
