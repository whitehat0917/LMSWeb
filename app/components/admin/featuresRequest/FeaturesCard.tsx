import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';

const contents = [
  {
    title: 'asperiores nihil asperiores',
    createBy: 'Damian Zieme',
    date: 'March 12, 2021',
    content:
      'Voluptatem dignissimos voluptas amet recusandae suscipit eveniet aut a. Quasi aliquid nostrum sit quod sed quo doloribus ut. Repellat ipsam qui consectetur rerum quae ab aspernatur velit sapiente. Pariatur rem rerum consequatur omnis. Enim saepe aut voluptatem ut odio facilis. Quis nobis nemo dolor consequuntur. Voluptas repellendus vel. Nulla itaque error ut quo sed debitis. Quibusdam aspernatur maiores officia laudantium quaerat ut.',
    votes: '17,030',
  },
  {
    title: 'asperiores nihil asperiores',
    createBy: 'Damian Zieme',
    date: 'March 12, 2021',
    content:
      'Voluptatem dignissimos voluptas amet recusandae suscipit eveniet aut a. Quasi aliquid nostrum sit quod sed quo doloribus ut. Repellat ipsam qui consectetur rerum quae ab aspernatur velit sapiente. Pariatur rem rerum consequatur omnis. Enim saepe aut voluptatem ut odio facilis. Quis nobis nemo dolor consequuntur. Voluptas repellendus vel. Nulla itaque error ut quo sed debitis. Quibusdam aspernatur maiores officia laudantium quaerat ut.',
    votes: '17,030',
  },
  {
    title: 'asperiores nihil asperiores',
    createBy: 'Damian Zieme',
    date: 'March 12, 2021',
    content:
      'Voluptatem dignissimos voluptas amet recusandae suscipit eveniet aut a. Quasi aliquid nostrum sit quod sed quo doloribus ut. Repellat ipsam qui consectetur rerum quae ab aspernatur velit sapiente. Pariatur rem rerum consequatur omnis. Enim saepe aut voluptatem ut odio facilis. Quis nobis nemo dolor consequuntur. Voluptas repellendus vel. Nulla itaque error ut quo sed debitis. Quibusdam aspernatur maiores officia laudantium quaerat ut.',
    votes: '17,030',
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      padding: '30px',
      marginBottom: '15px',
      boxShadow: `0px 3px 3px #00000008`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: '5px',
    },
    title: {
      font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
      textTransform: 'capitalize',
    },
    subContent: {
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    margin: {
      marginTop: '7px',
      marginBottom: '15px',
    },
    voteContent: {
      display: 'flex',
      alignItems: 'flex-end',
      alignSelf: 'center',
      flexDirection: 'column',
    },
    voteText: {
      font: `normal normal 600 14px/17px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    voteButton: {
      marginTop: '10px',
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 3px #00000007`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: `4px`,
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
      padding: '7px 20px',
    },
  })
);
export default function FeaturesCard() {
  const classes = useStyles();
  return (
    <Grid style={{ paddingTop: '20px' }}>
      {contents.map((card, index) => (
        <Card key={index} className={classes.content}>
          <CardContent>
            <Grid container>
              <Grid item xs={10} md={10} lg={10} xl={9}>
                <Typography className={classes.title}>{card.title}</Typography>
                <Typography
                  className={`${classes.subContent} ${classes.margin}`}
                >
                  by {card.createBy} Posted on {card.date}
                </Typography>
                <Typography className={classes.subContent}>
                  {card.content}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                md={2}
                lg={2}
                xl={3}
                className={classes.voteContent}
              >
                <Typography className={classes.subContent}>
                  <span className={classes.voteText}>{card.votes}</span> Votes
                </Typography>

                <Button className={classes.voteButton}>
                  <b style={{ marginRight: '10px' }}>Vote</b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10.364}
                    height={9.953}
                    viewBox="0 0 10.364 9.953"
                  >
                    <defs>
                      <style>{'.prefix__a{fill:#16395b}'}</style>
                    </defs>
                    <path
                      className="prefix__a"
                      d="M10.364 4.411v.311c-.006.027-.015.053-.019.08a1.342 1.342 0 01-.265.622.214.214 0 00-.042.224 1.348 1.348 0 01-.173 1.194.228.228 0 00-.025.13c.016.136.025.272.027.408a1.331 1.331 0 01-.349.846.189.189 0 00-.04.1 4.564 4.564 0 01-.028.482 1.272 1.272 0 01-.6.9 1.668 1.668 0 01-.81.232c-.272.013-.546 0-.819.011a5.136 5.136 0 01-1.424-.171c-.428-.113-.85-.251-1.273-.383a4.939 4.939 0 00-.977-.27.467.467 0 01-.442-.527c.008-1.316 0-2.631 0-3.948v-.124a.415.415 0 01.347-.381.471.471 0 00.279-.136c.207-.207.408-.415.6-.638.311-.368.622-.745.927-1.12a2.117 2.117 0 00.192-.257 2.851 2.851 0 00.283-.927 1.989 1.989 0 01.355-.886A.415.415 0 016.464 0a2.591 2.591 0 01.474.062 1.519 1.519 0 01.442.2 1.06 1.06 0 01.43.674 2.55 2.55 0 01-.073 1.456c-.088.233-.213.453-.318.68-.035.074-.063.153-.1.242h1.8a1.191 1.191 0 011.071.631 2.691 2.691 0 01.176.466zM0 4.473A.468.468 0 01.213 4.2a.522.522 0 01.2-.058q.933-.006 1.865 0a.417.417 0 01.415.457v4.054a.421.421 0 01-.319.453.653.653 0 01-.149.011H.466a.415.415 0 01-.451-.3A.075.075 0 000 8.798V4.473zm1.238 3.815a.414.414 0 00.421-.415.427.427 0 00-.415-.415.425.425 0 00-.415.415.414.414 0 00.409.419z"
                    />
                  </svg>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
