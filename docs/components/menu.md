# Menu

[component-header:klik-menu]

Menus provide a list of options for the user to choose from.

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<klik-menu style="max-width: 200px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-item value="undo">Undo</klik-menu-item>
  <klik-menu-item value="redo">Redo</klik-menu-item>
  <klik-divider></klik-divider>
  <klik-menu-item value="cut">Cut</klik-menu-item>
  <klik-menu-item value="copy">Copy</klik-menu-item>
  <klik-menu-item value="paste">Paste</klik-menu-item>
  <klik-menu-item value="delete">Delete</klik-menu-item>
</klik-menu>
```

```jsx react
import { 
  SlDivider,
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
    <SlMenuItem value="undo">Undo</SlMenuItem>
    <SlMenuItem value="redo">Redo</SlMenuItem>
    <SlDivider />
    <SlMenuItem value="cut">Cut</SlMenuItem>
    <SlMenuItem value="copy">Copy</SlMenuItem>
    <SlMenuItem value="paste">Paste</SlMenuItem>
    <SlMenuItem value="delete">Delete</SlMenuItem>
  </SlMenu>  
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:klik-menu]
