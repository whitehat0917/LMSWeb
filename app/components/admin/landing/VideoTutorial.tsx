import * as React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Modal,
  Theme,
} from '@material-ui/core';
import { Player } from 'video-react';
import styles from './Landing.module.scss';
import { lmsStyle } from '../../../styles/ui.variables';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      boxShadow: 'none',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: `${lmsStyle['base-gray-100']}`,
    },
    videoPlayer: {
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
  })
);

export default function VideoTutorial({ handleOpen, handleClose, open }) {
  const classes = useStyles();
  return (
    <div className={styles.root}>
      <h2 className={styles.tutorialHeading}>Video Tutorials</h2>
      <Grid container spacing={3}>
        <Grid item xs={10} m-b={15}>
          <Paper className={classes.paper}>
            <div className={styles.tutorialContainer}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className={styles.videoThumbnailCard}>
                    <div className={styles.videoOverlay} onClick={handleOpen}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36.968}
                        height={36.968}
                        viewBox="0 0 36.968 36.968"
                      >
                        <g transform="translate(-824.257 -306.5)">
                          <circle
                            cx={11}
                            cy={11}
                            r={11}
                            transform="translate(832 314)"
                            fill="#fff"
                          />
                          <path
                            d="M842.741 306.499a18.484 18.484 0 1018.484 18.485 18.515 18.515 0 00-18.484-18.485zm7.872 19.64l-11.509 6.675a1.3 1.3 0 01-.685.17 1.486 1.486 0 01-.642-.129l-.085-.043a1.309 1.309 0 01-.642-1.155v-13.349a1.363 1.363 0 01.6-1.155 1.223 1.223 0 011.412 0l11.423 6.676a1.309 1.309 0 01.642 1.155 1.122 1.122 0 01-.513 1.155z"
                            fill={lmsStyle['base-primary']}
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={styles.videoTitle}>Video Title</div>
                    <div>
                      <img src="images\video-images\video-image-large1.png" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className={styles.videoThumbnailCard}>
                    <div className={styles.videoOverlay} onClick={handleOpen}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36.968}
                        height={36.968}
                        viewBox="0 0 36.968 36.968"
                      >
                        <g transform="translate(-824.257 -306.5)">
                          <circle
                            cx={11}
                            cy={11}
                            r={11}
                            transform="translate(832 314)"
                            fill="#fff"
                          />
                          <path
                            d="M842.741 306.499a18.484 18.484 0 1018.484 18.485 18.515 18.515 0 00-18.484-18.485zm7.872 19.64l-11.509 6.675a1.3 1.3 0 01-.685.17 1.486 1.486 0 01-.642-.129l-.085-.043a1.309 1.309 0 01-.642-1.155v-13.349a1.363 1.363 0 01.6-1.155 1.223 1.223 0 011.412 0l11.423 6.676a1.309 1.309 0 01.642 1.155 1.122 1.122 0 01-.513 1.155z"
                            fill={lmsStyle['base-primary']}
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={styles.videoTitle}>Video Title</div>

                    <img src="images\video-images\video-image-large2.png"></img>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <div className={styles.videoThumbnailCard}>
                    <div className={styles.videoOverlay} onClick={handleOpen}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36.968}
                        height={36.968}
                        viewBox="0 0 36.968 36.968"
                      >
                        <g transform="translate(-824.257 -306.5)">
                          <circle
                            cx={11}
                            cy={11}
                            r={11}
                            transform="translate(832 314)"
                            fill="#fff"
                          />
                          <path
                            d="M842.741 306.499a18.484 18.484 0 1018.484 18.485 18.515 18.515 0 00-18.484-18.485zm7.872 19.64l-11.509 6.675a1.3 1.3 0 01-.685.17 1.486 1.486 0 01-.642-.129l-.085-.043a1.309 1.309 0 01-.642-1.155v-13.349a1.363 1.363 0 01.6-1.155 1.223 1.223 0 011.412 0l11.423 6.676a1.309 1.309 0 01.642 1.155 1.122 1.122 0 01-.513 1.155z"
                            fill={lmsStyle['base-primary']}
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={styles.videoTitle}>Video Title</div>

                    <img src="images\video-images\video-image-large3.png" />
                  </div>
                </Grid>
              </Grid>
              <Modal open={open} onClose={handleClose}>
                <div className={classes.videoPlayer}>
                  <Player
                    src="http://media.w3.org/2010/05/bunny/movie.mp4"
                    autoPlay={true}
                  ></Player>
                </div>
              </Modal>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
