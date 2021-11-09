import React from 'react';
import { Box, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
  link: {
    textDecoration: 'underline',
    color: '#16395B',
    fontWeight: 'bold',
    fontSize: '10px',
  },
}));
const Stat = ({ info, link }) => {
  const classes = useStyle();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Box
      boxShadow="0px 3px 6px #00000005"
      borderRadius="5px"
      p="20px 33px 20px 35px"
      bgcolor="white"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box fontSize="13px" fontWeight="400">
            {info.title}
          </Box>
          <Box fontSize="40px" fontWeight="600">
            {info.value}
          </Box>
          {link ? (
            <Link href="#" onClick={preventDefault} className={classes.link}>
              Compare
            </Link>
          ) : (
            ''
          )}
        </Box>
        {info.icon ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={info.icon} alt="icon" />
          </Box>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default Stat;
