# Checkbox

[component-header:klik-checkbox]

Checkboxes allow the user to toggle an option on or off.

```html preview
<klik-checkbox>Checkbox</klik-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlCheckbox>Checkbox</SlCheckbox>
);
```

?> This component doesn't work with standard forms. Use [`<klik-form>`](/components/form) instead.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<klik-checkbox checked>Checked</klik-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlCheckbox checked>Checked</SlCheckbox>
);
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<klik-checkbox indeterminate>Indeterminate</klik-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlCheckbox indeterminate>Indeterminate</SlCheckbox>
);
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<klik-checkbox disabled>Disabled</klik-checkbox>
```

```jsx react
import { SlCheckbox } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlCheckbox disabled>Disabled</SlCheckbox>
);
```

[component-metadata:klik-checkbox]
