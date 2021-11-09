import { FormControl, FormLabel, TextField, Button } from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './registration.module.scss';
import LoadingView from '@module/elements/loading/loading-view';
import { IdmAuthnService } from '@lms-api/services';
import { useRecoilState } from 'recoil';
import { authnState } from 'store';
import { msalAuthConfig } from '@util/msal-app.conifg';

const IndexView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authn] = useRecoilState(authnState);
  const [errorMsg, setErrorMsg] = useState(null);
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Current Password is required'),
        password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, setValue } = useForm<{
    currentPassword: string;password: string;confirmPassword: string;
  }>(formOptions);
  const { errors } = formState;

  const onNext = async (formData: { currentPassword: string;password: string;confirmPassword: string; }) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    setIsLoading(true);
    try {
      const email = sessionStorage.getItem(msalAuthConfig.emailKey);
      const { data, error } = await IdmAuthnService.changePassword(
        {
          email: email,
          newPassword: formData.password,
          oldPassword: formData.currentPassword
        }
      );
      setIsLoading(false);
      if (error) {
        setErrorMsg(error);
        return;
      }

      resetForm();
        sessionStorage.removeItem(msalAuthConfig.emailKey);
        sessionStorage.setItem(msalAuthConfig.tokenKey, data.access_token);
      window.location.href = '/';

    } catch (error) {
      setIsLoading(false);
      setErrorMsg('Password Reset failed!.');
      resetForm();
    }
  };

  const resetForm = () => {
    setValue('currentPassword', null);
    setValue('confirmPassword', null);
    setValue('password', null);
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onNext)}>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Current Password
          </FormLabel>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="currentPassword"
            {...register('currentPassword')}
            error={!!errors?.currentPassword?.message}
            helperText={errors?.currentPassword?.message}
          />
        </FormControl>
      <div className={styles.form__mt}></div>
              <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            New Password
          </FormLabel>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="password"
            {...register('password')}
            error={!!errors?.password?.message}
            helperText={errors?.password?.message}
          />
        </FormControl>
      <div className={styles.form__mt}></div>
              <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Verify Password
          </FormLabel>
          <TextField
            type="password"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="confirmPassword"
            {...register('confirmPassword')}
            error={!!errors?.confirmPassword?.message}
            helperText={errors?.confirmPassword?.message}
          />
        </FormControl>
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
