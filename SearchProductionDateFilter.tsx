import * as React from 'react';
import Slider from '@mui/material/Slider';
import { Box, Grid, Icon, ThemeProvider, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import searchProductionDateFilterStyle from './searchProductionDateFilterStyle';
import { CiSearch } from 'react-icons/ci';

export default function SearchProductionDateFilter() {
  const classes = searchProductionDateFilterStyle();

  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const marks = [
    {
      value: 0,
      label: '1997'
    },

    {
      value: 100,
      label: '2024'
    }
  ];
  return (
    <>
      <Grid container sx={classes.dateFilterWrapper}>
        <Grid item xs={4} sx={classes.titleFilterTextWrapper}>
          <Icon component={CiSearch} sx={classes.chipLabelIcon} />
          <Typography sx={classes.titleFilterText}>سال ساخت</Typography>
        </Grid>

        <Grid item xs={8}>
          <FormControl sx={classes.radioGroupWrapper}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={classes.formControlLabelWrapper}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="میلادی"
                sx={classes.label}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="شمسی"
                sx={classes.label}
              />
            </RadioGroup>
          </FormControl>
          <Box sx={classes.sliderWrapper}>
            <ThemeProvider
              theme={(outerTheme) => ({ ...outerTheme, direction: 'ltr' })}
            >
              <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                marks={marks}
                sx={classes.slider}
              />
            </ThemeProvider>
            <Typography sx={classes.buletRight}></Typography>
            <Typography sx={classes.buletLeft}></Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
