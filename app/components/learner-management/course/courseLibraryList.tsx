import React from 'react';
import { Box, Grid, Link, makeStyles } from '@material-ui/core';
import { courses } from '../../../data/mock';
import { lmsStyle } from '../../../styles/ui.variables';

const useStyle = makeStyles(() => ({
  clickLink: {
    marginLeft: '10px',
    fontSize: '12px',
  },
}));
const CourseLibraryList = () => {
  const classes = useStyle();
  return (
    <Box p="20px 40px" color={lmsStyle['base-secondary']}>
      <Box fontSize="14px" fontWeight="600">
        Course Library
        <Link
          href="/student/courses"
          underline="always"
          color="inherit"
          className={classes.clickLink}
        >
          View Full Library
        </Link>
      </Box>
      <Box pt="20px">
        <Grid container>
          {courses.map((item, index) => (
            <Grid key={index} item md={4}>
              <Box fontSize="13px" fontWeight="600" pb="15px">
                {item.mainCat}
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                fontSize="12px"
                color={lmsStyle['base-gray-500']}
                width="150px"
              >
                {item.subCat.map((subItem, indexNum) => (
                  <Link key={indexNum} href="/student/courses" color="inherit">
                    {subItem.title}
                  </Link>
                ))}
                <Box
                  pt="8px"
                  pb="8px"
                  fontWeight="600"
                  color={lmsStyle['base-secondary']}
                >
                  <Link href="#" underline="always" color="inherit">
                    show All
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseLibraryList;
