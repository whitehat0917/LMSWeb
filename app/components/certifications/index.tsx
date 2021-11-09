import React from 'react';
import { Box, createStyles, fade, Grid, InputBase, makeStyles } from '@material-ui/core';
import CertificationCard from '@module/certifications/certificationCard';
import { certifications } from '../../data/mock';
import { lmsStyle } from '../../styles/ui.variables';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles((theme) => createStyles(({
  search: {
    position: 'relative',
    color: '#7D8793',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#F3F4F5', 0.9),
    '&:hover': {
      backgroundColor: '#ecedf4',
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: '8px',
    height: '8px',
    left: '20px',
    top: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006DFF',
  },
  inputRoot: {
    color: '#7D8793',
    fontSize: '10px',
    opacity: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 50,
    },
  },
})));
const CertificationManagement = () => {
  const classes = useStyle();
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems='flex-end'
        mb="15px"
      >
        <Box
          fontSize="14px"
          color={lmsStyle['base-secondary']}
          fontWeight="600"
        >
          {certifications.length} Certificates
        </Box>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ fontSize: 13 }} />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {certifications.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CertificationCard
                title={item.title}
                description={item.description}
                degree={item.degree}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CertificationManagement;
