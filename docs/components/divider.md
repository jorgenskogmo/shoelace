# Divider

[component-header:klik-divider]

Dividers are used to visually separate or group elements.

```html preview
<klik-divider></klik-divider>
```

```jsx react
import { SlDivider } from '@lego/klik/dist/react';

const App = () => (
  <SlDivider />
);
```
## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<klik-divider style="--width: 4px;"></klik-divider>
```

```jsx react
import { SlDivider } from '@lego/klik/dist/react';

const App = () => (
  <SlDivider style={{ '--width': '4px' }} />
);
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<klik-divider style="--color: tomato;"></klik-divider>
```

```jsx react
import { SlDivider } from '@lego/klik/dist/react';

const App = () => (
  <SlDivider style={{ '--color': 'tomato' }} />
);
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <klik-divider style="--spacing: 2rem;"></klik-divider>
  Below
</div>
```

```jsx react
import { SlDivider } from '@lego/klik/dist/react';

const App = () => (
  <>
    Above
    <SlDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <klik-divider vertical></klik-divider>
  Middle
  <klik-divider vertical></klik-divider>
  Last
</div>
```

```jsx react
import { SlDivider } from '@lego/klik/dist/react';

const App = () => (
  <div 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '2rem'
    }}
  >
    First
    <SlDivider vertical />
    Middle
    <SlDivider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item value="1">Option 1</klik-menu-item>
  <klik-menu-item value="2">Option 2</klik-menu-item>
  <klik-menu-item value="3">Option 3</klik-menu-item>
  <klik-divider></klik-divider>
  <klik-menu-item value="4">Option 4</klik-menu-item>
  <klik-menu-item value="5">Option 5</klik-menu-item>
  <klik-menu-item value="6">Option 6</klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlDivider, 
  SlMenu, 
  SlMenuItem 
} from '@lego/klik/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '200px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuItem value="1">Option 1</SlMenuItem>
    <SlMenuItem value="2">Option 2</SlMenuItem>
    <SlMenuItem value="3">Option 3</SlMenuItem>
    <klik-divider />
    <SlMenuItem value="4">Option 4</SlMenuItem>
    <SlMenuItem value="5">Option 5</SlMenuItem>
    <SlMenuItem value="6">Option 6</SlMenuItem>
  </SlMenu>
);
```

[component-metadata:klik-divider]
