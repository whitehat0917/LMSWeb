import React from 'react';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Button, InputAdornment, MenuItem } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Flags from 'country-flag-icons/react/3x2';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() => ({
  inputAndorsment: {
    padding: '16px',
    backgroundColor: '#DCE0E3',
  },

  standardbtn: {
    background: `${lmsStyle['base-tertiary-light']} 0% 0% no-repeat padding-box`,
    borderRadius: '3px',
    marginTop: '20px',
    opacity: '1px',
    textTransform: 'capitalize',
    color: lmsStyle['base-tertiary'],
    border: 'none',
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
  },

  inputAndorsment1: {
    padding: '16px',
    backgroundColor: 'white',
  },

  img: {
    marginTop: '-5px',
    marginLeft: '10px',
  },
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

  box: {
    width: '100%',
    height: '100%',
    padding: '40px',
    borderLeft: `2px solid ${lmsStyle['base-gray-200']}`,
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
  cardAction: {
    padding: 0,
    marginTop: '30px',
  },
  cardActionButton: {
    padding: '10px 30px',
    font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
    color: lmsStyle['color-white'],
  },
}));
const BillingDetails = () => {
  const classes = useStyles();
  const data = {
    email: 'jeremy.garrett@mail.com',
    firstName: 'Rachel',
    lastName: 'Griffin',
    phoneNumber: '(093)682-7273',
    companyName: '',
    address1: '',
    address2: '',
    city: '',
    zipCode: '',
    country: '',
  };

  function handleSubmit(event) {
    event.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(Object.fromEntries(new FormData(event.target)));
  }

  return (
    <>
      <Paper className={classes.box} elevation={0}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} md={10} xl={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextInputOutline
                    name="email"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label="Billing Email"
                    size="small"
                    defaultValue={data.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="firstName"
                    label="First Name"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    defaultValue={data.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="lastName"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label="Last Name"
                    size="small"
                    defaultValue={data.lastName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="phoneNumber"
                    label="Phone Number"
                    size="small"
                    classes={{
                      root: classes.phoneno,
                    }}
                    defaultValue={data.phoneNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          classes={{
                            root: classes.inputAndorsment,
                          }}
                        >
                          <Flags.US
                            title="United States"
                            width="21px"
                            height="14px"
                          />
                          <span className={classes.img}>
                            <img src="/images/arrow.svg" />
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="companyName"
                    label="Company Name"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    defaultValue={data.companyName}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '30px' }}>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="addresses.address1"
                    label="Buisness Address"
                    classes={{
                      root: classes.phoneno,
                    }}
                    size="small"
                    defaultValue={data.address1}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="addresses.address2"
                    label=" "
                    defaultValue={data.address2}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="addresses.city"
                    defaultValue={data.city}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="addresses.zipCode"
                    label=""
                    defaultValue={data.zipCode}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextInputOutline
                    name="addresses.country"
                    id="select"
                    classes={{
                      root: classes.phoneno,
                    }}
                    label=""
                    defaultValue={data.country}
                    select
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          classes={{
                            root: classes.inputAndorsment1,
                          }}
                        >
                          <Flags.US
                            title="United States"
                            width="20px"
                            height="20px"
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem
                      value="United States"
                      classes={{ root: classes.menuItem }}
                    >
                      United States
                    </MenuItem>
                  </TextInputOutline>
                </Grid>
              </Grid>
              <CardActions className={classes.cardAction}>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.cardActionButton}
                  style={{ backgroundColor: lmsStyle['base-primary'] }}
                >
                  Save Changes
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default BillingDetails;
