import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Container, makeStyles, MenuItem, Select } from '@material-ui/core';
import { CourseIndividualInfo, CourseTeamInfo, durationInfo } from 'data/mock';
import BarChart from '@module/learner-management/home/component/barChart';

const useStyle = makeStyles(() => ({
  root: {
    padding: '10px 30px 35px 30px',
    color: '#16395B',
  },
  selectDuration: {
    width: '137px',
    height: '34px',
    fontSize: '10px',
    fontWeight: 'bold',
  },
}));

const CourseChart = () => {
  const [duration, setDuration] = useState('');
  const classes = useStyle();
  const [selected, setSelected] = useState(false);

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };
  const handleIndividual = () => {
    setSelected(false);
  };

  const handleTeam = () => {
    setSelected(true);
  };
  return (
    <Container className={classes.root}>
      <Box
        boxShadow="0px 3px 6px #00000005"
        p="19px 28px"
        bgcolor="white"
        borderRadius="5px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl="21px"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box fontSize="13px" fontWeight="400" mr="20px">
              Course Completion Comparison
            </Box>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                variant={!selected ? 'contained' : 'outlined'}
                style={{ textTransform: 'none', borderColor: 'white' }}
                onClick={handleIndividual}
              >
                Individual
              </Button>
              <Button
                variant={selected ? 'contained' : 'outlined'}
                style={{ textTransform: 'none', borderColor: 'white' }}
                onClick={handleTeam}
              >
                Team
              </Button>
            </ButtonGroup>
          </Box>
          <Box>
            <Select
              displayEmpty
              name="val"
              variant="outlined"
              value={duration}
              className={classes.selectDuration}
              onChange={handleDuration}
            >
              {durationInfo.map((item, key) => (
                <MenuItem key={key} value={item.value}>
                  {item.option}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box mt="28px">
          <BarChart info={selected ? CourseIndividualInfo : CourseTeamInfo} />
        </Box>
      </Box>
    </Container>
  );
};

export default CourseChart;
