import React from 'react';
import { lmsStyle } from '../../../styles/ui.variables';
import { Box } from '@material-ui/core';
import Select from '@element/SortSelect/Select';
import { cabinets } from '../../../data/mock';
import Cabinet from './cabinet';

const TrophyCabinet = () => {
  return (
    <Box
      boxShadow={`0px 3px 6px ${lmsStyle['box-shadow-tiny']}`}
      borderRadius="5px"
      p="30px 31px 40px 40px"
      bgcolor="white"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb="41px"
      >
        <Box
          fontSize="13px"
          fontWeight="400"
          color={lmsStyle['base-secondary']}
        >
          Trophy Cabinet
        </Box>
        <Select
          name={'sort'}
          label={'Sort By'}
          data={[
            { value: 'new', label: 'Newest' },
            { value: 'gold', label: 'Gold' },
            { value: 'silver', label: 'Silver' },
            { value: 'bronze', label: 'Bronze' },
          ]}
        />
      </Box>
      <Box display="flex" alignItems="center">
        {cabinets.map((item, index) => (
          <Cabinet key={index} info={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TrophyCabinet;
