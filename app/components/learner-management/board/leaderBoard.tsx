import React, { useState } from 'react';
import { lmsStyle } from '../../../styles/ui.variables';
import { Box, Button, ButtonGroup } from '@material-ui/core';
import CompetitionList from '@module/learner-management/board/competitionList';
import { competitionData } from '../../../data/mock';

const LeaderBoard = () => {
  const [selectedCat, setSelectedCat] = useState(1);
  const handleIndividual = () => {
    setSelectedCat(1);
  };

  const handleTop = () => {
    setSelectedCat(2);
  };
  return (
    <Box
      boxShadow={`0px 3px 6px ${lmsStyle['box-shadow-tiny']}`}
      borderRadius="5px"
      p="37px 23px 40px 40px"
      bgcolor="white"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box fontSize="13px" fontWeight="400">
          Leaderboard
        </Box>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            className="catBtn"
            onClick={handleIndividual}
            variant={selectedCat === 1 ? 'contained' : 'outlined'}
          >
            You
          </Button>
          <Button
            className="catBtn"
            onClick={handleTop}
            variant={selectedCat === 2 ? 'contained' : 'outlined'}
          >
            Top 5
          </Button>
        </ButtonGroup>
      </Box>
      {selectedCat === 1 ? <CompetitionList data={competitionData} /> : ''}
    </Box>
  );
};

export default LeaderBoard;
