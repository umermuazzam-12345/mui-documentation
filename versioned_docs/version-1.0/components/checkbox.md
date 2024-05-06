---
sidebar_position: 1
title: "Checkbox"
---

<!-- import Checkboxes from '../../src/components/Checkboxes' -->

Checkboxes allow the user to select one or more items from a set.
If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.

## Basic checkboxes

```
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
}
```

<!-- <Checkboxes/> -->
