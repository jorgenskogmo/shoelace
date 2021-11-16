# Color Picker

[component-header:klik-color-picker]

Color pickers allow the user to select a color.

```html preview
<klik-color-picker></klik-color-picker>
```

```jsx react
import { SlColorPicker } from '@lego/klik/dist/react';

const App = () => (
  <SlColorPicker />
);
```

## Examples

### Opacity

Use the `opacity` attribute to enable the opacity slider. When this is enabled, the value will be displayed as HEXA, RGBA, or HSLA based on `format`.

```html preview
<klik-color-picker opacity></klik-color-picker>
```

```jsx react
import { SlColorPicker } from '@lego/klik/dist/react';

const App = () => (
  <SlColorPicker opacity />
);
```

### Formats

Set the color picker's format with the `format` attribute. Valid options include `hex`, `rgb`, and `hsl`. Note that the color picker's input will accept any parsable format (including CSS color names) regardless of this option.

To prevent users from toggling the format themselves, add the `no-format-toggle` attribute.

```html preview
<klik-color-picker format="hex" value="#4a90e2"></klik-color-picker>
<klik-color-picker format="rgb" value="rgb(80, 227, 194)"></klik-color-picker>
<klik-color-picker format="hsl" value="hsl(290, 87%, 47%)"></klik-color-picker>
```

```jsx react
import { SlColorPicker } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlColorPicker format="hex" value="#4a90e2" />
    <SlColorPicker format="rgb" value="rgb(80, 227, 194)" />
    <SlColorPicker format="hsl" value="hsl(290, 87%, 47%)" />
  </>
);
```

### Sizes

Use the `size` attribute to change the color picker's trigger size.

```html preview
<klik-color-picker size="small"></klik-color-picker>
<klik-color-picker size="medium"></klik-color-picker>
<klik-color-picker size="large"></klik-color-picker>
```

```jsx react
import { SlColorPicker } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlColorPicker size="small" />
    <SlColorPicker size="medium" />
    <SlColorPicker size="large" />
  </>
);
```

### Inline

The color picker can be rendered inline instead of in a dropdown using the `inline` attribute.

```html preview
<klik-color-picker inline></klik-color-picker>
```

```jsx react
import { SlColorPicker } from '@lego/klik/dist/react';

const App = () => (
  <SlColorPicker inline />
);
```

[component-metadata:klik-color-picker]
