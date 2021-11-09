import { FormControl, FormLabel, TextField, Button } from '@material-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './registration.module.scss';
import LoadingView from '@module/elements/loading/loading-view';
import { IdmAuthnService } from '@lms-api/services';

const IndexView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, setValue, reset } = useForm<{
    email: string;
  }>(formOptions);
  const { errors } = formState;

  useEffect(() => {
    reset();
    setErrorMsg(null);
  }, []);

  const onNext = async (formData: { email: string; }) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    setIsLoading(true);
    try {
      const { data, error } = await IdmAuthnService.resetPassword(
        formData.email
      );
      setIsLoading(false);
      if (error) {
        setErrorMsg(error);
        return;
      }

      setEmail(formData.email);
      resetForm();
      console.log(data);
      
    } catch (error) {
      setIsLoading(false);
      setErrorMsg('Password Reset failed!.');
      resetForm();
    }
  };

  const resetForm = () => {
    setValue('email', null);
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  if (email) {
    return (<>
      <div className={styles.resetPassword}>
        <h2>Email sent!</h2>
        <p>Email has been sent to {email} with instructions on resetting your password.</p>
        <div className={styles.form__buttons}>
        <Button
            variant="contained"
            color="primary"
            onClick={() => window.location.href = '/login' }
            className={styles.form__signIn}
          >
            Back to Sign In
        </Button>
        </div>
      </div>
    </>);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onNext)}>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
          <div className="lms-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={errors?.email?.message ? 'error' : ''}
              {...register('email', { required: 'This field is required.' })}
            />
            {errors?.email?.message && <span>{errors?.email?.message}</span>}
          </div>
      {/* <FormControl fullWidth className={styles.form__textInput}>
        <FormLabel className={styles.form__textInput__label}>Email</FormLabel>
        <TextField
          type="email"
          variant="outlined"
          size="small"
          className={'classes.textDate'}
          name="email"
          {...register('email')}
          error={!!errors?.email?.message}
          helperText={errors?.email?.message}
        />
      </FormControl> */}
      <div className={styles.form__mt}></div>
      <div className={styles.form__buttons}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.form__signIn}
        >
          Reset via Email
        </Button>
      </div>
    </form>
  );
};

export default IndexView;
