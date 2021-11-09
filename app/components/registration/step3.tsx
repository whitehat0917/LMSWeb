import { useStyles } from '@hook/useStyle';
import { Survey } from '@lms-api/models/survey.model';
import { Authentication } from '@lms-api/services';
import {
  Button,
} from '@material-ui/core';
import { CheckCircleRounded } from '@material-ui/icons';
import { GlobalUrls } from '@util/app-utils';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { authnState, signUpStepState, userSurveyFormState } from 'store';
import LoadingView from '@module/elements/loading/loading-view';
import { lmsStyle } from 'styles/ui.variables';
import styles from './registration.module.scss';

const Step3View = () => {
  const classes = useStyles();
  const [survey, setSurvey] = useRecoilState(userSurveyFormState);
  const [step, setStep] = useRecoilState(signUpStepState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [authn] = useRecoilState(authnState);
  const { register, handleSubmit, setValue, formState } = useForm<Survey>({
    defaultValues: {
      businessType: undefined,
      purpose: undefined,
      audianceSize: undefined,
      purposeDescription: undefined,
    },
  });
  const { errors } = formState;

  if (!authn.userInfo) {
    window.location.href = '/';
  }

  useEffect(() => {
    if (survey) {
      setValue('businessType', survey.businessType);
      setValue('purpose', survey.purpose);
      setValue('audianceSize', survey.audianceSize);
      setValue('purposeDescription', survey.purposeDescription);
    }
  }, [survey]);

  const submitData = async (formData: Survey) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await Authentication.saveSurvey(
        {
          businessType: formData.businessType,
          purpose: formData.purpose,
          audianceSize: formData.audianceSize,
          purposeDescription: formData.purposeDescription,
          userId: authn.userInfo.id,
        },
        !survey?.id
      );
      
      if (error) {
        setErrorMsg(error);
        return;
      }

      setSurvey({
        businessType: formData.businessType,
        purpose: formData.purpose,
        audianceSize: formData.audianceSize,
        purposeDescription: formData.purposeDescription,
        userId: authn.userInfo.id,
        id: data?.id,
      });

      const items = step.items.map((x) => {
        if (x.id === step.step) {
          return { ...x, active: true, complete: true };
        }
        return x;
      });
      setStep({ ...step, step: step.step, items });

      setIsLoading(false);
      window.location.href = GlobalUrls.INDEX;
    } catch (err) {
      console.log(err.stack);
      setErrorMsg('Something went wrong. Internal server error');
      setIsLoading(false);
    }
  };

  const onPrevious = () => {
    const items = step.items.map((x) =>
      x.id === step.step - 1 ? { ...x, active: true } : { ...x, active: false }
    );
    setStep({ ...step, step: step.step - 1, items });
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <>
      {errorMsg && <span className={styles.error}>{errorMsg}</span>}
      <h2 className={styles.title}>Additional Questions</h2>
      <form className={styles.form} onSubmit={handleSubmit(submitData)}>
        <div className="lms-input">
            <label>Which industry is your business in?</label>
            <input
              type="text"
            name="businessType"
              className={formState.errors?.businessType?.message ? 'error' : ''}
              {...register('businessType', { required: 'This field is required.' })}
            />
            {formState.errors?.businessType?.message && <span>{formState.errors?.businessType?.message}</span>}
        </div>
        
        <div className={styles.form__mt}></div>
          <div className="lms-input">
            <label>Which industry is your business in?</label>
            <select name="purpose"
              {...register('purpose')}>
              
            <option
              value=""
              style={{ color: `${lmsStyle['base-secondary']} !important` }}
            ></option>
            <option value="Sell Courses">Sell Courses</option>
            <option value="Train Employees">Train Employees</option>
            <option value="Train Customers">Train Customers</option>
            <option value="Train Partners">Train Partners</option>
            <option value="Take it for a spin">Take it for a spin</option>
            </select>
        </div>

        <div className={styles.form__mt}></div>
          <div className="lms-input">
            <label>What is the size of your audience</label>
            <select name="audianceSize"
              {...register('audianceSize')}>
              
            <option value=""></option>
            <option value="0, I am just getting started">
              0, I am just getting started
            </option>
            <option value="1-100">1-100</option>
            <option value="101-1000">101-1000</option>
            <option value="1001-10000">1001-10000</option>
            <option value="100000+">100000+</option>
            </select>
        </div>
        
        <div className={styles.form__mt}></div>
        <div className="lms-input">
            <label>Tell us more about yourself and your goals</label>
            <input
              type="text"
            name="purposeDescription"
              className={formState.errors?.purposeDescription?.message ? 'error' : ''}
              {...register('purposeDescription', { required: 'This field is required.' })}
            />
            {formState.errors?.purposeDescription?.message && <span>{formState.errors?.purposeDescription?.message}</span>}
        </div>

        <div className={styles.form__mt}></div>
        <div className={styles.form__buttons}>
          <Button
            variant="contained"
            type="submit"
            className={classes.primaryButton}
          >
            Finish
            <span style={{ marginTop: '7px' }}>
              <CheckCircleRounded style={{ marginLeft: '10px' }} />
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

export default Step3View;
