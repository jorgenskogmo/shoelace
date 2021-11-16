# Format Date

[component-header:klik-format-date]

Formats a date/time using the specified locale and options.

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<!-- Klik 2 release date 🎉 -->
<klik-format-date date="2020-07-15T09:17:00-04:00"></klik-format-date>
```

```jsx react
import { SlFormatDate } from '@lego/klik/dist/react';

const App = () => (
  <SlFormatDate date="2020-07-15T09:17:00-04:00" />
);
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<klik-format-date month="long" day="numeric" year="numeric"></klik-format-date><br>

<!-- Time -->
<klik-format-date hour="numeric" minute="numeric"></klik-format-date><br>

<!-- Weekday -->
<klik-format-date weekday="long"></klik-format-date><br>

<!-- Month -->
<klik-format-date month="long"></klik-format-date><br>

<!-- Year -->
<klik-format-date year="numeric"></klik-format-date><br>

<!-- No formatting options -->
<klik-format-date></klik-format-date>
```

```jsx react
import { SlFormatDate } from '@lego/klik/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <SlFormatDate month="long" day="numeric" year="numeric" /><br />

    {/* Time */}
    <SlFormatDate hour="numeric" minute="numeric" /><br />

    {/* Weekday */}
    <SlFormatDate weekday="long" /><br />

    {/* Month */}
    <SlFormatDate month="long" /><br />

    {/* Year */}
    <SlFormatDate year="numeric" /><br />

    {/* No formatting options */}
    <SlFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<klik-format-date hour="numeric" minute="numeric" hour-format="12"></klik-format-date><br>
<klik-format-date hour="numeric" minute="numeric" hour-format="24"></klik-format-date>
```

```jsx react
import { SlFormatDate } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlFormatDate hour="numeric" minute="numeric" hour-format="12" /><br />
    <SlFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `locale` attribute to set the date/time formatting locale.

```html preview
English: <klik-format-date locale="en"></klik-format-date><br>
French: <klik-format-date locale="fr"></klik-format-date><br>
Russian: <klik-format-date locale="ru"></klik-format-date>
```

```jsx react
import { SlFormatDate } from '@lego/klik/dist/react';

const App = () => (
  <>
    English: <SlFormatDate locale="en" /><br />
    French: <SlFormatDate locale="fr" /><br />
    Russian: <SlFormatDate locale="ru" />
  </>
);
```

[component-metadata:klik-format-date]
