# Radio Group

[component-header:klik-radio-group]

Radio Groups are used to group multiple radios so they function as a single control.

```html preview
<klik-radio-group label="Select an option">
  <klik-radio value="1" checked>Option 1</klik-radio>
  <klik-radio value="2">Option 2</klik-radio>
  <klik-radio value="3">Option 3</klik-radio>
</klik-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@lego/klik/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio value="1" checked>Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```

## Examples

### Showing the Fieldset

You can show a fieldset and legend that wraps the radio group using the `fieldset` attribute.

```html preview
<klik-radio-group label="Select an option" fieldset>
  <klik-radio value="1" checked>Option 1</klik-radio>
  <klik-radio value="2">Option 2</klik-radio>
  <klik-radio value="3">Option 3</klik-radio>
</klik-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@lego/klik/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option" fieldset>
    <SlRadio value="1" checked>Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
  </SlRadioGroup>
);
```
[component-metadata:klik-radio-group]
