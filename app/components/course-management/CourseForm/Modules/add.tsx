/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleFactory } from '@lms-api/factory';
import {
  Module,
} from '@lms-api/models';
import {
  Button,
  DialogActions,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { courseFormState } from 'store/course';
import { useStyles } from './ui';

const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const ModuleAdd = ({ module, moduleChange, dialogOpened, openDialog }) => {
  const classes = useStyles();
  const [courseFormData, setCourseFormData] = useRecoilState(
    courseFormState
  );

  const { register, formState, reset, setValue, handleSubmit } = useForm<{
    name: string;
    description: string;
  }>();

  useEffect(() => {
    if (module?.id && dialogOpened) {
      setValue('name', module.name);
      setValue('description', module.description);

    } else {
      reset({});
    }
  }, [dialogOpened]);

  const closeDiaglog = () => {
    moduleChange({ ...module, id: undefined, name: undefined, description: undefined });
    openDialog(false);
  }

  const onSubmit = async (data: {
    name: string;
    description: string;
  }) => {
    moduleChange({ ...module, id: undefined, name: undefined, description: undefined });
    try {
      if (!module.id) {
        const response = await ModuleFactory.create({
          ...module,
          name: data.name,
          description: data.description
        });
        updateModule(response, true);
      } else {
        const response = await ModuleFactory.update(module.id, {
          name: data.name,
          description: data.description
        });
        updateModule(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateModule = (data: Module, edit = false) => {
    if (!data) {
      return;
    }
    console.log("----")
    let modules = courseFormData.modules ?? [];

    if (edit) {
      modules = modules.filter(x => x.id !== data.id);
      modules.push(data);
    }

    modules.push(data);
    console.log(modules)
    console.log({ ...courseFormData, modules })
    setCourseFormData({ ...courseFormData, modules });
    closeDiaglog();
  }

  return (
    <>
      <Dialog
        className={classes.boxDialog}
        onClose={closeDiaglog}
        aria-labelledby="customized-dialog-title"
        open={dialogOpened}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle
            classes={classes}
            onClose={closeDiaglog}
            className={classes.title}
          >
            {module?.id ? 'Edit Module' : 'Create New Module'}
          </DialogTitle>

          <DialogContent>
            <div className="lms-input">
              <label>Name</label>
              <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
              {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
            </div>

            <div className="lms-input">
              <label htmlFor="description">Description</label>
              <textarea name="description" {...register('description')} id="description" rows={6}></textarea>
            </div>

          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              type="submit"
              className={classes.coloredButton1}
              variant="outlined"
            >
              {module?.id ? 'Update Module' : 'Create New Module'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ModuleAdd;
