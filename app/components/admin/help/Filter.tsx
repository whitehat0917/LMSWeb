import {
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() =>
  createStyles({
    filterText: {
      font: `normal normal 300 14px/17px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    filterHeader: {
      marginBlock: '30px',
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    },
    contactUsButton: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
    },
    card: {
      marginBottom: '10px',
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 6px #00000005`,
      borderRadius: '5px',
    },
    cardContent: {
      padding: '22px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftContent: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    subTitle: {
      marginTop: '7px',
      font: `normal normal normal 10px/15px Inter`,
      color: lmsStyle['base-gray-500'],
    },
    rightContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      font: `normal normal normal 12px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    viewAllButton: {
      font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-primary'],
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  })
);

const helpTypes = [
  {
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={31.02}
        height={38.565}
        viewBox="0 0 31.02 38.565"
      >
        <path
          d="M1.258 0A1.258 1.258 0 000 1.258v36.05a1.258 1.258 0 102.515 0V1.258A1.258 1.258 0 001.258 0zm17.527 4.362A14.453 14.453 0 015.331 3.314a1.258 1.258 0 00-1.978 1.035v15.143a1.279 1.279 0 00.589 1.061 16.929 16.929 0 0015.824 1.258 17.061 17.061 0 017.362-1.6 4.69 4.69 0 012.03.393 1.257 1.257 0 001.86-1.1V4.362a1.287 1.287 0 00-.642-1.1 8.224 8.224 0 00-3.131-.734 22.616 22.616 0 00-8.463 1.834zm8.331.681a6.659 6.659 0 011.389.21v12.654a7.375 7.375 0 00-1.244-.21 19.639 19.639 0 00-8.461 1.795 14.3 14.3 0 01-12.93-.734V6.419a16.912 16.912 0 0013.912.249 19.309 19.309 0 017.336-1.624z"
          fill="#006dff"
        />
      </svg>
    ),
    title: 'Getting Started',
    subTitle: 'Implementing Learn or Teach',
    noOfArticles: '3',
  },
  {
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={33.056}
        height={38.783}
        viewBox="0 0 33.056 38.783"
      >
        <path
          d="M30.877 21.306v-9.571l1.914-3.828L30.877.25H23.22l-1.914 7.657 1.914 3.828v9.571a1.912 1.912 0 00-1.914 1.914v13.4a1.912 1.912 0 001.914 1.914h7.657a1.912 1.912 0 001.914-1.914v-13.4a1.912 1.912 0 00-1.914-1.914zM24.715 2.164h4.666l1.382 5.523-1.8 3.6v10.019h-3.829V11.282l-1.8-3.6zm6.161 34.455H23.22V23.22h7.657zm-5.742-3.828a1.914 1.914 0 111.916 1.914 1.912 1.912 0 01-1.916-1.914zM13.65 1.057v8.764l-3.828 1.914-3.83-1.914V1.057a9.529 9.529 0 00-1.914 16.38v19.182a1.913 1.913 0 001.914 1.914h7.658a1.913 1.913 0 001.914-1.914V17.437a9.529 9.529 0 00-1.914-16.38zm0 15.425v20.137H5.992V16.483a8.087 8.087 0 01-3.828-6.662 7.644 7.644 0 011.914-5.055v6.241l5.742 2.871 5.742-2.871V4.766a7.644 7.644 0 011.914 5.055 7.938 7.938 0 01-3.826 6.662zm-1.915 16.309a1.914 1.914 0 11-1.914-1.914 1.913 1.913 0 011.914 1.914z"
          fill="#006dff"
          stroke="#006dff"
          strokeWidth={0.5}
        />
      </svg>
    ),
    title: 'Technical Setup',
    subTitle: 'Troubleshooting tips and tricks',
    noOfArticles: '18',
  },
  {
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38.372}
        height={38.284}
        viewBox="0 0 38.372 38.284"
      >
        <path
          d="M38.372 8.142V6.775a1.37 1.37 0 00-.959-1.233L19.605.06a1.476 1.476 0 00-.836 0L.961 5.54a1.371 1.371 0 00-.945 1.235c0 .7-.685 17.219 7.014 26.027a15.418 15.418 0 0012.164 5.473 17.042 17.042 0 001.808-.1 15.072 15.072 0 009.11-4.11 17.125 17.125 0 001.219-1.274c6.37-7.315 7.041-19.726 7.041-24.658zM19.194 2.663l16.438 5.068v.288c0 3.205-.356 13.206-4.452 20.206l-.11-.849a9.589 9.589 0 00-6.521-7.849 7.534 7.534 0 10-10.74 0 9.592 9.592 0 00-6.523 7.834l-.11.849c-4.133-7.04-4.42-17.328-4.42-20.424zm-4.795 11.644a4.795 4.795 0 114.795 4.795 4.8 4.8 0 01-4.795-4.795zm3.315 21.168l-.479-.068a5.117 5.117 0 01-.918-.137l-.548-.137-.795-.205-.548-.192-.712-.288-.534-.274-.671-.356-.507-.315-.63-.425-.493-.384-.575-.493-.466-.452-.315-.315.493-3.659a6.847 6.847 0 016.781-5.932h4.795a6.848 6.848 0 016.781 5.945l.479 3.644-.315.329-.466.452-.562.479-.493.4-.616.411-.521.329-.658.342-.548.26-.712.274-.562.205-.781.205-.562.137a7.438 7.438 0 00-.918.137l-.493.068c-.479 0-.973.068-1.466.068a10.413 10.413 0 01-1.466-.055z"
          fill="#006dff"
        />
      </svg>
    ),
    title: 'My Account',
    subTitle:
      'How to navigate, plan, assign and better develop each lesson so your learners can do better work!',
    noOfArticles: '7',
  },
  {
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={44.707}
        height={38.283}
        viewBox="0 0 44.707 38.283"
      >
        <path
          d="M1.4 0A1.4 1.4 0 000 1.39v27.071a1.4 1.4 0 001.4 1.406h15.8l-1.86 5.618h-2.81a1 1 0 00-.145 0 1.402 1.402 0 10.145 2.8h19.655a1.4 1.4 0 000-2.8h-2.811l-1.864-5.618h15.8a1.4 1.4 0 001.392-1.406V1.39A1.4 1.4 0 0043.31 0zm1.394 2.794h39.118V27.07H2.794zm14.358 3.262a1.4 1.4 0 00-1.425 1.4l.01 14.956a1.4 1.4 0 002.207 1.133L28.39 16.06a1.4 1.4 0 000-2.27L17.934 6.316a1.4 1.4 0 00-.782-.26zm1.373 4.116l6.65 4.755-6.643 4.775zm1.626 19.7h4.413l1.867 5.618h-8.145z"
          fill="#006dff"
        />
      </svg>
    ),
    title: 'Course Builder',
    subTitle: 'Building out lessons to help your team do better work',
    noOfArticles: '19',
  },
  {
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={38.371}
        height={38.371}
        viewBox="0 0 38.371 38.371"
      >
        <path
          d="M31.976 3.2h-3.723V1.6a1.6 1.6 0 00-3.2 0v1.6H13.316V1.6a1.6 1.6 0 00-3.2 0v1.6H6.4A6.4 6.4 0 000 9.6v22.376a6.393 6.393 0 006.4 6.4h25.58a6.393 6.393 0 006.4-6.4V9.593a6.393 6.393 0 00-6.4-6.4zm3.2 28.778a3.2 3.2 0 01-3.2 3.2H6.4a3.2 3.2 0 01-3.2-3.2V9.593a3.2 3.2 0 013.2-3.2h3.723v1.6a1.6 1.6 0 103.2 0V6.4h11.732V8a1.6 1.6 0 103.2 0V6.4h3.723a3.2 3.2 0 013.2 3.2zM13.316 15.5a1.6 1.6 0 11-.468-1.129 1.6 1.6 0 01.468 1.129zm7.468 0a1.6 1.6 0 11-.468-1.129 1.6 1.6 0 01.468 1.129zm7.468 0a1.6 1.6 0 11-.47-1.129 1.6 1.6 0 01.471 1.129zm-14.936 6.617a1.6 1.6 0 11-.468-1.129 1.6 1.6 0 01.468 1.129zm7.468 0a1.6 1.6 0 11-.468-1.129 1.6 1.6 0 01.468 1.129zm7.468 0a1.6 1.6 0 11-.47-1.129 1.6 1.6 0 01.47 1.129zm-14.935 6.621a1.6 1.6 0 11-.468-1.131 1.6 1.6 0 01.468 1.131zm7.468 0a1.6 1.6 0 11-.468-1.131 1.6 1.6 0 01.468 1.131zm7.468 0a1.6 1.6 0 11-.47-1.131 1.6 1.6 0 01.47 1.131z"
          fill="#006dff"
        />
      </svg>
    ),
    title: 'Events',
    subTitle: 'In-person training and online meetings',
    noOfArticles: '5',
  },
];

export default function HelpFilter() {
  const classes = useStyles();
  return (
    <Grid container>
      <div className={classes.filterHeader}>
        <p className={classes.filterText}>
          Or choose a category to quickly find the help you need
        </p>
        <Button className={classes.contactUsButton}>Contact us</Button>
      </div>
      <Grid item xs={12}>
        {helpTypes.map((helpType, index) => (
          <Card key={`help-type-id-${index}`} className={classes.card}>
            <CardContent className={classes.cardContent}>
              <div className={classes.leftContent}>
                {helpType.image}
                <div style={{ marginLeft: '50px' }}>
                  {helpType.title}
                  <br />
                  <span className={classes.subTitle}>{helpType.subTitle}</span>
                </div>
              </div>
              <div className={classes.rightContent}>
                <span style={{ paddingRight: '8px' }}>
                  {helpType.noOfArticles} articles under this topic
                </span>

                <div>
                  <CardActions style={{ padding: 0 }}>
                    <Button size="small" className={classes.viewAllButton}>
                      View All <ArrowForwardIcon color="primary" />
                    </Button>
                  </CardActions>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
