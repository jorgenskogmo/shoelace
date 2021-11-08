# Tab Panel

[component-header:klik-tab-panel]

Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.

```html preview
<klik-tab-group>
  <klik-tab slot="nav" panel="general">General</klik-tab>
  <klik-tab slot="nav" panel="custom">Custom</klik-tab>
  <klik-tab slot="nav" panel="advanced">Advanced</klik-tab>
  <klik-tab slot="nav" panel="disabled" disabled>Disabled</klik-tab>

  <klik-tab-panel name="general">This is the general tab panel.</klik-tab-panel>
  <klik-tab-panel name="custom">This is the custom tab panel.</klik-tab-panel>
  <klik-tab-panel name="advanced">This is the advanced tab panel.</klik-tab-panel>
  <klik-tab-panel name="disabled">This is a disabled tab panel.</klik-tab-panel>
</klik-tab-group>
```

```jsx react
import { SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlTabGroup>
    <SlTab slot="nav" panel="general">General</SlTab>
    <SlTab slot="nav" panel="custom">Custom</SlTab>
    <SlTab slot="nav" panel="advanced">Advanced</SlTab>
    <SlTab slot="nav" panel="disabled" disabled>Disabled</SlTab>

    <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
    <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
    <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
    <SlTabPanel name="disabled">This is a disabled tab panel.</SlTabPanel>
  </SlTabGroup>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:klik-tab-panel]
