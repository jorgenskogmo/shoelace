# Radio

[component-header:klik-radio]

Radios allow the user to select one option from a group of many.

Radios are designed to be used with [radio groups](/components/radio-group). As such, all of the examples on this page utilize them to demonstrate their correct usage.

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

?> This component doesn't work with standard forms. Use [`<klik-form>`](/components/form) instead.

## Examples

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<klik-radio-group label="Select an option">
  <klik-radio value="1" checked>Option 1</klik-radio>
  <klik-radio value="2">Option 2</klik-radio>
  <klik-radio value="3">Option 3</klik-radio>
  <klik-radio value="4" disabled>Disabled</klik-radio>
</klik-radio-group>
```

```jsx react
import { SlRadio, SlRadioGroup } from '@lego/klik/dist/react';

const App = () => (
  <SlRadioGroup label="Select an option">
    <SlRadio value="1" checked>Option 1</SlRadio>
    <SlRadio value="2">Option 2</SlRadio>
    <SlRadio value="3">Option 3</SlRadio>
    <SlRadio value="4" disabled>Disabled</SlRadio>
  </SlRadioGroup>
);
```

[component-metadata:klik-radio]
