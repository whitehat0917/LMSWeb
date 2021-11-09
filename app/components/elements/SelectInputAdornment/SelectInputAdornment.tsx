import { Box, InputAdornment } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useClickAway } from 'react-use';
import { useStyles } from './ui';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SelectInputAdornment(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => setOpen(false));

  const options = React.useMemo(
    () => props.options.filter((dt) => dt.value !== props.value),
    [props.options, props.value]
  );

  return (
    <InputAdornment
      position="end"
      classes={{
        root: classes.inputAndorsment,
      }}
      innerRef={ref}
    >
      <Box position="relative">
        <Box
          onClick={() => setOpen((bool) => !bool)}
          className={classes.valueContainer}
        >
          <span>
            {props.options.find((dt) => dt.value === props.value)?.name}
          </span>
          <ExpandMoreIcon
            style={{ transform: !open ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </Box>
        <Box
          height={open ? options.length * 32.5 : 0}
          position="absolute"
          className={classes.dropDownContainer}
        >
          <Box width="90%" mx="auto" className={classes.dropDownSeparator} />
          {options.map((dt) => (
            <Box
              onClick={() => {
                setOpen(false);
                props.onChange(dt.value);
              }}
              key={dt.name}
              className={classes.dropDownOption}
            >
              {dt.name}
            </Box>
          ))}
        </Box>
      </Box>
    </InputAdornment>
  );
}

SelectInputAdornment.propTypes = {
  value: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
SelectInputAdornment.defaultProps = {
  options: [],
};

export default SelectInputAdornment;
