# Format Number

[component-header:klik-format-number]

Formats a number using the specified locale and options.

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <klik-format-number value="1000"></klik-format-number> 
  <br><br>
  <klik-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></klik-input>  
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('klik-format-number');
  const input = container.querySelector('klik-input');

  input.addEventListener('klik-input', () => formatter.value = input.value || 0);
</script>
```

```jsx react
import { useState } from 'react';
import { SlFormatNumber, SlInput } from '@lego/klik/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <SlFormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<klik-format-number type="percent" value="0"></klik-format-number><br>
<klik-format-number type="percent" value="0.25"></klik-format-number><br>
<klik-format-number type="percent" value="0.50"></klik-format-number><br>
<klik-format-number type="percent" value="0.75"></klik-format-number><br>
<klik-format-number type="percent" value="1"></klik-format-number>
```

```jsx react
import { SlFormatNumber } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlFormatNumber type="percent" value={0} /><br />
    <SlFormatNumber type="percent" value={0.25} /><br />
    <SlFormatNumber type="percent" value={0.50} /><br />
    <SlFormatNumber type="percent" value={0.75} /><br />
    <SlFormatNumber type="percent" value={1} />  
  </>
);
```

### Localization

Use the `locale` attribute to set the number formatting locale.

```html preview
English: <klik-format-number value="2000" locale="en" minimum-fraction-digits="2"></klik-format-number><br>
German: <klik-format-number value="2000" locale="de" minimum-fraction-digits="2"></klik-format-number><br>
Russian: <klik-format-number value="2000" locale="ru" minimum-fraction-digits="2"></klik-format-number>
```

```jsx react
import { SlFormatNumber } from '@lego/klik/dist/react';

const App = () => (
  <>
    English: <SlFormatNumber value="2000" locale="en" minimum-fraction-digits="2" /><br />
    German: <SlFormatNumber value="2000" locale="de" minimum-fraction-digits="2" /><br />
    Russian: <SlFormatNumber value="2000" locale="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `locale` to ensure the the number is formatted correctly for the target locale.

```html preview
<klik-format-number type="currency" currency="USD" value="2000" locale="en-US"></klik-format-number><br>
<klik-format-number type="currency" currency="GBP" value="2000" locale="en-GB"></klik-format-number><br>
<klik-format-number type="currency" currency="EUR" value="2000" locale="de"></klik-format-number><br>
<klik-format-number type="currency" currency="RUB" value="2000" locale="ru"></klik-format-number><br>
<klik-format-number type="currency" currency="CNY" value="2000" locale="zh-cn"></klik-format-number>
```

```jsx react
import { SlFormatNumber } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlFormatNumber type="currency" currency="USD" value="2000" locale="en-US" /><br />
    <SlFormatNumber type="currency" currency="GBP" value="2000" locale="en-GB" /><br />
    <SlFormatNumber type="currency" currency="EUR" value="2000" locale="de" /><br />
    <SlFormatNumber type="currency" currency="RUB" value="2000" locale="ru" /><br />
    <SlFormatNumber type="currency" currency="CNY" value="2000" locale="zh-cn" />
  </>
);
```

[component-metadata:klik-format-number]
