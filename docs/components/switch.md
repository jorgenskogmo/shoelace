# Switch

[component-header:klik-switch]

Switches allow the user to toggle an option on or off. 

```html preview
<klik-switch>Switch</klik-switch>
```

```jsx react
import { SlSwitch } from '@lego/klik/dist/react';

const App = () => (
  <SlSwitch>Switch</SlSwitch>
);
```

?> This component doesn't work with standard forms. Use [`<klik-form>`](/components/form) instead.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<klik-switch checked>Checked</klik-switch>
```

```jsx react
import { SlSwitch } from '@lego/klik/dist/react';

const App = () => (
  <SlSwitch checked>Checked</SlSwitch>
);
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<klik-switch disabled>Disabled</klik-switch>
```

```jsx react
import { SlSwitch } from '@lego/klik/dist/react';

const App = () => (
  <SlSwitch disabled>Disabled</SlSwitch>
);
```

### Custom Size

Use the available custom properties to make the switch a different size.

```html preview
<klik-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;"></klik-switch>
```

```jsx react
import { SlSwitch } from '@lego/klik/dist/react';

const App = () => (
  <SlSwitch 
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }} 
  />
);
```

[component-metadata:klik-switch]
