import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
} from '@material-ui/core';
import styles from '../coursemanagement.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { CategoryFactory, SubjectFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { useRouter } from 'next/router';
import { Subject as SubjectDto } from '@lms-api/models';
import LoadingView from '@module/elements/loading/loading-view';
import { useRecoilValue } from 'recoil';
import { useForm } from 'react-hook-form';
import { courseCategoryState } from 'store/course';
import { useEffect } from 'react';

const useStyle = makeStyles((theme) =>
  createStyles({
    buttonContent: {
      marginTop: '22px',
      paddingLeft: '8px',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
      '&:hover': {
        background: `${lmsStyle['base-accent']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        margin: '7px 0',
      },
    },
  })
);

export default function EditSubjectModal({
  handleClose,
  selectedSubject,
  organizationId
}) {
  const classes = useStyle();
  const courseCategory = useRecoilValue(courseCategoryState);
  const { register, handleSubmit, formState, setValue } = useForm<
    { name: string; }
    >();
  
  useEffect(() => {
    if (selectedSubject) {
      setValue('name', selectedSubject.name);
    }
  }, [selectedSubject])

  const queryClient = useQueryClient();
  const subjectQuery = queryKeys.getSubjectsByCategoryId(organizationId);

  const categoryQuery = useQuery(
    queryKeys.getCategoriesByOrgId(organizationId),
    () => CategoryFactory.getAll(organizationId)
  );

  const createSubjectMutation = useMutation(SubjectFactory.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(subjectQuery);
    },
  });

  const updateSubjectMutation = useMutation(
    ({ ...updateData }: Partial<SubjectDto>) =>
      SubjectFactory.update(selectedSubject.id, updateData)
  );

  const deleteSubjectMutation = useMutation(
    (id: string) => SubjectFactory.del(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(subjectQuery);
      },
    }
  );

  const router = useRouter();

  const onSubmit = async (formData: { name: string; }) => {
    if (selectedSubject?.id) {
      updateSubjectMutation.mutate({
        name: formData.name,
      });
    } else {
      createSubjectMutation.mutate({
        name: formData.name,
        categoryId: courseCategory.id,
      });
    }
    router.push(`/admin/courses/subcategories/${organizationId}`);
  }

  const handleDelete = () => {
    const result = confirm('Are you sure want to delete');
    if (result) {
      deleteSubjectMutation.mutate(selectedSubject.id);
      router.push(`/admin/courses/subcategories/${organizationId}`);
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          {
            categoryQuery.isLoading && (<LoadingView autoHeight={false} />)
          }
          {
            categoryQuery.data && (<>
              <div className={styles.header}>
                <h1 className={styles.editCategoryText}>Edit Subject</h1>
                <div className={styles.close} onClick={handleClose}>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={styles.modalContent} spacing={2}>
                  <Grid item xs={12}>
                    <div className="lms-input">
                      <label>Category</label>
                      <input
                        type="text"
                        name="name"
                        readOnly={true}
                        value={courseCategory.name}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="lms-input">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className={formState.errors?.name?.message ? 'error' : ''}
                        {...register('name', { required: 'This field is required' })}
                      />
                      {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
                    </div>

                  </Grid>
                  <Grid className={classes.buttonContent}>
                    <Button type="submit" className={classes.saveButton}>
                      Save Changes
                    </Button>
                    <Button onClick={handleDelete} className={classes.deleteButton}>
                      Delete Subject
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>)
          }

        </Paper>
      </Grid>
    </Grid>
  );
}
