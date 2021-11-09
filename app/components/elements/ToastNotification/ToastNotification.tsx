import { Box } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
import ToastMessage from 'types/elements/ToastMessage';
import { useStyles } from './ui';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ToastNotification({
  onExited,
  data,
}: {
  onExited: (el: HTMLElement) => void;
  data: ToastMessage;
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box className={classes.anchorOriginBottomCenter} mb={1}>
      <Collapse onExited={onExited} in={open}>
        <Alert
          className={classes.alert}
          onClose={handleClose}
          severity={data.type}
        >
          {data.message}
        </Alert>
      </Collapse>
    </Box>
  );
}
