import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './billing.module.scss';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    border: `1px solid ${lmsStyle['base-gray-300']}`,
    borderRadius: '5px',
    padding: '18px 30px',
    boxShadow: '0px 3px 3px #00000008',
  },
  boxBetween: {
    justifyContent: 'space-between',
  },
  boxIcon: {
    color: lmsStyle['base-primary'],
    width: '70px',
    paddingRight: '10px',
  },
  boxTitle: {
    font: `normal normal medium 12px/15px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  boxText: {
    font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-gray-500'],
  },
  flex: {
    display: 'flex',
  },
  btn: {
    font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
  },
  editBtn: {
    color: lmsStyle['base-primary'],
  },
  removeBtn: {
    color: lmsStyle['base-accent'],
  },
}));

const PaymentMethods = () => {
  const classes = useStyles();
  const cards = [
    {
      provider: '/images/mastercard.svg',
      cardNumber: '•••• •••• •••• 2526',
      cardDetails: 'Master Card - Expires 05/24',
    },
    {
      provider: '/images/mastercard.svg',
      cardNumber: '•••• •••• •••• 2526',
      cardDetails: 'Master Card - Expires 05/24',
    },
    {
      provider: '/images/mastercard.svg',
      cardNumber: '•••• •••• •••• 2526',
      cardDetails: 'Master Card - Expires 05/24',
    },
  ];
  return (
    <Grid style={{ padding: '20px' }}>
      <Grid item className={styles.upgradeAccount} xs={12} md={9} lg={7} xl={6}>
        <h1 className={styles.upgradeAccText}>Add a New Payment Method</h1>
        <p className={styles.message}>
          Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
          quis non mauris. Aenean scelerisque, sem eu dictum commodo, velit nisi
          blandit magna, quis scelerisque ipsum lectus ut libero.
        </p>
      </Grid>
      <Grid item xs={10} style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div className={classes.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.boxIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <div>
                <h3 className={classes.boxTitle}>Add a New Card</h3>
                <p className={classes.boxText} style={{ lineHeight: '20px' }}>
                  Credit or debit cards (Visa, Master, American Express
                  supported)
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.boxIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <div>
                <h3 className={classes.boxTitle}>Add Bank Account</h3>
                <p className={classes.boxText} style={{ lineHeight: '20px' }}>
                  Pay via bank transfer (ACH)
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={10}
        className={styles.upgradeAccount}
        style={{ marginTop: '20px' }}
      >
        <h1 className={styles.upgradeAccText}>Your Payment Methods</h1>
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={6} key={`card-${index}`}>
              <div className={`${classes.box} ${classes.boxBetween}`}>
                <div className={classes.flex}>
                  <img src={card.provider} className={classes.boxIcon} />
                  <div>
                    <h3 className={classes.boxTitle}>{card.cardNumber}</h3>
                    <p
                      className={classes.boxText}
                      style={{ lineHeight: '20px' }}
                    >
                      {card.cardDetails}
                    </p>
                  </div>
                </div>
                <div>
                  <Button className={`${classes.btn} ${classes.editBtn}`}>
                    Edit
                  </Button>
                  <Button className={`${classes.btn} ${classes.removeBtn}`}>
                    Remove
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentMethods;
