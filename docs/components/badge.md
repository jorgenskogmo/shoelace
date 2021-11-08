# Badge

[component-header:klik-badge]

Badges are used to draw attention and display statuses or counts.

```html preview
<klik-badge>Badge</klik-badge>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlBadge>Badge</SlBadge>
);
```

## Examples

### Types

Set the `type` attribute to change the badge's type.

```html preview
<klik-badge type="primary">Primary</klik-badge>
<klik-badge type="success">Success</klik-badge>
<klik-badge type="neutral">Neutral</klik-badge>
<klik-badge type="warning">Warning</klik-badge>
<klik-badge type="danger">Danger</klik-badge>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBadge type="primary">Primary</SlBadge>
    <SlBadge type="success">Success</SlBadge>
    <SlBadge type="neutral">Neutral</SlBadge>
    <SlBadge type="warning">Warning</SlBadge>
    <SlBadge type="danger">Danger</SlBadge>  
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<klik-badge type="primary" pill>Primary</klik-badge>
<klik-badge type="success" pill>Success</klik-badge>
<klik-badge type="neutral" pill>Neutral</klik-badge>
<klik-badge type="warning" pill>Warning</klik-badge>
<klik-badge type="danger" pill>Danger</klik-badge>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlBadge type="primary" pill>Primary</SlBadge>
    <SlBadge type="success" pill>Success</SlBadge>
    <SlBadge type="neutral" pill>Neutral</SlBadge>
    <SlBadge type="warning" pill>Warning</SlBadge>
    <SlBadge type="danger" pill>Danger</SlBadge>  
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <klik-badge type="primary" pill pulse>1</klik-badge>
  <klik-badge type="success" pill pulse>1</klik-badge>
  <klik-badge type="neutral" pill pulse>1</klik-badge>
  <klik-badge type="warning" pill pulse>1</klik-badge>
  <klik-badge type="danger" pill pulse>1</klik-badge>
</div>

<style>
  .badge-pulse klik-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { SlBadge } from '@shoelace-style/shoelace/dist/react';

const css = `
  .badge-pulse klik-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <SlBadge type="primary" pill pulse>1</SlBadge>
      <SlBadge type="success" pill pulse>1</SlBadge>
      <SlBadge type="neutral" pill pulse>1</SlBadge>
      <SlBadge type="warning" pill pulse>1</SlBadge>
      <SlBadge type="danger" pill pulse>1</SlBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<klik-button>
  Requests
  <klik-badge pill>30</klik-badge>
</klik-button>

<klik-button style="margin-left: 1rem;">
  Warnings
  <klik-badge type="warning" pill>8</klik-badge>
</klik-button>

<klik-button style="margin-left: 1rem;">
  Errors
  <klik-badge type="danger" pill>6</klik-badge>
</klik-button>
```

```jsx react
import { SlBadge, SlButton } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlButton>
      Requests
      <SlBadge pill>30</SlBadge>
    </SlButton>

    <SlButton style={{ marginLeft: '1rem' }}>
      Warnings
      <SlBadge type="warning" pill>8</SlBadge>
    </SlButton>

    <SlButton style={{ marginLeft: '1rem' }}>
      Errors
      <SlBadge type="danger" pill>6</SlBadge>
    </SlButton>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<klik-menu style="max-width: 240px; border: solid 1px rgb(var(--klik-panel-border-color)); border-radius: var(--klik-border-radius-medium);">
  <klik-menu-label>Messages</klik-menu-label>
  <klik-menu-item>Comments <klik-badge slot="suffix" type="neutral" pill>4</klik-badge></klik-menu-item>
  <klik-menu-item>Replies <klik-badge slot="suffix" type="neutral" pill>12</klik-badge></klik-menu-item>
</klik-menu>
```

```jsx react
import { SlBadge, SlButton, SlMenu, SlMenuItem, SlMenuLabel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlMenu 
    style={{
      maxWidth: '240px',
      border: 'solid 1px rgb(var(--klik-panel-border-color))',
      borderRadius: 'var(--klik-border-radius-medium)'
    }}
  >
    <SlMenuLabel>Messages</SlMenuLabel>
    <SlMenuItem>Comments <SlBadge slot="suffix" type="neutral" pill>4</SlBadge></SlMenuItem>
    <SlMenuItem>Replies <SlBadge slot="suffix" type="neutral" pill>12</SlBadge></SlMenuItem>
  </SlMenu>
);
```

[component-metadata:klik-badge]
