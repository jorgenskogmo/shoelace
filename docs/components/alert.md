# Alert

[component-header:klik-alert]

Alerts are used to display important messages either inline or as toast notifications.

```html preview
<klik-alert open>
  <klik-icon slot="icon" name="info-circle"></klik-icon>
  This is a standard alert. You can customize its content and even the icon.
</klik-alert>
```

```jsx react
import { SlAlert, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <SlAlert open>
    <SlIcon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </SlAlert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

### Types

Set the `type` attribute to change the alert's type.

```html preview
<klik-alert type="primary" open>
  <klik-icon slot="icon" name="info-circle"></klik-icon>
  <strong>This is super informative</strong><br>
  You can tell by how pretty the alert is.
</klik-alert>

<br>

<klik-alert type="success" open>
  <klik-icon slot="icon" name="check2-circle"></klik-icon>
  <strong>Your changes have been saved</strong><br>
  You can safely exit the app now.
</klik-alert>

<br>

<klik-alert type="neutral" open>
  <klik-icon slot="icon" name="gear"></klik-icon>
  <strong>Your settings have been updated</strong><br>
  Settings will take affect on next login.
</klik-alert>

<br>

<klik-alert type="warning" open>
  <klik-icon slot="icon" name="exclamation-triangle"></klik-icon>
  <strong>Your session has ended</strong><br>
  Please login again to continue.
</klik-alert>

<br>

<klik-alert type="danger" open>
  <klik-icon slot="icon" name="exclamation-octagon"></klik-icon>
    <strong>Your account has been deleted</strong><br>
    We're very sorry to see you go!
</klik-alert>
```

```jsx react
import { SlAlert, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlAlert type="primary" open>
      <SlIcon slot="icon" name="info-circle" />
      <strong>This is super informative</strong><br />
      You can tell by how pretty the alert is.
    </SlAlert>

    <br />

    <SlAlert type="success" open>
      <SlIcon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong><br />
      You can safely exit the app now.
    </SlAlert>

    <br />

    <SlAlert type="neutral" open>
      <SlIcon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong><br />
      Settings will take affect on next login.
    </SlAlert>

    <br />

    <SlAlert type="warning" open>
      <SlIcon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong><br />
      Please login again to continue.
    </SlAlert>

    <br />

    <SlAlert type="danger" open>
      <SlIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
    </SlAlert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<klik-alert type="primary" open closable class="alert-closable">
  <klik-icon slot="icon" name="info-circle"></klik-icon>
  You can close this alert any time!
</klik-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('klik-after-hide', () => {
    setTimeout(() => alert.open = true, 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { SlAlert, SlIcon } from '@lego/klik/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <SlAlert 
      open={open}
      closable
      onSlAfterHide={handleHide}
    >
      <SlIcon slot="icon" name="info-circle" />
      You can close this alert any time!
    </SlAlert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<klik-alert type="primary" open>
  Nothing fancy here, just a simple alert.
</klik-alert>
```

```jsx react
import { SlAlert } from '@lego/klik/dist/react';

const App = () => (
  <SlAlert type="primary" open>
    Nothing fancy here, just a simple alert.
  </SlAlert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <klik-button type="primary">Show Alert</klik-button>

  <klik-alert type="primary" duration="3000" closable>
    <klik-icon slot="icon" name="info-circle"></klik-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </klik-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('klik-button');
  const alert = container.querySelector('klik-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration klik-alert {
    margin-top: var(--klik-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import {
  SlAlert,
  SlButton,
  SlIcon
} from '@lego/klik/dist/react';

const css = `
  .alert-duration klik-alert {
    margin-top: var(--klik-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <SlButton type="primary" onClick={() => setOpen(true)}>Show Alert</SlButton>

        <SlAlert 
          type="primary" 
          duration="3000" 
          open={open} 
          closable 
          onSlAfterHide={() => setOpen(false)}
        >
          <SlIcon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </SlAlert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <klik-button type="primary">Primary</klik-button>
  <klik-button type="success">Success</klik-button>
  <klik-button type="neutral">Neutral</klik-button>
  <klik-button type="warning">Warning</klik-button>
  <klik-button type="danger">Danger</klik-button>
  
  <klik-alert type="primary" duration="3000" closable>
    <klik-icon slot="icon" name="info-circle"></klik-icon>
    <strong>This is super informative</strong><br>
    You can tell by how pretty the alert is.
  </klik-alert>

  <klik-alert type="success" duration="3000" closable>
    <klik-icon slot="icon" name="check2-circle"></klik-icon>
    <strong>Your changes have been saved</strong><br>
    You can safely exit the app now.
  </klik-alert>

  <klik-alert type="neutral" duration="3000" closable>
    <klik-icon slot="icon" name="gear"></klik-icon>
    <strong>Your settings have been updated</strong><br>
    Settings will take affect on next login.
  </klik-alert>

  <klik-alert type="warning" duration="3000" closable>
    <klik-icon slot="icon" name="exclamation-triangle"></klik-icon>
    <strong>Your session has ended</strong><br>
    Please login again to continue.
  </klik-alert>

  <klik-alert type="danger" duration="3000" closable>
    <klik-icon slot="icon" name="exclamation-octagon"></klik-icon>
    <strong>Your account has been deleted</strong><br>
    We're very sorry to see you go!
  </klik-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(type => {
    const button = container.querySelector(`klik-button[type="${type}"]`);
    const alert = container.querySelector(`klik-alert[type="${type}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import {
  SlAlert,
  SlButton,
  SlIcon
} from '@lego/klik/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <SlButton type="primary" onClick={() => primary.current.toast()}>
        Primary
      </SlButton>

      <SlButton type="success" onClick={() => success.current.toast()}>
        Success
      </SlButton>

      <SlButton type="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </SlButton>

      <SlButton type="warning" onClick={() => warning.current.toast()}>
        Warning
      </SlButton>

      <SlButton type="danger" onClick={() => danger.current.toast()}>
        Danger
      </SlButton>

      <SlAlert ref={primary} type="primary" duration="3000" closable>
        <SlIcon slot="icon" name="info-circle" />
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </SlAlert>

      <SlAlert ref={success} type="success" duration="3000" closable>
        <SlIcon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </SlAlert>

      <SlAlert ref={neutral} type="neutral" duration="3000" closable>
        <SlIcon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong><br />
        Settings will take affect on next login.
      </SlAlert>

      <SlAlert ref={warning} type="warning" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </SlAlert>

      <SlAlert ref={danger} type="danger" duration="3000" closable>
        <SlIcon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </SlAlert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <klik-button type="primary">Create Toast</klik-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('klik-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }  

  // Custom function to emit toast notifications
  function notify(message, type = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('klik-alert'), {
      type: type,
      closable: true,
      duration: duration,
      innerHTML: `
        <klik-icon name="${icon}" slot="icon"></klik-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.klik-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.klik-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

[component-metadata:klik-alert]
