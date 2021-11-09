import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  Button,
  createStyles,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import styles from './usermanagement.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';

const useStyle = makeStyles((theme) =>
  createStyles({
    subText: {
      fontSize: '11px',
      color: lmsStyle['base-gray-500'],
      font: `normal normal 300 10px/12px ${lmsStyle['base-font']}`,
    },
    titleText: {
      width: '200px',
      fontSize: '15px',
      fontWeight: 'bold',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    browseFileButton: {
      marginTop: '20px',
      padding: '9px 0',
      background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'capitalize',
      '&:hover': {
        background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    textAreaMessage: {
      marginTop: '20px',
    },
    inviteButton: {
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'none',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    copyButton: {
      padding: '10px 30px',
      height: '40px',
      color: lmsStyle['color-white'],
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: `0px 4px 4px 0px`,
      textTransform: 'capitalize',
      '&:hover': {
        background: `${lmsStyle['base-gray-500']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    endAdornment: {
      padding: 0,
    },
    copySvg: {
      width: '10px',
      height: '10px',
      marginRight: '10px',
      [theme.breakpoints.down('xs')]: {
        marginRight: '0',
      },
    },
    mobileView: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
);

export default function InviteNewUser({ onClose }) {
  const classes = useStyle();
  const copyField = React.useRef();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.inviteNewUserText}>Invite Users via Email</h1>
            <div className={styles.close} onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9.558}
                height={9.557}
                viewBox="0 0 9.558 9.557"
              >
                <path
                  d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                  fill="#7d8793"
                />
              </svg>
            </div>
          </div>
          <Grid container className={styles.modalContent} spacing={2}>
            <Grid item lg={9} md={8} xs={12}>
              <TextInputOutline
                id="email"
                label={
                  <span>
                    Enter Email Adress{' '}
                    <b className={classes.subText}>(Separated by commas)</b>
                  </span>
                }
              ></TextInputOutline>
            </Grid>
            <Grid item lg={3} md={4} xs={12}>
              <FormControl fullWidth className="s">
                <InputLabel
                  shrink
                  htmlFor="browseFile"
                  className={classes.titleText}
                >
                  Import
                  <span className={classes.subText}>
                    (XLS, CSV, TXT supported)
                  </span>
                </InputLabel>
                <Button className={classes.browseFileButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={11.309}
                    height={14.702}
                    viewBox="0 0 11.309 14.702"
                  >
                    <path
                      d="M9.918 3.425H7.712v-2.1zm1.391 10.15a1.132 1.132 0 01-1.131 1.131H1.13a1.131 1.131 0 01-1.131-1.131V1.131A1.131 1.131 0 011.13 0h5.451v3.986a.565.565 0 00.565.565h4.162v9.019zm-3.393-1.7H3.392a.566.566 0 000 1.131h4.524a.566.566 0 100-1.131zm0-2.827H3.392a.566.566 0 000 1.131h4.524a.566.566 0 100-1.131zm0-2.827H3.392a.566.566 0 000 1.131h4.524a.566.566 0 100-1.131z"
                      fill="#fff"
                    />
                  </svg>
                  <span style={{ marginLeft: '10px' }}>Browse File</span>
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextInputOutline
                id="email"
                label={
                  <span>
                    Enter Your Message{' '}
                    <b className={classes.subText}>(Optional)</b>
                  </span>
                }
                multiline
                rows={5}
              ></TextInputOutline>
            </Grid>
            <Grid item>
              <Button className={classes.inviteButton}>Send Invite(s)</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.inviteNewUserText}>
              Invite Using Invite Link
            </h1>
          </div>
          <Grid container>
            <div className={styles.inviteLink}>
              <TextField
                ref={copyField}
                fullWidth
                size="small"
                variant="outlined"
                value="https://learnorteach.com/invite/collab/auwgfuoqwgeoi1nkh"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" variant="filled">
                      <Button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            'https://learnorteach.com/invite/collab/auwgfuoqwgeoi1nkh'
                          );
                        }}
                        className={classes.copyButton}
                      >
                        <div className={classes.copySvg}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12.019}
                            height={12.02}
                            viewBox="0 0 12.019 12.02"
                          >
                            <path
                              d="M10.631 0a1.39 1.39 0 011.389 1.389v7.739a1.39 1.39 0 01-1.389 1.389H8.714v.114a1.39 1.39 0 01-1.389 1.389H1.389A1.39 1.39 0 010 10.631v-7.74a1.39 1.39 0 011.389-1.389h1.916v-.113A1.39 1.39 0 014.694 0zM1.389 11.118h5.936a.488.488 0 00.488-.488V2.891a.488.488 0 00-.488-.488H1.389a.488.488 0 00-.488.488v7.739a.488.488 0 00.488.488zm9.729-1.99V1.389a.488.488 0 00-.488-.488H4.694a.488.488 0 00-.488.488v.114h3.119a1.39 1.39 0 011.389 1.389v6.725h1.916a.488.488 0 00.488-.488zM6.16 4.207a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm0 2.1a.451.451 0 110 .9H2.553a.451.451 0 110-.9zm-1.2 2.1a.451.451 0 010 .9H2.553a.451.451 0 110-.9z"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                        <span className={classes.mobileView}>Copy</span>
                      </Button>
                    </InputAdornment>
                  ),
                  classes: { adornedEnd: classes.endAdornment },
                }}
              ></TextField>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
