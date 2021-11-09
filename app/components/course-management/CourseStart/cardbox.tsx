import { Box, Button, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './CourseStart.module.scss';

const CardBox = (props) => {
  const router = useRouter();

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <Box className={styles.boxshadow}>
          <img
            src={props.image}
            width="92px"
            height="95px"
            className={styles.img}
          ></img>
          <br />
          <br />
          <p className={styles.p}>
            Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
            Donec pharetra faucibus leo, vitae vestibulum leo scelerisque eu.
          </p>
          <Button
            variant="contained"
            className={styles.coloredButton}
            onClick={() => router.push(props.path)}
          >
            {props.name}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardBox;
