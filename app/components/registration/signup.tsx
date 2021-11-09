import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Select,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as Yup from 'yup';
import styles from './registration.module.scss';
import { IdmAuthnService } from '@lms-api/services';
import { decodeToken, msalAuthConfig } from '@util/msal-app.conifg';
import { IdmSignUpForm } from '@lms-api/models/idm.model';
import { lmsStyle } from 'styles/ui.variables';
import { useRecoilState } from 'recoil';
import { userInfoFormState } from 'store/authn.state';
import { useRouter } from 'next/router';
import LoadingView from '@module/elements/loading/loading-view';

const IndexView = () => {
  const [userInfoForm, setUserInfoForm] = useRecoilState(userInfoFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last name is required'),
    purpose: Yup.string().required('Purpose is required'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm<IdmSignUpForm>(
    formOptions
  );
  const { errors } = formState;

  const onNext = async (formData: IdmSignUpForm) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    setIsLoading(true);
    try {
      const { data:authResp, error } = await IdmAuthnService.signUp({
        idm: {
          email: formData.email,
          password: formData.password,
          roleCode: +formData.purpose,
        },
        user: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });
      if (error) {
        setIsLoading(false);
        setErrorMsg(error);
        return;
      }
      sessionStorage.setItem(msalAuthConfig.tokenKey, authResp.access_token);
      const auth = decodeToken();
      setUserInfoForm({
        ...userInfoForm,
        user: {
        ...userInfoForm?.user,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        uid: auth.uid,
        }
      });
      router.push('/registration');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMsg('Authentication failed!.');
      reset();
    }
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onNext)}>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
      <div className={styles.form__double}>
        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            First Name
          </FormLabel>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="firstName"
            {...register('firstName')}
            error={!!errors?.firstName?.message}
            helperText={errors?.firstName?.message}
          />
        </FormControl>
        <div className={styles.form__mr}></div>
        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Last Name
          </FormLabel>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="lastName"
            {...register('lastName')}
            error={!!errors?.lastName?.message}
            helperText={errors?.lastName?.message}
          />
        </FormControl>
      </div>

      <div className={styles.form__double}>
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
        <div className={styles.form__mr}></div>
        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Registration Type
          </FormLabel>
          <Select
            native
            name="purpose"
            variant="outlined"
            style={{ height: '40px' }}
            {...register('purpose')}
            IconComponent={ExpandMoreIcon}
          >
            <option
              value=""
              style={{ color: `${lmsStyle['base-secondary']} !important` }}
            ></option>
            <option value="2002">Organization</option>
            <option value="1101">Learner</option>
          </Select>
        </FormControl>
      </div>

      <div className={styles.form__mt}></div>

      <div className={styles.form__double}>
        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Create a Password
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
        <div className={styles.form__mr}></div>
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
      </div>
      <div className={styles.form__buttons}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.form__signUp}
        >
          Create Account
          <span style={{ marginTop: '7px', marginLeft: '20px' }}>
            <ArrowForwardIcon />
          </span>
        </Button>
      </div>

      <div className={styles.form__new}>
        <span>Already have an account?</span>
        <Link href={'/login'}>
          <a> Log in</a>
        </Link>
      </div>
    </form>
  );
};

export default IndexView;
