import React, { useState } from 'react';
import { Box, Button, ButtonGroup } from '@material-ui/core';
import IndividualBoard from '@module/learner-management/board/individualBoard';

const BattleboardPage = () => {
  const [selectedCat, setSelectedCat] = useState(1);
  const handleIndividual = () => {
    setSelectedCat(1);
  };

  const handleTeam = () => {
    setSelectedCat(2);
  };
  return (
    <>
      <Box pb="38px">
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
            onClick={handleTeam}
            variant={selectedCat === 2 ? 'contained' : 'outlined'}
          >
            Team
          </Button>
        </ButtonGroup>
      </Box>
      <IndividualBoard />
    </>
  );
};

export default BattleboardPage;
