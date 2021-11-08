# Menu Item

[component-header:klik-menu-item]

Menu items provide options for the user to pick from in a menu.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item>Option 1</klik-menu-item>
  <klik-menu-item>Option 2</klik-menu-item>
  <klik-menu-item>Option 3</klik-menu-item>
  <klik-divider></klik-divider>
  <klik-menu-item checked>Checked</klik-menu-item>
  <klik-menu-item disabled>Disabled</klik-menu-item>
  <klik-divider></klik-divider>
  <klik-menu-item>
    Prefix Icon
    <klik-icon slot="prefix" name="gift"></klik-icon>
  </klik-menu-item>
  <klik-menu-item>
    Suffix Icon
    <klik-icon slot="suffix" name="heart"></klik-icon>
  </klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlDivider,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '200px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
    <SlDivider />
    <SlMenuItem checked>Checked</SlMenuItem>
    <SlMenuItem disabled>Disabled</SlMenuItem>
    <SlDivider />
    <SlMenuItem>
      Prefix Icon
      <SlIcon slot="prefix" name="gift" />
    </SlMenuItem>
    <SlMenuItem>
      Suffix Icon
      <SlIcon slot="suffix" name="heart" />
    </SlMenuItem>
  </SlMenu>  
);
```

## Examples

### Checked

Use the `checked` attribute to draw menu items in a checked state.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item>Option 1</klik-menu-item>
  <klik-menu-item checked>Option 2</klik-menu-item>
  <klik-menu-item>Option 3</klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '200px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem checked>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
  </SlMenu>  
);
```

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item>Option 1</klik-menu-item>
  <klik-menu-item disabled>Option 2</klik-menu-item>
  <klik-menu-item>Option 3</klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '200px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuItem>Option 1</SlMenuItem>
    <SlMenuItem disabled>Option 2</SlMenuItem>
    <SlMenuItem>Option 3</SlMenuItem>
  </SlMenu>  
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item>
    <klik-icon slot="prefix" name="house"></klik-icon>
    Home
  </klik-menu-item>

  <klik-menu-item>
    <klik-icon slot="prefix" name="envelope"></klik-icon>
    Messages
    <klik-badge slot="suffix" type="primary" pill>12</klik-badge>
  </klik-menu-item>

  <klik-divider></klik-divider>

  <klik-menu-item>
    <klik-icon slot="prefix" name="gear"></klik-icon>
    Settings
  </klik-menu-item>
</klik-menu>
```

```jsx react
import {
  SlBadge,
  SlDivider,
  SlIcon,
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '200px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuItem>
      <SlIcon slot="prefix" name="house" />
      Home
    </SlMenuItem>

    <SlMenuItem>
      <SlIcon slot="prefix" name="envelope" />
      Messages
      <SlBadge slot="suffix" type="primary" pill>12</SlBadge>
    </SlMenuItem>

    <SlDivider />

    <SlMenuItem>
      <SlIcon slot="prefix" name="gear" />
      Settings
    </SlMenuItem>
  </SlMenu>  
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `klik-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<klik-menu class="menu-value" style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item value="opt-1">Option 1</klik-menu-item>
  <klik-menu-item value="opt-2">Option 2</klik-menu-item>
  <klik-menu-item value="opt-3">Option 3</klik-menu-item>
</klik-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('klik-select', event => {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  });
</script>
```

```jsx react
import { 
  SlMenu,
  SlMenuItem
} from '@shoelace-style/shoelace/dist/react';

const App = () => {

  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <SlMenu 
      style={{
        maxWidth: '200px',
        border: 'solid 1px rgb(var(--klik-panel-border-color))',
        borderRadius: 'var(--klik-border-radius-medium)'
      }}
      onSlSelect={handleSelect}
    >
      <SlMenuItem value="opt-1">Option 1</SlMenuItem>
      <SlMenuItem value="opt-2">Option 2</SlMenuItem>
      <SlMenuItem value="opt-3">Option 3</SlMenuItem>
    </SlMenu>
  );
};
```

[component-metadata:klik-menu-item]
