# Button

[component-header:klik-button]


<!-- tabs:start -->

#### **Usage**



#### **Code**




Buttons represent actions that are available to the user.

```html preview
<klik-button>Button</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <SlButton>Button</SlButton>
);
```

## Examples

### Types

Use the `type` attribute to set the button's type.

```html preview
<klik-button type="default">Default</klik-button>
<klik-button type="primary">Primary</klik-button>
<klik-button type="success">Success</klik-button>
<klik-button type="neutral">Neutral</klik-button>
<klik-button type="warning">Warning</klik-button>
<klik-button type="danger">Danger</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default">Default</SlButton>
    <SlButton type="primary">Primary</SlButton>
    <SlButton type="success">Success</SlButton>
    <SlButton type="neutral">Neutral</SlButton>
    <SlButton type="warning">Warning</SlButton>
    <SlButton type="danger">Danger</SlButton>  
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<klik-button size="small">Small</klik-button>
<klik-button size="medium">Medium</klik-button>
<klik-button size="large">Large</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton size="small">Small</SlButton>
    <SlButton size="medium">Medium</SlButton>
    <SlButton size="large">Large</SlButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<klik-button type="default" outline>Default</klik-button>
<klik-button type="primary" outline>Primary</klik-button>
<klik-button type="success" outline>Success</klik-button>
<klik-button type="neutral" outline>Neutral</klik-button>
<klik-button type="warning" outline>Warning</klik-button>
<klik-button type="danger" outline>Danger</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" outline>Default</SlButton>
    <SlButton type="primary" outline>Primary</SlButton>
    <SlButton type="success" outline>Success</SlButton>
    <SlButton type="neutral" outline>Neutral</SlButton>
    <SlButton type="warning" outline>Warning</SlButton>
    <SlButton type="danger" outline>Danger</SlButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<klik-button size="small" pill>Small</klik-button>
<klik-button size="medium" pill>Medium</klik-button>
<klik-button size="large" pill>Large</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton size="small" pill>Small</SlButton>
    <SlButton size="medium" pill>Medium</SlButton>
    <SlButton size="large" pill>Large</SlButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons.

```html preview
<klik-button type="default" size="small" circle><klik-icon name="gear"></klik-icon></klik-button>
<klik-button type="default" size="medium" circle><klik-icon name="gear"></klik-icon></klik-button>
<klik-button type="default" size="large" circle><klik-icon name="gear"></klik-icon></klik-button>
```

```jsx react
import { SlButton, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" size="small" circle><SlIcon name="gear" /></SlButton>
    <SlButton type="default" size="medium" circle><SlIcon name="gear" /></SlButton>
    <SlButton type="default" size="large" circle><SlIcon name="gear" /></SlButton>
  </>
);
```

### Text Buttons

Use the `text` type to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<klik-button type="text" size="small">Text</klik-button>
<klik-button type="text" size="medium">Text</klik-button>
<klik-button type="text" size="large">Text</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="text" size="small">Text</SlButton>
    <SlButton type="text" size="medium">Text</SlButton>
    <SlButton type="text" size="large">Text</SlButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<klik-button href="https://example.com/">Link</klik-button>
<klik-button href="https://example.com/" target="_blank">New Window</klik-button>
<klik-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</klik-button>
<klik-button href="https://example.com/" disabled>Disabled</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton href="https://example.com/">Link</SlButton>
    <SlButton href="https://example.com/" target="_blank">New Window</SlButton>
    <SlButton href="/assets/images/wordmark.svg" download="shoelace.svg">Download</SlButton>
    <SlButton href="https://example.com/" disabled>Disabled</SlButton>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting its `width`. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<klik-button type="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</klik-button>
<klik-button type="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</klik-button>
<klik-button type="default" size="large" style="width: 100%;">Large</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>Small</SlButton>
    <SlButton type="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>Medium</SlButton>
    <SlButton type="default" size="large" style={{ width: '100%' }}>Large</SlButton>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<klik-button type="default" size="small">
  <klik-icon slot="prefix" name="gear"></klik-icon>
  Settings
</klik-button>

<klik-button type="default" size="small">
  <klik-icon slot="suffix" name="arrow-counterclockwise"></klik-icon>
  Refresh
</klik-button>

<klik-button type="default" size="small">
  <klik-icon slot="prefix" name="link-45deg"></klik-icon>
  <klik-icon slot="suffix" name="box-arrow-up-right"></klik-icon>
  Open
</klik-button>

<br><br>

<klik-button type="default">
  <klik-icon slot="prefix" name="gear"></klik-icon>
  Settings
</klik-button>

<klik-button type="default">
  <klik-icon slot="suffix" name="arrow-counterclockwise"></klik-icon>
  Refresh
</klik-button>

<klik-button type="default">
  <klik-icon slot="prefix" name="link-45deg"></klik-icon>
  <klik-icon slot="suffix" name="box-arrow-up-right"></klik-icon>
  Open
</klik-button>

<br><br>

<klik-button type="default" size="large">
  <klik-icon slot="prefix" name="gear"></klik-icon>
  Settings
</klik-button>

<klik-button type="default" size="large">
  <klik-icon slot="suffix" name="arrow-counterclockwise"></klik-icon>
  Refresh
</klik-button>

<klik-button type="default" size="large">
  <klik-icon slot="prefix" name="link-45deg"></klik-icon>
  <klik-icon slot="suffix" name="box-arrow-up-right"></klik-icon>
  Open
</klik-button>
```

```jsx react
import { SlButton, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" size="small">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton type="default" size="small">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton type="default" size="small">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br /><br/ >

    <SlButton type="default">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton type="default">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton type="default">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>

    <br /><br />

    <SlButton type="default" size="large">
      <SlIcon slot="prefix" name="gear"></SlIcon>
      Settings
    </SlButton>

    <SlButton type="default" size="large">
      <SlIcon slot="suffix" name="arrow-counterclockwise"></SlIcon>
      Refresh
    </SlButton>

    <SlButton type="default" size="large">
      <SlIcon slot="prefix" name="link-45deg"></SlIcon>
      <SlIcon slot="suffix" name="box-arrow-up-right"></SlIcon>
      Open
    </SlButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<klik-button size="small" caret>Small</klik-button>
<klik-button size="medium" caret>Medium</klik-button>
<klik-button size="large" caret>Large</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton size="small" caret>Small</SlButton>
    <SlButton size="medium" caret>Medium</SlButton>
    <SlButton size="large" caret>Large</SlButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<klik-button type="default" loading>Default</klik-button>
<klik-button type="primary" loading>Primary</klik-button>
<klik-button type="success" loading>Success</klik-button>
<klik-button type="neutral" loading>Neutral</klik-button>
<klik-button type="warning" loading>Warning</klik-button>
<klik-button type="danger" loading>Danger</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" loading>Default</SlButton>
    <SlButton type="primary" loading>Primary</SlButton>
    <SlButton type="success" loading>Success</SlButton>
    <SlButton type="neutral" loading>Neutral</SlButton>
    <SlButton type="warning" loading>Warning</SlButton>
    <SlButton type="danger" loading>Danger</SlButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<klik-button type="default" disabled>Default</klik-button>
<klik-button type="primary" disabled>Primary</klik-button>
<klik-button type="success" disabled>Success</klik-button>
<klik-button type="neutral" disabled>Neutral</klik-button>
<klik-button type="warning" disabled>Warning</klik-button>
<klik-button type="danger" disabled>Danger</klik-button>
```

```jsx react
import { SlButton } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlButton type="default" disabled>Default</SlButton>
    <SlButton type="primary" disabled>Primary</SlButton>
    <SlButton type="success" disabled>Success</SlButton>
    <SlButton type="neutral" disabled>Neutral</SlButton>
    <SlButton type="warning" disabled>Warning</SlButton>
    <SlButton type="danger" disabled>Danger</SlButton>
  </>
);
```


#### **Style**



### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's type attribute instead of a class (e.g. `klik-button[type="primary"]`).

```html preview
<klik-button class="pink">Pink Button</klik-button>

<style>
  klik-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --klik-input-height-medium: 48px;
    --klik-input-border-width: 4px;
    
    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--klik-transition-medium) transform ease, var(--klik-transition-medium) border ease;
  }

  klik-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  klik-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  klik-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:klik-button]


<!-- tabs:end -->