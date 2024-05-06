---
sidebar_position: 1
title: "MUI Radio"
---

The Radio Group allows the user to select one option from a set.
Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

Radio buttons should have the most commonly used option selected by default.

:::tip

RadioGroup is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard accessibility to the group.

:::

## Radio Group

The Radio Group allows the user to select one option from a set.
Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

Radio buttons should have the most commonly used option selected by default.

## Label

You can provide a label to the Checkbox thanks to the FormControlLabel component.
You can provide a label to the Checkbox thanks to the FormControlLabel component.
You can provide a label to the Checkbox thanks to the FormControlLabel component.

```

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

```
