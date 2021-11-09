import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Link, makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { authnState } from '../../../store';
import { lmsStyle } from '../../../styles/ui.variables';

const useStyle = makeStyles(() => ({
  signBtn: {
    width: '58px',
    height: '17px',
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    border: '0.2px solid ' + `${lmsStyle['science-blue']}`,
    fontSize: '8px',
    color: `${lmsStyle['base-primary']}`,
    padding: 0,
    backgroundColor: 'white',
    marginLeft: '12px',
  },
  headerImg: {
    width: '100%',
  },
  dlgAction: {
    justifyContent: 'flex-start',
    paddingLeft: '26px',
    marginBottom: '20px',
  },
  iconBtn: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: lmsStyle['base-secondary'],
  },
}));

const IndividualEvent = ({ data }) => {
  const authnInfo = useRecoilValue(authnState);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleBtnClick = () => {
    if (authnInfo.userInfo) {
        console.log('attend action');
    } else {
      router.push('/signup');
    }
  };

  const handleShare = () => {
  };
  return (
    <Box
      bgcolor="white"
      border={`1px solid ${lmsStyle['base-gray-300']}`}
      boxShadow={`0px 3px 6px ${lmsStyle['box-shadow-tiny']}`}
      p="25px 31px"
      color={`${lmsStyle['base-secondary']}`}
    >
      <Box fontSize="14px" fontWeight="600" mb="10px">
        {data.title} |{' '}
        <Box component="span" color={`${lmsStyle['base-primary']}`}>
          {data.date}
        </Box>
      </Box>
      <Box fontSize="10px" fontWeight="400" mb="10px">
        {data.description}
      </Box>
      <Box
        fontSize="10px"
        fontWeight="600"
        color={lmsStyle['base-primary']}
        lineHeight="17px"
      >
        <Link
          component="button"
          onClick={() => handleClickOpen()}
          className="linkBtn"
        >
          View
        </Link>{' '}
        | {' '}
        <Link
          component="button"
          onClick={() => handleShare()}
          className="linkBtn"
        >
          Share
        </Link>
        <img src="/images/share.svg" alt="share" className="linkImg" />
        {!data.signed ? (
          <Button variant="contained" className={classes.signBtn}>
            Signed Up
          </Button>
        ) : (
          ''
        )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={'md'}
      >
        <DialogContent style={{ padding: '0px', position: 'relative' }}>
          <img
            src="/images/np_lesson.png"
            alt="lesson"
            className={classes.headerImg}
          />
          <IconButton
            aria-label="delete"
            className={classes.iconBtn}
            onClick={() => handleClickClose()}
          >
            <CancelIcon fontSize="large" />
          </IconButton>
          <Box p="26px">
            <Box fontSize="14px" fontWeight="600">
              {data.title}
              <Box component="span" fontSize="10px" fontWeight="400" ml="10px">
                Hosted by Blake Edwards
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Box
                display="flex"
                flexDirection="column"
                fontSize="10px"
                fontWeight="600"
              >
                <Box
                  fontSize="10px"
                  fontWeight="600"
                  color={`${lmsStyle['base-gray-500']}`}
                  mt="17px"
                  mb="10px"
                >
                  Date
                </Box>
                <Box display="flex" alignItems="center">
                  <Box
                    height="30px"
                    width="83px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border={`1px solid ${lmsStyle['base-gray-300']}`}
                    borderRadius="4px 0px 0px 4px"
                    bgcolor={lmsStyle['body-bg-color']}
                  >
                    Saturday
                  </Box>
                  <Box
                    height="30px"
                    width="105px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border={`1px solid ${lmsStyle['base-gray-300']}`}
                    borderRadius="0px 4px 4px 0px"
                    bgcolor="white"
                  >
                    25 March 2021
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                fontSize="10px"
                fontWeight="600"
                ml="10px"
              >
                <Box
                  fontSize="10px"
                  fontWeight="600"
                  color={`${lmsStyle['base-gray-500']}`}
                  mt="17px"
                  mb="10px"
                >
                  Time
                </Box>
                <Box display="flex" alignItems="center">
                  <Box
                    height="30px"
                    width="140px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    border={`1px solid ${lmsStyle['base-gray-300']}`}
                    borderRadius="4px"
                    bgcolor="white"
                  >
                    11:30 AM - 01:30 PM
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              fontSize="10px"
              fontWeight="600"
              color={`${lmsStyle['base-gray-500']}`}
              mt="15px"
              mb="10px"
            >
              Description
            </Box>
            <Box fontSize="10px" fontWeight="400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua
            </Box>
          </Box>
        </DialogContent>
        <DialogActions className={classes.dlgAction}>
          <Button
            style={{ fontSize: 13, marginRight: 15, minWidth: 111 }}
            onClick={handleBtnClick}
            color="primary"
            variant="contained"
            size="large"
          >
            {authnInfo.userInfo ? 'Attend Event' : 'Sign up'}
          </Button>
          <Link
            component="button"
            onClick={() => handleShare()}
            className="linkBtn"
          >
            Share
          </Link>
          <img src="/images/share.svg" alt="share" className="linkImg" />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default IndividualEvent;
