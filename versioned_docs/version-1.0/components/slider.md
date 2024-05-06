---
sidebar_position: 1
title: "Slider"
---

Sliders allow users to make selections from a range of values.
Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

## Continuous sliders

Continuous sliders allow users to select a value along a subjective range.

```

import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}

```

## Sizes

For smaller slider, use the prop size="small".
Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.

:::warning

Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.

:::

:::danger

Discrete sliders can be adjusted to a specific value by referencing its value indicator. You can generate a mark for each step with marks={true}.

:::
