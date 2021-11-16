# Spinner

[component-header:klik-spinner]

Spinners are used to show the progress of an indeterminate operation.

```html preview
<klik-spinner></klik-spinner>
```

```jsx react
import { SlSpinner } from '@lego/klik/dist/react';

const App = () => (
  <SlSpinner />
);
```

## Examples

### Size

Spinners are sized based on the current font size. To change their size, set the `font-size` property on the spinner itself or on a parent element as shown below.

```html preview
<klik-spinner></klik-spinner>
<klik-spinner style="font-size: 2rem;"></klik-spinner>
<klik-spinner style="font-size: 3rem;"></klik-spinner>
```

```jsx react
import { SlSpinner } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlSpinner />
    <SlSpinner style={{ fontSize: '2rem' }} />
    <SlSpinner style={{ fontSize: '3rem' }} />
  </>
);
```

### Track Width

The width of the spinner's track can be changed by setting the `--track-width` custom property.

```html preview
<klik-spinner style="font-size: 3rem; --track-width: 6px;"></klik-spinner>
```

```jsx react
import { SlSpinner } from '@lego/klik/dist/react';

const App = () => (
  <SlSpinner 
    style={{
      fontSize: '3rem',
      '--track-width': '6px'
    }} 
  />
);
```

### Color

The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties.

```html preview
<klik-spinner style="font-size: 3rem; --indicator-color: deeppink; --track-color: pink;"></klik-spinner>
```

```jsx react
import { SlSpinner } from '@lego/klik/dist/react';

const App = () => (
  <SlSpinner 
    style={{
      fontSize: '3rem',
      '--indicator-color': 'deeppink',
      '--track-color': 'pink'
    }} 
  />
);
```

[component-metadata:klik-spinner]
