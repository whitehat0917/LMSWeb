import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MatSelect,
} from '@material-ui/core';
import React from 'react';
import { useInputLabelStyles, useStyles } from './ui';

// type SelectProps = SelectInputProps & {
//   chidren: any;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export default function Select(props: any) {
//   const inputBaseStyles = useInputBaseStyles();
//   const inputLabelStyles = useInputLabelStyles();
//   return (
//     <FormControl fullWidth className={inputBaseStyles.formControl}>
//       <InputLabel
//         shrink={true}
//         classes={inputLabelStyles}
//         disableAnimation={true}
//         htmlFor={`${props.name}-label`}
//       >
//         {props.label}
//       </InputLabel>
//       <MatSelect
//         native
//         id={`${props.name}-label`}
//         variant="outlined"
//         {...props}
//         InputProps={{ classes: inputBaseStyles, notched: false }}
//         label={null}
//         FormHelperTextProps={{ className: inputBaseStyles.formHelperText }}
//       >
//         {props.chidren}
//       </MatSelect>
//     </FormControl>
//   );
// }

export default function Select(props) {
  const classes = useStyles();
  const inputLabelStyles = useInputLabelStyles();
  // const inputBaseStyles = useInputBaseStyles();

  return (
    <FormControl
      error={props.error}
      className={classes.formControl}
      variant="outlined"
      fullWidth
    >
      <InputLabel
        shrink={true}
        classes={inputLabelStyles}
        disableAnimation={true}
        htmlFor={`${props.name}-label`}
      >
        {props.label}
      </InputLabel>
      <MatSelect
        native
        id={`${props.name}-label`}
        {...props}
        label={undefined}
        classes={{
          root: classes.select,
        }}
        // InputProps={{ classes: inputBaseStyles, notched: false }}

        // FormHelperTextProps={{ className: inputBaseStyles.formHelperText }}
      >
        {props.children}
      </MatSelect>
      {props.error && (
        <FormHelperText className={classes.formHelperText}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}
