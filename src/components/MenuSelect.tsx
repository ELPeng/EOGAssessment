import * as React from 'react';
// import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core//MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['oilTemp', 'waterTemp', 'injValveOpen', 'flareTemp', 'tubingPressure', 'casingPressure'];

// function getStyles(name: any, metricNames: any, theme: any) {
//   const regTheme = theme.typography.fontWeightRegular;
//   const medTheme = theme.typography.fontWeightMedium;
//   return {
//     fontWeight: metricNames.indexOf(name) === -1 ? regTheme : medTheme,
//   };
// }

export default function MultipleSelectChip({ metricNames, setMetricNames }: any) {
  //   const theme = useTheme();

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setMetricNames(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl style={{ width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Select Metric...</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={metricNames}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected: any) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value: any) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
