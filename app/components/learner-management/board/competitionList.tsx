import React from 'react';
import { Box, Hidden, makeStyles } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import Avatar from '@material-ui/core/Avatar';

function getOrder(key) {
  switch (key) {
    case 0:
      return (
        <Box fontSize="36px" fontWeight="600" width="37px">
          1<sup>st</sup>
        </Box>
      );
    case 1:
      return (
        <Box fontSize="36px" fontWeight="600" width="37px">
          2<sup>nd</sup>
        </Box>
      );
    case 2:
      return (
        <Box fontSize="36px" fontWeight="600" width="37px">
          3<sup>rd</sup>
        </Box>
      );
    case 3:
      return (
        <Box fontSize="36px" fontWeight="600" width="37px">
          4<sup>th</sup>
        </Box>
      );
    case 4:
      return (
        <Box fontSize="36px" fontWeight="600" width="37px">
          5<sup>th</sup>
        </Box>
      );
    default:
      return null;
  }
}

function getAward(key) {
  switch (key) {
    case 0:
      return '/images/medal_high.svg';
    case 1:
      return '/images/medal_medium.svg';
    case 2:
      return '/images/medal_inter_medium.svg';
    case 3:
      return '';
    case 4:
      return '';
    default:
      return '';
  }
}

const useStyle = makeStyles(() => ({
  awardImg: {
    width: '23px',
    height: '25px',
  },
}));

const CompetitionList = ({ data }) => {
  const classes = useStyle();
  return (
    <Box mt="36px">
      {data.map((item, key) => (
        <Box
          key={key}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color={lmsStyle['base-secondary']}
          pt="5px"
        >
          {getOrder(key)}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            ml="40px"
            pb="10px"
            borderBottom={`1px solid ${lmsStyle['base-gray-200']}`}
            pr="70px"
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" width="200px">
              <Box fontSize="12px" fontWeight="400" display="flex" justifyContent="space-between" alignItems="center">
                <Avatar alt="item.name" src={item.avatar} />
                <Box ml="9px" fontWeight={key === data.length -1 ? "600" : "400"}>{item.name}</Box>
              </Box>
              {getAward(key) ? (
                <img
                  src={getAward(key)}
                  alt="award"
                  className={classes.awardImg}
                />
              ) : (
                ''
              )}
            </Box>
            <Hidden smDown>
              <Box
                fontSize="12px"
                fontWeight="400"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box mr="90px" fontWeight={key === data.length -1 ? "600" : "400"}>{item.points} points</Box>
                <Box fontWeight={key === data.length -1 ? "600" : "400"}>{item.upText}</Box>
              </Box>
            </Hidden>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CompetitionList;
