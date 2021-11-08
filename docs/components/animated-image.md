# Animated Image

[component-header:klik-animated-image]

A component for displaying animated GIFs and WEBPs that play and pause on interaction.

```html preview
<klik-animated-image 
  src="https://shoelace.style/assets/images/walk.gif" 
  alt="Animation of untied shoes walking on pavement"
></klik-animated-image>
```

```jsx react
import { SlAnimatedImage } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAnimatedImage
    src="https://shoelace.style/assets/images/walk.gif" 
    alt="Animation of untied shoes walking on pavement"
  />
);
```

?> This component uses `<canvas>` to draw freeze frames, so images are subject to [cross-origin restrictions](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image).

## Examples

### WEBP Images

Both GIF and WEBP images are supported.

```html preview
<klik-animated-image 
  src="https://shoelace.style/assets/images/tie.webp" 
  alt="Animation of a shoe being tied"
></klik-animated-image>
```

```jsx react
import { SlAnimatedImage } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAnimatedImage
    src="https://shoelace.style/assets/images/tie.webp" 
    alt="Animation of a shoe being tied"
  />
);
```

### Setting a Width and Height

To set a custom size, apply a width and/or height to the host element.

```html preview
<klik-animated-image 
  src="https://shoelace.style/assets/images/walk.gif" 
  alt="Animation of untied shoes walking on pavement"
  style="width: 150px; height: 200px;"
>
</klik-animated-image>
```

```jsx react
import { SlAnimatedImage } from '@shoelace-style/shoelace/dist/react';

const App = () => (
  <SlAnimatedImage
    src="https://shoelace.style/assets/images/walk.gif" 
    alt="Animation of untied shoes walking on pavement"
    style={{ width: '150px', height: '200px' }}
  />
);
```

### Customizing the Control Box

You can change the appearance and location of the control box by targeting the `control-box` part in your styles.

```html preview
<klik-animated-image 
  src="https://shoelace.style/assets/images/walk.gif" 
  alt="Animation of untied shoes walking on pavement"
  class="animated-image-custom-control-box"
></klik-animated-image>

<style>
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    color: white;
  }
</style>
```

```jsx react
import { SlAnimatedImage } from '@shoelace-style/shoelace/dist/react';

const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    color: white;
  }
`;

const App = () => (
  <>
    <SlAnimatedImage
      className="animated-image-custom-control-box"
      src="https://shoelace.style/assets/images/walk.gif" 
      alt="Animation of untied shoes walking on pavement"
    />

    <style>{css}</style>
  </>
);
```

[component-metadata:klik-animated-image]
