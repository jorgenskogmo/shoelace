# Input

[component-header:klik-input]

Inputs collect data from the user.

```html preview
<klik-input></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput />
);
```

?> This component doesn't work with standard forms. Use [`<klik-form>`](/components/form) instead.

?> Please refer to the section on [form control validation](/components/form?id=form-control-validation) to learn how to do client-side validation.

## Examples

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<klik-input placeholder="Type something"></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput placeholder="Type something" />
);
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<klik-input placeholder="Clearable" clearable></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput placeholder="Clearable" clearable />
);
```

### Toggle Password

Add the `toggle-password` attribute to add a toggle button that will show the password when activated.

```html preview
<klik-input type="password" placeholder="Password Toggle" size="small" toggle-password></klik-input>
<br>
<klik-input type="password" placeholder="Password Toggle" size="medium" toggle-password></klik-input>
<br>
<klik-input type="password" placeholder="Password Toggle" size="large" toggle-password></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput type="password" placeholder="Password Toggle" size="small" toggle-password />
    <br />
    <SlInput type="password" placeholder="Password Toggle" size="medium" toggle-password />
    <br />
    <SlInput type="password" placeholder="Password Toggle" size="large" toggle-password />  
  </>
);
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<klik-input placeholder="Type something" filled></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput placeholder="Type something" filled />
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<klik-input placeholder="Small" size="small" pill></klik-input>
<br>
<klik-input placeholder="Medium" size="medium" pill></klik-input>
<br>
<klik-input placeholder="Large" size="large" pill></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" pill />
    <br />
    <SlInput placeholder="Medium" size="medium" pill />
    <br />
    <SlInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<klik-input type="email" Placeholder="Email"></klik-input>
<br>
<klik-input type="number" Placeholder="Number"></klik-input>
<br>
<klik-input type="date" Placeholder="Date"></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput type="email" Placeholder="Email" />
    <br />
    <SlInput type="number" Placeholder="Number" />
    <br />
    <SlInput type="date" Placeholder="Date" />
  </>
);
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<klik-input placeholder="Disabled" size="small" disabled></klik-input>
<br>
<klik-input placeholder="Disabled" size="medium" disabled></klik-input>
<br>
<klik-input placeholder="Disabled" size="large" disabled></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Disabled" size="small" disabled />
    <br />
    <SlInput placeholder="Disabled" size="medium" disabled />
    <br />
    <SlInput placeholder="Disabled" size="large" disabled />
  </>
);
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<klik-input placeholder="Small" size="small"></klik-input>
<br>
<klik-input placeholder="Medium" size="medium"></klik-input>
<br>
<klik-input placeholder="Large" size="large"></klik-input>
```

```jsx react
import { SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small" />
    <br />
    <SlInput placeholder="Medium" size="medium" />
    <br />
    <SlInput placeholder="Large" size="large" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<klik-input placeholder="Small" size="small">
  <klik-icon name="house" slot="prefix"></klik-icon>
  <klik-icon name="chat" slot="suffix"></klik-icon>
</klik-input>
<br>
<klik-input placeholder="Medium" size="medium">
  <klik-icon name="house" slot="prefix"></klik-icon>
  <klik-icon name="chat" slot="suffix"></klik-icon>
</klik-input>
<br>
<klik-input placeholder="Large" size="large">
  <klik-icon name="house" slot="prefix"></klik-icon>
  <klik-icon name="chat" slot="suffix"></klik-icon>
</klik-input>
```

```jsx react
import { SlIcon, SlInput } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlInput placeholder="Small" size="small">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Medium" size="medium">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
    <br />
    <SlInput placeholder="Large" size="large">
      <SlIcon name="house" slot="prefix"></SlIcon>
      <SlIcon name="chat" slot="suffix"></SlIcon>
    </SlInput>
  </>
);
```

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<klik-input label="What is your name?"></klik-input>
```

```jsx react
import { SlIcon, SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput label="What is your name?" />
);
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<klik-input 
  label="Nickname" 
  help-text="What would you like people to call you?"
></klik-input>
```

```jsx react
import { SlIcon, SlInput } from '@lego/klik/dist/react';

const App = () => (
  <SlInput 
    label="Nickname" 
    help-text="What would you like people to call you?" 
  />
);
```

[component-metadata:klik-input]
