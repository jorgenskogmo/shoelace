# Details

[component-header:klik-details]

Details show a brief summary and expand to show additional content.

```html preview
<klik-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</klik-details>
```

```jsx react
import { SlDetails } from '@lego/klik/dist/react';

const App = () => (
  <SlDetails summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SlDetails>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html preview
<klik-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</klik-details>
```

```jsx react
import { SlDetails } from '@lego/klik/dist/react';

const App = () => (
  <SlDetails summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </SlDetails>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `klik-show` event.

```html preview
<div class="details-group-example">
  <klik-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </klik-details>

  <klik-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </klik-details>

  <klik-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </klik-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('klik-show', event => {
    [...container.querySelectorAll('klik-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  .details-group-example klik-details:not(:last-of-type) {
    margin-bottom: var(--klik-spacing-2x-small);
  }
</style>
```

[component-metadata:klik-details]
