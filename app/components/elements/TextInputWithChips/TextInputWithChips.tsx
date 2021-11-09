import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Chip, Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ui';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TextInputWithChips(props: any) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextInputOutline {...props} />
      <Grid className={classes.chipsGrid}>
        {typeof props.value === 'string' &&
          props.value
            ?.split(',')
            .filter((dt: string) => !!dt)
            .map((dt: string, idx) => (
              <Chip
                key={dt}
                size="small"
                label={dt}
                onDelete={() => {
                  props.onChange(
                    typeof props.value === 'string'
                      ? props.value
                          ?.split(',')
                          .filter((ob, i) => i !== idx)
                          .join(',')
                      : ''
                  );
                }}
                className={classes.chipcolor}
              />
            ))}
      </Grid>
    </React.Fragment>
  );
}
