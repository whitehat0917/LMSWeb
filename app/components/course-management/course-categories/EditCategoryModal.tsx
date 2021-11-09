import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import styles from '../coursemanagement.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import { useMutation, useQueryClient } from 'react-query';
import { CategoryFactory } from '@lms-api/factory';
import { Category as CategoryDto } from '@lms-api/models';
import { useRouter } from 'next/router';
import queryKeys from '@lms-api/queryKeys';

const useStyle = makeStyles((theme) =>
  createStyles({
    buttonContent: {
      marginTop: '22px',
      paddingLeft: '8px',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
      },
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
      whiteSpace: 'nowrap',
      '&:hover': {
        background: `${lmsStyle['base-accent']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        margin: '7px 0px',
      },
    },
  })
);

export default function EditCategoryModal({
  onClose,
  selectedCategory,
  organizationId,
}) {
  const queryClient = useQueryClient();
  const categoryQuery = queryKeys.getCategoriesByOrgId(organizationId);
  const createCategoryMutation = useMutation(CategoryFactory.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(categoryQuery);
    },
  });

  const updateCategoryMutation = useMutation(
    ({ ...updateData }: Partial<CategoryDto>) =>
      CategoryFactory.update(selectedCategory.id, updateData)
  );
  const deleteCategoryMutation = useMutation(
    (id: string) => CategoryFactory.del(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(categoryQuery);
      },
    }
  );
  const handleDelete = () => {
    const result = confirm('Are you sure want to delete');
    if (result) {
      deleteCategoryMutation.mutate(selectedCategory.id);
      router.push('/admin/courses/categories');
    }
  };
  const router = useRouter();
  const classes = useStyle();
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data: any = Object.fromEntries(formData);
    if (selectedCategory?.id) {
      updateCategoryMutation.mutate({
        name: data.name,
      });
    } else {
      createCategoryMutation.mutate({
        name: data.name,
        organizationId: organizationId,
      });
    }

    router.push('/admin/courses/categories');
  }
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
          <form onSubmit={onSubmit}>
            <Grid container className={styles.modalContent} spacing={2}>
              <Grid item xs={12}>
                <TextInputOutline
                  name="name"
                  label={<span>Name</span>}
                  defaultValue={selectedCategory ? selectedCategory.name : ''}
                ></TextInputOutline>
              </Grid>
              <Grid className={classes.buttonContent}>
                <Button type="submit" className={classes.saveButton}>
                  Save Changes
                </Button>
                <Button className={classes.deleteButton} onClick={handleDelete}>
                  Delete Category
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
