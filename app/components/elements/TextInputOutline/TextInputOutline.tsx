import { OutlinedTextFieldProps, TextField } from '@material-ui/core';
import React from 'react';
import { useInputBaseStyles, useInputLabelStyles } from './ui';

type TextInputOutlineProps = Omit<OutlinedTextFieldProps, 'variant'>;

export default function TextInputOutline(props: TextInputOutlineProps) {
  const inputBaseStyles = useInputBaseStyles();
  const inputLabelStyles = useInputLabelStyles();
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      InputLabelProps={{
        shrink: true,
        classes: inputLabelStyles,
        disableAnimation: true,
      }}
      InputProps={{
        classes: inputBaseStyles,
        notched: false,
        ...props.InputProps,
      }}
      FormHelperTextProps={{ className: inputBaseStyles.formHelperText }}
    />
  );
}
