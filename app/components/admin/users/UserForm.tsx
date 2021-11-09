import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';
import _ from 'lodash';
import { countries } from '@util/app-utils';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
  phoneno: {
    '& > div': {
      paddingLeft: '0px',
    },
    '&   input': {
      color: lmsStyle['base-secondary'],
    },
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
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
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
}));
export default function UserForm({ register, setValue, formState, address, user }) {
  const classes = useStyles();
  useEffect(() => {
    if (address) {
      setValue('address.address1', address.address1);
      setValue('address.address2', address.address2);
      setValue('address.city', address.city);
      setValue('address.zipCode', address.zipCode);
      setValue('address.state', address.state);
      setValue('address.country', address.country);
    }
    if (user) {
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('email', user.email);
      setValue('mobileNumber', user.mobileNumber);
      setValue('businessNumber', user.businessNumber);
      setValue('active', user.active ? 'Active' : 'Inactive');
      setValue('type', user.type === 'STUDENT' ? 'Learner' : 'Educator');
    }
  }, [address, user])
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className={formState.errors?.firstName?.message ? 'error' : ''}
              {...register('firstName', { required: 'This field is required.' })}
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
              {...register('lastName', { required: 'This field is required.' })}
            />
            {formState.errors?.lastName?.message && <span>{formState.errors?.lastName?.message}</span>}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className={formState.errors?.email?.message ? 'error' : ''}
              {...register('email', { required: 'This field is required.' })}
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
              min={10}
              maxLength={10}
              name="mobileNumber"
              className={formState.errors?.mobileNumber?.message ? 'error' : ''}
              {...register('mobileNumber', { required: 'This field is required.' })}
            />
            {formState.errors?.mobileNumber?.message && <span>{formState.errors?.mobileNumber?.message}</span>}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>Phone Number</label>
            <input
              type="tel"
              min={10}
              maxLength={10}
              name="businessNumber"
              className={formState.errors?.businessNumber?.message ? 'error' : ''}
              {...register('businessNumber')}
            />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: '30px' }}>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>Address</label>
            <input
              type="text"
              name="address.address1"
              {...register('address.address1')}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>Address 2</label>
            <input
              type="text"
              name="address.address2"
              {...register('address.address2')}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>City</label>
            <input
              type="text"
              name="address.city"
              {...register('address.city')}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>Zip Code</label>
            <input
              type="numeric"
              name="address.zipCode"
              {...register('address.zipCode')}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>State</label>
            <input
              type="text"
              name="address.state"
              {...register('address.state')}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          
          <div className="lms-input">
            <label>Country</label>
            <select name="address.country"
              {...register('address.country')}>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>{country.label}</option>
            ))}
            </select>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '30px' }}>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>User Role</label>
            <select name="type"
              className={formState.errors?.type?.message ? 'error' : ''}
              {...register('type', { required: 'This field is required.' })}
            >
              <option value="Learner">Learner</option>
              <option value="Educator">Educator</option>
            </select>
            {formState.errors?.type?.message && <span>{formState.errors?.type?.message}</span>}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="lms-input">
            <label>User Status</label>
            <select name="active"
              className={formState.errors?.active?.message ? 'error' : ''}
              {...register('active', { required: 'This field is required.' })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {formState.errors?.active?.message && <span>{formState.errors?.active?.message}</span>}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
