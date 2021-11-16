# Icon Button

[component-header:klik-icon-button]

Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.

For a full list of icons that come bundled with Shoelace, refer to the [icon component](/components/icon).

```html preview
<klik-icon-button name="gear" label="Settings"></klik-icon-button>
```

```jsx react
import { SlIconButton } from '@lego/klik/dist/react';

const App = () => (
  <SlIconButton name="gear" label="Settings" />
);
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<klik-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></klik-icon-button>
<klik-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></klik-icon-button>
<klik-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></klik-icon-button>
```

```jsx react
import { SlIconButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <SlIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <SlIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <klik-icon-button name="type-bold" label="Bold"></klik-icon-button>
  <klik-icon-button name="type-italic" label="Italic"></klik-icon-button>
  <klik-icon-button name="type-underline" label="Underline"></klik-icon-button>
</div>

<style>
  .icon-button-color klik-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color klik-icon-button::part(base):hover,
  .icon-button-color klik-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color klik-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { SlIconButton } from '@lego/klik/dist/react';

const css = `
  .icon-button-color klik-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color klik-icon-button::part(base):hover,
  .icon-button-color klik-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color klik-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <SlIconButton name="type-bold" label="Bold" />
      <SlIconButton name="type-italic" label="Italic" />
      <SlIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<klik-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></klik-icon-button>
```

```jsx react
import { SlIconButton } from '@lego/klik/dist/react';

const App = () => (
  <SlIconButton 
    name="gear" 
    label="Settings" 
    href="https://example.com" 
    target="_blank"
  />
);
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<klik-tooltip content="Settings">
  <klik-icon-button name="gear" label="Settings"></klik-icon-button>
</klik-tooltip>
```

```jsx react
import { SlIconButton, SlTooltip } from '@lego/klik/dist/react';

const App = () => (
  <SlTooltip content="Settings">
    <SlIconButton name="gear" label="Settings" />
  </SlTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<klik-icon-button name="gear" label="Settings" disabled></klik-icon-button>
```

```jsx react
import { SlIconButton } from '@lego/klik/dist/react';

const App = () => (
  <SlIconButton name="gear" label="Settings" disabled />
);
```

[component-metadata:klik-icon-button]
