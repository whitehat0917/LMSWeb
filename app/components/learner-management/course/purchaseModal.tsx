import React from 'react';
import { useRouter } from 'next/router';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Grid,
  TextField,
  makeStyles,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { countries } from '../../../data/mock';

const styles = () =>
  createStyles({
    root: {
      margin: 0,
      padding: '24px',
    },
    closeButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      color: 'gray',
    },
    largeText: {
      fontSize: '14px',
      color: 'var(--color-primary-dark)',
      lineHeight: '20px',
      fontWeight: 'bold',
    },
    modalTitle: {
      backgroundColor: 'var(--base-gray-100)',
      margin: 0,
      padding: '12px 24px',
    },
  });
const useStyle = makeStyles(() => ({
  gridRoot: {
    padding: '4px 0',
  },
  input: {
    '& > div': {
      marginTop: '20px',
      fontSize: '12px',
      '& > input, & > textarea': {
        border: '1px solid var(--base-gray-300)',
        borderRadius: '5px',
        padding: '8px',
      },
      '& > select': {
        paddingTop: '9px',
        paddingBottom: '9px',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& > label': {
      fontSize: '10px',
      color: 'var(--base-gray-500)',
      transform: 'translate(0) scale(1)',
      fontWeight: 'bold',
    },
  },
  radio: {
    width: 'fit-content',
    marginRight: '0',
    '& > span': {
      fontSize: '10px',
      color: 'var(--color-primary-dark) !important',
      padding: '6px',
    },
  },
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
  largeText: {
    fontSize: '14px',
    color: 'var(--color-primary-dark)',
    lineHeight: '20px',
    fontWeight: 'bold',
  },
  paymentImage: {
    height: '20px',
  },
  button: {
    backgroundColor: 'var(--color-primary-dark)',
    fontSize: '13px',
    color: 'white',
    padding: '6px 20px',
  },
}));

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.modalTitle} {...other}>
      <Typography className={classes.largeText}>{children}</Typography>
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
});

const DialogContent = withStyles(() => ({
  root: {
    padding: '24px',
  },
}))(MuiDialogContent);

interface State {
  name: string;
  address: string;
  country: string;
  zip: string;
  payment: string;
  card: string;
  expiration: string;
  cvc: string;
  offer: string;
}

export default function PurchaseModal(props) {
  const router = useRouter();
  const classes = useStyle();
  const [values, setValues] = React.useState<State>({
    name: '',
    address: '',
    country: '',
    zip: '',
    payment: '',
    card: '',
    expiration: '',
    cvc: '',
    offer: '',
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePurchase = () => {
    router.push('/student/learning/course');
  };

  return (
    <div>
      <Dialog
        onClose={props.toggle}
        aria-labelledby="customized-dialog-title"
        maxWidth="sm"
        fullWidth
        open={props.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.toggle}>
          Purchase Course
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="name"
                  label="Name"
                  className={classes.input}
                  value={values.name}
                  onChange={handleChange('name')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="address"
                  label="Billing Address"
                  className={classes.input}
                  value={values.address}
                  onChange={handleChange('address')}
                  fullWidth
                  multiline
                  rows={5}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="country"
                  className={classes.input}
                  select
                  label="Country"
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  value={values.country}
                  onChange={handleChange('country')}
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="zip"
                  label="Zip Code"
                  className={classes.input}
                  value={values.zip}
                  onChange={handleChange('zip')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box mt={4} pb={2}>
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                className={classes.smallText}
                style={{ marginBottom: '16px' }}
              >
                Payment Method
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={values.payment}
                onChange={handleChange('payment')}
              >
                <Box className="horizontal-flex">
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Credit/Debit Card"
                    className={classes.radio}
                  />
                  <img
                    src="/images/course/cardpay.png"
                    alt="payment method"
                    className={classes.paymentImage}
                  />
                </Box>
                <Box className="horizontal-flex">
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    className={classes.radio}
                    label=""
                  />
                  <img
                    src="/images/course/paypal.png"
                    alt="payment method"
                    className={classes.paymentImage}
                  />
                </Box>
                <Box className="horizontal-flex">
                  <FormControlLabel
                    value="google"
                    control={<Radio />}
                    className={classes.radio}
                    label=""
                  />
                  <img
                    src="/images/course/googlepay.png"
                    alt="payment method"
                    className={classes.paymentImage}
                  />
                </Box>
                <Box className="horizontal-flex">
                  <FormControlLabel
                    value="apple"
                    control={<Radio />}
                    className={classes.radio}
                    label=""
                  />
                  <img
                    src="/images/course/applepay.png"
                    alt="payment method"
                    className={classes.paymentImage}
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={12} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="card"
                  label="Card Number"
                  className={classes.input}
                  value={values.card}
                  onChange={handleChange('card')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="expiration"
                  label="Expiration Date"
                  className={classes.input}
                  value={values.expiration}
                  onChange={handleChange('expiration')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="cvc"
                  label="CVC Cpde"
                  className={classes.input}
                  value={values.cvc}
                  onChange={handleChange('cvc')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Typography component="div">
            <Box my={2} className={classes.largeText}>
              Got an offer code? Enter it below and save more!
            </Box>
          </Typography>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <TextField
                  id="offer"
                  label="Offer Code"
                  className={classes.input}
                  value={values.offer}
                  onChange={handleChange('offer')}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12} className="vertical-end">
              <Typography className={classes.smallText}>
                You&apos;re saving
              </Typography>
              <Typography component="div">
                <Box
                  color="var(--color-primary-dark)"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  $50
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Typography component="div">
            <Box my={2} className={classes.largeText}>
              Order Summary
            </Box>
          </Typography>
          <Grid container spacing={2} className={classes.gridRoot}>
            <Grid item md={6} xs={12} className="vertical-end">
              <Typography className={classes.smallText}>COURSE NAME</Typography>
              <Typography component="div">
                <Box
                  color="var(--color-primary-dark)"
                  fontSize="12px"
                  fontWeight="bold"
                >
                  ADA Compliance for Employees
                </Box>
              </Typography>
            </Grid>
            <Grid item md={3} xs={6} className="vertical-end">
              <Typography className={classes.smallText}>PRICE</Typography>
              <Typography component="div">
                <Box
                  color="var(--color-primary-dark)"
                  fontSize="12px"
                  fontWeight="bold"
                >
                  500 USD
                </Box>
              </Typography>
            </Grid>
            <Grid item md={3} xs={6} className="vertical-end">
              <Typography className={classes.smallText}>
                PAYMENT METHOD
              </Typography>
              <Typography component="div">
                <Box
                  color="var(--color-primary-dark)"
                  fontSize="12px"
                  fontWeight="bold"
                >
                  Mastercard
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Box my={2}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handlePurchase}
            >
              Purchase
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
