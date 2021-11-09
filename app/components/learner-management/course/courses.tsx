import React from 'react';
import {
  Box,
  Checkbox,
  CheckboxProps,
  createStyles,
  fade,
  Grid,
  InputBase,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Select from '@element/SortSelect/Select';
import SearchIcon from '@material-ui/icons/Search';
import { filterVariables } from '@module/learner-management/mock';
import { carouselData } from '../../../data/mock';
import IndividualCourse from '@module/learner-management/course/components/individualCourse';
import { lmsStyle } from '../../../styles/ui.variables';

const GreenCheckbox = withStyles({
  root: {
    color: lmsStyle['base-gray-400'],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const useStyle = makeStyles((theme) =>
  createStyles({
    search: {
      position: 'relative',
      color: '#7D8793',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade('#F3F4F5', 0.9),
      '&:hover': {
        backgroundColor: '#ecedf4',
      },
      marginLeft: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(5),
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
      opacity: '50%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 6),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    customCheckbox: {
      padding: '4px',
    },
  })
);
const CourseLibrary = () => {
  const classes = useStyle();
  return (
    <>
      <Box
        fontSize="14px"
        color={lmsStyle['base-secondary']}
        fontWeight="600"
        mb="23px"
        display="flex"
        justifyContent="space-between"
      >
        <Box fontWeight="600">Course Library</Box>
        <Box display="flex" justifyContent="center" alignItems="center">
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
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Select
            name={'sort'}
            label={'Sort By'}
            data={[
              { value: 'best-match', label: 'Best match' },
              { value: 'newest', label: 'Newest' },
              { value: 'oldest', label: 'Oldest' },
              { value: 'view-count', label: 'View count' },
              { value: 'rating', label: 'Rating' },
            ]}
          />
        </Box>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box fontSize="12px" color={lmsStyle['base-gray-500']} pb="10px">
                Category
              </Box>
              <Select
                name={'category'}
                label=""
                data={[
                  { value: 'business', label: 'Business' },
                  { value: 'recommend', label: 'Recommend' },
                ]}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              pt="27px"
            >
              <Box fontSize="12px" color={lmsStyle['base-gray-500']} pb="10px">
                Category
              </Box>
              <Select
                name={'Subcategory'}
                label=""
                data={[
                  { value: 'all', label: 'All Subcategories' },
                  { value: 'recommend', label: 'Recommend' },
                ]}
              />
            </Box>

            <Box pt="27px" pb="27px" fontSize="12px">
              <Box fontWeight="600" color={lmsStyle['base-gray-500']}>
                Filter By
              </Box>
              {filterVariables.map((item, index) => (
                <Box key={index} pt="21px">
                  <Box
                    fontWeight="600"
                    color={lmsStyle['base-secondary']}
                    pb="8px"
                  >
                    {item.kind}
                  </Box>
                  {item.list.map((subItem, indexNum) => (
                    <Box
                      key={indexNum}
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <GreenCheckbox
                        icon={<CheckCircleOutlineIcon fontSize="small" />}
                        checkedIcon={<CheckCircleIcon fontSize="small" />}
                        className={classes.customCheckbox}
                        name="checkedG"
                      />
                      <Box color={lmsStyle['base-gray-500']}>
                        {subItem.title}
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Box
              boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
              bgcolor="white"
              borderRadius="5px"
              p="22px 26px"
            >
              {carouselData.map((item, index) => (
                <IndividualCourse key={index} data={item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CourseLibrary;
