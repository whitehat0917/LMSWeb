import { FormControl, FormLabel, TextField, Button } from '@material-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styles from './registration.module.scss';
import LoadingView from '@module/elements/loading/loading-view';
import { msalAuthConfig } from '@util/msal-app.conifg';
import { IdmAuthnService } from '@lms-api/services';
import { useRouter } from 'next/router';
import { GlobalUrls } from '@util/app-utils';

const IndexView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(null);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, setValue } = useForm<{
    email: string;
    password: string;
  }>(formOptions);
  const { errors } = formState;

  const onNext = async (formData: { email: string; password: string }) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    setIsLoading(true);
    try {
      const { data:authResp, error } = await IdmAuthnService.signIn(
        formData.email,
        formData.password
      );
      setIsLoading(false);
      if (error) {
        setErrorMsg(error);
        return;
      }
      resetForm();
      if (authResp.access_token && !authResp?.shouldResetPassword) {
        sessionStorage.setItem(msalAuthConfig.tokenKey, authResp.access_token);
        window.location.href = GlobalUrls.INDEX;
      } else if (authResp?.passwordExpired || authResp?.shouldResetPassword) {
        sessionStorage.setItem(msalAuthConfig.emailKey, formData.email);
        router.push(GlobalUrls.NEWPASSWORD);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg('Authentication failed!.');
      resetForm();
    }
  };

  const resetForm = () => {
    setValue('email', null);
    setValue('password', null);
  };
  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onNext)}>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
      <FormControl fullWidth className={styles.form__textInput}>
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
      </FormControl>
      <div className={styles.form__mt}></div>
      <FormControl fullWidth className={styles.form__textInput}>
        <FormLabel className={styles.form__textInput__label}>
          Password
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
      <div className={styles.form__forgotPassword}>
        <Link href={'/forgot'}>
          <a>Forgot Password?</a>
        </Link>
      </div>

      <div className={styles.form__buttons}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.form__signIn}
        >
          SIGN IN
        </Button>
      </div>

      <div className={styles.form__new}>
        <span>Don’t have an account yet?</span>
        <Link href={'/signup'}>
          <a> Join Learn or Teach</a>
        </Link>
      </div>
    </form>
  );
};

export default IndexView;
