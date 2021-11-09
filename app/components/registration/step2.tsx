import { useStyles } from '@hook/useStyle';
import { Authentication } from '@lms-api/services';
import { FormControl, FormLabel, TextField, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { authnState, signUpStepState, userInfoFormState } from 'store';
import LoadingView from '@module/elements/loading/loading-view';
import styles from './registration.module.scss';
import { CorporateName } from '@util/app-utils';
import { AccountStatus } from '@lms-api/models/user-info.model';

export interface BusinessInputs {
  avatar: string;
  url: string;
  organizationName: string;
  organizationDescription: string;
  businessNumber: string;
  mobileNumber: string;
  address: {
    address1: string;
    address2: string;
    city: string;
    zipCode: string;
    state: string;
    country: string;
  };
}

const defaultInputValues = {
  avatar: undefined,
  url: undefined,
  organizationName: undefined,
  address: {
    address1: undefined,
    address2: undefined,
    city: undefined,
    zipCode: undefined,
    state: undefined,
    country: undefined,
  },
};

const Step2View = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [userInfoForm, setUserInfoForm] = useRecoilState(userInfoFormState);
  const [step, setStep] = useRecoilState(signUpStepState);
  const [authn] = useRecoilState(authnState);
  const { register, handleSubmit, formState, setValue } = useForm<
    BusinessInputs
  >({
    defaultValues: defaultInputValues,
  });
  const { errors } = formState;
  const { user } = userInfoForm ?? { user: null };

  if (!authn.userInfo) {
    window.location.href = '/';
  }

  useEffect(() => {
    if (authn.userInfo.type === AccountStatus.GUEST || authn.userInfo.organization) {
      setValue('organizationName', authn.userInfo.organization?.name ?? CorporateName);
      setValue('organizationDescription', authn.userInfo.organization?.description ?? 'LearnOrTeach Corporation.');
    }
    if (user) {
      setValue('organizationName', user.organization.name);
      setValue(
        'organizationDescription',
        user.organization.description
      );
    }
    if (user?.addresses?.length > 0) {
      setValue('address.address1', user.addresses[0].address1);
      setValue('address.address2', user.addresses[0].address2);
      setValue('address.city', user.addresses[0].city);
      setValue('address.zipCode', user.addresses[0].zipCode);
      setValue('address.state', user.addresses[0].state);
      setValue('address.country', user.addresses[0].country);
    }
  }, [user]);

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  const onNext = async (formData: BusinessInputs) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    if (userInfoForm?.subscription) {
      goNextPage();
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await Authentication.signUpAndUpdate({
        organization: {
          name: formData.organizationName,
          description: formData.organizationDescription,
          phoneNumber: formData.businessNumber,
        },
        userInfo: {
          id: authn.userInfo.id,
          homeNumber: formData.businessNumber,
          businessNumber: formData.businessNumber,
          mobileNumber: formData.mobileNumber,
          type: authn.userInfo.type,
          
        },
        address: {
          address1: formData.address.address1,
          address2: formData.address.address2,
          city: formData.address.city,
          zipCode: formData.address.zipCode,
          state: formData.address.state,
          country: formData.address.country,
          userId: authn.userInfo.id,
          organizationId: authn.userInfo.organizationId,
        },
      });


      if (error) {
        setIsLoading(false);
        setErrorMsg(error);
        return;
      }

      setUserInfoForm(data);

      setIsLoading(false);
      if (data.user.type === AccountStatus.GUEST) {
        window.location.href = '/';
      } else {
        goNextPage();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err.stack);
      setErrorMsg('Something went wrong. Internal server error');
    }
  };

  const goNextPage = () => {
    const items = step.items.map((x) => {
      if (x.id === step.step) {
        return { ...x, active: false, complete: true };
      }
      if (x.id === step.step + 1) {
        return { ...x, active: true };
      }
      return x;
    });
    setStep({ ...step, step: step.step + 1, items });
  };
  const onPrevious = () => {
    const items = step.items.map((x) =>
      x.id === step.step - 1 ? { ...x, active: true } : { ...x, active: false }
    );
    setStep({ ...step, step: step.step - 1, items });
  };

  const orgInfo = () => {
    if (authn.userInfo.type === AccountStatus.GUEST) {
      return <></>;
    }
    return (
      <>
        <div className="lms-input">
          <label>Company or Organisation Name</label>
          <input
            type="text"
            name="organizationName"
            readOnly={authn.userInfo.type === AccountStatus.GUEST}
            className={formState.errors?.organizationName?.message ? 'error' : ''}
            {...register('organizationName', { required: 'This field is required.' })}
          />
          {formState.errors?.organizationName?.message && <span>{formState.errors?.organizationName?.message}</span>}
        </div>

        <div className={styles.form__mt}></div>
        <div className="lms-input">
          <label>Company or Organisation Description</label>
          <input
            type="text"
            name="organizationDescription"
            readOnly={authn.userInfo.type === AccountStatus.GUEST}
            className={formState.errors?.organizationDescription?.message ? 'error' : ''}
            {...register('organizationDescription', { required: 'This field is required.' })}
          />
          {formState.errors?.organizationDescription?.message && <span>{formState.errors?.organizationDescription?.message}</span>}
        </div>
      </>
    );
  };

  return (
    <>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
      <h2 className={styles.title}>Business Information</h2>
      <form className={styles.form} onSubmit={handleSubmit(onNext)}>
        {orgInfo()}
        <div>
          <h2 className={styles.form__doubleTitle}>Business Address</h2>
          <div className={styles.form__double}>
            <FormControl fullWidth className={styles.form__textInput}>
              <FormLabel className={styles.form__textInput__label}>
                Address
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                size="small"
                className={'classes.textDate'}
                name="address.address1"
                {...register('address.address1', {
                  required: 'This field is required.',
                })}
                error={!!errors?.address?.address1?.message}
                helperText={errors?.address?.address1?.message}
              />
            </FormControl>
            <div className={styles.form__mr}></div>
            <FormControl fullWidth className={styles.form__textInput}>
              <FormLabel className={styles.form__textInput__label}>
                Address 2
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                size="small"
                className={'classes.textDate'}
                name="address.address2"
                {...register('address.address2', {
                  required: false,
                })}
                error={!!errors?.address?.address2?.message}
                helperText={errors?.address?.address2?.message}
              />
            </FormControl>
          </div>
          <div className={styles.form__double}>
            <FormControl fullWidth className={styles.form__textInput}>
              <FormLabel className={styles.form__textInput__label}>
                City
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                size="small"
                className={'classes.textDate'}
                name="address.city"
                {...register('address.city', {
                  required: 'This field is required.',
                })}
                error={!!errors?.address?.city?.message}
                helperText={errors?.address?.city?.message}
              />
            </FormControl>
            <div className={styles.form__mr}></div>
            <FormControl fullWidth className={styles.form__textInput}>
              <FormLabel className={styles.form__textInput__label}>
                Zip Code
              </FormLabel>
              <TextField
                type="text"
                variant="outlined"
                size="small"
                className={'classes.textDate'}
                name="address.zipCode"
                {...register('address.zipCode', {
                  required: 'This field is required.',
                })}
                error={!!errors?.address?.zipCode?.message}
                helperText={errors?.address?.zipCode?.message}
              />
            </FormControl>
          </div>
        </div>

        <FormControl fullWidth className={styles.form__textInput}>
          <FormLabel className={styles.form__textInput__label}>
            Country
          </FormLabel>
          <TextField
            type="text"
            variant="outlined"
            size="small"
            className={'classes.textDate'}
            name="address.country"
            {...register('address.country', {
              required: 'This field is required.',
            })}
            error={!!errors?.address?.country?.message}
            helperText={errors?.address?.country?.message}
          />
        </FormControl>

        <div className={styles.form__double + ' ' + styles.form__mt}>
          <FormControl fullWidth className={styles.form__textInput}>
            <FormLabel className={styles.form__textInput__label}>
              Business Phone Number
            </FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              className={'classes.textDate'}
              name="businessNumber"
              {...register('businessNumber', {
                required: false,
              })}
              error={!!errors?.businessNumber?.message}
              helperText={errors?.businessNumber?.message}
            />
          </FormControl>
          <div className={styles.form__mr}></div>
          <FormControl fullWidth className={styles.form__textInput}>
            <FormLabel className={styles.form__textInput__label}>
              Mobile Phone Number
            </FormLabel>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              className={'classes.textDate'}
              name="mobileNumber"
              {...register('mobileNumber', {
                required: false,
              })}
              error={!!errors?.mobileNumber?.message}
              helperText={errors?.mobileNumber?.message}
            />
          </FormControl>
        </div>

        <div className={styles.form__buttons}>
          <Button
            variant="contained"
            type="submit"
            className={classes.primaryButton}
          >
            Next
            <span style={{ marginTop: '7px' }}>
              {' '}
              <ArrowForwardIcon />
            </span>
          </Button>
          <div className={styles.form__mr}></div>
          <Button
            type="reset"
            variant="contained"
            className={classes.secondaryButton}
            onClick={onPrevious}
          >
            Back
          </Button>
        </div>
      </form>
    </>
  );
};

export default Step2View;
