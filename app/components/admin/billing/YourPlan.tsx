import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Switch,
  Typography,
} from '@material-ui/core';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import styles from './billing.module.scss';

const useStyles = makeStyles((theme) =>
  createStyles({
    planCard: {
      border: `2px solid ${lmsStyle['base-gray-100']}`,
      borderRadius: '5px',
      padding: '25px 30px',
    },
    title: {
      font: `normal normal 600 20px/24px ${lmsStyle['base-font']}`,
      marginTop: '10px',
      marginBottom: '10px',
    },
    subTitle: {
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
      letterSpacing: '0px',
      color: lmsStyle['base-gray-500'],
    },
    amount: {
      color: lmsStyle['base-secondary'],
      font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    },
    period: {
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    },
    planBenefits: {
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
      padding: '5px 0',
    },
    upgradeButton: {
      color: lmsStyle['color-white'],
      background: lmsStyle['base-primary'],
      textTransform: 'capitalize',
      padding: '10px 30px',
    },
    listIcon: {
      minWidth: '30px',
    },
    upgradeAccText: {
      font: `normal normal normal 12px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
      marginBottom: '10px',
    },
    cardAction: {
      justifyContent: 'center',
    },
    paymentModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: lmsStyle['color-white'],
          opacity: 1,
          border: `1px solid ${theme.palette.grey[400]}`,
        },
      },
      '&$focusVisible $thumb': {
        color: lmsStyle['base-primary'],
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: lmsStyle['base-primary'],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  })
);

const stripePromise = loadStripe('pk_test_kytr8PadziE3o3tuqKeLIDTh00pSZaxBwo');

export default function YourPlan() {
  const classes = useStyles();
  const router = useRouter();

  const query = new URLSearchParams(window.location.search);
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout

    if (query.get('success')) {
      alert('Order placed! You will receive an email confirmation.');
      window.history.replaceState(null, '', '/admin/billing');
    }

    if (query.get('canceled')) {
      alert('Order Canceled');
      window.history.replaceState(null, '', '/admin/billing');
    }
  }, []);

  const handleClick = async (pricePlan) => {
    const stripe = await stripePromise;
    // const response = await fetch(
    //   'http://localhost:4242/create-checkout-session',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       priceId: priceId,
    //       planType: planType,
    //     }),
    //     // headers: {
    //     //   'Content-Type': 'application/json;charset=UTF-8',
    //     // },
    //   }
    // );
    // // .then((res) => res.json())
    // // .catch((error) => console.log(error))
    // // .then((response) => console.log('Success:', response));

    // const session = await response.json();
    // console.log('session is', session);

    // // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      lineItems: [
        {
          quantity: 1,
          price: pricePlan.priceId,
        },
      ],
      successUrl: window.location.href+`?success=true&id=${pricePlan.id}`,
      cancelUrl: window.location.href+`?canceled=true&id=${pricePlan.id}`,
      mode: 'subscription',
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const select = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.796}
      height={16.796}
      viewBox="0 0 16.796 16.796"
    >
      <path
        d="M8.357 16.799a8.4 8.4 0 118.441-8.361 8.4 8.4 0 01-8.441 8.361zM7.316 9.684l-1.2-1.222a.725.725 0 10-1.03 1.021l1.712 1.731a.723.723 0 001.025 0l4.129-4.089a.725.725 0 10-1.021-1.03z"
        fill="#29ac79"
      />
    </svg>
  );
  const close = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      fill="#BEC4CB"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );

  const prices = [
    {
      id: 1,
      price: 7,
      priceId: 'price_1J18XsDiHE6GTlWxuVqphdkL',
      paymentType: 'monthly',
      plan: 'Basic',
      subTitle:
        'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.',
      benefits: [
        {
          title: 'Lectus nunc lacinia',
          included: true,
        },
        {
          title: 'Vivamus ultrices auctor',
          included: false,
        },
        {
          title: 'Ligula orci auctor',
          included: false,
        },
        {
          title: 'Est ultricies',
          included: false,
        },
      ],
    },
    {
      id: '2',
      price: 12,
      priceId: 'price_1J18YgDiHE6GTlWxauUZ1EXZ',
      paymentType: 'monthly',
      plan: 'Standard',
      subTitle:
        'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.',
      benefits: [
        {
          title: 'Lectus nunc lacinia',
          included: true,
        },
        {
          title: 'Vivamus ultrices auctor',
          included: true,
        },
        {
          title: 'Ligula orci auctor',
          included: false,
        },
        {
          title: 'Est ultricies',
          included: false,
        },
      ],
    },
    {
      id: '3',
      price: 19,
      priceId: 'price_1J18Z9DiHE6GTlWxT55HdCMm',
      paymentType: 'monthly',
      plan: 'Premium',
      subTitle:
        'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.',
      benefits: [
        {
          title: 'Lectus nunc lacinia',
          included: true,
        },
        {
          title: 'Vivamus ultrices auctor',
          included: true,
        },
        {
          title: 'Ligula orci auctor',
          included: true,
        },
        {
          title: 'Est ultricies',
          included: false,
        },
      ],
    },
    {
      id: '4',
      price: 25,
      priceId: 'price_1J18ZbDiHE6GTlWxWapQ4g3D',
      paymentType: 'monthly',
      plan: 'Ultra',
      subTitle:
        'Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.',
      benefits: [
        {
          title: 'Lectus nunc lacinia',
          included: true,
        },
        {
          title: 'Vivamus ultrices auctor',
          included: true,
        },
        {
          title: 'Ligula orci auctor',
          included: true,
        },
        {
          title: 'Est ultricies',
          included: true,
        },
      ],
    },
  ];
  const [planType, setPlanType] = React.useState('month');
  const changePaymentType = () => {
    if (planType === 'month') {
      setPlanType('year');
    } else {
      setPlanType('month');
    }
  };

  return (
    <Grid style={{ padding: '20px' }}>
      <div className={styles.welcomeMsg}>
        <Grid xs={12} xl={10} md={12} lg={10}>
          <h1 className={styles.freeTrialText}>Free Trial</h1>
          <Button
                      className={classes.upgradeButton}
                      size="small"
                      onClick={() => {
                        router.push(GlobalUrls.REGISTRATION);
                      }}
                    >
                      Skip
                    </Button>
          <p className={styles.message}>
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
            dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed
            condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet,
            finibus id turpis.
          </p>
        </Grid>
      </div>
      <Grid>
        <Grid
          item
          className={styles.upgradeAccount}
          xs={12}
          md={12}
          lg={9}
          xl={9}
        >
          <h1 className={styles.upgradeAccText}>Upgrade Your Account</h1>
          <p className={styles.message}>
            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus
            sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit,
            hendrerit erat a, ultricies velit.
          </p>
        </Grid>
        <Grid container alignItems="center" className={styles.planSwitch}>
          <Grid item>Annually</Grid>
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            onChange={changePaymentType}
          />
          <Grid item>Monthly</Grid>
        </Grid>

        <Grid container spacing={2}>
          {prices.map((pricePlan, index) => (
            <Grid item xs={12} sm={6} lg={3} xl={3} key={`price-plan-${index}`}>
              <Card className={classes.planCard}>
                <CardContent>
                  <Typography className={classes.amount}>
                    $
                    {planType === 'month'
                      ? pricePlan.price
                      : pricePlan.price * 12}
                    <span className={classes.period}>
                      /{planType === 'month' ? 'month' : 'year'}
                    </span>
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                  >
                    {pricePlan.plan}
                  </Typography>
                  <Typography className={styles.subTitle}>
                    {pricePlan.subTitle}
                  </Typography>
                  <List>
                    {pricePlan.benefits.map((benefit, ind) => (
                      <ListItem
                        className={classes.planBenefits}
                        key={`benefit-${ind}-${index}`}
                      >
                        <ListItemIcon className={classes.listIcon}>
                          {benefit.included ? select : close}
                        </ListItemIcon>
                        <ListItemText>{benefit.title}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Elements stripe={stripePromise}>
                  <CardActions disableSpacing className={classes.cardAction}>
                    <Button
                      className={classes.upgradeButton}
                      size="small"
                      onClick={() => {
                        handleClick(pricePlan);
                      }}
                    >
                      Upgraded Account
                    </Button>
                  </CardActions>
                </Elements>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
