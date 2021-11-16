# Avatar

[component-header:klik-avatar]

Avatars are used to represent a person or object.

```html preview
<klik-avatar></klik-avatar>
```

```jsx react
import { SlAvatar } from '@lego/klik/dist/react';

const App = () => (
  <SlAvatar>Button</SlAvatar>
);
```

## Examples

### Images

To use an image for the avatar, set the `image` and `alt` attributes. This will take priority and be shown over initials and icons.

```html preview
<klik-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  alt="Gray tabby kitten looking down"
></klik-avatar>
```

```jsx react
import { SlAvatar } from '@lego/klik/dist/react';

const App = () => (
  <SlAvatar
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    alt="Gray tabby kitten looking down"
  />
);
```

### Initials

When you don't have an image to use, you can set the `initials` attribute to show something more personalized than an icon.

```html preview
<klik-avatar initials="SL"></klik-avatar>
```

```jsx react
import { SlAvatar } from '@lego/klik/dist/react';

const App = () => (
  <SlAvatar initials="SL" />
);
```

### Custom Icons

When no image or initials are set, an icon will be shown. The default avatar shows a generic "user" icon, but you can customize this with the `icon` slot.

```html preview
<klik-avatar>
  <klik-icon slot="icon" name="image"></klik-icon>
</klik-avatar>

<klik-avatar>
  <klik-icon slot="icon" name="archive"></klik-icon>
</klik-avatar>

<klik-avatar>
  <klik-icon slot="icon" name="briefcase"></klik-icon>
</klik-avatar>
```

```jsx react
import { SlAvatar, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlAvatar>
      <SlIcon slot="icon" name="image" />
    </SlAvatar>

    <SlAvatar>
      <SlIcon slot="icon" name="archive" />
    </SlAvatar>

    <SlAvatar>
      <SlIcon slot="icon" name="briefcase" />
    </SlAvatar>
  </>
);
```

### Shapes

Avatars can be shaped using the `shape` attribute.

```html preview
<klik-avatar shape="square"></klik-avatar>
<klik-avatar shape="rounded"></klik-avatar>
<klik-avatar shape="circle"></klik-avatar>
```

```jsx react
import { SlAvatar, SlIcon } from '@lego/klik/dist/react';

const App = () => (
  <>
    <SlAvatar shape="square" />
    <SlAvatar shape="rounded" />
    <SlAvatar shape="circle" />
  </>
);
```

### Avatar Groups

You can group avatars with a few lines of CSS.

```html preview
<div class="avatar-group">
  <klik-avatar image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"></klik-avatar>
  <klik-avatar image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"></klik-avatar>
  <klik-avatar image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"></klik-avatar>
  <klik-avatar image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"></klik-avatar>
</div>

<style>
  .avatar-group klik-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group klik-avatar::part(base) {
    border: solid 2px rgb(var(--klik-color-neutral-0));
  }
</style>
```

```jsx react
import { SlAvatar, SlIcon } from '@lego/klik/dist/react';

const css = `
  .avatar-group klik-avatar:not(:first-of-type) {
    margin-left: -1rem;
  }

  .avatar-group klik-avatar::part(base) {
    border: solid 2px rgb(var(--klik-color-neutral-0));
  }
`;

const App = () => (
  <>
    <div className="avatar-group">
      <SlAvatar image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right" />
      <SlAvatar image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80" />
      <SlAvatar image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80" />
      <SlAvatar image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80" />
    </div>

    <style>{css}</style>    
  </>
);
```

[component-metadata:klik-avatar]
