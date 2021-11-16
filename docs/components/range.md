# Range

[component-header:klik-range]

Ranges allow the user to select a single value within a given range using a slider.

```html preview
<klik-range></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange />
);
```

?> This component doesn't work with standard forms. Use [`<klik-form>`](/components/form) instead.

## Examples

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html preview
<klik-range min="0" max="10" step="1"></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange min={0} max={10} step={1} />
);
```

### Disabled

Use the `disabled` attribute to disable a slider.

```html preview
<klik-range disabled></klik-range>
```


```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange disabled />
);
```

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html preview
<klik-range tooltip="bottom"></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange tooltip="bottom" />
);
```

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html preview
<klik-range tooltip="none"></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange tooltip="none" />
);
```

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html preview
<klik-range style="
  --track-color-active: rgb(var(--klik-color-primary-600));
  --track-color-inactive: rgb(var(--klik-color-primary-200));
"></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange 
    style={{
      '--track-color-active': 'rgb(var(--klik-color-primary-600))',
      '--track-color-inactive': 'rgb(var(--klik-color-primary-200))'
    }}
  />
);
```

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html preview
<klik-range min="0" max="100" step="1" class="range-with-custom-formatter"></klik-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange 
    min={0}
    max={100}
    step={1}
    tooltipFormatter={value => `Total - ${value}%`}
  />
);
```

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<klik-range label="Volume" min="0" max="100"></klik-range>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange label="Volume" min={0} max={100} />
);
```

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<klik-range 
  label="Volume" 
  help-text="Controls the volume of the current song."
  min="0"
  max="100"
></klik-input>
```

```jsx react
import { SlRange } from '@lego/klik/dist/react';

const App = () => (
  <SlRange 
    label="Volume" 
    help-text="Controls the volume of the current song."
    min={0}
    max={100}
  />
);
```

[component-metadata:klik-range]
