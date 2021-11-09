import React from 'react';
import { Box, Grid } from '@material-ui/core';
import CardBox from './cardbox';
import { GlobalUrls } from '@util/app-utils';
import styles from './CourseStart.module.scss';
import { layoutContext } from '@layout/admin/Layout';

const CourseStart = () => {
  const { setHeader, setIsVisibleFreeTrial } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader('Create New Course');
    setIsVisibleFreeTrial(false);

    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(false);
    };
  }, []);
  return (
    <Grid container spacing={1}>
      <Box className={styles.box}>
        <Grid>
          <p className={styles.h4}>Choose how you want to get started</p>
        </Grid>

        <Box mx="auto" maxWidth={600}>
          <Grid container spacing={7}>
            <Grid item xs={12} md={6}>
              <CardBox
                path={`${GlobalUrls.ADMIN}/courses/create`}
                image="/images/np_create.svg"
                name="Create Your Own"
              />
            </Grid>
            {/* <CardBox
            path={`${GlobalUrls.ADMIN}/courses/create`}
            image="/images/np_import.svg"
            name="Import External"
          /> */}
            <Grid item xs={12} md={6}>
              <CardBox
                path={`${GlobalUrls.ADMIN}/courses/create`}
                image="/images/pencilAndRuler.svg"
                name="Get Custom Course"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default CourseStart;
