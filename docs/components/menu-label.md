# Menu Label

[component-header:klik-menu-label]

Menu labels are used to describe a group of menu items.

```html preview
<klik-menu
  style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);"
>
  <klik-menu-label>Fruits</klik-menu-label>
  <klik-menu-item value="apple">Apple</klik-menu-item>
  <klik-menu-item value="banana">Banana</klik-menu-item>
  <klik-menu-item value="orange">Orange</klik-menu-item>
  <klik-divider></klik-divider>
  <klik-menu-label>Vegetables</klik-menu-label>
  <klik-menu-item value="broccoli">Broccoli</klik-menu-item>
  <klik-menu-item value="carrot">Carrot</klik-menu-item>
  <klik-menu-item value="zucchini">Zucchini</klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlDivider,
  SlMenu,
  SlMenuLabel,
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
    <SlMenuLabel>Fruits</SlMenuLabel>
    <SlMenuItem value="apple">Apple</SlMenuItem>
    <SlMenuItem value="banana">Banana</SlMenuItem>
    <SlMenuItem value="orange">Orange</SlMenuItem>
    <SlDivider />
    <SlMenuLabel>Vegetables</SlMenuLabel>
    <SlMenuItem value="broccoli">Broccoli</SlMenuItem>
    <SlMenuItem value="carrot">Carrot</SlMenuItem>
    <SlMenuItem value="zucchini">Zucchini</SlMenuItem>
  </SlMenu>  
);
```

[component-metadata:klik-menu-label]
