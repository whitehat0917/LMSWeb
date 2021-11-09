import { Box, Typography, Link } from '@material-ui/core';
import React from 'react';

export default function RetryMessage({
  message,
  onRetry,
}: {
  onRetry: CallableFunction;
  message: string;
}) {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1}>
        <Typography color="error">{message}</Typography>
      </Box>
      <Link component="button" variant="body2" onClick={() => onRetry()}>
        Retry
      </Link>
    </Box>
  );
}
