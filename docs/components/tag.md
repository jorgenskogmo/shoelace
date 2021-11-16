# Tag

[component-header:klik-tag]

Tags are used as labels to organize things or to indicate a selection.

```html preview
<klik-tag type="primary">Primary</klik-tag>
<klik-tag type="success">Success</klik-tag>
<klik-tag type="neutral">Neutral</klik-tag>
<klik-tag type="warning">Warning</klik-tag>
<klik-tag type="danger">Danger</klik-tag>
```


```jsx react
import { SlTag } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlTag type="primary">Primary</SlTag>
    <SlTag type="success">Success</SlTag>
    <SlTag type="neutral">Neutral</SlTag>
    <SlTag type="warning">Warning</SlTag>
    <SlTag type="danger">Danger</SlTag> 
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<klik-tag size="small">Small</klik-tag>
<klik-tag size="medium">Medium</klik-tag>
<klik-tag size="large">Large</klik-tag>
```

```jsx react
import { SlTag } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlTag size="small">Small</SlTag>
    <SlTag size="medium">Medium</SlTag>
    <SlTag size="large">Large</SlTag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<klik-tag size="small" pill>Small</klik-tag>
<klik-tag size="medium" pill>Medium</klik-tag>
<klik-tag size="large" pill>Large</klik-tag>
```

```jsx react
import { SlTag } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlTag size="small" pill>Small</SlTag>
    <SlTag size="medium" pill>Medium</SlTag>
    <SlTag size="large" pill>Large</SlTag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <klik-tag size="small" removable>Small</klik-tag>
  <klik-tag size="medium" removable>Medium</klik-tag>
  <klik-tag size="large" removable>Large</klik-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('klik-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => tag.style.opacity = '1', 2000);
  });
</script>

<style>
  .tags-removable klik-tag {
    transition: var(--klik-transition-medium) opacity;
  }
</style>
```

```jsx react
import { SlTag } from '@lego/klik/dist/react';

const css = `
  .tags-removable klik-tag {
    transition: var(--klik-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => tag.style.opacity = '1', 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <SlTag size="small" removable onSlRemove={handleRemove}>
          Small
        </SlTag>

        <SlTag size="medium" removable onSlRemove={handleRemove}>
          Medium
        </SlTag>

        <SlTag size="large" removable onSlRemove={handleRemove}>
          Large
        </SlTag>
      </div>

      <style>{css}</style>
    </>
  )
};
```

[component-metadata:klik-tag]
