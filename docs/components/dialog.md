# Dialog

[component-header:klik-dialog]

Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.

```html preview
<klik-dialog label="Dialog" class="dialog-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <klik-button slot="footer" type="primary">Close</klik-button>
</klik-dialog>

<klik-button>Open Dialog</klik-button>

<script>
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('klik-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlDialog } from '@lego/klik/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

## UX Tips

- Use a dialog when you immediately require the user's attention, e.g. confirming a destructive action.
- Always provide an obvious way for the user to dismiss the dialog.
- Don't nest dialogs. It almost always leads to a poor experience for the user.

## Examples

### Custom Width

Use the `--width` custom property to set the dialog's width.

```html preview
<klik-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <klik-button slot="footer" type="primary">Close</klik-button>
</klik-dialog>

<klik-button>Open Dialog</klik-button>

<script>
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('klik-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlDialog } from '@lego/klik/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog 
        label="Dialog" 
        open={open} 
        style={{ '--width': '50vw' }} 
        onSlAfterHide={() => setOpen(false)}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Scrolling

By design, a dialog's height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.

```html preview
<klik-dialog label="Dialog" class="dialog-scrolling">
  <div style="height: 150vh; border: dashed 2px rgb(var(--klik-color-neutral-200)); padding: 0 1rem;">
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <klik-button slot="footer" type="primary">Close</klik-button>
</klik-dialog>

<klik-button>Open Dialog</klik-button>

<script>
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('klik-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlDialog } from '@lego/klik/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        <div style={{
          height: '150vh',
          border: 'dashed 2px rgb(var(--klik-color-neutral-200))',
          padding: '0 1rem'
        }}>
          <p>Scroll down and give it a try! 👇</p>
        </div>

        <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Preventing the Dialog from Closing

By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the <kbd>Escape</kbd> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the `klik-request-close` event. When canceled, the dialog will remain open and pulse briefly to draw the user's attention to it.

```html preview
<klik-dialog label="Dialog" class="dialog-deny-close">
  This dialog will not close unless you use the button below.
  <klik-button slot="footer" type="primary">Save &amp; Close</klik-button>
</klik-dialog>

<klik-button>Open Dialog</klik-button>

<script>
  const dialog = document.querySelector('.dialog-deny-close');
  const openButton = dialog.nextElementSibling;
  const saveButton = dialog.querySelector('klik-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  saveButton.addEventListener('click', () => dialog.hide());

  dialog.addEventListener('klik-request-close', event => event.preventDefault());
</script>
```

```jsx react
import { useState } from 'react';
import { SlButton, SlDialog } from '@lego/klik/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SlDialog 
        label="Dialog" 
        open={open} 
        onSlRequestClose={event => event.preventDefault()}
        onSlAfterHide={() => setOpen(false)}
      >
        This dialog will not close unless you use the button below.
        <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
          Save &amp; Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

### Customizing Initial Focus

By default, the dialog's panel will gain focus when opened. This allows the first tab press to focus on the first tabbable element within the dialog. To set focus on a different element, listen for and cancel the `klik-initial-focus` event.

```html preview
<klik-dialog label="Dialog" class="dialog-focus">
  <klik-input placeholder="I will have focus when the dialog is opened"></klik-input>
  <klik-button slot="footer" type="primary">Close</klik-button>
</klik-dialog>

<klik-button>Open Dialog</klik-button>

<script>
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('klik-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('klik-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  dialog.addEventListener('klik-initial-focus', event => {
    event.preventDefault();
    input.focus({ preventScroll: true });
  });
</script>
```

```jsx react
import { useRef, useState } from 'react';
import { 
  SlButton, 
  SlDialog, 
  SlInput 
} from '@lego/klik/dist/react';

const App = () => {
  const input = useRef(null);
  const [open, setOpen] = useState(false);

  function handleInitialFocus(event) {
    event.preventDefault();
    input.current.focus();
  }

  return (
    <>
      <SlDialog 
        label="Dialog" 
        open={open} 
        onSlInitialFocus={handleInitialFocus}
        onSlAfterHide={() => setOpen(false)}
      >
        <SlInput ref={input} placeholder="I will have focus when the dialog is opened" />
        <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
          Close
        </SlButton>
      </SlDialog>

      <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
    </>
  );
};
```

[component-metadata:klik-dialog]
