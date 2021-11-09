import React from 'react';
import { Box, Card, CardContent, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { lmsStyle } from '../../styles/ui.variables';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '5px',
      height: '100%',
    },
    shareImg: {
      marginLeft: '5px',
    },
    content: {
      '&:last-child': {
        paddingBottom: '16px',
      },
    },
  })
);

const CertificationCard = ({ title, description, degree }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={degree} width="62px" alt="degree" />
          </Box>
          <Box pl="18px">
            <Box
              fontSize="14px"
              color={lmsStyle['base-secondary']}
              fontWeight="600"
              mb="10px"
            >
              {title}
            </Box>
            <Box
              fontSize="10px"
              color={lmsStyle['base-secondary']}
              fontWeight="400"
              mb="10px"
            >
              {description}
            </Box>
            <Box
              fontSize="10px"
              fontWeight="600"
              color={lmsStyle['base-primary']}
              lineHeight="12px"
            >
              <Link href="">View</Link> | <Link href="">Share</Link>
              <img
                src="/images/share.svg"
                alt="share"
                className={classes.shareImg}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;
