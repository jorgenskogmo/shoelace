# Rating

[component-header:klik-rating]

Ratings give users a way to quickly view and provide feedback.

```html preview
<klik-rating></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating />
);
```

## Examples

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<klik-rating max="3"></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating max={3} />
);
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<klik-rating precision="0.5" value="2.5"></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating precision={0.5} value={2.5} />
);
```

## Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<klik-rating style="--symbol-size: 2rem;"></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating style={{ '--symbol-size': '2rem' }} />
);
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<klik-rating readonly value="3"></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating readonly value={3} />
);
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<klik-rating disabled value="3"></klik-rating>
```

```jsx react
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating disabled value={3} />
);
```

### Custom Icons

```html preview
<klik-rating class="rating-hearts" style="--symbol-color-active: #ff4136;"></klik-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<klik-icon name="heart-fill"></klik-icon>'; 
</script>
```

```jsx react
import '@lego/klik/dist/components/icon/icon';
import { SlRating } from '@lego/klik/dist/react';

const App = () => (
  <SlRating 
    getSymbol={() => '<klik-icon name="heart-fill"></klik-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }} 
  />
);
```

### Value-based Icons

```html preview
<klik-rating class="rating-emojis"></klik-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = (value) => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<klik-icon name="${icons[value - 1]}"></klik-icon>`;
  };
</script>
```

```jsx react
import '@lego/klik/dist/components/icon/icon';
import { SlRating } from '@lego/klik/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<klik-icon name="${icons[value - 1]}"></klik-icon>`;
}

const App = () => (
  <SlRating getSymbol={getSymbol} />
);
```

[component-metadata:klik-rating]
