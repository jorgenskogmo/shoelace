# Format Bytes

[component-header:klik-format-bytes]

Formats a number as a human readable bytes value.

```html preview
<div class="format-bytes-overview">
  The file is <klik-format-bytes value="1000"></klik-format-bytes> in size.
  <br><br>
  <klik-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></klik-input>  
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('klik-format-bytes');
  const input = container.querySelector('klik-input');

  input.addEventListener('klik-input', () => formatter.value = input.value || 0);
</script>
```


```jsx react
import { useState } from 'react';
import { 
  SlButton, 
  SlFormatBytes, 
  SlInput 
} from '@shoelace-style/shoelace/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <SlFormatBytes value={value} /> in size.
      <br /><br />
      <SlInput 
        type="number" 
        value={value}
        label="Number to Format" 
        style={{ maxWidth: '180px' }}
        onSlInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<klik-format-bytes value="12"></klik-format-bytes><br>
<klik-format-bytes value="1200"></klik-format-bytes><br>
<klik-format-bytes value="1200000"></klik-format-bytes><br>
<klik-format-bytes value="1200000000"></klik-format-bytes>
```


```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" /><br />
    <SlFormatBytes value="1200" /><br />
    <SlFormatBytes value="1200000" /><br />
    <SlFormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bits`.

```html preview
<klik-format-bytes value="12" unit="bits"></klik-format-bytes><br>
<klik-format-bytes value="1200" unit="bits"></klik-format-bytes><br>
<klik-format-bytes value="1200000" unit="bits"></klik-format-bytes><br>
<klik-format-bytes value="1200000000" unit="bits"></klik-format-bytes>
```

```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" unit="bits" /><br />
    <SlFormatBytes value="1200" unit="bits" /><br />
    <SlFormatBytes value="1200000" unit="bits" /><br />
    <SlFormatBytes value="1200000000" unit="bits" />
  </>
);
```

### Localization

Use the `locale` attribute to set the number formatting locale.

```html preview
<klik-format-bytes value="12" locale="de"></klik-format-bytes><br>
<klik-format-bytes value="1200" locale="de"></klik-format-bytes><br>
<klik-format-bytes value="1200000" locale="de"></klik-format-bytes><br>
<klik-format-bytes value="1200000000" locale="de"></klik-format-bytes>
```

```jsx react
import { SlFormatBytes } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <>
    <SlFormatBytes value="12" locale="de" /><br />
    <SlFormatBytes value="1200" locale="de" /><br />
    <SlFormatBytes value="1200000" locale="de" /><br />
    <SlFormatBytes value="1200000000" locale="de" />
  </>
);
```

[component-metadata:klik-format-bytes]
