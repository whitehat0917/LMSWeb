import { Box, Button, Grid } from '@material-ui/core';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import React from 'react';
import { lmsStyle } from 'styles/ui.variables';
// import Layout from '../app/components/layouts/Default/Layout';
import styles from './NewCourse.module.scss';

export default function NewCourse() {
  const router = useRouter();
  return (
    <>
      <br />
      <Box className={styles.box}>
        <Box className={styles.content}>
          <Box className={styles.item} mb={2.5}>
            <img src="/images/np_book.svg" width="125px" height="145px"></img>
          </Box>

          <Box
            className={styles.item}
            mb={2}
            color={lmsStyle['base-secondary']}
          >
            <p>You have no courses created</p>
          </Box>

          <Box className={styles.item}>
            <Button
              variant="contained"
              className={styles.coloredButton}
              onClick={() => router.push(`${GlobalUrls.ADMIN}/courses/add`)}
            >
              Create a Course
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
