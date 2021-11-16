# Tab

[component-header:klik-tab]

Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).

```html preview
<klik-tab>Tab</klik-tab>
<klik-tab active>Active</klik-tab>
<klik-tab closable>Closable</klik-tab>
<klik-tab disabled>Disabled</klik-tab>
```

```jsx react
import { SlTab } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlTab>Tab</SlTab>
    <SlTab active>Active</SlTab>
    <SlTab closable>Closable</SlTab>
    <SlTab disabled>Disabled</SlTab>
  </>
);
```

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:klik-tab]
