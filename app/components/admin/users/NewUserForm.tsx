import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Button, InputAdornment, makeStyles, MenuItem } from '@material-ui/core';
import Flags from 'country-flag-icons/react/3x2';
import { lmsStyle } from 'styles/ui.variables';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import _ from 'lodash';
import { useRecoilState } from 'recoil';
import { authnState } from 'store';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Authentication } from '@lms-api/services';
import LoadingView from '@module/elements/loading/loading-view';
import { countries } from '@util/app-utils';
import useToastMessages from '@hook/useToastMessages';
import { ToastMessageType } from 'types/elements/ToastMessage';

const useStyles = makeStyles((theme) => ({
  form: {
    background: 'white',
    padding: '30px 30px',
    maxHeight: '700px',
    overflowX: 'scroll',
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  loader: {
    background: 'white',
    padding: '130px',
    maxWidth: '500px',
    maxHeight: '500px'
  },
  phoneno: {
    '& > div': {
      paddingLeft: '0px',
    },
    '&   input': {
      color: lmsStyle['base-secondary'],
    },
    font: `normal normal 600 13px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  inputAndorsment: {
    padding: '16px',
    backgroundColor: '#DCE0E3',
  },
  inputAndorsment1: {
    padding: '16px',
    backgroundColor: 'white',
  },

  img: {
    marginTop: '-5px',
    marginLeft: '10px',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },

  avtar: {
    color: 'transparent',
    width: 'auto',
    height: 'auto',
    objectFit: 'none',
    textAlign: 'center',
    textIndent: '10000px',
  },
  pname: {
    font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  menuItem: {
    font: `normal normal 600 13px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  headerItem: {
    font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
    marginBottom: '35px'
  },
  subTitle: {
    fontFamily: lmsStyle['base-font'],
    color: lmsStyle['base-secondary'],
    marginBottom: '5px',
    marginTop: '30px'
  },
  error: {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '12px',
    color: 'red',
    margin: '0 0 30px 0'
  },
  saveButton: {
    width: '240px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '55px',
    },
  },
  cancelButton: {
    width: '240px',
    marginLeft: '20px',
    [theme.breakpoints.down('md')]: {
      margin: '16px 0 30px 55px'
    },
  }
}));

export class UserFormInput {
  firstName: string;
  lastName: string;
  email: string;
  businessNumber: string;
  mobileNumber?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  roleCode: string;
}

export default function UserForm({ close, refresh }) {
  const [authn] = useRecoilState(authnState);
  const toastMessages = useToastMessages();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);


  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last name is required'),
    mobileNumber: Yup.string().required('Phone Number is required').length(10, 'Phone Number should be 10 digits'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    roleCode: Yup.string().required('Role is required'),
    businessNumber: Yup.string().required('Phone Number is required').length(10, 'Phone Number should be 10 digits'),

    // address1?:Yup.string(),
    // address2?: Yup.string(),
    // city?: Yup.string(),
    // state?: string;
    // zipCode?: string;
    // country?: Yup.string(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset } = useForm<
    UserFormInput
  >(formOptions);

  const classes = useStyles();

  const onNext = async (formData: UserFormInput) => {
    setErrorMsg(null);
    if (!formData) {
      return;
    }
    setIsLoading(true);

    try {
      let address = null;
      if (formData.address1 && formData.city && formData.zipCode && formData.state) {
        address = {
          address1: formData.address1,
          address2: formData.address2,
          city: formData.city,
          zipCode: formData.zipCode,
          state: formData.state,
          country: formData.country,
          userId: 0,
          organizationId: authn.userInfo.organizationId,
        };
      }
      const { data, error } = await Authentication.addNewUser({
        roleCode: formData.roleCode === 'Learner' ? 2102 : 2101,
        userInfo: {
          organizationId: authn.userInfo.organizationId,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          businessNumber: formData.businessNumber
        },
        address,
      });
      if (data) {
        refresh(true);
        toastMessages.push({
          message:
            `New ${data.type} was successfully created`,
        });
      }
      setIsLoading(false);
      if (error) {
        setErrorMsg(error);
        return;
      }

      reset({});
      close(false);

    } catch (err) {
      setIsLoading(false);
      console.log(err.stack);
      setErrorMsg('Something went wrong. Internal server error');
      toastMessages.push({
        type: ToastMessageType.SUCCESS,
        message:
          `Something went wrong. Internal server error`,
      });
    }

  };

  if (isLoading) {
    return (<div className={classes.loader}>
      <LoadingView autoHeight={false} />
    </div>);
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit(onNext)}>
        <h1 className={classes.headerItem}>Add New User</h1>
        {errorMsg && <span className={classes.error}>{errorMsg}</span>}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className={formState.errors?.firstName?.message ? 'error' : ''}
                {...register('firstName')}
              />
              {formState.errors?.firstName?.message && <span>{formState.errors?.firstName?.message}</span>}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className={formState.errors?.lastName?.message ? 'error' : ''}
                {...register('lastName')}
              />
              {formState.errors?.lastName?.message && <span>{formState.errors?.lastName?.message}</span>}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                className={formState.errors?.email?.message ? 'error' : ''}
                {...register('email')}
              />
              {formState.errors?.email?.message && <span>{formState.errors?.email?.message}</span>}
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '30px' }}>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                className={formState.errors?.mobileNumber?.message ? 'error' : ''}
                {...register('mobileNumber')}
              />
              {formState.errors?.mobileNumber?.message && <span>{formState.errors?.mobileNumber?.message}</span>}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Phone Number</label>
              <input
                type="tel"
                name="businessNumber"
                {...register('businessNumber')}
                className={formState.errors?.businessNumber?.message ? 'error' : ''}
              />
              {formState.errors?.businessNumber?.message && <span>{formState.errors?.businessNumber?.message}</span>}
            </div>
          </Grid>
        </Grid>

        <h3 className={classes.subTitle}>Buisness Address</h3>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Address</label>
              <input
                type="text"
                name="address1"
                {...register('address1')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Address 2</label>
              <input
                type="text"
                name="address2"
                {...register('address2')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>City</label>
              <input
                type="text"
                name="city"
                {...register('city')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>Zip Code</label>
              <input
                type="text"
                name="zipCode"
                {...register('zipCode')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="lms-input">
              <label>State</label>
              <input
                type="text"
                name="state"
                {...register('state')}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          
          <div className="lms-input">
            <label>Country</label>
            <select name="country"
              {...register('country')}>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>{country.label}</option>
            ))}
            </select>
            </div>
          
          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: '30px' }}>
          <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>User Role</label>
            <select name="roleCode"
              {...register('roleCode')}>
              {_.map(['Learner', 'Educators'], (label, index) => (
                <option key={index} value={label}>{label}</option>
            ))}
            </select>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '30px' }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.saveButton}
          >
            Save
          </Button>
          <Button
            type="reset"
            variant="contained"
            className={classes.cancelButton}
            onClick={() => close(false)}
          >
            Cancel
          </Button>
        </Grid>
      </form>
    </>
  );
}
